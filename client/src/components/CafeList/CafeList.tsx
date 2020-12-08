import React from 'react'
import styled from 'styled-components'
import SectionDivider from '../StyleProperties/SectionDivider'

const CafeList = () => {
    return (
        <Container>
            <InnerContainer>
                <SectionDivider />
            </InnerContainer>
        </Container>
    )
}

const Container = styled.div`
    background-color: #F2EBE6;
`

const InnerContainer = styled.div`
    width: 80%;
    margin: 0 auto;
`
export default CafeList
