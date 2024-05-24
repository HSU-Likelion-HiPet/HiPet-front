import React, { useState } from "react";
import styled from "styled-components";
import MessageList from "../components/MessagePage/MessageList";
import MainHeader from "../components/Main/MainHeader";
import MessageDetail from "../components/MessagePage/MessageDetail";
import MessageSendModal from "../components/MessagePage/MessageSendModal";

const messages = [
  {
    id: 1,
    name: "동물이름1",
    content: "내용내용내용1",
    time: "3/28 10:00",
  },
];

const MessageListPage = () => {
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectMessage = (message) => {
    setSelectedMessageId(message.id);
  };

  const handleSendClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
                selectedMessageId={selectedMessageId}
                onSelectMessage={handleSelectMessage}
              />
            </MessageListContainer>
            <MessageDetailContainer>
              <MessageDetail
                message={messages.find((msg) => msg.id === selectedMessageId)}
                onSendClick={handleSendClick}
              />
            </MessageDetailContainer>
          </MainContent>
        </ContentWrapper>
      </ContentContainer>
      {isModalOpen && <MessageSendModal onClose={handleCloseModal} />}
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
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow-y: auto;
  padding: 20px;
  max-height: 100%;
`;
