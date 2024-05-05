import React from "react";
import './SignInBox.css'

// SignInBox와 차이점 비교 바람 (state 사용법)
export const SignInBox = ({
    email,
    setEmail,
    pw,
    setPw,
}) => {
    return (
        <div className="sign-box">
            <h2>로그인</h2>
            <div className="input-box">
                <input
                    type="text"
                    placeholder="이메일을 입력해주세요"
                    onChange={e => { setEmail(e.target.value) }}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요"
                    onChange={e => { setPw(e.target.value) }}
                    value={pw}
                />
            </div>
        </div>
    )
}