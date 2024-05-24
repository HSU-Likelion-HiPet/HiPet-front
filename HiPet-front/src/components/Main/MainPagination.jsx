import React from 'react';
import styled from 'styled-components';
import leftVector from "../../assets/leftVector.png";
import rightVector from "../../assets/rightVector.png";

const MainPagination = ({ currentPage, totalPosts, postsPerPage, setCurrentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }
    function moveToPrevious(){
        if(currentPage === 1){
            return;
        }
        setCurrentPage(currentPage - 1);
    }

    function moveToNext(){
        if(currentPage === Math.ceil(totalPosts / postsPerPage)){
            return;
        }
        setCurrentPage(currentPage + 1);
    }
    return (
        <Pagination>
            <div className="icon_paginate" onClick={moveToPrevious}>
                <img src={leftVector} alt="" />
            </div>
            {pages.map((e, i) => {
                return (
                    <button key={i} onClick={() => setCurrentPage(e)}>
                        {e}
                    </button>
                );
            })}
            <div className="icon_paginate" onClick={moveToNext}>
                <img src={rightVector} alt="" />
            </div>
        </Pagination>
    );
};

const Pagination = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: -.5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 450px;
    border: 1px solid red;
    
    .icon_paginate{
        width: 13.64px;
        height: 18.48px;
        cursor: pointer;
    }

    button {
        cursor: pointer;
        background: transparent;
        font-size: 36px;
        text-align: center;
    }
    margin-bottom: 91px;
`;

export default MainPagination;
