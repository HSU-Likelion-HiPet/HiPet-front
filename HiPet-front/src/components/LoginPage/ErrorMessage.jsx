import React from 'react';
import styled, { css } from 'styled-components';

const ErrorMessage = ({ name, value }) => {
    let message = null;

    if (value.length > 1) {
        if (name === 'id') {
            message = '아이디';
        } else if (name === 'pw') {
            message = '비밀번호';
        }
    }

    return (
        <Message>
            {message}
        </Message>
    );
};

const Message = styled.p`
    opacity: 0;
    ${props =>
        props.value >= 1 &&
        css`
        opacity: 1;
    `}
`

export default ErrorMessage;
