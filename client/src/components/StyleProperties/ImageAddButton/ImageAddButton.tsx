import React from 'react'
import styled from 'styled-components';
import ImageAddLogo from "./../../../assets/imageadd.svg";

const ImageAddButton = () => {
    return (
        <Img src={ImageAddLogo} alt="imageaddbutton" />
    )
}

const Img = styled.img`
    cursor: pointer;
    position: absolute;
    width: 200px;
`

export default ImageAddButton;
