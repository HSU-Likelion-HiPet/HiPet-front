import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainHeader from '../components/Main/MainHeader';
import MainBanner from '../components/Main/MainBanner';
import MainSearch from '../components/Main/MainSearch';
import MainContents from '../components/Main/MainContents';
import axios from 'axios';
import img1 from "../assets/animalImgs/img1.jpg";
import img2 from "../assets/animalImgs/img2.jpg";
import img3 from "../assets/animalImgs/img3.jpg";
import img4 from "../assets/animalImgs/img4.jpg";
import img5 from "../assets/animalImgs/img5.jpg";
import img6 from "../assets/animalImgs/img6.jpg";
import img7 from "../assets/animalImgs/img7.jpg";
import img8 from "../assets/animalImgs/img8.jpg";
import img9 from "../assets/animalImgs/img9.jpg";
import img10 from "../assets/animalImgs/img10.jpg";
import img11 from "../assets/animalImgs/img11.jpg";
import img12 from "../assets/animalImgs/img12.jpg";
import img13 from "../assets/animalImgs/img13.jpg";
import img14 from "../assets/animalImgs/img14.jpg";
import img15 from "../assets/animalImgs/img15.jpg";
import img16 from "../assets/animalImgs/img16.jpg";
import img17 from "../assets/animalImgs/img17.jpg";
import img18 from "../assets/animalImgs/img18.jpg";
import img19 from "../assets/animalImgs/img19.jpg";
import img20 from "../assets/animalImgs/img20.jpg";
import img21 from "../assets/animalImgs/img21.jpg";
import img22 from "../assets/animalImgs/img22.jpg";
import img23 from "../assets/animalImgs/img23.jpg";
import img24 from "../assets/animalImgs/img24.jpg";
import img25 from "../assets/animalImgs/img25.jpg";
import img26 from "../assets/animalImgs/img26.jpg";
import img27 from "../assets/animalImgs/img27.jpg";
import img28 from "../assets/animalImgs/img28.jpg";
import img29 from "../assets/animalImgs/img29.jpg";
import img30 from "../assets/animalImgs/img30.jpg";


