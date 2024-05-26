import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import MainItem from './MainItem';
import MainPagination from './MainPagination';
import EmptyDataPage from './EmptyDataPage';
import Pagination from 'react-js-pagination';
import filterVector from "../../assets/filterVector.png";

const MainContents = ({ coinsData, postData, setPostData, handleSubmit }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(15);
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const [type, setType] = useState("종류");
    const typeArray = [["포유류", "_MAMMAL"], ["파충류", "_REPTILE"], ["양서류", "_AMPHIBIAN"], ["조류", "_BIRD"], ["어류", "_FISH"]];
    const [region, setRegion] = useState("지역");
    const regionArray = [
        ["전체", "_ALL"],
        ["서울", "_SEOUL"],
        ["경기", "_GYEONGGI"],
        ["인천", "_INCHEON"],
        ["대전", "_DAEJEON"],
        ["세종", "_SEJONG"],
        ["충남", "_CHUNGNAM"],
        ["충북", "_CHUNGBUK"],
        ["광주", "_GWANGJU"],
        ["전남", "_JEONNAM"],
        ["전북", "_JEONBUK"],
        ["대구", "_DAEGU"],
        ["경북", "_GYEONGBUK"],
        ["부산", "_BUSAN"],
        ["울산", "_ULSAN"],
        ["경남", "_GYEONGNAM"],
        ["강원", "_GANGWON"],
        ["제주", "_JEJU"]
    ];

    const [sortStatus, setSortStatus] = useState("최신순");
    const sortStatusArray = [
        ["최신순", "_EARLIEST"],
        ["오래된 순", "_LATEST "]
    ]

    const [isOptionClicked, setIsOptionClicked] = useState({
        type: false,
        region: false,
        sortStatus: false
    })

    return (
        <MainContentsSection>
            <Container>
                <ContentsHeader>
                    <h4>총 {coinsData.length}건</h4>
                    {/* 나중에 수정해야함 */}
                    <FilterWrapper>
                        <Filter props="type" onClick={() => setIsOptionClicked({
                            type: !isOptionClicked.type,
                            region: false,
                            sortStatus: false
                        })}>
                            <span>{type}</span>
                            <span className='imgWrapper'>
                                <img src={filterVector} alt="" />
                            </span>
                            {isOptionClicked.type === true &&
                                (
                                    <ul className="options type-options">
                                        {typeArray.map((e, i) => {
                                            return <li key={i} onClick={() => {
                                                setType(e[0]);
                                                setPostData({
                                                    ...postData,
                                                    type: e[1]
                                                });
                                            }}>{e[0]}</li>
                                        })}
                                    </ul>
                                )}
                        </Filter>

                        <Filter props="region" onClick={() => setIsOptionClicked({
                            type: false,
                            region: !isOptionClicked.region,
                            sortStatus: false
                        })}>
                            <span>{region}</span>
                            <span className='imgWrapper'>
                                <img src={filterVector} alt="" />
                            </span>

                            {isOptionClicked.region && (
                                <ul className="options region-options">
                                    {regionArray.map((e, i) => {
                                        return <li key={i} onClick={() => {
                                            setRegion(e[0]);
                                            setPostData({
                                                ...postData,
                                                region: e[1]
                                            })
                                        }}>{e[0]}</li>
                                    })}
                                </ul>
                            )}
                        </Filter>

                        <Filter props="sortStatus" onClick={()=> setIsOptionClicked({
                            type: false,
                            region: false,
                            sortStatus: !isOptionClicked.sortStatus
                        })}>
                            <span>{sortStatus}</span>
                            <span className='imgWrapper'>
                                <img src={filterVector} alt="" />
                            </span>

                            {isOptionClicked.sortStatus && (
                                <ul className="options sortStatus-options">
                                    {sortStatusArray.map((e,i)=>{
                                        return <li onClick={()=>{
                                            setSortStatus(e[0]);
                                            setPostData({
                                                ...postData,
                                                sortStatus: e[1]
                                            })
                                        }} key={i}>{e[0]}</li>
                                    })}
                                </ul>
                            )}
                        </Filter>
                        <button onClick={handleSubmit}>적용</button>
                    </FilterWrapper>
                </ContentsHeader>
                {coinsData.length > 0 ? (
                    <ContentsWrapper>
                        {currentPosts.map((coin, i) => {
                            return <MainItem key={i} coin={coin} />;
                        })}
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={postsPerPage}
                            totalItemsCount={coinsData.length - 1}
                            pageRangeDisplayed={5}
                            firstPageText="«"
                            lastPageText="»"
                            prevPageText="<"
                            nextPageText=">"
                            onChange={handlePageChange}
                        />
                    </ContentsWrapper>
                ) : (
                    <EmptyDataPage />
                )}
            </Container>
        </MainContentsSection>
    );
};

const MainContentsSection = styled.section`
    width: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1180px;
    margin: 0 auto;
`;

const ContentsHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.fontDark};

    h4 {
        font-size: 36px;
        font-weight: 600;
    }

    /* > span {
        margin-right: 58px;
        font-size: 24px;
        cursor: pointer;
    } */
`;

const ContentsWrapper = styled.div`
    margin-top: 109px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
    column-gap: 20px;
    margin-bottom: 229px;
    width: 100%;
    position: relative;

    .pagination {
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: -150px;
        left: 50%;
        transform: translate(-50%, 0);
        font-size: 2.6rem;

        li {
            width: 55px;
            text-align: center;
        }

        li a{
            color: #9FA4A8;
        }

        li.active a {
            font-weight: bold;
            /* text-decoration: underline; */
            color: ${({ theme }) => theme.fontDark};
        }
    }
`;

const FilterWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;

    > button{
        font-size: 2.2rem;
        border-radius: 20px;
        color: #F7F8FA;
        background: #C86400;
        height: 64px;
        width: 100px;
    }
`;

const Filter = styled.div`
    position: relative;
    border: 1px solid #9FA4A8;
    border-radius: 20px;
    cursor: pointer;
    margin-right: 20px;
    color: #000;
    font-size: 2.4rem;
    display: flex;
    /* width: 170px; */
    padding: 17.5px 35.5px;

    li{
        white-space: nowrap;
    }

    width: ${({ props }) => {
        if (props === "type") {
            return "180px";
        }
        else if (props === "region") {
            return "170px";
        }
        else {
            return "202px"
        }
    }};

    .options{
        position: absolute;
        left: 0;
        z-index: 5;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        background: #fff;

        > li:hover{
            background: #FFC800;
        }

    }
    
    .type-options{
        bottom: -320px;

        > li{
            display: flex;
            align-items: center;
            width: 200px;
            height: 60px;
            padding-left: 30.5px;
        }

        
    }

    .region-options{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        padding: 10px;
        bottom: -331px;

        > li{
            width: 120px;
            height: 50px;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #F7F8FA;
        }
    }

    .sortStatus-options{
        display: flex;
        flex-direction: column;
        position: absolute;
        bottom: -138px;

        > li{
            padding: 15px 130.5px 15px 35.5px;
        }
    }

        > span{
            white-space: nowrap;
        }

        .imgWrapper{
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            right: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 16px;
            height: 8px;
    }
`;

export default MainContents;