import React from 'react';
import styled from 'styled-components';

const LoginPageButton = ({ text, onClick }) => {
    return (
        <LoginPageButtonStyle onClick={onClick} >
            {text}
        </LoginPageButtonStyle>
    );
};

const LoginPageButtonStyle = styled.button`
    position: absolute;
    bottom: -45%;
    background: ${({ theme }) => theme.yellow};
    /* padding: 21px 78px; */
    width: 252px;
    height: 74px;
    font-size: 2.4rem;
    font-weight: 700;
    border-radius: 10px;
`;

export default LoginPageButton;