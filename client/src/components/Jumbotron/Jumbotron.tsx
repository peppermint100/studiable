import React from 'react'
import styled from 'styled-components'
import MainImage from "./../../assets/main.svg";
import MainText from "./../../assets/mainText.svg";
import SearchBar from './SearchBar';

const Jumbotron = () => {
    return (
        <Container>
            <BackgroundImage src={MainImage}/>
            <MainTextImage src={MainText} />
            <SearchBarSection>
                <SearchBar />
            </SearchBarSection>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    height: 500px;
`

const BackgroundImage = styled.img`
    position: absolute;
    z-index: 100;
`

const MainTextImage = styled.img`
    z-index: 200;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const SearchBarSection = styled.section`
    z-index: 300;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export default Jumbotron;
