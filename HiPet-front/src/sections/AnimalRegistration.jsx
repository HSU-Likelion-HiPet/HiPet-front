import React, { useState } from "react";
import styled from "styled-components";
import MainHeader from "../components/Main/MainHeader";
import MainFooter from "../components/Main/MainFooter";

const AnimalRegistration = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [priceType, setPriceType] = useState("free");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("암");
  const [description, setDescription] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const categories = ["포유류", "파충류", "양서류", "조류", "어류"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category) {
      alert("카테고리를 선택해주세요.");
      return;
    }
    const formData = {
      name,
      price: priceType === "paid" ? price : "무료",
      category,
      gender,
      description,
      tags,
      images: images.map((image) => image.file),
    };
    console.log(formData);
  };

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleTagInputKeyUp = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (newTag.length >= 8) {
        alert("태그는 8글자 미만이어야 합니다.");
      } else if (tags.length >= 5) {
        alert("태그는 최대 5개까지 가능합니다.");
      } else if (!tags.includes(newTag)) {
        setTags((prevTags) => [...prevTags, newTag]);
        setTagInput("");
      }
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length <= 12) {
      const newImages = files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setImages([...images, ...newImages]);
    } else {
      alert("최대 12개의 이미지만 첨부할 수 있습니다.");
    }
  };

  const handleImageClick = () => {
    document.getElementById("imageInput").click();
  };

  return (
    <>
      <MainHeader />
      <Container>
        <Form onSubmit={handleSubmit}>
          <LeftContainer onClick={handleImageClick}>
            {images.length > 0 ? (
              <Image
                src={images[images.length - 1].preview}
                alt="Animal Preview"
              />
            ) : (
              <ImagePlaceholder>사진</ImagePlaceholder>
            )}
            <ImageInput
              type="file"
              id="imageInput"
              multiple
              accept="image/*"
              onChange={handleImageChange}
            />
            <ImageCount>{`${images.length}/12`}</ImageCount>
          </LeftContainer>
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
              <PriceSelector>
                <Button
                  selected={priceType === "free"}
                  onClick={() => setPriceType("free")}
                  type="button"
                >
                  무료
                </Button>
                <Button
                  selected={priceType === "paid"}
                  onClick={() => setPriceType("paid")}
                  type="button"
                >
                  유료
                </Button>
                {priceType === "paid" && (
                  <Input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="가격 입력"
                    required
                  />
                )}
              </PriceSelector>
            </FieldRow>
            <FieldRow>
              <Label>카테고리</Label>
              <CategoryContainer>
                {categories.map((cat) => (
                  <CategoryButton
                    key={cat}
                    selected={category === cat}
                    onClick={() => setCategory(cat)}
                    type="button"
                  >
                    {cat}
                  </CategoryButton>
                ))}
              </CategoryContainer>
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
              <TagInputContainer>
                <Input
                  type="text"
                  value={tagInput}
                  onChange={handleTagInputChange}
                  onKeyUp={handleTagInputKeyUp}
                  placeholder="태그를 입력해 주세요."
                />
                <TagCount>{tags.length}/5</TagCount>
              </TagInputContainer>
            </FieldRow>
            <TagList>
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagList>
            <SubmitButton type="submit">등록하기</SubmitButton>
          </RightContainer>
        </Form>
      </Container>
      <MainFooter />
    </>
  );
};

export default AnimalRegistration;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  background-color: #f7f8fa;
  min-height: 100vh;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  max-width: 1200px;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  margin-right: 50px;
  cursor: pointer;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
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
  border-radius: 4px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const FieldRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
`;

const PriceSelector = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const Label = styled.label`
  width: 100px;
  font-size: 16px;
  margin-right: 20px;
  margin-bottom: 5px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  flex-grow: 1;
  height: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  resize: none;
  width: calc(100% - 120px);
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

const CategoryButton = styled(Button)`
  background-color: ${({ selected }) => (selected ? "#ffcc00" : "#f0f0f0")};
  width: 100%;
  margin-bottom: 0px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const TagInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-grow: 1;
`;

const TagCount = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
  color: #777;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const Tag = styled.div`
  padding: 8px 16px;
  background: #c86400;
  border-radius: 20px;
  font-size: 14px;
  color: #fff;
`;

const SubmitButton = styled.button`
  align-self: center;
  width: 360px;
  height: 60px;
  background-color: #ffcc00;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  color: black;
  margin-top: 40px;
  &:hover {
    background-color: #ffb700;
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageCount = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 14px;
  color: #777;
`;
