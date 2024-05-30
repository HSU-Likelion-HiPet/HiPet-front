import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';
import userDefaultProfile from "../../assets/userDefaultProfile.png";

const Review = ({review}) => {
    console.log(review.reviewImages[0])
    return (
        <ReviewWrapper>
            <div className="reviewer-info">
                <div className="reviewer-profile-img-wrapper">
                    <img src={userDefaultProfile} alt="" />
                </div>
                <div className="reviewer-name-and-reviewed-date">
                    <h4>유저이름{review.user.loginId}</h4>
                    <span>2024.05.01</span>
                </div>
            </div>
            <Stars rating={review.rate} size={3.2} />
            <p className="review-content">
                {review.text}
            </p>
            <ul className="review-img-section">
                {/* <ReviewImgSizeWrapper>
                    {review.reviewImages.map((reviewImg, i)=>{
                        return <img key={i} src={reviewImg.imageURL} alt="" />;
                    })}
                </ReviewImgSizeWrapper> */}
                {review.reviewImages.map((reviewImg, i)=>{
                    return <ReviewImgSizeWrapper>
                        <img src={reviewImg.imageURL} alt="" />
                    </ReviewImgSizeWrapper>
                })}
            </ul>
            
        </ReviewWrapper>
    );
};

const ReviewWrapper = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #CACDD2;
    margin-bottom: 116px;

    .reviewer-info{
        display: flex;
        margin-bottom: 16px;

        .reviewer-profile-img-wrapper{
            width: 100px;
            height: 100px;
            border-radius: 100%;
            overflow: hidden;
            background-color: #D9D9D9;
            margin-right: 24px;
        }

        .reviewer-name-and-reviewed-date{
            display: flex;
            flex-direction: column;
            justify-content: center;
            h4{
                font-size: 24px;
            }
            span{
                color: #9FA4A8;
                font-size: 16px;
            }
        }
    }

    .review-content{
        margin-top: 16px;
        min-height: 107px;
        margin-bottom: 33px;
        font-size: 2rem;
    }

    .review-img-section{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 12px;
        padding-bottom: 112px;
    }
`;

const ReviewImgSizeWrapper = styled.li`
    width: 380px;
    height: 380px;
    border-radius: 3px;
    background: #D9D9D9;
`;

export default Review;