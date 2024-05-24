import React, { useCallback, useEffect, useState } from 'react';
import UserInput from './UserInput';
import LoginPageButton from './LoginPageButton';
import useInput from '../../hooks/useInput';

const SignUp = () => {
    const [username, onChangeUsername, setUsername] = useInput("");
    const [id, onChangeId, setId] = useInput("");
    const [pw, onChangePw, setPw] = useInput("");
    const [errorMessage, setErrorMessage] = useState({
        usernameError: "",
        idError: "",
        pwError: "",
    });

    const { usernameError, idError, pwError } = errorMessage;
    const [isRepetition, setIsRepetition] = useState(false);

    const inputRegexs = {
        usernameReg: /^[a-zA-Z가-힣]{2,10}$/,
        idReg: /^[A-Za-z0-9]{5,15}$/g,
        pwReg: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/g
    };

    const validationCheck = useCallback(
        (input, regex) => {
            let isValidate = false;
            if (input === "") {
                isValidate = false;
            } else if (regex.test(input)) {
                isValidate = true;
            } else {
                isValidate = false;
            }
            return isValidate;
        },
        [username, id, pw]
    );

    const onReset = useCallback(() => {
        setUsername("");
        setId("");
        setPw("");
    }, [setUsername, setId, setPw]);

    useEffect(() => {
        if (validationCheck(username, inputRegexs.usernameReg) || username === "") {
            setErrorMessage({
                ...errorMessage,
                usernameError: "",
            });
        } else {
            setErrorMessage({
                ...errorMessage,
                usernameError: "이름은 유효한 한글/영문 2~10자여야 합니다.",
            });
        }
    }, [username]);

    useEffect(() => {
        if (validationCheck(id, inputRegexs.idReg) || id === "") {
            if (localStorage.getItem(id)) {
                setIsRepetition(true);
                setErrorMessage({
                    ...errorMessage,
                    idError: "이미 있는 아이디입니다.",
                });
            } else {
                setIsRepetition(false);
                setErrorMessage({
                    ...errorMessage,
                    idError: "",
                });
            }
        } else {
            setErrorMessage({
                ...errorMessage,
                idError: "아이디는 영문 또는 숫자로 5~15자여야 합니다.",
            });
        }
    }, [id]);

    useEffect(() => {
        if (validationCheck(pw, inputRegexs.pwReg) || pw === "") {
            setErrorMessage({
                ...errorMessage,
                pwError: "",
            });
        } else {
            setErrorMessage({
                ...errorMessage,
                pwError: "비밀번호는 최소 하나의 문자 및 하나의 숫자, 특수문자를 조합하여 8자 이상이어야 합니다.",
            });
        }
    }, [pw]);

    const onSignUp = (e) => {
        e.preventDefault();

        if (!username || !id || !pw) {
            alert("모든 값을 정확하게 입력해주세요");
            return;
        }

        if (usernameError) {
            alert("사용자 이름이 형식에 맞지 않습니다");
            return;
        } else if (idError) {
            if (isRepetition) {
                alert("아이디 중복을 확인해주세요.");
                return;
            }
            alert("아이디가 형식에 맞지 않습니다");
            return;
        } else if (pwError) {
            alert("비밀번호 형식이 일치하지 않습니다.");
            return;
        }

        alert("회원 가입 완료");
        localStorage.setItem(id, JSON.stringify({ username, pw }));
        onReset();
    };

    return (
        <>
        {/* 주소, 닉네임, 추가 */}
            <UserInput text="이름을 입력해주세요" msg={usernameError} type="text" name="username" value={username} onChange={onChangeUsername} />
            <UserInput text="아이디를 입력해주세요" msg={idError} type="text" name="id" value={id} onChange={onChangeId} />
            <UserInput text="비밀번호를 입력해주세요" msg={pwError} type="password" name="pw" value={pw} onChange={onChangePw} />
            <LoginPageButton text={"가입하기"} onClick={onSignUp} />
        </>
    );
};

export default SignUp;
