import React from "react";
import styled from "styled-components";

const MessageListItem = ({ message, onClick }) => {
  if (!message || !message.senderId) return null;
  return (
    <ItemContainer onClick={onClick}>
      <ItemHeader>
        <ItemName>{message.senderId}</ItemName>
        <ItemTimestamp>
          {new Date(message.sendAt).toLocaleString()}
        </ItemTimestamp>
      </ItemHeader>
      <ItemContent>{message.text}</ItemContent>
    </ItemContainer>
  );
};

export default MessageListItem;

const ItemContainer = styled.div`
  padding: 15px;
  background-color: white;
  border-bottom: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ItemName = styled.span`
  font-weight: bold;
`;

const ItemTimestamp = styled.span`
  font-size: 12px;
  color: #777;
`;

const ItemContent = styled.p`
  margin: 0;
  color: #555;
`;
