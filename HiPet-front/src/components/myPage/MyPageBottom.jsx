import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import MainItem from '../Main/MainItem';
import Review from '../DetailedPage/Review';

const MyPageBottom = ({getData, deleteTargetId, setDeleteTargetId}) => {
    //현재 섹션이 myPost, myChannelReviews, myLikes가 있음
    const [currentSection, setCurrentSection] = useState("posts");
    const selectiveRendering = (e) => {
        setCurrentSection(e.target.dataset.type);
    }

    return (
        <BottomStyle>
            <Content>
                <nav className='navs'>
                    <Nav active={currentSection === "posts"} className='myPost' data-type="posts" onClick={(e) => selectiveRendering(e)}>글</Nav>
                    <Nav active={currentSection === "reviews"} className='reviews' data-type="reviews" onClick={(e) => selectiveRendering(e)}>채널후기</Nav>
                    <Nav active={currentSection === "likes"} className='likes' data-type="likes" onClick={(e) => selectiveRendering(e)}>찜 목록</Nav>
                </nav>

                {currentSection === "posts" &&
                    (<>
                        <MyPageConentTop>
                            {/* 여기 나중에 posts.length로 바꿔야함 */}
                            <h3>총 {getData.length}개</h3>
                        </MyPageConentTop>
                        <Posts>
                            {getData.map((e, i) => {
                                return <MainItem key={i} coin={e} deleteTargetId={deleteTargetId} setDeleteTargetId = {setDeleteTargetId} />
                            })}
                        </Posts>
                    </>)
                }

                {currentSection === "reviews" &&
                    (<>
                        <MyPageConentTop>
                            {/* 여기 나중에 reviews.length로 바꿔야함 */}
                            <h3>채널후기 {getData.length}개</h3>
                        </MyPageConentTop>
                        <Reviews>
                            {getData.map((e, i) => {
                                return <Review key={i} />
                            })}
                        </Reviews>
                    </>)
                }

                {currentSection === "likes" &&
                    (<>
                        <MyPageConentTop>
                            {/* 여기 나중에 likes.length로 바꿔야함 */}
                            <h3>총 {getData.length}개</h3>
                        </MyPageConentTop>
                        ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ여기는 찜목록이이이이이이잉이ㅣ이이잉이임ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
                        <Likes>
                            {getData.map((e, i) => {
                                return <MainItem key={i} coin={e} />
                            })}
                        </Likes>
                    </>)
                }
            </Content>
        </BottomStyle>
    );
};

const BottomStyle = styled.section`
    width: 100%;
    height: 100%;
    border-top: 1px solid #CACDD2;
    margin-top: 101px;
`;

const Content = styled.div`
    width: 1180px;
    margin: 0 auto;

    .navs{
        width: 100%;
        display: flex;
        height: 100px;
        margin-bottom: 72px;
    }
`;

const Nav = styled.div`
    flex: 1;
    cursor: pointer;
    color: #474C52;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F7F8FA;
    ${props =>
        props.active &&
        css`
        background: #fff;
    `
    }
`;

const MyPageConentTop = styled.div`
    width: 100%;
    margin-bottom: 24px;
    color: #000;
    display: flex;
    justify-content: flex-start;

    h3{
        font-size: 3.2rem;
    }
`;

const Posts = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const Reviews = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Likes = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

export default MyPageBottom;