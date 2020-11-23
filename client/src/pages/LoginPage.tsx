import React from 'react'
import styled from 'styled-components'
import LoginForm from '../components/Login/LoginForm'
import Logo from '../components/StyleProperties/Logo/Logo'
import NavbarWrapper from '../components/Wrappers/NavbarWrapper'

const LoginPage = () => {
    return (
        <NavbarWrapper>
            <Center>
                <Content>
                    <Logo />
                    <FormBreaker>LOG IN WITH E-MAIL</FormBreaker>
                    <LoginForm />
                </Content>
            </Center>
        </NavbarWrapper>
    )
}

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 50px);
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FormBreaker = styled.div`
    color: #AAA6A6;
    font-size: 18px;
    display: flex;
    align-items: center;
    &::before{
        content: "";
        display: inline-block;
        width: 95px;
        height: 1px;
        background-color: #AAA6A6;
        line-height: 18px;
        margin-right: 10px;
    }    
    &::after{
        content: "";
        display: inline-block;
        width: 95px;
        height: 1px;
        background-color: #AAA6A6;
        line-height: 18px;
        margin-left: 10px;
    }    
`

export default LoginPage

