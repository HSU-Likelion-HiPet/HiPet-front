import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/HiPetLogo.png";

const MainHeader = () => {
    return (
        <MainHeaderStyle>
            <div className='logoWrapper'>
                <img src={logo} alt="HiPetLogo" />
            </div>
            <ul className='nav'>
                <li>채팅</li>
                <li>등록하기</li>
                <li>마이페이지</li>
                <li className='profileImgWrapper'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png" alt="profile" />
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