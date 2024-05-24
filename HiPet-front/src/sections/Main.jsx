import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainHeader from '../components/Main/MainHeader';
import MainBanner from '../components/Main/MainBanner';
import MainSearch from '../components/Main/MainSearch';
import MainContents from '../components/Main/MainContents';
import axios from 'axios';

const Main = () => {
    const [coinsData, setCoinsData] = useState([]);
    const fetch = async () => {
        try {
            const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=200&page=1&x_cg_demo_api_key=CG-AYLRnqXGz5a5gaEdoynehsnZ");
            setCoinsData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetch();
    }, []);

    return (
        <MainPage>
            <MainHeader />
            <MainBanner />
            <MainSearch />
            <MainContents coinsData = {coinsData} />
        </MainPage>
    );
};

const MainPage = styled.main`
    width: 100%;
    min-height: 150vh;
    background: ${({ theme }) => theme.basicWhite};
    display: flex;
    flex-direction: column;
`;

export default Main;