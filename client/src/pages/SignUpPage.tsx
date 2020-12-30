import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/Form/SignUpForm/SignUpForm';
import logoImg from "./../assets/logo.png";

const SignUpPage = () => {
    return (
        <div className="w-full h-screen bg-secondary flex justify-center items-center">
            <div className="w-max">
                <div className="flex flex-col items-center">
                    <img className="w-max" src={logoImg} alt="logo"/>
                    <span className="text-gray-500 font-bold">SIGN-UP WITH E-MAIL</span>
                    <SignUpForm />
                    <div className="w-full flex justify-around">
                        <p className="text-gray-500">이미 계정이 있으신가요?</p>
                        <span className="text-primary">
                            <Link to={"/login"}>로그인</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignUpPage;

