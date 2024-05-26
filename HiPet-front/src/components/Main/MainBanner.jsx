import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftVector from "../../assets/mainBannerLeftVector.png";
import rightVector from "../../assets/mainBannerRightVector.png";

const MainBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const ar = [1,2,3];
    const settings = {
        infinite: true,
        speed: 500,
        arrows: ar.length >= 2,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: (
            <NextArrow>
              <img src={rightVector} alt="" />
            </NextArrow>
          ),
          prevArrow: (
            <PrevArrow>
              <img src={leftVector} alt="" />
            </PrevArrow>
          ),
          dots: false,
          afterChange: (current) => {
            setCurrentSlide(current);
          }
      };
      
    return (
        <MainBannerWrapper>
            <StyledSlider {...settings}>
                {ar.map((e, i)=>{
                    // 여기 밑에다 이미지 넣기
                    return <div key={i}>{e}</div>
                })}
            </StyledSlider>
            <BannerIndex>
                {currentSlide + 1}/{ar.length}    
            </BannerIndex>    
        </MainBannerWrapper>
    );
};

const MainBannerWrapper = styled.section`
    width: 100%;
    height: 553px;
    background: ${({theme})=>theme.mainBannerBackGroundColor};
    position: relative;
    margin-top: 175px;
    left: 0;
`;

const StyledSlider = styled(Slider)`
    width: 100%;
    height: 100%;

    .slick-prev::before,
    .slick-next::before {
        opacity: 0;
        display: none;
    }

    .slick-prev:hover,
    .slick-prev:focus,
    .slick-next:hover,
    .slick-next:focus {
        background-color: white;
    }
`;

const PrevArrow = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: #fff;
    position: absolute;
    left: 16.5vw;
    top: 50%;
    transform: translate(0, -50%);
    display: flex !important;
    justify-content: center;
    align-items: center;
    img{
        width: 26px;
        height: 40px;
    }
`;

const NextArrow = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background-color: #fff;
    position: absolute;
    right: 16.5vw;
    top: 50%;
    transform: translate(0, -50%);
    display: flex !important;
    justify-content: center;
    align-items: center;

    img{
        width: 26px;
        height: 40px;
    }
`;

const BannerIndex = styled.div`
    font-size: 2.4rem;
    color: ${({theme})=>theme.basicWhite};
    position: absolute;
    bottom: 16px;
    right: 386px;
    z-index: 888;
`

export default MainBanner;