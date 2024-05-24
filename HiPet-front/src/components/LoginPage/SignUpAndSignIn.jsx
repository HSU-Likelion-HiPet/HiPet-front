import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SignUpAndSignIn = () => {
    const location = useLocation();

    return (
        <SignUpAndSignInWrapper>
            <LinkStyled to="/" selected={location.pathname === "/"}>
                회원가입
            </LinkStyled>
            <span className='line'></span>
            <LinkStyled to="/signIn" selected={location.pathname === "/signIn"}>
                로그인
            </LinkStyled>
        </SignUpAndSignInWrapper>
    );
};

const SignUpAndSignInWrapper = styled.div`
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

const LinkStyled = styled(Link)`
    color: ${({ theme }) => theme.fontGray};
    ${({ selected }) => selected && css`
        color: ${({ theme }) => theme.fontBrown};
    `}
`;

export default SignUpAndSignIn;
