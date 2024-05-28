import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainHeader from '../components/Main/MainHeader';
import MyPageTop from '../components/myPage/MyPageTop';
import MyPageBottom from '../components/myPage/MyPageBottom';
import axios from 'axios';

const MyPage = () => {
    const [getData, setGetData] = useState([]);

    const fetch = async () => {
        try {
            const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=23&page=1&x_cg_demo_api_key=CG-AYLRnqXGz5a5gaEdoynehsnZ");
            setGetData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetch();
    }, [])

    return (
        <MyPageWrapper>
            <MainHeader />
            <MyPageTop getData={getData} />
            <MyPageBottom getData={getData} />
        </MyPageWrapper>
    );
};

const MyPageWrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    border: 0.0000001px solid transparent;
`

export default MyPage;