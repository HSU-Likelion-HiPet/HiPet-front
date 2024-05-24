import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import LoginPageHeader from '../components/LoginPage/LoginPageHeader';
import SignIn from '../components/LoginPage/SignIn';
import SignUp from '../components/LoginPage/SignUp';

const LoginPage = () => {
    const [isSignUpPage, setIsSignUpPage] = useState(true);

    return (
        <LoginPageWrapper>
            <LoginPageHeader />
            <SignUpAndSignIn>
                <SelectPage isSignUpPage={isSignUpPage} onClick={()=>setIsSignUpPage(true)}>
                    회원가입
                </SelectPage>
                <span className='line'></span>
                <SelectPage isSignUpPage={!isSignUpPage} onClick={()=>setIsSignUpPage(false)}>
                    로그인
                </SelectPage>
            </SignUpAndSignIn>
            <LoginSection>
                {isSignUpPage ? <SignUp /> : <SignIn />}
            </LoginSection>
        </LoginPageWrapper>
    );
};

const LoginPageWrapper = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LoginSection = styled.form`
    position: absolute;
    top: 56.5%;
    left: 50%;
    transform: translate3d(-50%,-50%, 0);
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 308px;
`;

const SignUpAndSignIn = styled.div`
    width: 270px;
    position: absolute;
    top: 29%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    font-weight: 700;
    font-size: 2.4rem;
    display: flex;
    justify-content: space-between;

    .line{
        background: #9FA4A8;
        height: 28px;
        width: 2px;
    }
`;

const SelectPage = styled.div`
    cursor: pointer;
    color: ${({isSignUpPage})=>isSignUpPage ? "#C86400" : "#9FA4A8"};
`

export default LoginPage;