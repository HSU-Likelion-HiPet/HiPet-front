import React from 'react';
import styled from 'styled-components';
import bigSearch from "../../assets/emptyDataPageSearch.png";

const EmptyDataPage = () => {
    return (
        <EmptyDataPageWrapper>
            <div className="imgWrapper">
                <img src={bigSearch} alt="" />
            </div>
            <span>검색 결과가 없어요!</span>
        </EmptyDataPageWrapper>
    );
};

const EmptyDataPageWrapper = styled.section`
    width: 100%;
    margin-top: 167px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .imgWrapper{
        width: 102px;
        height: 102px;
    }
    
    span{
        margin-top: 23px;
        font-size: 35px;
        color: ${({theme})=>theme.fontDark};
        margin-bottom: 73px;
    }
`;

export default EmptyDataPage;