import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MessageList from "../components/MessagePage/MessageList";
import MainHeader from "../components/Main/MainHeader";
import MessageDetail from "../components/MessagePage/MessageDetail";
import MessageSendModal from "../components/MessagePage/MessageSendModal";
import {
  useGetCurrentUserId,
  fetchConversation,
  sendMessage,
} from "../api/api";

const MessageListPage = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = useGetCurrentUserId();
  const partnerId = "test010101"; // id 변경 필요

  useEffect(() => {
    if (userId) {
      fetchMessagesData();
    }
  }, [userId]);

  const fetchMessagesData = async () => {
    const data = await fetchConversation(userId, partnerId);
    if (data) {
      setMessages(data);
    } else {
      console.log("데이터를 가져오지 못했습니다.");
    }
  };

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
  };

  const handleSendClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    fetchMessagesData();
  };

  const handleSendMessage = async (receiverId, text) => {
    const payload = {
      senderId: userId,
      receiverId,
      text,
    };

    console.log("전송할 데이터:", payload);

    try {
      const response = await sendMessage(payload);
      if (response) {
        fetchMessagesData();
        setIsModalOpen(false);
      } else {
        alert("쪽지 전송 실패");
      }
    } catch (error) {
      console.error("쪽지 전송 에러:", error);
      alert("쪽지 전송 중 오류가 발생했습니다.");
    }
  };

  return (
    <PageContainer>
      <MainHeader />
      <HeaderContainer>
        <HeaderContent>
          <Header>
            <Title>채팅</Title>
          </Header>
        </HeaderContent>
      </HeaderContainer>
      <ContentContainer>
        <ContentWrapper>
          <MainContent>
            <MessageListContainer>
              <MessageList
                messages={messages}
                onSelectMessage={handleSelectMessage}
              />
            </MessageListContainer>
            <MessageDetailContainer>
              {selectedMessage ? (
                <MessageDetail
                  messages={selectedMessage}
                  partnerId={partnerId}
                />
              ) : (
                <Placeholder>쪽지를 선택해 주세요</Placeholder>
              )}
            </MessageDetailContainer>
          </MainContent>
        </ContentWrapper>
      </ContentContainer>
      {isModalOpen && (
        <MessageSendModal
          receiverId={partnerId}
          onClose={handleCloseModal}
          onClick={handleSendClick}
          onSendMessage={handleSendMessage}
        />
      )}
    </PageContainer>
  );
};

export default MessageListPage;

const PageContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  overflow: hidden;
`;

const HeaderContainer = styled.div`
  width: 100%;
  padding-top: 15vh;
  background-color: white;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  flex: 1;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  gap: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: row;
`;

const MessageListContainer = styled.div`
  width: 35%;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow-y: auto;
  flex: 1;
  max-height: 100%;
`;

const MessageDetailContainer = styled.div`
  flex: 1;
  width: 65%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow-y: auto;
  padding: 20px;
  max-height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
`;

const Placeholder = styled.div`
  padding: 20px;
  color: #aaa;
  text-align: center;
`;

const SendIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
