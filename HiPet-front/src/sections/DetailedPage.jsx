import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainHeader from '../components/Main/MainHeader';
import { useLocation } from 'react-router-dom';
import ProductInfo from '../components/DetailedPage/ProductInfo';
import SellerInfo from '../components/DetailedPage/SellerInfo';
import { connectApi } from '../apis/api';
import axios from 'axios';

const DetailedPage = () => {
    const location = useLocation();
    const { animal } = location.state || {}; //이게 데이터값임
    const [detailData, setDedailData] = useState(null);
    
    const fetchData = async () => {
        try {
            const response = await axios.get("http://3.37.129.172:8080/api/animal/detail", {
                animalId: 10,
                loginId: "grt1022rt"
            });
            setDedailData(response.data);
            console.log(response.data);
        } catch (error) {
            // 에러를 더 자세히 살펴봅니다.
            if (error.response) {
                // 서버가 응답한 상태 코드가 있는 경우
                console.log("Server responded with status code", error.response.status);
                console.log("Response data:", error.response.data);
            } else if (error.request) {
                // 요청이 서버로 전송되지 않은 경우
                console.log("Request was made but no response was received:", error.request);
            } else {
                // 요청을 설정하는 동안 문제가 발생한 경우
                console.log("Error setting up request:", error.message);
            }
        }
    }
    

    useEffect(()=>{
        fetchData();
    }, [])
    
    return (
        <DetailedPageWrapper>
            <MainHeader />
            <ProductInfo data={animal} />
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