import React, { useState } from "react";
import styled from "styled-components";
import MainHeader from "../components/Main/MainHeader";
import { connectApi, useGetCurrentUserId } from "../apis/api";
import axios from "axios";

const AnimalRegistration = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [priceType, setPriceType] = useState(false);
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("_UNKNOWN");
  const [description, setDescription] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const categories = [
    ["포유류", "_CAT"],
    ["파충류", "_DOG"],
    ["양서류", "_REPTILE"],
    ["조류", "_BIRD"],
    ["어류", "_FISH"],
  ];
  const currentUserId = useGetCurrentUserId();
  const formData = new FormData();

  const postData = async () => {
    formData.append("loginId", currentUserId);
    formData.append("animalName", name);
    formData.append("isPrice", priceType);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("gender", gender);
    formData.append("description", description);
    formData.append("hashtag", tags);
    images.forEach((image) => {
      formData.append("photoFiles", image.file);
    });

    try {
      const response = await axios.post(
        "http://3.37.129.172:8080/api/animal/hipet",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (e) {
      if (e.response) {
        console.log(e.response.data);
      } else {
        console.error(e.message);
      }
    }
  };

  const handleSubmit = () => {
    if (!category) {
      alert("카테고리를 선택해주세요.");
      return;
    }
    if (images.length < 1) {
      alert("사진을 선택해주세요.");
      return;
    }

    console.log(formData.hashtag)
    postData();
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
    if (files.length + images.length <= 5) {
      const newImages = files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setImages([...images, ...newImages]);
    } else {
      alert("최대 5개의 이미지만 첨부할 수 있습니다.");
    }
  };

  const handleImageClick = () => {
    document.getElementById("imageInput").click();
  };

  return (
    <>
      <MainHeader />
      <Container>
        <Form>
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
            <ImageCount>{`${images.length}/5`}</ImageCount>
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
                  selected={priceType === false}
                  onClick={() => setPriceType(false)}
                  type="button"
                >
                  무료
                </Button>
                <Button
                  selected={priceType === true}
                  onClick={() => setPriceType(true)}
                  type="button"
                >
                  유료
                </Button>
                {priceType === true && (
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
                {categories.map((e, i) => (
                  <CategoryButton
                    key={i}
                    onClick={() => setCategory(e[1])}
                    selected={category === e[1]}
                    type="button"
                  >
                    {e[0]}
                  </CategoryButton>
                ))}
              </CategoryContainer>
            </FieldRow>
            <FieldRow>
              <Label>성별</Label>
              <ButtonGroup>
                <Button
                  type="button"
                  selected={gender === "_FEMALE"}
                  onClick={() => setGender("_FEMALE")}
                >
                  암
                </Button>
                <Button
                  type="button"
                  selected={gender === "_MALE"}
                  onClick={() => setGender("_MALE")}
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
            <SubmitButton onClick={handleSubmit}>등록하기</SubmitButton>
          </RightContainer>
        </Form>
      </Container>
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

const Form = styled.div`
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
