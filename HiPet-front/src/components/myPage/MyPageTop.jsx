import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyPageTop = ({ userData }) => {
  const navigate = useNavigate();

  const regionArray = [
    ["전체", "_ALL"],
    ["서울", "_SEOUL"],
    ["경기", "_GYEONGGI"],
    ["인천", "_INCHEON"],
    ["대전", "_DAEJEON"],
    ["세종", "_SEJONG"],
    ["충남", "_CHUNGNAM"],
    ["충북", "_CHUNGBUK"],
    ["광주", "_GWANGJU"],
    ["전남", "_JEONNAM"],
    ["전북", "_JEONBUK"],
    ["대구", "_DAEGU"],
    ["경북", "_GYEONGBUK"],
    ["부산", "_BUSAN"],
    ["울산", "_ULSAN"],
    ["경남", "_GYEONGNAM"],
    ["강원", "_GANGWON"],
    ["제주", "_JEJU"]
];


  return (
    <Container>
      <ProfileSection>
        <ProfileImage />
        <ProfileDetails>
          <TopRow>
            <Value>{userData.userName}</Value>
            <ManageButton onClick={() => navigate("/mypageedit")}>
              내 채널 관리
            </ManageButton>
          </TopRow>
          <Label>채널소개글</Label>
          <Description props={userData.profileInfo===""}>{userData.profileInfo === "" ? "채널소개글을 설정해주세요." : userData.profileInfo } </Description>
          <FieldRow>
            <Label>거래가능지역</Label>
            <Region>{regionArray.map((e, i)=>{
              if(e[1]===userData.region){
                return e[0];
              }
            })}</Region>
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
  padding: 17.5px 20.6px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 20px;

  color: ${({ props }) => (props ? "#9FA4A8" : "#323232")}

`;

const FieldRow = styled.div`
  display: flex;
`;

const Region = styled.div`
  font-size: 16px;
  background-color: #ffcc00;
  padding: 4px 14px;
  border-radius: 4px;
  margin-left: 10px;
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
