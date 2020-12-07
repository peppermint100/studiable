import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {

    return (
        <Container>
            <FontAwesomeIcon icon={faSearch} color={"#925C33"}  style={{ position: "absolute", height: "60px", lineHeight: "60px", width: "20px", marginLeft: "20px" }} />
            <SearchBarInput placeholder="#wifi #주차장 #아메리카노" />
        </Container>
    )
}

const Container = styled.div`
    position: relative;
`
const SearchBarInput = styled.input`
    width: 1200px;
    height: 60px;
    background-color: #fff;
    border-radius: 20px;
    border: 2px solid #925C33;
    color: #925C33;
    padding-left: 50px;
    ::placeholder {
        color: #925C33;
        font-weight: 600;
        padding-left :90px;
        line-height: 50px;
    }
;
`

export default SearchBar
