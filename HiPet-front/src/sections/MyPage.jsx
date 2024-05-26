import React from 'react';
import styled from 'styled-components';
import MainHeader from '../components/Main/MainHeader';
import MyPageTop from '../components/myPage/MyPageTop';
import MyPageBottom from '../components/myPage/MyPageBottom';

const MyPage = () => {
    return (
        <MyPageWrapper>
            <MainHeader />
            <MyPageTop />
            <MyPageBottom />
        </MyPageWrapper>
    );
};

const MyPageWrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    border: 0.0000001px solid transparent;
`

export default MyPage;