import React, { useState } from "react";
import styled from "styled-components";
import MainHeader from "../components/Main/MainHeader";

const AnimalRegistration = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [priceType, setPriceType] = useState("free");
  const [category, setCategory] = useState("포유류");
  const [gender, setGender] = useState("암");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      price,
      priceType,
      category,
      gender,
      description,
      tags,
    });
  };

  return (
    <>
      <MainHeader />
      <Container>
        <Form onSubmit={handleSubmit}>
          <ImageContainer>
            <ImagePlaceholder>사진</ImagePlaceholder>
          </ImageContainer>
          <RightContainer>
            <FieldRow>
              <Label>동물명</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력해 주세요."
                required
              />
            </FieldRow>
            <FieldRow>
              <Label>가격</Label>
              <PriceContainer>
                <ButtonGroup>
                  <Button
                    type="button"
                    selected={priceType === "free"}
                    onClick={() => setPriceType("free")}
                  >
                    무료
                  </Button>
                  <Button
                    type="button"
                    selected={priceType === "paid"}
                    onClick={() => setPriceType("paid")}
                  >
                    유료
                  </Button>
                </ButtonGroup>
                {priceType === "paid" && (
                  <Input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="가격을 입력해 주세요."
                    required
                  />
                )}
              </PriceContainer>
            </FieldRow>
            <FieldRow>
              <Label>카테고리</Label>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="포유류">포유류</option>
                <option value="파충류">파충류</option>
                <option value="양서류">양서류</option>
                <option value="조류">조류</option>
                <option value="어류">어류</option>
              </Select>
            </FieldRow>
            <FieldRow>
              <Label>성별</Label>
              <ButtonGroup>
                <Button
                  type="button"
                  selected={gender === "암"}
                  onClick={() => setGender("암")}
                >
                  암
                </Button>
                <Button
                  type="button"
                  selected={gender === "수"}
                  onClick={() => setGender("수")}
                >
                  수
                </Button>
              </ButtonGroup>
            </FieldRow>
            <FieldRow>
              <Label>상세설명</Label>
              <TextArea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="상세설명"
                required
              />
            </FieldRow>
            <FieldRow>
              <Label>태그</Label>
              <Input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="태그를 입력해 주세요."
              />
            </FieldRow>
          </RightContainer>
        </Form>
        <SubmitButtonContainer>
          <SubmitButton type="submit">등록하기</SubmitButton>
        </SubmitButtonContainer>
      </Container>
    </>
  );
};

export default AnimalRegistration;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  background-color: #f7f8fa;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  max-width: 1200px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 540px;
  height: 540px;
  margin-right: 50px;
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #aaa;
  border-radius: 3px 0 0 0;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FieldRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  width: 100px;
  font-size: 16px;
  margin-right: 20px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const Select = styled.select`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  flex-grow: 1;
  height: 240px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  resize: none;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: ${({ selected }) => (selected ? "#ffcc00" : "#ddd")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  &:last-child {
    margin-right: 0;
  }
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SubmitButton = styled.button`
  width: 460px;
  height: 80px;
  background-color: #ffcc00;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  color: black;
  &:hover {
    background-color: #ffb700;
  }
`;
