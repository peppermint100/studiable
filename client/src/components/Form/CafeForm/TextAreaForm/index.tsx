import React from 'react'
import styled from 'styled-components'

interface StyleProps {
    width: string;
}

interface Props extends StyleProps {
    label: string;
} 

const TextAreaForm: React.FC<Props> = ({ label, ...rest }) => {
    return (
        <Container>
            <Label>{ label }</Label>
            <Input {...rest}/>
        </Container>
    )
}

const Container = styled.div`
`

const Label = styled.label`
    display: block;
    font-size: 18px;
    font-weight: 600;
    margin-top: 18px;
    margin-bottom: 5px;
    color: ${props => props.theme.colors.primary};
`

const Input = styled.textarea<StyleProps>`
    width: calc(${props => props.width} - 6px); 
    height: 400px;
    border: 1px solid ${props => props.theme.colors.lightGray};
    outline: ${props => props.theme.colors.lightGray};
    background-color: #fff;
    resize: none;

    &::placeholder {
        font-size: 18px;
        color: #AAA6A6;
    }

    &:focus {
        border: 2px solid ${props => props.theme.colors.primary};
        width: calc(${props => props.width} - 8px); 
        height: 398px;
    }
`

export default TextAreaForm;


