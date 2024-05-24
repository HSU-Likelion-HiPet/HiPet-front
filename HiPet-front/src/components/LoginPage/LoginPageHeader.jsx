import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/HiPetLogo.png";


const LoginPageHeader = () => {
    return (
        <LoginPageHeaderStyle>
            <div className='logoWrapper'>
                <img src={logo} alt="HiPetLogo" />
            </div>
            <div>
                <p>빠르게 로그인하고</p>
                <p>다양한 반려동물을 만나보세요!</p>
            </div>
        </LoginPageHeaderStyle>
    );
};

const LoginPageHeaderStyle = styled.header`
position: absolute;
width: 100%;
margin-top: 48px;
display: flex;
font-family: Inter;
justify-content: center;

.logoWrapper{
    width: 62px;
    height: 52px;
    margin-right: 78px;
}

> div{
    margin-right: 30vw;
}

> div p{
    position: relative;
    top: -3px;
    font-weight: 1000;
    font-size: 4rem;
    line-height: 53.6px;
}
`;

export default LoginPageHeader;