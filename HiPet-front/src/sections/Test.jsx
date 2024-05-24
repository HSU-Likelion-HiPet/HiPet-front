import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const ReviewForm = styled.div`
  width: 50%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const StarWrapper = styled.div`
  font-size: 30px;
  cursor: pointer;
  color: #ffd700;
  margin: 0 2px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #888;
  text-align: center;
  margin-bottom: 20px;
`;

const ImageUploadContainer = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #aaa;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  margin-bottom: 20px;
  font-size: 14px;
  color: #555;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #ffcc00;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  width: 100%;
  max-width: 200px;
`;

const ReviewPage = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        stars.push(
          <StarWrapper key={i} onClick={() => handleClick(i)}>
            <FaStar />
          </StarWrapper>
        );
      } else if (rating >= i + 0.5) {
        stars.push(
          <StarWrapper key={i} onClick={() => handleClick(i)}>
            <FaStarHalfAlt />
          </StarWrapper>
        );
      } else {
        stars.push(
          <StarWrapper key={i} onClick={() => handleClick(i)}>
            <FaRegStar />
          </StarWrapper>
        );
      }
    }
    return stars;
  };

  return (
    <Container>
      <ReviewForm>
        <Title>옹이랑님과의 거래에 만족하셨나요?</Title>
        <Stars>{renderStars()}</Stars>
        <Subtitle>소중한 후기를 더 자세히 적어주세요.</Subtitle>
        <ImageUploadContainer>
          <span>이미지 첨부 (0/6)</span>
        </ImageUploadContainer>
        <TextArea placeholder="여기에 후기를 작성해 주세요!" />
        <SubmitButton onClick={() => navigate("/review-success")}>
          등록하기
        </SubmitButton>
      </ReviewForm>
    </Container>
  );
};

export default ReviewPage;
