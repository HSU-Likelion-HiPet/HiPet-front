import React, { useState } from "react";
import styled from "styled-components";

const MessageSendModal = ({ receiverId, onClose, onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSendClick = () => {
    if (message.trim()) {
      onSendMessage(receiverId, message);
      setMessage("");
    } else {
      alert("메세지를 입력해주세요.");
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Title>메세지 보내기</Title>
        <MessageInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="메세지를 입력하세요."
        />
        <SendButton onClick={handleSendClick}>보내기</SendButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default MessageSendModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 20px;
`;

const MessageInput = styled.textarea`
  flex: 1;
  resize: none;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 20px;
`;

const SendButton = styled.button`
  padding: 10px;
  background-color: #ffcc00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #ffb700;
  }
`;
