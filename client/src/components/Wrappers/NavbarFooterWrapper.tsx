import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import NavbarWithLogo from '../Navbar/NavbarWithLogo'

interface Props {
    children: any;
}

const NavbarFooterWrapper: React.FC<Props> = ({ children }) => {
    return (
        <Container>
           <NavbarWithLogo />
           <RestContainer>
                { children } 
           </RestContainer>
                <Footer />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    `

const RestContainer = styled.div`
    min-width: 100vw;
    min-height: calc(100vh - 300px); // white space need between any +/-
`



export default NavbarFooterWrapper

