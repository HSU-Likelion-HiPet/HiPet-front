import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/HiPetLogo.png";
import { useNavigate } from 'react-router-dom';
import { useGetCurrentUserId, useGetUserData } from '../../apis/api';
import userDefaultProfile from "../../assets/userDefaultProfile.png";

const MainHeader = () => {
    const navigate = useNavigate();
    const currentUserData = useGetUserData(useGetCurrentUserId());
    
    return (
        <MainHeaderStyle>
            <div className='logoWrapper' onClick={()=>navigate("/main")}>
                <img src={logo} alt="HiPetLogo" />
            </div>
            <ul className='nav'>
                <li>채팅</li>
                <li onClick={()=>navigate("/registration")}>등록하기</li>
                <li onClick={()=>navigate("/mypage", {state: {currentUserData}})}>마이페이지</li>
                <li className='profileImgWrapper'>
                    {currentUserData.photoFiles === undefined ? <img src={userDefaultProfile} alt="default" /> : (
                        <img src={currentUserData.photoFiles} alt="profile" />
                    )}
                </li>
            </ul>
        </MainHeaderStyle>
    );
};

const MainHeaderStyle = styled.header`
  position: absolute;
  left: 50%;
  top: 48px;
  transform: translate(-50%, 0);
  min-width: 1180px;
  max-width: 1180px;
  display: flex;
  justify-content: space-between;
  align-items: center;

    .logoWrapper{
        cursor: pointer;
    }

  .nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 170px;
    font-size: 14px;

    li{
        margin-right: 26px;
        color: ${({ theme }) => theme.fontDark};
        cursor: pointer;
    }

    li:last-child{
        margin-right: 0 !important;
    }

    .profileImgWrapper{
        width: 52px;
        height: 52px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${({ theme }) => theme.inputBorder};
        overflow: hidden;
    }
  }
`;

export default MainHeader;