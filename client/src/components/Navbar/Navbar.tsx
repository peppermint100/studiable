import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {  useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from '../../redux/reducers/rootReducer';
import { useCookies } from 'react-cookie';
import { meRequest } from '../../redux/actions/Auth/authActions';

const Navbar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootReducerType) => state.authReducers);

    const [cookies, setCookies] = useCookies();

    useEffect(() => {
        if(cookies.Authorization){
            const token = cookies.Authorization;
            dispatch(meRequest(token));
        }
    }, [cookies, setCookies, dispatch])

    const toLoginPage = () => {
        history.push("/login");
    }

    const toSignUpPage = () => {
        history.push("/signup");
    }

    const logout = () => {
        setCookies("Authorization", null);
    }

    return (
        <NavBarContainer>
            <NavInnerContainer>
                {
                    currentUser.email && currentUser.username ?
                    (
                        <>
                            <p>안녕하세요 {currentUser.username}님</p>
                            <button onClick={logout}>로그아웃</button>
                        </>
                    )
                    :
                    (
                        <>
                            <LoginButton onClick={toLoginPage}>LOGIN</LoginButton> 
                            <LightGrayBar />
                            <SignUpButton onClick={toSignUpPage}>SIGN UP</SignUpButton>
                        </>
                    )
                }
                
            </NavInnerContainer>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.nav`
    background-color: transparent;
    height: 50px;
`

const NavInnerContainer = styled.div`
    width: 75%;
    display: flex;
    justify-content: flex-end;
`

const LightGrayBar = styled.span`
    display: inline-block;
    width: 1.2px;
    height: 50px;
    background-color: #CCCCCC;
    margin: 0 13px;
`

const LoginButton = styled.button`
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    cursor: pointer;
`;
const SignUpButton = styled.button`
    font-weight: 600;
    font-size: 16px;
    line-height: 30px;
    cursor: pointer;
`;

export default Navbar;
