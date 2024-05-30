import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BaseUrl = "http://3.37.129.172:8080/";

export const connectApi = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 3000,
});

// 로그인이 되어 있지 않다면 로그인 창으로 이동시키고, 그게 아니라면 현재 아이디를 반환시켜줌
export const useGetCurrentUserId = () => {
  const [currentUserId, setCurrentUserId] = useState(
    sessionStorage.getItem("currentUserId")
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUserId) {
      alert("로그인을 해주세요.");
      navigate("/signIn");
    }
  }, [currentUserId, navigate]);

  return currentUserId;
};

// 특정 사용자와 주고 받은 쪽지 목록을 조회
export const fetchConversation = async (loginUserId, partnerId) => {
  const url = `http://3.37.129.172:8080/api/message/list?loginUserId=${loginUserId}&partnerId=${partnerId}`;
  console.log("대화 목록 가져오기 URL:", url);

  try {
    const response = await connectApi.get(url);
    console.log("서버 응답:", response);
    return response.data.data;
  } catch (error) {
    if (error.response) {
      console.error("서버 응답 에러:", error.response.data);
    } else if (error.request) {
      console.error("요청에 대한 응답이 없음:", error.request);
    } else {
      console.error("요청 설정 에러:", error.message);
    }
    console.error("대화 목록 가져오기 실패:", error.config);
    return null;
  }
};
// 쪽지 전송
export const sendMessage = async (payload) => {
  try {
    const response = await connectApi.post(
      "http://3.37.129.172:8080/api/message/send",
      payload
    );
    return response.data;
  } catch (error) {
    console.error("쪽지 전송 실패:", error);
    return null;
  }
};
