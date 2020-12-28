import React from 'react'
import styled from 'styled-components'

interface StyleProps {
    width: string;
    height: string;
}

interface Props extends StyleProps {
    label: string;
    ref?: React.Ref<any>;
    onChange?: () => void;
    value?: any;
} 

const DefaultFormInput: React.FC<Props> = ({ label, onChange, value, ...rest }) => {
    return (
        <Container>
            <Label>{ label }</Label>
            <Input value={value} onChange={onChange} {...rest}/>
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

const Input = styled.input<StyleProps>`
    width: calc(${props => props.width} - 2px); 
    height: ${props => props.height ? props.height : "50px"};  
    border: 1px solid #aaa6a6;
    background-color: #fff;
    &::placeholder {
        font-size: 18px;
        color: #AAA6A6;
    }
    &:focus {
        border:2px solid ${props => props.theme.colors.primary};
        height: calc(${props => props.height ? props.height : "50px"} -  2px);  
        width: calc(${props => props.width} - 4px); 
    }
`

export default DefaultFormInput;
