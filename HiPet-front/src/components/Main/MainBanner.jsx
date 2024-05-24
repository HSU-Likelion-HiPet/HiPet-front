import React from 'react';
import styled, { css } from 'styled-components';
import leftVector from "../../assets/mainBannerLeftVector.png";
import rightVector from "../../assets/mainBannerRightVector.png";

const MainBanner = () => {
    return (
        <MainBannerWrapper>
            <Vector position = "left">
                <VectorWrapper>
                    <img src={leftVector} alt="left" />
                </VectorWrapper>
            </Vector>
            <Vector position = "right">
                <VectorWrapper>
                    <img src={rightVector} alt="right" />
                </VectorWrapper>
            </Vector>
            <BannerIndex>
                1/10
            </BannerIndex>
        </MainBannerWrapper>
    );
};

const MainBannerWrapper = styled.section`
    width: 100%;
    height: 553px;
    background: ${({theme})=>theme.mainBannerBackGroundColor};
    position: relative;
    margin-top: 231px;
    left: 0;
`;

const Vector= styled.div`
    cursor: pointer;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({theme})=>theme.basicWhite};
    position: absolute;
    top: 226px;

    ${({position})=>position==="left"&&
    css`
        left: 16.5vw;
    `};

    ${({position})=>position==="right" && 
    css`
        right: 16.5vw;
    `}
`;

const VectorWrapper = styled.div`
    width: 26px;
    height: 40px;
`;

const BannerIndex = styled.div`
    font-size: 2.4rem;
    color: ${({theme})=>theme.basicWhite};
    position: absolute;
    bottom: 16px;
    right: 386px;
`

export default MainBanner;