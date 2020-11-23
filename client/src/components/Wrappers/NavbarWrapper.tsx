import React from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar/Navbar'

interface Props {
    children: any;
}

const NavbarWrapper: React.FC<Props> = ({ children }) => {
    return (
        <Container>
           <Navbar />
           <RestContainer>
                { children } 
           </RestContainer>
        </Container>
    )
}

const Container = styled.div`
    background-color: #F2EBE6;
`
const RestContainer = styled.div`
    min-width: 100vw;
    min-height: calc(100vh - 50px); // white space need between any +/-
`

export default NavbarWrapper
