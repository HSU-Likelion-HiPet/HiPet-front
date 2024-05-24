import React from 'react';
import styled from 'styled-components';
import emptyHeart from "../../assets/emptyHeart.svg";
import prevImg from "../../assets/slide-prev.png";
import nextImg from "../../assets/slide-next.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductInfo = ({data}) => {
    const ar = ["#차분함", "#조용함", "#귀여움"];
    const imgAr = [1,2,3,4,5];
    const settings = {
        dots: imgAr.length >= 2,
        infinite: true,
        speed: 500,
        arrows: imgAr.length >= 2,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: (
            <NextArrow>
              <img src={nextImg} alt="" />
            </NextArrow>
          ),
          prevArrow: (
            <PrevArrow>
              <img src={prevImg} alt="" />
            </PrevArrow>
          ),
          appendDots: dots => (
            <div
              style={{
                position: "absolute",
                bottom: "7px",
                left: "50%",
                transform: "translate(-50%, 0)",
                width: "fit-content",
                height: "fit-content"
              }}
            >
              <ul style={{display: "flex"}}> {dots} </ul>
            </div>
          ),
          dotsClass: 'dots_custom'
      };
      
    return (
        <ProductInfoWrapper className='wrap'>
            {/* <div className='tags'>
                <span>포유류</span>
                <div className='vectorImgWrapper'>
                    <img src={detailedPageVector} alt="" />
                </div>
                <span>개</span>
                <div className='vectorImgWrapper'>
                    <img src={detailedPageVector} alt="" />
                </div>
                <span>말티즈</span>
            </div> */}
            <div className="infoContainer">
                <StyledSlider {...settings}>
                    {imgAr.map((img,i)=>{
                        return <CustomImage key={i} src={emptyHeart} />
                    })}
                </StyledSlider>
                <div className="info">
                    <h2 className='title-and-category'>
                        <span className='title'>
                            {data.name}
                        </span>
                        <span className='category'>
                            포유류
                        </span>
                    </h2>
                    <span className='price'>
                        {data.current_price.toLocaleString()}원
                    </span>
                    <span className='uploadDate'>
                        2주 전
                    </span>
                    <span className="line"></span>
                    <span className='preferred-area'>거래희망지역</span>
                    <span className='area'>서울 강서구</span>
                    <div className="comment">
                        <span>상세정보</span>
                        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, eaque odit. Autem accusamus praesentium consectetur assumenda. Accusantium et non excepturi harum nulla illum velit? Cumque omnis modi totam ex esse.</div>
                    </div>
                    <ul>
                        {ar.map((e, i)=>{
                            return <Tag key={i}>{e}</Tag>
                        })}
                    </ul>
                    <div className="btns">
                        <button className="contact-btn">
                            문의하기
                        </button>
                        <button className="like-btn">
                            <div className="heart-img-wrapper">
                                <img src={emptyHeart} alt="" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </ProductInfoWrapper>
    );
};

const ProductInfoWrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: fit-content;

    .infoContainer{
        display: flex;
        gap: 21px;

        .productImgWrapper{
            flex: 1;
            width: 580px;
            height: 580px;
            background: #D9D9D9;
        }

        .info{
            flex: 1;
            display: flex;
            flex-direction: column;
            position: relative;

            .title-and-category{
                margin-bottom: 14px;
                display: flex;

                .title {
                    font-size: 40px;
                    color: ${({theme})=>theme.fontDark};
                }

                .category{
                    font-size: 24px;
                    color: #73787E;
                    align-self: flex-end;
                    margin-left: 16.5px;
                    margin-bottom: 4px;
                }
            }

            .price{
                color: ${({theme})=>theme.fontDark};
                font-size: 40px;
                margin-bottom: 11px;
            }

            .uploadDate{
                color: #9FA4A8;
                margin-bottom: 6px;
                font-size: 20px;
            }

            .line{
                width: 100%;
                height: 1px;
                background-color: #CACDD2;
                margin-bottom: 44px;
            }

            .preferred-area{
                font-size: 16px;
                color: #73787E;
                margin-bottom: 7px;
            }

            .area{
                color: #27282C;
                font-size: 20px;
                margin-bottom: 31px;
            }

            .comment{
                width: 100%;
                height: fit-content;

                span{
                    color: #73787E;
                    font-size: 16px;
                }
                
                div{
                    margin-top: 7px;
                    min-height: 141px;
                    color: #27282C;
                    font-size: 20px;
                }
            }

            ul{
                display: flex;
                margin-bottom: 22px;
            }

            .btns{
                position: absolute;
                bottom: 0;
                height: fit-content;
                width: 100%;
                display: flex;
                align-items: flex-end;
                justify-content: space-between;

                button{
                    border-radius: 4px;
                }

                .contact-btn{
                    background-color: ${({theme})=>theme.yellow};
                    padding: 24px 180px;
                    font-size: 24px;
                    font-weight: 700;
                }

                .like-btn{
                    border: 1px solid #CACDD2;
                    background-color: white;
                    padding: 14px 24px;
                    .heart-img-wrapper{
                        width: 50px;
                        height: 50px;
                    }
                }
            }
        }
    }
`;

const StyledSlider = styled(Slider)`
    flex: 1;
    width: 580px;
    height: 580px;
    position: relative;
    background: #D9D9D9;
    overflow: hidden;
    .slick-prev::before,
    .slick-next::before {
        opacity: 0;
        display: none;
    }

    .dots_custom li button{
        color: transparent;
        border: none;
        height: 10px;
        width: 10px;
        border-radius: 100%;
        margin-left: 5px;
    }

    .dots_custom li.slick-active button {
        background-color: #fff;
    }
`;

const CustomImage = styled.img`
    width: 580px;
    height: 580px;
`

const NextArrow = styled.div`
    width: 20px;
    height: 40px;
    position: absolute;
    right: 3%;
    z-index: 3;
`;

const PrevArrow = styled.div`
    width: 20px;
    height: 40px;
    position: absolute;
    left: 3%;
    z-index: 3;
`;

const Tag = styled.li`
    background: #C86400;
    border-radius: 20px;
    padding: 8px 16px;
    color: #F7F8FA;
    font-size: 16px;
    margin-right: 16px;
`;

export default ProductInfo;