import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainHeader from '../components/Main/MainHeader';
import { useLocation } from 'react-router-dom';
import ProductInfo from '../components/DetailedPage/ProductInfo';
import SellerInfo from '../components/DetailedPage/SellerInfo';
import { connectApi } from '../apis/api';
import axios from 'axios';
import useConvertRegion from '../hooks/useConvertRegion';
import img1 from "../assets/animalImgs/img1.jpg";
import img9 from "../assets/animalImgs/img9.jpg";
import img29 from "../assets/animalImgs/img29.jpg";
import img30 from "../assets/animalImgs/img30.jpg";
import img17 from "../assets/animalImgs/img17.jpg";

const DetailedPage = () => {
    const location = useLocation();
    const { animal } = location.state || {}; //이게 데이터값임
    // const [detailData, setDedailData] = useState(null);
    
    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get("http://3.37.129.172:8080/api/animal/detail", {
    //             animalId: 10,
    //             loginId: "grt1022rt"
    //         });
    //         setDedailData(response.data);
    //         console.log(response.data);
    //     } catch (error) {
    //         // 에러를 더 자세히 살펴봅니다.
    //         if (error.response) {
    //             // 서버가 응답한 상태 코드가 있는 경우
    //             console.log("Server responded with status code", error.response.status);
    //             console.log("Response data:", error.response.data);
    //         } else if (error.request) {
    //             // 요청이 서버로 전송되지 않은 경우
    //             console.log("Request was made but no response was received:", error.request);
    //         } else {
    //             // 요청을 설정하는 동안 문제가 발생한 경우
    //             console.log("Error setting up request:", error.message);
    //         }
    //     }
    // }
    // useEffect(()=>{
    //     fetchData();
    // }, [])
    const [detailData, setDedailData] = useState({
        "animal" : { // 동물 정보
            "photoFiles" : [ // 사용자가 등록한 동물 사진
                {
	              "photoId" : 1, // 사진의 고유 ID
                  "photoURL" : "http://사진경로1" // 사진 경로
                },
                {
	                "photoId" : 2,
                  "photoURL" : "http://사진경로2"
                }
            ],
            "animalName" : animal.animalName, // 사용자가 등록한 동물명
            "category" : "_MAMMAL", // 동물 분류 (카테고리)
            "price" : animal.price, // 가격 (해당 예시는 무료일 경우 입니다.)
            "createdAt" : animal.createdAt, // 게시글 등록일
            "region" : useConvertRegion(animal.region), // 거래희망지역
            "info" : `${animal.animalName}입니다.`, // 동물 상세 정보
            "hashtag" : animal.hashtag,
            "isLiked" : true // 해당 동물에 대한 로그인 중인 사용자의 관심 등록 여부
        },
        "user" : { // 게시자의 정보 (for 채널정보패널)
            "profileImage" : "http://프로필사진 경로", // 게시자의 프로필사진 경로
            "loginId" : 1, // 게시자의 로그인아이디
            "userName" : "고양이물고기", // 게시자의 닉네임
            "userInfo" : "한줄소개입니다.", // 게시자의 한 줄 소개
            "totalRateForUser" : 4.6 // 게시자가 이행한 모든 거래에 대한 총 평점
        },
        "review" : { // 리뷰 목록 (for 분양후기패널)
            "totalRate" : 4.3, // 해당 거래에 대한 총 평점 평균
            "reviews" : [ // 리뷰 목록 리스트
                { // 첫 번째 리뷰
                    "user" : { // 리뷰 작성자의 정보
                        "loginId" : 2, // 리뷰 작성자의 고유 유저 ID
                        "profileImage" : "http://리뷰 작성자1 프로필사진 경로" // 리뷰 작성자의 프로필사진 경로
                    },
                    "createdAt" : "2024-05-21", // 리뷰 작성일
                    "rate" : 4.7, // 평점
                    "text" : "리뷰1입니다. 리뷰1입니다. 리뷰1입니다. 리뷰1입니다. 리뷰1입니다.", // 리뷰 본문
                    "reviewImages" : [ // 리뷰에 첨부된 사진 목록 리스트
                        {
                            "reviewImageId" : 1, // 리뷰에 첨부된 사진 고유 ID (혹시 몰라 보내드립니다. 사용하지 않으셔도 돼요 !!)
                            "imageURL" : img1 // 리뷰에 첨부된 사진 경로
                        },                        
                        {
                            "reviewImageId" : 2,
                            "imageURL" : img9
                        }
                    ]
                },
                { // 두 번째 리뷰
                    "user" : {
                        "userId" : 3,
                        "profileImage" : "http://리뷰 작성자2 프로필사진 경로"
                    },
                    "createdAt" : "2024-05-24", // 리뷰 작성일
                    "rate" : 3.9,
                    "text" : "리뷰2입니다. 리뷰2입니다. 리뷰2입니다. 리뷰2입니다. 리뷰2입니다.",
                    "reviewImages" : [
                        {
                            "reviewImageId" : 1,
                            "imageURL" : img29
                        },                        
                        {
                            "reviewImageId" : 2,
                            "imageURL" : img30
                        }
                    ]
                },
                { // 두 번째 리뷰
                    "user" : {
                        "userId" : 4,
                        "profileImage" : "http://리뷰 작성자2 프로필사진 경로"
                    },
                    "createdAt" : "2024-05-15", // 리뷰 작성일
                    "rate" : 2.4,
                    "text" : "리뷰3입니다. 리뷰3입니다. 리뷰3입니다. 리뷰3입니다. 리뷰3입니다.",
                    "reviewImages" : [
                        {
                            "reviewImageId" : 1,
                            "imageURL" : img17
                        },                        
                    ]
                },
            ]
        }
    });
    
    
    return (
        <DetailedPageWrapper>
            <MainHeader />
            <ProductInfo data={animal} detailData={detailData} />
            <SellerInfo detailData = {detailData} />
        </DetailedPageWrapper>
    );
};

const DetailedPageWrapper = styled.main`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    //마진 상쇄를 해결하기 위한 border
    border: 0.1px solid transparent;
    
    .wrap{
        height: fit-content;
        margin: 0 auto;
        max-width: 1180px;
    }

    > .wrap{
        margin-top: 158px;
        margin-bottom: 157px;
    }
`;

export default DetailedPage;