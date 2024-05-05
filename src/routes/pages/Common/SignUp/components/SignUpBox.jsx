import React from "react";

// SignInBox와 차이점 비교 바람 (state 사용법)
export const SignUpBox = ({
    userInfo,
    setUserInfo,
}) => {
    return (
        <div className="sign-box">
            <h2>회원가입</h2>
            <div className="input-box">
                <input
                    type="text"
                    placeholder="이메일을 입력하세요"
                    value={userInfo.email}
                    onChange={e => {
                        const email = e.target.value;
                        setUserInfo(prev => {
                            return { ...prev, email };
                        })
                    }}
                />
                <input
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={userInfo.pw}
                    onChange={e => {
                        const pw = e.target.value;
                        setUserInfo(prev => {
                            return { ...prev, pw };
                        })
                    }}
                />
            </div>
        </div>
    )
}