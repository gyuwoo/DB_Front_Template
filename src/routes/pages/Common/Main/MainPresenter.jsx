import React from "react";
import { BackConnectTest } from "./components/BackConnectTest";
import { DBConnectTest } from "./components/DBConnectTest";
import { Navigate } from "./components/Navigate";

import './Main.css';

const MainPresenter = ({
    text,

    buttonClick,

    SignUp,
    isSignUp,

    SignIn,
    isSignIn,

    navigate,
}) => {
    return (
        <div className="main-container">

            <Navigate
                navigate={navigate}
            />
        </div>
    )
}

export default MainPresenter;