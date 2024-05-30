import React from "react";
import styled from "styled-components";
import MessageSendIcon from "../../assets/MessageSend.png";

const MessageDetail = ({ messages, partnerId, onSendClick }) => {
  return (
    <DetailContainer>
      <MessageHeader>
        <MessageName>{partnerId}</MessageName>
        <SendButton onClick={onSendClick}>
          <SendIcon src={MessageSendIcon} alt="Send" />
        </SendButton>
      </MessageHeader>
      <MessagesContainer>
        {messages.map((msg, index) => (
          <MessageItem key={index}>
            <MessageType>
              {msg.senderId === partnerId ? "받은쪽지" : "보낸쪽지"}
            </MessageType>
            <MessageContent>{msg.text}</MessageContent>
            <MessageTimestamp>
              {new Date(msg.sendAt).toLocaleString()}
            </MessageTimestamp>
          </MessageItem>
        ))}
      </MessagesContainer>
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

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const MessageItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
`;

const MessageType = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

const MessageContent = styled.div`
  font-size: 16px;
  margin-top: 5px;
  color: #555;
`;

const MessageTimestamp = styled.div`
  font-size: 12px;
  color: #aaa;
  margin-top: 10px;
  text-align: right;
`;
