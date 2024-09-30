import React from "react";
import './BackConnectTest.css';

export const BackConnectTest = ({
    buttonClick,
    text,
}) => {
    return (
        <div className="back-connect-test">
            <button onClick={buttonClick}>데이터 요청</button>

            <div>요청한 데이터: {text}</div>
        </div>
    )
}