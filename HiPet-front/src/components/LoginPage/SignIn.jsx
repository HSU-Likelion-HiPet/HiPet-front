import React, { useCallback, useState } from 'react';
import LoginPageButton from './LoginPageButton';
import useInput from '../../hooks/useInput';
import UserInput from './UserInput';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
    const [id, onChangeId, setId] = useInput("");
    const [pw, onChangePw, setPw] = useInput("");
    const navigate = useNavigate();

    const onReset = useCallback(() => {
        setId("");
        setPw("");
    }, [setId, setPw]);

    const onLogin = (e) => {
        e.preventDefault();

        if (!id || !pw) {
            alert("모든 값을 정확하게 입력해주세요.");
            return;
        }

        const storedId = localStorage.getItem(id);
        if (!storedId) {
            alert("아이디를 확인해주세요.");
            return;
        }
        else {
            const storedPassword = JSON.parse(storedId).pw;
            if (pw !== storedPassword) {
                alert("비밀번호를 확인해주세요.");
                return;
            }
            else {
                alert("로그인 성공!");
                onReset();
                navigate("/main")
            }
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