import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BaseUrl = "http://3.37.129.172:8080";

export const connectApi = axios.create({
    baseURL: BaseUrl,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 3000,
})

//로그인이 되어 있지 않다면 로그인 창으로 이동시키고, 그게 아니라면 현재 아이디를 반환시켜줌
export const useGetCurrentUserId = () => {
    const [currentUserId, setCurrentUserId] = useState(sessionStorage.getItem("currentUserId"));
    const navigate = useNavigate();
    if(!currentUserId){
        navigate("/");
        alert("로그인을 해주세요.");
        return;
    }
    return currentUserId;
}

//유저 데이터 받아오기
export const useGetUserData = (userId) => {
    const [result, setResult] = useState({});

    const fetchData = async () => {
        try {
            const response = await connectApi.get(`api/user/${userId}`);
            setResult(response.data.data);
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        fetchData();
    }, [userId]);

    return result;
};
