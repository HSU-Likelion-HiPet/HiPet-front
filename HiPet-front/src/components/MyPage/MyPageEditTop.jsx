import React, { useState } from "react";
import styled from "styled-components";

const MyPageEditTop = () => {
  const [nickname, setNickname] = useState("");
  const [description, setDescription] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("서울");
  const regions = [
    "전체",
    "서울",
    "경기",
    "인천",
    "대전",
    "세종",
    "충남",
    "충북",
    "광주",
    "전남",
    "전북",
    "대구",
    "경북",
    "부산",
    "울산",
    "경남",
    "강원",
    "제주",
    "전국",
  ];

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  return (
    <Container>
      <ProfileSection>
        <ProfileImageContainer>
          <ProfileImage />
          <UploadButton>사진선택</UploadButton>
        </ProfileImageContainer>
        <ProfileDetails>
          <FieldRow>
            <Input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임을 입력해 주세요."
              required
            />
            <ManageButton>수정 완료</ManageButton>
          </FieldRow>
          <Label>채널소개글</Label>
          <TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="채널소개글"
            required
          />
          <Label>지역</Label>
          <RegionContainer>
            {regions.map((region) => (
              <RegionButton
                key={region}
                selected={selectedRegion === region}
                onClick={() => handleRegionClick(region)}
              >
                {region}
              </RegionButton>
            ))}
          </RegionContainer>
        </ProfileDetails>
      </ProfileSection>
    </Container>
  );
};

export default MyPageEditTop;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  background-color: #f7f8fa;
  min-height: 100vh;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1180px;
  margin-bottom: 20px;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 30px;
`;

const ProfileImage = styled.div`
  width: 380px;
  height: 380px;
  background-color: #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const FieldRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: 18px;
  height: 32px;
  margin-bottom: 10px;
  font-weight: 500;
  line-height: 32.16px;
  text-align: left;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  margin-right: 20px;
  background: #f7f8fa;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 220px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  resize: none;
  margin-bottom: 20px;
  background: #f7f8fa;
`;

const RegionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-left: 0;
`;

const RegionButton = styled.button`
  padding: 10px 20px;
  background-color: ${({ selected }) => (selected ? "#ffcc00" : "#f0f0f0")};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  flex: 1 1 calc(25% - 30px);
  max-width: calc(25% - 30px);
`;

const ManageButton = styled.button`
  padding: 10px 20px;
  background-color: #c86400;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
`;

const UploadButton = styled.button`
  padding: 10px 20px;
  background-color: #c86400;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;
