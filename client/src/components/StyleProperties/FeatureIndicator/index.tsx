import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styled from 'styled-components';

interface Props extends StyleProps {
    icon: IconProp;
    label: string;
    onClick?: () => void;
}

interface StyleProps {
    isSelected: boolean | undefined;
}

const FeatureIndicator:React.FC<Props> = ({ icon, label, onClick, isSelected }) => {
     return (
        <Container onClick={onClick} isSelected={isSelected}>
            <span>
                <FontAwesomeIcon icon={icon} color="#fff" size="2x" />
            </span>
            <label htmlFor={label}>
                {label}
            </label>
        </Container>
    )
}

const Container = styled.div<StyleProps>`
    width: 130px;
    height: 60px;
    margin: 0 auto;
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    ${props => typeof props.isSelected === "undefined" || !props.isSelected ? 
        `
        background-color: ${props.theme.colors.silver};
        `
        :
        `
        background-color: ${props.theme.colors.primary};
        `
    }

    
    & > label {
        color: #fff;
    }

    & > span {

    }
`

export default FeatureIndicator;
