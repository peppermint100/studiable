import React from 'react'
import styled from 'styled-components'
import MainImage from "./../../assets/main.svg";

const Jumbotron = () => {
    return (
        <Container>
            <BackgroundImage src={MainImage}/>
        </Container>
    )
}

const Container = styled.div`

`

const BackgroundImage = styled.img`

`

export default Jumbotron
