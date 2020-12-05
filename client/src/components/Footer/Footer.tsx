import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Container>
            <InnerContainer>
                <FooterText>{"WWW.CSP.COM Ⓒ CONDÉNAST ASIA PACIFIC. INC. ALL RIGHTS RESERVED.  CSF.COM KOREA IS OPERATED BY LEE&JO."}</FooterText>
            </InnerContainer>
        </Container>
    )
}

const Container = styled.footer`
   height: 284px;
   background-color: #773300;
   opacity: .8;
`

const InnerContainer = styled.div`
    width: 50%;
    height: 100%;
    margin: 0 auto;
    position: relative;
`

const FooterText = styled.p`
    text-align: center;
    position: absolute;
    bottom: 10%;
    color: #fff;
`

export default Footer
