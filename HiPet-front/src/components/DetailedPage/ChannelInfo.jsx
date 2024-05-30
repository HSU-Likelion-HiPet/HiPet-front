import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';
import userDefaultProfile from "../../assets/userDefaultProfile.png";

const ChannelInfo = ({ detailData }) => {
    let totalRate = detailData.review.reviews.reduce((s, c) => s + c.rate, 0) / detailData.review.reviews.length;
    totalRate = totalRate.toFixed(1);

    return (
        <ChannelInfoWrapper className="wrap">
            <div className="seller">
                <div className="seller-profile-img-wrapper">
                    <img src={userDefaultProfile} alt="" />
                </div>

                <div className="seller-name-and-intro">
                    <h4 className="seller-name">
                        {detailData.user.userName}
                    </h4>
                    <div className="intro">
                        {detailData.user.userInfo}
                    </div>
                </div>
            </div>
            <div className="reviewRatingWrapper">
                <Stars rating={totalRate} size={2.5} />
                <span>{totalRate}</span>
            </div>
        </ChannelInfoWrapper>
    );
};

const ChannelInfoWrapper = styled.div`
    padding-top: 100px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 80px;

    .seller{
        display: flex;
        
        .seller-profile-img-wrapper{
            width: 100px;
            height: 100px;
            margin-right: 22px;
            border-radius: 100%;
            overflow: hidden;
        }
        .seller-name-and-intro{
            margin-top: 23px;

            .seller-name{
                font-size: 20px;
                margin-bottom: 2px;
            }
            .intro{
                color: #474C52;
                font-size: 1.2rem;
            }
        }
    }

    .reviewRatingWrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;

        > span{
            margin-bottom: 5px;
            margin-left: 15px;
        }
    }
`;

export default ChannelInfo;