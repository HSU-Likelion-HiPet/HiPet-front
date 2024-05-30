import React, { useState } from "react";
import styled from "styled-components";

const MessageSendModal = ({ receiverId, onClose, onSendMessage }) => {
  const [messageText, setMessageText] = useState("");

  const handleSendClick = () => {
    if (messageText.trim() !== "") {
      onSendMessage(receiverId, messageText);
    } else {
      alert("메시지를 입력해주세요.");
    }
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <Title>쪽지 보내기</Title>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <ModalBody>
          <TextArea
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            placeholder="메시지를 입력하세요"
          />
        </ModalBody>
        <ModalFooter>
          <SendButton onClick={handleSendClick}>보내기</SendButton>
        </ModalFooter>
      </ModalContainer>
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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 18px;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 18px;
`;

const ModalBody = styled.div`
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;
