import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';
import Review from './Review';

const ChannelReview = ({ rating, reviews }) => {
    return (
        <ChannelReviewRapper className='wrap'>
            {reviews >= 1 ?
                <ReviewPage>
                    <div className='overall-rating-box'>
                        <span className='line'></span>
                        <div className='reviewRatingWrapper'>
                            <span>{rating}</span>
                            <Stars rating={rating} size={2.5} />
                        </div>
                        <div className='percentage'>
                            {Math.round(rating * 100 / 5)}% 만족후기
                        </div>
                    </div>
                </ReviewPage> :
                <NoReviewPage>

                </NoReviewPage>
            }
            <Reviews>
                <Review />
                <Review />
                <Review />
                <Review />
                <Review />
            </Reviews>
        </ChannelReviewRapper>
    );
};

const ChannelReviewRapper = styled.div`
    min-height: 280px;
    color: #474C52;
`;

const ReviewPage = styled.div`
    position: relative;
    margin-bottom: 116px;
    
    .overall-rating-box{
        width: 100%;
        border: 1px solid #CACDD2;
        border-radius: 3px;
        margin-top: 48px;
        display: flex;
        font-size: 2.4rem;

        > div{
            padding: 23px 0;
        }

        .line{
            height: 68px;
            width: 1px;
            background-color: #CACDD2;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
        }

        .reviewRatingWrapper{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .percentage{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

const Reviews = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* 리뷰를 최신 순으로 보여주고 싶다면 칼럼 리버스 하면 될 듯? */
`;

//리뷰가 없을 시 표시되는 페이지
const NoReviewPage = styled.div`
    
`;

export default ChannelReview;