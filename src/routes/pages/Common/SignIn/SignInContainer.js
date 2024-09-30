import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import SignInPresenter from "./SignInPresenter";

const SignInContainer = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const SignIn = async () => {
        // 이메일과 비밀번호를 입력하지 않을 시 알림창 띄우기 (에러 처리)
        if (!email.length) {
            alert('이메일을 입력해주세요!');
            return;
        }

        if (!pw.length) {
            alert('비밀번호를 입력해주세요!');
            return;
        }

        // API 연결
        const result = await fetch('http://localhost:3333/user/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
                mode: 'no-cors',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                email,
                pw,
            }),
        });

        // 결과 받은 후 문제 없으면 메인 페이지로 이동
        const data = await result.json();

        if (data.status === 4091) {
            // 4091은 문제가 없다는 것을 뜻하므로 메인 페이지로 이동
            navigate('/');
        }

        // 문제가 있을 경우 에러 메시지를 사용자에게 알려준다.
        alert(data.message);
    }

    return (
        <SignInPresenter
            SignIn={SignIn}

            email={email}
            setEmail={setEmail}
            pw={pw}
            setPw={setPw}

            navigate={navigate}
        />
    )
}

export default SignInContainer;