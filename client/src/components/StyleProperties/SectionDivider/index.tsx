import React from 'react'
import styled from 'styled-components';

interface Props {
    text?: string;
    lineColor?: string;
    lineWidth?: string;
    fontSize?: string;
    fontColor?: string;
    fontWeight?: string;
    dividerWidth?: string;
    textMargin?: string;
    lineHeight?: string;
}

const SectionDivider: React.FC<Props> = (props) => {
    return (
            <FormBreaker {...props}>
                <Text fontWeight={props.fontWeight}>{props.text}</Text>
            </FormBreaker>
    )
}

interface TextStyleProps {
   fontWeight?: string; 
}

const Text = styled.span<TextStyleProps>`
    font-weight: ${props => props.fontWeight ? props.fontWeight : "500"};
    text-align: center;
`

const FormBreaker = styled.div<Props>`
    width: ${props => props.dividerWidth ? props.dividerWidth : "fit-content"};  
    color: ${props => props.fontColor ? props.fontColor: "#AAA6A6"};
    font-size: ${props => props.fontSize ? props.fontSize: "16px"};
    display: flex;
    align-items: center;
    &::before{
        content: "";
        display: block;
        width : ${props => props.lineWidth ? props.lineWidth : "100px"};
        height: ${props => props.lineHeight ? props.lineHeight : "1px"}; 
        background-color: ${props => props.lineColor ? props.lineColor: "#AAA6A6"};
        line-height: ${props => props.fontSize ? props.fontSize: "16px"};
        margin-right: ${props => props.textMargin ? props.textMargin : "10px"};
    }    
    &::after{
        content: "";
        display: inline-block;
        width : ${props => props.lineWidth ? props.lineWidth : "100px"};
        height: ${props => props.lineHeight ? props.lineHeight : "1px"}; 
        background-color: ${props => props.lineColor ? props.lineColor: "#AAA6A6"};
        line-height: ${props => props.fontSize ? props.fontSize: "16px"};
        margin-left: ${props => props.textMargin ? props.textMargin : "10px"};
    }    
`

export default SectionDivider;
