import React from "react";
import { SignInBox } from "./components/SignInBox";

import './SignIn.css';

const SignInPresenter = ({
    SignIn,

    email,
    setEmail,
    pw,
    setPw,

    navigate,
}) => {
    return (
        <div className="signin-container">
            <div className="navigate-button" onClick={() => navigate('/')}>
                메인 페이지로
            </div>

            <SignInBox
                email={email}
                setEmail={setEmail}
                pw={pw}
                setPw={setPw}
            />

            <button className="login-button" onClick={SignIn}>
                로그인
            </button>
        </div>
    )
}

export default SignInPresenter;