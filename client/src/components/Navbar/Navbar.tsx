import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {

    const history = useHistory();
    // temp state
    const [hasAuth, setHasAuth] = useState<boolean>(false);

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
