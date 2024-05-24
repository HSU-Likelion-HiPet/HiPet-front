import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import styled from 'styled-components';

const ReviewRating = ({ rating, size }) => {
    const ratingStar = Array.from({ length: 5 }, (_, i) => {
        let number = i + 0.3;

        return (
            <span key={i}>
                {rating >= i + 0.8 ? (
                    <StarFull className='icon' />
                ) : rating >= number ? (
                    <StarHalf className='icon' />
                ) : (
                    <StarEmpty className='icon' />
                )}
            </span>
        );
    });

    return (
        <StarsWrapper size={size}>
            {ratingStar}
        </StarsWrapper>
    );
};

const StarsWrapper = styled.div`
    font-size: ${props=>props.size}rem;
    
    .starIconWrapper{
        margin-right: 15.23px;
    }
`;

const StarFull = styled(FaStar)`
    color: #FFC800;
`;

const StarHalf = styled(FaStarHalfAlt)`
    color: #FFC800;
`;

const StarEmpty = styled(FaRegStar)`
    color: #FFC800;
`;

export default ReviewRating;