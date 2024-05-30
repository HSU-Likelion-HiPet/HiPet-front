import React from "react";
import styled from "styled-components";
import MessageListItem from "./MessageListItem";

const MessageList = ({ messages, onSelectMessage }) => {
  const latestMessage = messages[messages.length - 1];

  return (
    <ListContainer>
      {latestMessage && (
        <MessageListItem
          key={latestMessage.id}
          message={latestMessage}
          onClick={() => onSelectMessage(messages)}
        />
      )}
    </ListContainer>
  );
};

export default MessageList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
