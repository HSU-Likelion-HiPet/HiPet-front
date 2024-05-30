import React from "react";
import styled from "styled-components";
import MessageListItem from "./MessageListItem";

const MessageList = ({ messages, onSelectMessage }) => {
  return (
    <ListContainer>
      {messages.map((message, index) => (
        <MessageListItem
          key={index}
          message={message}
          onClick={onSelectMessage}
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
