import React, { useState, useEffect } from "react";

import { Route, Routes, useFetcher } from 'react-router-dom';

import { Main, SignIn, SignUp } from "./pages";

const Router = () => {

    const test = useState(0); 

    useEffect(() => {

    }, []);

    return (
        <div className="app">
            <Routes>
                <Route
                    path="/"
                    element={<Main />}
                />
                <Route
                    path="/signin"
                    element={<SignIn />}
                />
                <Route
                    path="/signup"
                    element={<SignUp />}
                />
            </Routes>
        </div>
    )
}

export default Router;