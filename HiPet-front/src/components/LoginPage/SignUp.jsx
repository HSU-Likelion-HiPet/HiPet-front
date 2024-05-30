import React, { useCallback, useEffect, useState } from "react";
import UserInput from "./UserInput";
import LoginPageButton from "./LoginPageButton";
import useInput from "../../hooks/useInput";
import { connectApi } from "../../api/api";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, onChangeUsername] = useInput("");
  const [id, onChangeId] = useInput("");
  const [pw, onChangePw] = useInput("");
  const [usernameError, setUsernameError] = useState("");
  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("");
  const [isRepetition, setIsRepetition] = useState(false);
  const navigate = useNavigate();

  const inputRegexs = {
    usernameReg: /^[a-zA-Z가-힣]{2,10}$/,
    idReg: /^[A-Za-z0-9]{5,15}$/g,
    pwReg:
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/g,
  };

  const validationCheck = useCallback((input, regex) => {
    if (input === "") return false;
    return regex.test(input);
  }, []);

  const onReset = useCallback(() => {
    onChangeUsername({ target: { value: "" } });
    onChangeId({ target: { value: "" } });
    onChangePw({ target: { value: "" } });
    sessionStorage.removeItem("currentUserId");
  }, [onChangeUsername, onChangeId, onChangePw]);

  useEffect(() => {
    if (validationCheck(username, inputRegexs.usernameReg) || username === "") {
      setUsernameError("");
    } else {
      setUsernameError("이름은 유효한 한글/영문 2~10자여야 합니다.");
    }
  }, [username, validationCheck, inputRegexs.usernameReg]);

  useEffect(() => {
    if (validationCheck(id, inputRegexs.idReg) || id === "") {
      if (localStorage.getItem(id)) {
        setIsRepetition(true);
        setIdError("이미 있는 아이디입니다.");
      } else {
        setIsRepetition(false);
        setIdError("");
      }
    } else {
      setIdError("아이디는 영문 또는 숫자로 5~15자여야 합니다.");
    }
  }, [id, validationCheck, inputRegexs.idReg]);

  useEffect(() => {
    if (validationCheck(pw, inputRegexs.pwReg) || pw === "") {
      setPwError("");
    } else {
      setPwError(
        "비밀번호는 최소 하나의 문자 및 하나의 숫자, 특수문자를 조합하여 8자 이상이어야 합니다."
      );
    }
  }, [pw, validationCheck, inputRegexs.pwReg]);

  const onSignUp = async (e) => {
    e.preventDefault();

    if (!username || !id || !pw) {
      alert("모든 값을 정확하게 입력해주세요");
      return;
    }

    if (usernameError || idError || pwError) {
      alert("입력값을 확인해주세요");
      return;
    }

    const payload = {
      loginId: id,
      password: pw,
      userName: username,
    };

    console.log("Payload:", payload);

    try {
      const response = await connectApi.post("api/user/signUp", payload);
      if (response.status === 201) {
        alert("회원 가입 완료");
        onReset();
        navigate("/signIn");
      }
    } catch (error) {
      console.error("회원가입 에러:", error);
      alert("회원가입에 실패하였습니다.");
    }
  };

  return (
    <>
      <UserInput
        text="이름을 입력해주세요"
        msg={usernameError}
        type="text"
        name="username"
        value={username}
        onChange={onChangeUsername}
      />
      <UserInput
        text="아이디를 입력해주세요"
        msg={idError}
        type="text"
        name="id"
        value={id}
        onChange={onChangeId}
      />
      <UserInput
        text="비밀번호를 입력해주세요"
        msg={pwError}
        type="password"
        name="pw"
        value={pw}
        onChange={onChangePw}
      />
      <LoginPageButton text={"가입하기"} onClick={onSignUp} />
    </>
  );
};

export default SignUp;
