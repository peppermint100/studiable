import React from 'react'
import styled from 'styled-components'
import SignUpForm from '../components/SignUp/SignUpForm'
import Logo from '../components/StyleProperties/Logo/Logo'
import SectionDivider from '../components/StyleProperties/SectionDivider'
import NavbarWrapper from '../components/Wrappers/NavbarWrapper'

const SignUpPage = () => {
    return (
        <NavbarWrapper>
            <Center>
                <Content>
                    <Logo />
                    <SectionDivider lineWidth="110px" text="SIGN UP WITH E-MAIL"  />
                    <SignUpForm />
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

export default SignUpPage
