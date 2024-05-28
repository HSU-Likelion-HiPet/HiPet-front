import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import MainItem from '../Main/MainItem';
import Review from '../DetailedPage/Review';
import { useLocation } from 'react-router-dom';
import WhiteCheckVector from "../../assets/checkVector-white.png";
import YellowCheckVector from "../../assets/checkVector-yellow.png";

const MyPageBottom = ({getData, deleteTargetId, setDeleteTargetId, toggleModal, currentSection, setCurrentSection }) => {
    //현재 섹션이 myPost, myChannelReviews, myLikes가 있음

    const selectiveRendering = (e) => {
        setCurrentSection(e.target.dataset.type);
    }

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/mypageedit") {
            setDeleteTargetId([]);
        }
    }, [currentSection]);

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
                            {location.pathname==="/mypageedit" && (
                                <div className='delete-button-wrapper'>
                                    <div className="box" onClick={()=>setDeleteTargetId([])}>
                                        <img src={deleteTargetId.length >= 1 ? YellowCheckVector : WhiteCheckVector} alt="" />
                                    </div>
                                    <DeleteBtn props={deleteTargetId.length >= 1} onClick={toggleModal}>선택삭제</DeleteBtn>
                                </div>
                            )}
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
                            {location.pathname==="/mypageedit" && (
                                <div className='delete-button-wrapper'>
                                    <div className="box" onClick={()=>setDeleteTargetId([])}>
                                        <img src={deleteTargetId.length >= 1 ? YellowCheckVector : WhiteCheckVector} alt="" />
                                    </div>
                                    <DeleteBtn props={deleteTargetId.length >= 1} onClick={toggleModal}>선택삭제</DeleteBtn>
                                </div>
                            )}
                        </MyPageConentTop>
                        ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ여기는 찜목록이이이이이이잉이ㅣ이이잉이임ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
                        <Likes>
                            {getData.map((e, i) => {
                                return <MainItem key={i} coin={e} deleteTargetId={deleteTargetId} setDeleteTargetId = {setDeleteTargetId} />
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
    justify-content: space-between;
    align-items: center;

    h3{
        font-size: 3.2rem;
    }

    .delete-button-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;

        .box{
            width: 36px;
            height: 36px;
            border: 1px solid #EAEBED;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 8px;
            cursor: pointer;

            img{
                padding-top: 3px;
                width: 30.5px;
                height: 25.5px;
            }

        }
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

const DeleteBtn = styled.span`
    color: ${({props})=>props ? "#C86400" : "#9FA4A8"};
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
`;

export default MyPageBottom;