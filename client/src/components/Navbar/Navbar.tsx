import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import getAuth from '../../api/Auth/getAuth';
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from 'react-redux';
import { meRequest } from '../../redux/actions/Auth/authActions';
import { RootReducerType } from '../../redux/reducers/rootReducer';

const Navbar = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootReducerType) => state.authReducers);
    // temp state

    const [cookies, setCookies] = useCookies();

    useEffect(() => {
        if(cookies){
            const token = cookies.Authorization;
            dispatch(meRequest(token));
        }
    })

    const toLoginPage = () => {
        history.push("/login");
    }

    const toSignUpPage = () => {
        history.push("/signup");
    }

    return (
        <NavBarContainer>
            <NavInnerContainer>
                <LoginButton onClick={toLoginPage}>LOGIN</LoginButton> 
                <LightGrayBar />
                <SignUpButton onClick={toSignUpPage}>SIGN UP</SignUpButton>
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
