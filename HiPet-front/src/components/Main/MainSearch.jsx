import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import search from "../../assets/search.png";

const MainSearch = ({ postData, setPostData, handleSubmit }) => {
    const [input, setInput] = useState(null);

    const onChange = (e) => {
        setInput(e.target.value === "" ? null : e.target.value);
    }

    useEffect(()=>{
        setPostData({
            ...postData,
            keyword: input
        })
    }, [input])

    return (
        <MainSearchWrapper>
            <Wrapper>
                <InputWrapper onSubmit={(e)=>handleSubmit(e)}>
                    <input type="text" placeholder='검색어를 입력하세요' value={input} onChange={onChange} />
                    <SearchIcon>
                        <img src={search} alt="search" onClick={handleSubmit} />
                    </SearchIcon>
                </InputWrapper>
            </Wrapper>
        </MainSearchWrapper>
    );
};

const MainSearchWrapper = styled.section`
    width: 100%;
    height: 356px;
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    margin: 0 auto;
`;

const InputWrapper = styled.form`
    position: relative;
    margin-top: 140px;

    input {
        border: none;
        width: 980px;
        height: 80px;
        padding-left: 30px;
        padding-top: 21px;
        padding-bottom: 21px;
        padding-right: 70px;
        border-radius: 20px;
        font-size: 2.5rem;
        font-weight: 500;
        background: #EAEBED;

        &::placeholder {
            color: #73787E;
        }
    }
`;

const SearchIcon = styled.div`
    width: 32px;
    height: 32px;
    position: absolute;
    top: 31%;
    right: 2.5%;
    z-index: 2;
    cursor: pointer;
`;

export default MainSearch;