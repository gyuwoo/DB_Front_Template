import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import MainPresenter from "./MainPresenter";


const MainContainer = () => {
    const navigate = useNavigate();

    const [text, setText] = useState('');
    const [isSignUp, setIsSignUp] = useState(null);
    const [isSignIn, setIsSignIn] = useState(null);

    const buttonClick = async () => {
        const result = await fetch('http://localhost:3333/test', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
                mode: 'no-cors',
                'Access-Control-Allow-Origin': '*',
            }
        });

        const data = await result.json();
        setText(data.data);
    }

    const SignUp = async () => {
        const result = await fetch('http://localhost:3333/user/signup', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
                mode: 'no-cors',
                'Access-Control-Allow-Origin': '*',
            }
        });

        const data = await result.json();
        console.log(data)
        setIsSignUp(data)
    }

    const SignIn = async () => {
        const result = await fetch('http://localhost:3333/user/signin', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                Accept: 'application/json',
                mode: 'no-cors',
                'Access-Control-Allow-Origin': '*',
            }
        });

        const data = await result.json();
        console.log(data)
        setIsSignIn(data)
    }


    return (
        <MainPresenter
            text={text}

            buttonClick={buttonClick}

            SignUp={SignUp}
            isSignUp={isSignUp}

            SignIn={SignIn}
            isSignIn={isSignIn}

            navigate={navigate}
        />
    )
}

export default MainContainer;