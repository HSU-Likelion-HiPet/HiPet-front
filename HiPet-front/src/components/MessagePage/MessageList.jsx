import React from "react";
import styled from "styled-components";
import MessageListItem from "./MessageListItem";

const MessageList = ({ messages, selectedMessageId, onSelectMessage }) => {
  return (
    <ListContainer>
      {messages.map((message) => (
        <MessageListItem
          key={message.id}
          message={message}
          isSelected={message.id === selectedMessageId}
          onSelectMessage={onSelectMessage}
        />
      ))}
    </ListContainer>
  );
};

export default MessageList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
