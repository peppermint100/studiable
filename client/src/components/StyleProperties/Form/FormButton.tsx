import React from 'react'
import styled from 'styled-components'

const FormButton = ({...props}) => {
    return (
        <Button {...props}/>
    )
}

const Button = styled.button`
    width: 400px;
    height: 50px;
    color: #fff;
    background-color: #773300;
    text-align: center;
    font-size: 24px;
`
export default FormButton;

