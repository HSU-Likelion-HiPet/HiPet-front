import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const UserInput = ({ text, msg, type, name, value, onChange }) => {

  return (
    <InputWrapper>
      <InputStyle
        placeholder={text}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <div>
        <Message isInputted={value.length >= 1}>
          {msg}
        </Message>
      </div>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
    width: 780px;
    margin-bottom: 20px;
    div {
        position: relative;
    }
`;

const InputStyle = styled.input`
    width: 100%;
    height: 40px;
    border: 0.5px solid ${({ theme }) => theme.inputBorder};
    border-radius: 70px;
    font-weight: 400;
    font-size: 2.4rem;
    padding: 39px 45px;
    &::placeholder {
        color: ${({ theme }) => theme.inputBorder};
    }
`;

const Message = styled.p`
    position: absolute;
    top: 5px;
    left: 46px;
    opacity: 0;
    ${props =>
    props.isInputted &&
    css`
            opacity: 1;
            color: ${({theme})=>theme.fontRed};
        `}
`;

export default UserInput;
