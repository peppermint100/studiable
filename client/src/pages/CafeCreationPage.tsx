import React from 'react'
import styled from 'styled-components';
import CafeCreationForm from '../components/Cafe/CafeForm/CafeCreationForm';
import NavbarFooterWrapper from '../components/Wrappers/NavbarFooterWrapper';

const CafeCreationPage = () => {
    return (
        <NavbarFooterWrapper>
            <InnerContainer>
                <CafeCreationForm />
            </InnerContainer>
        </NavbarFooterWrapper>
    )
}

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;

`

export default CafeCreationPage;
