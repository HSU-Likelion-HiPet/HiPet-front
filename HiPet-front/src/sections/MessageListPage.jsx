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
} from "../apis/api";
import MessageSendIcon from "../assets/MessageSend.png";

const MessageListPage = () => {
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [messages, setMessages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userId = useGetCurrentUserId();
  const partnerId = "grt1022rt"; // id 변경 필요

  useEffect(() => {
    if (userId) {
      fetchMessagesData();
    }
  }, [userId]);

  const fetchMessagesData = async () => {
    const data = await fetchConversation(userId, partnerId);
    if (data) {
      const sortedData = data.sort(
        (a, b) => new Date(b.sendAt) - new Date(a.sendAt)
      );
      setMessages(sortedData);
      if (sortedData.length > 0) {
        setSelectedMessages(sortedData);
      }
    } else {
      console.log("데이터를 가져오지 못했습니다.");
    }
  };

  useEffect(() => {
    // 초기 테스트 메시지 추가
    const initialMessages = [
      {
        id: 1,
        senderId: "grt1022rt",
        text: "안녕하세요, 이것은 테스트 메시지입니다.",
        sendAt: new Date().toISOString(),
      },
    ];
    setMessages(initialMessages);
    setSelectedMessages(initialMessages);
  }, [userId]);

  const handleSendClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
        const newMessage = {
          id: messages.length + 1,
          senderId: userId,
          text,
          sendAt: new Date().toISOString(),
        };
        const updatedMessages = [newMessage, ...messages].sort(
          (a, b) => new Date(b.sendAt) - new Date(a.sendAt)
        );
        setMessages(updatedMessages);
        setSelectedMessages(updatedMessages);
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
              {messages.length > 0 && (
                <MessageList
                  messages={messages.slice(0, 1)} // 최근 받은 쪽지 하나만 표시
                />
              )}
            </MessageListContainer>
            <MessageDetailContainer>
              <FixedHeader>
                <Nickname>{partnerId}</Nickname>
                <SendButton onClick={handleSendClick}>
                  <SendIcon src={MessageSendIcon} alt="Send" />
                </SendButton>
              </FixedHeader>
              {selectedMessages.length > 0 ? (
                <MessageDetail
                  messages={selectedMessages} // 해당 사람에게 받은 모든 쪽지 표시
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
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
`;

const Placeholder = styled.div`
  padding: 20px;
  color: #aaa;
  text-align: center;
`;

const FixedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Nickname = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const SendButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const SendIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
