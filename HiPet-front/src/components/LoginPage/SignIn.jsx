import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import UserInput from "./UserInput";
import LoginPageButton from "./LoginPageButton";
import useInput from "../../hooks/useInput";
import { connectApi } from "../../api/api";

const SignIn = () => {
  const [id, onChangeId] = useInput("");
  const [pw, onChangePw] = useInput("");
  const navigate = useNavigate();

  const onReset = useCallback(() => {
    onChangeId({ target: { value: "" } });
    onChangePw({ target: { value: "" } });
  }, [onChangeId, onChangePw]);

  const onLogin = async (e) => {
    e.preventDefault();

    if (!id || !pw) {
      alert("모든 값을 정확하게 입력해주세요.");
      return;
    }

    try {
      const response = await connectApi.post("api/user/login", {
        loginId: id,
        password: pw,
      });
      if (response.status === 200) {
        alert("로그인 성공!");
        sessionStorage.setItem("currentUserId", id);
        onReset();
        navigate("/main");
      }
    } catch (error) {
      console.error("로그인 에러:", error);
      alert("로그인에 실패하였습니다.");
    }
  };

  return (
    <>
      <UserInput
        text="아이디를 입력해주세요"
        type="text"
        name="id"
        value={id}
        onChange={onChangeId}
      />
      <UserInput
        text="비밀번호를 입력해주세요"
        type="password"
        name="pw"
        value={pw}
        onChange={onChangePw}
      />
      <LoginPageButton text={"로그인하기"} onClick={onLogin} />
    </>
  );
};

export default SignIn;
