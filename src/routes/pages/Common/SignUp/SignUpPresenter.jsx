import React from "react";
import { SignUpBox } from "./components/SignUpBox";

import './SignUp.css';

const SignUpPresenter = ({
    SignUp,

    userInfo,
    setUserInfo,

    navigate
}) => {
    return (
        <div className="signup-container">
            <div className="navigate-button" onClick={() => navigate('/')}>
                메인페이지로
            </div>

            {/* SignInPresenter와 차이점 비교 바람(state 간결화) */}
            <SignUpBox
                userInfo={userInfo}
                setUserInfo={setUserInfo}
            />

            <button className="signup-button" onClick={SignUp}>
                회원가입
            </button>
        </div>
    )
}

export default SignUpPresenter;