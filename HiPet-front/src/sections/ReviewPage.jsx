import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ReviewPage = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const starsRef = useRef(null);

  const getRatingValue = (e, width) => {
    const { left } = starsRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const rawValue = (x / width) * 5;
    const adjustedValue = Math.round(rawValue * 2) / 2;
    return Math.min(Math.max(adjustedValue, 0), 5);
  };

  const handleMouseMove = (e) => {
    if (!isFixed && starsRef.current) {
      const { width } = starsRef.current.getBoundingClientRect();
      setHoverRating(getRatingValue(e, width));
    }
  };

  const handleMouseLeave = () => {
    if (!isFixed) {
      setHoverRating(0);
    }
  };

  const handleClick = (e) => {
    if (isFixed) {
      setIsFixed(false);
    } else {
      if (starsRef.current) {
        const { width } = starsRef.current.getBoundingClientRect();
        setRating(getRatingValue(e, width));
        setHoverRating(0);
        setIsFixed(true);
      }
    }
  };

  const renderStars = () => {
    const activeRating = hoverRating || rating;
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (activeRating >= i) {
        stars.push(
          <StarWrapper key={i}>
            <FaStar />
          </StarWrapper>
        );
      } else if (activeRating >= i - 0.5) {
        stars.push(
          <StarWrapper key={i - 0.5}>
            <FaStarHalfAlt />
          </StarWrapper>
        );
      } else {
        stars.push(
          <StarWrapper key={i}>
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
        <Title>
          옹이랑님과의 <br />
          거래에 만족하셨나요?
        </Title>
        <Stars
          ref={starsRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          {renderStars()}
        </Stars>
        <Subtitle>소중한 후기를 더 자세히 적어주세요.</Subtitle>
        <ImageUploadContainer>이미지 첨부 기능 필요</ImageUploadContainer>
        <TextArea placeholder="여기에 후기를 작성해 주세요!" />
        <SubmitButton onClick={() => navigate("/review-success")}>
          등록하기
        </SubmitButton>
      </ReviewForm>
    </Container>
  );
};

export default ReviewPage;

const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-family: "Pretendard-Regular";
`;

const ReviewForm = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  position: relative;
`;

const StarWrapper = styled.div`
  font-size: 30px;
  cursor: pointer;
  color: #ffd700;
  margin: 0 2px;
  position: relative;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #888;
  text-align: center;
  margin-bottom: 40px;
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
  background: #f7f8fa;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
  color: #555;
  background: #f7f8fa;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #ffcc00;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  color: black;
  width: 100%;
  max-width: 400px;
`;
