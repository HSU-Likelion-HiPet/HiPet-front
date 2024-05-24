import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ReviewSuccessPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/main");
  };

  return (
    <Container>
      <MessageBox>
        <Message>
          백나훔님의 <br /> 소중한 후기가 작성되었습니다!
        </Message>
        <Button primary onClick={handleGoBack}>
          메인페이지로 돌아가기
        </Button>
      </MessageBox>
    </Container>
  );
};

export default ReviewSuccessPage;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const MessageBox = styled.div`
  width: 50%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Message = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
  line-height: 38px;
`;

const Button = styled.button`
  padding: 15px 20px;
  background-color: ${(props) => (props.primary ? "#ffcc00" : "#ddd")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  color: black;
  margin: 10px 0;
  width: 980px;
`;
