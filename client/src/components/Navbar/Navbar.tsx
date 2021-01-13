import React from 'react'
import logoImg from "./../../assets/logo.png";
import { Link, useHistory } from "react-router-dom";
import {  useDispatch } from 'react-redux';
import { useCookies } from "react-cookie";
import { loginReceiveFailure } from '../../redux/actions/Auth/authActions';

const Navbar = () => {
    const [cookies, setCookies] = useCookies(['Authorization']);
    const history = useHistory();
    const token = cookies.Authorization;
    const dispatch = useDispatch();

    const toHomePage = () => {
        history.push("/");
    }

    const logout = () => {
        dispatch(loginReceiveFailure());
        setCookies('Authorization', "");
        history.push("/");
    }

    return (
        <nav className="w-full mt-10 font-mono font text-primary">
            <div className="w-max mx-auto my-auto">
                <img className="cursor-pointer" onClick={toHomePage} src={logoImg} alt="logo" draggable="false"/>
                {
                    !token ? (
                        <div className="text-center mt-4">
                             <span className="mr-4 font-bold text-xl">
                                <Link to={"/login"}>Login</Link>
                            </span>
                            <span className="mr-4 font-bold text-xl">
                                <Link to={"/signup"}>Sign Up</Link>
                            </span>
                            <span className="mr-4 font-bold text-xl">
                                <Link to={"/about"}>About</Link>
                            </span>
                        </div>
                    ) :
                    (
                            <div className="text-center mt-4">
                            <span className="mr-4 font-bold text-xl">
                                <Link to={"/mypage"}>My Page</Link>
                            </span>
                            <span className="mr-4 font-bold text-xl">
                                <button className="border-0 cursor-pointer" onClick={logout}>Log Out</button>
                            </span>
                            <span className="mr-4 font-bold text-xl">
                                <Link to={"/about"}>ABOUT</Link>
                            </span>
                        </div>
                    )
                }
                
            </div>
        </nav>
    )
}

export default Navbar;
