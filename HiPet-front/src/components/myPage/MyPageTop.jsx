import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyPageTop = ({ getData }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <ProfileSection>
        <ProfileImage />
        <ProfileDetails>
          <TopRow>
            <Value>사용자 닉네임</Value>
            <ManageButton onClick={() => navigate("/mypageedit", { state: { getData } })}>
              내 채널 관리
            </ManageButton>
          </TopRow>
          <Label>채널소개글</Label>
          <Description>채널 소개글 내용</Description>
          <FieldRow>
            <Label>거래가능지역</Label>
            <Region>서울</Region>
          </FieldRow>
        </ProfileDetails>
      </ProfileSection>
    </Container>
  );
};

export default MyPageTop;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 182px;
  background-color: #fff;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: flex-start;
  width: 1180px;
`;

const ProfileImage = styled.div`
  width: 380px;
  height: 380px;
  background-color: #ddd;
  border-radius: 4px;
  margin-right: 20px;
  
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 780px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
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

const Value = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 32.16px;
  text-align: left;
`;

const Description = styled.div`
  width: 100%;
  height: 220px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 20px;
`;

const FieldRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Region = styled.div`
  font-size: 16px;
  background-color: #ffcc00;
  padding: 10px 20px;
  border-radius: 4px;
  margin-left: 10px;
  width: 104px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
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