const Main = () => {
    // const [animalsData, setAnimalsData] = useState([]);
    const [animalsData, setAnimalsData] = useState([
        {
            animalId: 1,
            image: img1, // 게시된 동물의 사진
            animalName: "아기 말티즈",
            hashtag: [
                { hashtagId: 1, keyword: "귀여움" },
                { hashtagId: 2, keyword: "조용함" },
            ],
            price: "100,000",
            region: "_SEOUL",
            createdAt: "2024-05-30"
        },
        {
            animalId: 2,
            image: img2, // 게시된 동물의 사진
            animalName: "아기 말티즈",
            hashtag: [
                { hashtagId: 3, keyword: "귀여움" },
                { hashtagId: 4, keyword: "조용함" },
                { hashtagId: 5, keyword: "댕댕이" },
            ],
            price: "100,000",
            region: "_SEOUL",
            createdAt: "2024-05-30"
        },
        {
            animalId: 3,
            image: img3, // 게시된 동물의 사진
            animalName: "3개월차 진돗개 새끼",
            hashtag: [
                { hashtagId: 6, keyword: "시고르자브종" },
            ],
            price: "89,900",
            region: "_SEOUL",
            createdAt: "2024-05-30"
        },
        {
            animalId: 4,
            image: img4, // 게시된 동물의 사진
            animalName: "고냥이 새끼 분양해요~",
            hashtag: [
                { hashtagId: 7, keyword: "쿠키앤크림" },
                { hashtagId: 8, keyword: "똑똑함" },
            ],
            price: "53,000",
            region: "_GYEONGGI",
            createdAt: "2024-05-29"
        },
        {
            animalId: 5,
            image: img5, // 게시된 동물의 사진
            animalName: "못생겼어",
            hashtag: [
                { hashtagId: 9, keyword: "우리 집 개가 더 귀여움" },
                { hashtagId: 10, keyword: "못생김" },
            ],
            price: "50,000",
            region: "_GYEONGGI",
            createdAt: "2024-05-29"
        },
        {
            animalId: 6,
            image: img6, // 게시된 동물의 사진
            animalName: "시바",
            hashtag: [
                { hashtagId: 11, keyword: "시바ㄹ" },
                { hashtagId: 12, keyword: "시바이누" },
            ],
            price: "3,900",
            region: "_GYEONGGI",
            createdAt: "2024-05-29"
        },
        {
            animalId: 7,
            image: img7, // 게시된 동물의 사진
            animalName: "얜 무슨 종이지",
            hashtag: [
                { hashtagId: 13, keyword: "모르겠다" },
                { hashtagId: 14, keyword: "흥정 x" },
            ],
            price: "105,900",
            region: "_GYEONGNAM",
            createdAt: "2024-05-29"
        },
        {
            animalId: 8,
            image: img8, // 게시된 동물의 사진
            animalName: "흑규",
            hashtag: [
                { hashtagId: 15, keyword: "5개월 차" },
                { hashtagId: 16, keyword: "흥정 x" },
            ],
            price: "100,900",
            region: "_INCHEON",
            createdAt: "2024-05-28"
        },
        {
            animalId: 9,
            image: img9, // 게시된 동물의 사진
            animalName: "아기 말티즈",
            hashtag: [
                { hashtagId: 17, keyword: "귀여움" },
                { hashtagId: 18, keyword: "조용함" },
            ],
            price: "103,900",
            region: "_SEOUL",
            createdAt: "2024-05-27"
        },
        {
            animalId: 10,
            image: img10, // 게시된 동물의 사진
            animalName: "믹스댕",
            hashtag: [
                { hashtagId: 19, keyword: "믹스댕" },
                { hashtagId: 20, keyword: "수컷" },
            ],
            price: "59,900",
            region: "_INCHEON",
            createdAt: "2024-05-27"
        },
        {
            animalId: 11,
            image: img11, // 게시된 동물의 사진
            animalName: "1개월차 강지",
            hashtag: [
                { hashtagId: 21, keyword: "조그마함" },
                { hashtagId: 22, keyword: "밥 제 때 주길 권장" },
            ],
            price: "3,900",
            region: "_SEOUL",
            createdAt: "2024-05-27"
        },
        {
            animalId: 12,
            image: img12, // 게시된 동물의 사진
            animalName: "5개월차 흑구",
            hashtag: [
                { hashtagId: 23, keyword: "말 잘들음" },
                { hashtagId: 24, keyword: "댕똑똑" },
            ],
            price: "59,900",
            region: "_INCHEON",
            createdAt: "2024-05-27"
        },
        {
            animalId: 13,
            image: img13, // 게시된 동물의 사진
            animalName: "시고르자브종",
            hashtag: [
                { hashtagId: 25, keyword: "믹스견" },
                { hashtagId: 26, keyword: "인절미" },
            ],
            price: "99,900",
            region: "_SEOUL",
            createdAt: "2024-05-27"
        },
        {
            animalId: 14,
            image: img14, // 게시된 동물의 사진
            animalName: "이건 뭐지",
            hashtag: [
                { hashtagId: 27, keyword: "귀여움" },
                { hashtagId: 28, keyword: "조용함" },
            ],
            price: "1,900",
            region: "_INCHEON",
            createdAt: "2024-05-26"
        },
        {
            animalId: 15,
            image: img15, // 게시된 동물의 사진
            animalName: "고양이",
            hashtag: [
                { hashtagId: 29, keyword: "귀여움" },
                { hashtagId: 30, keyword: "시끄러움" },
            ],
            price: "80,900",
            region: "_GYEONGNAM",
            createdAt: "2024-05-26"
        },
        {
            animalId: 16,
            image: img16, // 게시된 동물의 사진
            animalName: "그냥 특별한 거 없는 강아지",
            hashtag: [
                { hashtagId: 31, keyword: "댕귀여움" },
                { hashtagId: 32, keyword: "댕조용함" },
            ],
            price: "100,900",
            region: "_SEOUL",
            createdAt: "2024-05-26"
        },
        {
            animalId: 17,
            image: img17, // 게시된 동물의 사진
            animalName: "강지",
            hashtag: [
                { hashtagId: 33, keyword: "댕귀여움" },
                { hashtagId: 34, keyword: "댕조용함" },
            ],
            price: "150,000",
            region: "_GYEONGNAM",
            createdAt: "2024-05-25"
        },
        {
            animalId: 18,
            image: img18, // 게시된 동물의 사진
            animalName: "강아지",
            hashtag: [
                { hashtagId: 35, keyword: "귀여움" },
                { hashtagId: 36, keyword: "조용함" },
            ],
            price: "100,000",
            region: "_SEOUL",
            createdAt: "2024-05-25"
        },
        {
            animalId: 19,
            image: img19, // 게시된 동물의 사진
            animalName: "개귀엽다 ㅁㅊ",
            hashtag: [
                { hashtagId: 37, keyword: "강해린" },
                { hashtagId: 38, keyword: "고양이상" },
            ],
            price: "10,900",
            region: "_GYEONGNAM",
            createdAt: "2024-05-25"
        },
        {
            animalId: 20,
            image: img20, // 게시된 동물의 사진
            animalName: "새끼 고양이",
            hashtag: [
                { hashtagId: 39, keyword: "고영희" },
                { hashtagId: 40, keyword: "조용함" },
            ],
            price: "5,900",
            region: "_GYEONGNAM",
            createdAt: "2024-05-25"
        },
        {
            animalId: 21,
            image: img21, // 게시된 동물의 사진
            animalName: "뱀",
            hashtag: [
                { hashtagId: 41, keyword: "도마뱀" },
                { hashtagId: 42, keyword: "도오마아배앰" },
            ],
            price: "300,900",
            region: "_ULSAN",
            createdAt: "2024-05-24"
        },
        {
            animalId: 22,
            image: img22, // 게시된 동물의 사진
            animalName: "거북이",
            hashtag: [
                { hashtagId: 43, keyword: "꼬북이" },
                { hashtagId: 44, keyword: "꼬북칩" },
            ],
            price: "89,000",
            region: "_ULSAN",
            createdAt: "2024-05-24"
        },
        {
            animalId: 23,
            image: img23, // 게시된 동물의 사진
            animalName: "카멜레온",
            hashtag: [
                { hashtagId: 45, keyword: "위장크림 듬뿍" },
            ],
            price: "200,000",
            region: "_SEOUL",
            createdAt: "2024-05-23"
        },
        {
            animalId: 24,
            image: img24, // 게시된 동물의 사진
            animalName: "도마뱀",
            hashtag: [
                { hashtagId: 46, keyword: "비상식량" },
                { hashtagId: 47, keyword: "꼬리 구워먹으셈" },
            ],
            price: "150,900",
            region: "_SEOUL",
            createdAt: "2024-05-23"
        },
        {
            animalId: 25,
            image: img25, // 게시된 동물의 사진
            animalName: "화 잘내는 햄찌",
            hashtag: [
                { hashtagId: 48, keyword: "화 잘 냄" },
                { hashtagId: 49, keyword: "잘먹음" },
                { hashtagId: 50, keyword: "분노조절잘해" },
            ],
            price: "10,000",
            region: "_JEONBUK",
            createdAt: "2024-05-22"
        },
        {
            animalId: 26,
            image: img26, // 게시된 동물의 사진
            animalName: "토깽이 분양합니다",
            hashtag: [
                { hashtagId: 51, keyword: "귀여움" },
                { hashtagId: 52, keyword: "비상식량" },
            ],
            price: "150,900",
            region: "_JEONBUK",
            createdAt: "2024-05-22"
        },
        {
            animalId: 27,
            image: img27, // 게시된 동물의 사진
            animalName: "유학갔다온 앵무",
            hashtag: [
                { hashtagId: 53, keyword: "새대가리" },
                { hashtagId: 54, keyword: "영어 잘함" },
            ],
            price: "999,999,999",
            region: "_SEOUL",
            createdAt: "2024-05-22"
        },
        {
            animalId: 28,
            image: img28, // 게시된 동물의 사진
            animalName: "말하는 앵무",
            hashtag: [
                { hashtagId: 55, keyword: "님보다 말 잘함" },
                { hashtagId: 56, keyword: "개시끄러움" },
            ],
            price: "999,999",
            region: "_JEONBUK",
            createdAt: "2024-05-21"
        },
        {
            animalId: 29,
            image: img29, // 게시된 동물의 사진
            animalName: "물고기1",
            hashtag: [
                { hashtagId: 57, keyword: "맛없음" },
                { hashtagId: 58, keyword: "먹으셈" },
            ],
            price: "200,000",
            region: "_JEONBUK",
            createdAt: "2024-05-21"
        },
        {
            animalId: 30,
            image: img30, // 게시된 동물의 사진
            animalName: "물고기2",
            hashtag: [
                { hashtagId: 59, keyword: "맛있어보임" },
                { hashtagId: 60, keyword: "근데 먹지 마셈" },
            ],
            price: "170,000",
            region: "_JEONBUK",
            createdAt: "2024-05-17"
        },
    ]);

    const [userData, setUserData] = useState({
        "userId": "grt1022rt",
        "userName": "고양이물고기",
        "profileInfo": "\"test\"",
        "profilePicture": "https://hipet-bucket.s3.ap-northeast-2.amazonaws.com/f14730ff-3437-4b05-a5cc-2e85e0251f71",
        "reviews": [],
        "animals": [animalsData[10], animalsData[11], animalsData[12], animalsData[13]],
        "likes": [animalsData[1], animalsData[2], animalsData[3]]
    },)


    const [postData, setPostData] = useState({
        type: null,
        region: null,
        sortStatus: "_EARLIEST",
        keyword: null
    });

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(e.target instanceof HTMLImageElement && postData.keyword === null){
            alert("검색어는 한 자 이상 입력해야 합니다.")
            return;
        }
        console.log(postData);
    }

    // const fetchCoinsData = async () => {
    //     try {
    //         const response = await axios.get("http://3.37.129.172:8080/api/animal/all");
    //         setAnimalsData(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // useEffect(() => {
    //     fetchCoinsData();
    // }, []);

    return (
        <MainPage>
            <MainHeader />
            <MainBanner />
            <MainSearch handleSubmit={handleSubmit} postData={postData} setPostData={setPostData} />
            <MainContents handleSubmit={handleSubmit} postData={postData} setPostData={setPostData} animalsData={animalsData} />
        </MainPage>
    );
};

const MainPage = styled.main`
    width: 100%;
    min-height: 150vh;
    background: ${({ theme }) => theme.basicWhite};
    display: flex;
    flex-direction: column;
`;

export default Main;