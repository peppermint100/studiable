import React from 'react'
import styled from 'styled-components'
import LoginForm from '../components/Login/LoginForm'
import Logo from '../components/StyleProperties/Logo/Logo'
import SectionDivider from '../components/StyleProperties/SectionDivider'
import NavbarWrapper from '../components/Wrappers/NavbarWrapper'

const LoginPage = () => {
    return (
        <NavbarWrapper>
            <InnerContainer>
                <Content>
                    <Logo />
                    <SectionDivider lineWidth="110px" text="LOG IN WITH-E-MAIL"  />
                    <LoginForm />
                </Content>
            </InnerContainer>
        </NavbarWrapper>
    )
}

const InnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 50px);
`;

const Content = styled.div`
    width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default LoginPage

