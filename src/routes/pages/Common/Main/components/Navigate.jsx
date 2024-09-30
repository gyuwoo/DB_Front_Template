import React from "react";
import { Link } from "react-router-dom";
import './Navigate.css';

export const Navigate = ({
    navigate
}) => {
    return (
        <div className="page-navigate">
            <Link to={'/signin'} className="navigate-button">
                로그인
            </Link>
            <div className="navigate-button" onClick={() => navigate('/signup')}>
                회원가입
            </div>
        </div>
    )
}