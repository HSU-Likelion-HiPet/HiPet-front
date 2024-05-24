import React from 'react';
import styled from 'styled-components';
import MainHeader from '../components/Main/MainHeader';
import { useLocation } from 'react-router-dom';
import ProductInfo from '../components/DetailedPage/ProductInfo';
import SellerInfo from '../components/DetailedPage/SellerInfo';

const DetailedPage = () => {
    const location = useLocation();
    const { coin } = location.state || {}; //이게 코인 데이터임
    
    return (
        <DetailedPageWrapper>
            <MainHeader />
            <ProductInfo data={coin} />
            <SellerInfo />
        </DetailedPageWrapper>
    );
};

const DetailedPageWrapper = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    //마진 상쇄를 해결하기 위한 border
    border: 0.1px solid transparent;
    
    .wrap{
        height: fit-content;
        margin: 0 auto;
        max-width: 1180px;
    }

    > .wrap{
        margin-top: 158px;
        margin-bottom: 157px;
    }
`;

export default DetailedPage;