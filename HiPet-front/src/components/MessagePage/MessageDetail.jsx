import React from "react";
import styled from "styled-components";

const MessageDetail = ({ messages, partnerId }) => {
  return (
    <DetailContainer>
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
