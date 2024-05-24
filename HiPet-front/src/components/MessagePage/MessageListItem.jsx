import React from "react";
import styled from "styled-components";

const MessageListItem = ({ message, isSelected, onSelectMessage }) => {
  return (
    <ItemContainer
      isSelected={isSelected}
      onClick={() => onSelectMessage(message)}
    >
      <ItemHeader>
        <ItemName>{message.name}</ItemName>
      </ItemHeader>
      <ItemContentRow>
        <ItemContent>{message.content}</ItemContent>
        <ItemTime>{message.time}</ItemTime>
      </ItemContentRow>
    </ItemContainer>
  );
};

export default MessageListItem;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#fdf7e1" : "white")};
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemName = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const ItemContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

const ItemContent = styled.div`
  font-size: 10px;
  color: #aaa;
`;

const ItemTime = styled.div`
  font-size: 10px;
  color: #aaa;
`;
