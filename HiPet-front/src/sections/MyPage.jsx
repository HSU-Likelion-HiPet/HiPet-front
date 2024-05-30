import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainHeader from '../components/Main/MainHeader';
import MyPageTop from '../components/myPage/MyPageTop';
import MyPageBottom from '../components/myPage/MyPageBottom';
import axios from 'axios';
import { connectApi, useGetCurrentUserId, useGetUserData } from '../apis/api';

const MyPage = () => {
    const [currentSection, setCurrentSection] = useState("posts");
    const [currentUserData, setCurrentUserData] = useState(null);

    const fetchUserData = async () => {
        try {
            const response = await connectApi.get(`/api/user/${sessionStorage.getItem("currentUserId")}`);
            setCurrentUserData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <MyPageWrapper>
            <MainHeader />
            {currentUserData && (
                <>
                <MyPageTop userData={currentUserData} />
                <MyPageBottom userData={currentUserData} currentSection={currentSection} setCurrentSection = {setCurrentSection} />
                </>
            )}
        </MyPageWrapper>
    );
};

const MyPageWrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    border: 0.0000001px solid transparent;
`

export default MyPage;