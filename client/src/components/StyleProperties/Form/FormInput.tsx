import React from 'react'
import styled from 'styled-components'


const FormInput = ({ ...props}) => {
    return (
        <>
            <Input {...props}/>
        </>
    )
}

const Input = styled.input`
    width: 400px;
    height: 50px;
    border: 1px solid #AAA6A6;
    background-color: #fff;
    &::placeholder {
        font-size: 18px;
        color: #AAA6A6;
    }
    &:focus {
        border: 2px solid #773300;
        margin: -1px -1px;
    }
`
export default FormInput;
