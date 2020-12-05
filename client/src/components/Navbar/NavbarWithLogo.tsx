import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {  useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from '../../redux/reducers/rootReducer';
import { useCookies } from 'react-cookie';
import { meRequest } from '../../redux/actions/Auth/authActions';
import Logo from '../StyleProperties/Logo/Logo';

const NavbarWithLogo = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootReducerType) => state.authReducers);

    const [cookies, setCookies] = useCookies();

    useEffect(() => {
        if(cookies.Authorization){
            const token = cookies.Authorization;
            dispatch(meRequest(token));
        }
    }, [cookies, setCookies])

    const toLoginPage = () => {
        history.push("/login");
    }

    const toSignUpPage = () => {
        history.push("/signup");
    }
    
    const toMyPage = () => {
        history.push("/mypage");
    }

    return (
        <NavBarContainer>
            <NavInnerContainer>
                <NavigationSection>
                {
                    currentUser.email && currentUser.username ?
                    (
                            <HelloUserNav>안녕하세요 
                                <UserName onClick={toMyPage}>{currentUser.username}</UserName>
                            님</HelloUserNav>
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
                </NavigationSection>
            </NavInnerContainer>
                <LogoSection>
                    <Logo />
                </LogoSection>
        </NavBarContainer>
    )
}

const NavBarContainer = styled.nav`
    background-color: transparent;
    height: 300px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`

const NavInnerContainer = styled.div`
    width: 75%;
    display: flex;
    justify-content: flex-end;
`

const NavigationSection = styled.section``;
const LogoSection = styled.section`
    margin-top: 50px;
    display: flex;
    justify-content: center;
`;

const HelloUserNav = styled.p`
    text-align: end;
    margin-top: 15px;
`

const UserName = styled.span`
    font-weight: 600;
    color: #773300;
    margin-left: 8px;
    cursor: pointer;
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

export default NavbarWithLogo;

