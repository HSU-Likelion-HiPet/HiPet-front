import React, { useCallback, useState } from 'react';
import LoginPageButton from './LoginPageButton';
import useInput from '../../hooks/useInput';
import UserInput from './UserInput';
import { useNavigate } from 'react-router-dom';
import { connectApi } from '../../apis/api';


const SignIn = () => {
    const [id, onChangeId, setId] = useInput("");
    const [pw, onChangePw, setPw] = useInput("");
    const navigate = useNavigate();

    const onReset = useCallback(() => {
        setId("");
        setPw("");
    }, [setId, setPw]);

    const onLogin = async () =>{
        try{
            const response = await connectApi.post("/api/user/login", {
                "loginId" : id,
                "password" : pw
            });
            sessionStorage.setItem("currentUserId", id);
            alert(response.data.message);
            navigate("/main", {state: {id}});
        }catch(e){
            alert(e.response);
        }
    }

    return (
        <>
            <UserInput text="아이디를 입력해주세요" type="text" name="id" value={id} onChange={onChangeId} />
            <UserInput text="비밀번호를 입력해주세요" type="password" name="pw" value={pw} onChange={onChangePw} />
            <LoginPageButton text={"로그인하기"} onClick={onLogin} />
        </>
    );
};

export default SignIn;