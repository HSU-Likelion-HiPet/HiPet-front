import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connectApi, useGetCurrentUserId } from "../../api/api";
import DefaultProfileImage from "../../assets/DefaultProfileImage.png";

const MyPageEditTop = () => {
  const [nickname, setNickname] = useState("");
  const [description, setDescription] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("_SEOUL");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profilePhotoPreview, setProfilePhotoPreview] =
    useState(DefaultProfileImage);
  const [defaultProfileFile, setDefaultProfileFile] = useState(null);
  const currentUserId = useGetCurrentUserId();

  useEffect(() => {
    fetch(DefaultProfileImage)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "DefaultProfileImage.png", {
          type: "image/png",
        });
        setDefaultProfileFile(file);
      });
  }, []);

  const regions = [
    { label: "전체", value: "_NATIONAL" },
    { label: "서울", value: "_SEOUL" },
    { label: "경기", value: "_GYEONGGI" },
    { label: "인천", value: "_INCHEON" },
    { label: "대전", value: "_DAEJEON" },
    { label: "세종", value: "_SEJONG" },
    { label: "충남", value: "_CHUNGNAM" },
    { label: "충북", value: "_CHUNGBUK" },
    { label: "광주", value: "_GWANGJU" },
    { label: "전남", value: "_JEOLLANAM" },
    { label: "전북", value: "_JEOLLABUK" },
    { label: "대구", value: "_DAEGU" },
    { label: "경북", value: "_GYEONGBUK" },
    { label: "부산", value: "_BUSAN" },
    { label: "울산", value: "_ULSAN" },
    { label: "경남", value: "_GYEONGNAM" },
    { label: "강원", value: "_GANGWON" },
    { label: "제주", value: "_JEJU" },
  ];

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  const handleProfilePhotoChange = (event) => {
    const file = event.target.files[0];
    setProfilePhoto(file);
    setProfilePhotoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("userName", nickname);
    formData.append("region", selectedRegion);
    formData.append("profileInfo", description);
    formData.append(
      "profilePhoto",
      profilePhoto ? profilePhoto : defaultProfileFile
    );

    try {
      const response = await connectApi.put(
        `/api/user/${currentUserId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("성공:", response.data);
    } catch (error) {
      if (error.response) {
        console.error("서버 응답 에러:", error.response.data);
      } else if (error.request) {
        console.error("요청에 대한 응답이 없음:", error.request);
      } else {
        console.error("요청 설정 에러:", error.message);
      }
      console.error("프로필 업데이트 실패:", error.config);
    }
  };

  return (
    <Container>
      <ProfileSection>
        <ProfileImageContainer>
          <ProfileImage src={profilePhotoPreview} alt="Profile" />
          <UploadButton as="label">
            사진선택
            <input
              type="file"
              style={{ display: "none" }}
              onChange={handleProfilePhotoChange}
            />
          </UploadButton>
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
            <ManageButton onClick={handleSubmit}>수정 완료</ManageButton>
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
                key={region.value}
                selected={selectedRegion === region.value}
                onClick={() => handleRegionClick(region.value)}
              >
                {region.label}
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

const ProfileImage = styled.img`
  width: 380px;
  height: 380px;
  background-color: #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  object-fit: cover;
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
