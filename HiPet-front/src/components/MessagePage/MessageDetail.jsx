import React from "react";
import styled from "styled-components";
import MessageSend from "../../assets/MessageSend.png";

const MessageDetail = ({ message, onSendClick }) => {
  return (
    <DetailContainer>
      {message ? (
        <>
          <MessageHeader>
            <MessageName>{message.name}</MessageName>
            <SendButton onClick={onSendClick}>
              <SendIcon src={MessageSend} alt="Send" />
            </SendButton>
          </MessageHeader>
          <MessageContent>{message.content}</MessageContent>
        </>
      ) : (
        <Placeholder>쪽지를 선택해 주세요</Placeholder>
      )}
    </DetailContainer>
  );
};

export default MessageDetail;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
`;

const MessageName = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const SendButton = styled.button`
  padding: 5px 10px;
  border: none;
  background: none;
  cursor: pointer;
`;

const SendIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const MessageContent = styled.div`
  padding: 20px 0;
  color: #555;
`;

const Placeholder = styled.div`
  padding: 20px 0;
  color: #aaa;
  text-align: center;
`;
