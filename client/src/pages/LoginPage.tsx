import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Form/LoginForm/LoginForm';
import logoImg from "./../assets/logo.png";

const LoginPage = () => {
    return (
        <div className="w-full h-screen bg-secondary flex justify-center items-center">
            <div className="w-max">
                <div className="flex flex-col items-center">
                    <img className="w-max" src={logoImg} alt="logo"/>
                    <span className="text-gray-500 font-bold">LOG-IN WITH E-MAIL</span>
                    <LoginForm />
                    <div className="w-full flex justify-around">
                        <p className="text-gray-500">계정이 아직 없으신가요?</p>
                        <span className="text-primary">
                            <Link to={"/signup"}>회원가입</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoginPage

