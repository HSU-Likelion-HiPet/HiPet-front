import React, { useState } from 'react';
import styled from 'styled-components';
import search from "../../assets/search.png";

const MainSearch = () => {
    const [input, setInput] = useState("");

    const onChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <MainSearchWrapper>
            <Wrapper>
                <InputWrapper>
                    <input type="text" placeholder='검색어를 입력하세요' value={input} onChange={onChange} />
                    <SearchIcon>
                        <img src={search} alt="search" onClick={() => console.log(input)} />
                    </SearchIcon>
                </InputWrapper>
                <SelectList>
                    <form>
                        <select>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="2">Option 2</option>
                            <option value="2">Option 2</option>
                        </select>

                        <select>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="2">Option 2</option>
                            <option value="2">Option 2</option>
                        </select>
                    </form>
                </SelectList>
            </Wrapper>
        </MainSearchWrapper>
    );
};

const MainSearchWrapper = styled.section`
    width: 100%;
    height: 522px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* margin-bottom: 198px; */
`;

const Wrapper = styled.div`
    margin: 0 auto;
`;

const InputWrapper = styled.form`
    position: relative;

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

const SelectList = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    margin-top: 40px;

    select {
        background: ${({ theme }) => theme.basicWhite};
        border: 1px solid #9FA4A8;
        border-radius: 20px;
        padding: 17.5px 80.5px 17.5px 35.5px;
    }

`;

export default MainSearch;
