import React from 'react'
import styled from 'styled-components'
import CafeDataTypeClient from '../../types/Cafe/CafeDataTypeClient'

interface Props extends CafeDataTypeClient {
  
}

const Cafe: React.FC<Props>= ({  }) => {
    return (
        <Container>
          <ImageSection>

          </ImageSection>
          <InfoSection>
            <div>

            </div>
          </InfoSection>
        </Container>
    )
}

const Container = styled.div`
  background-color: #000; 
  width: 1300px;
  height: 500px;
  margin: 0 auto;
  display: flex;
`
const ImageSection = styled.section`
  width: 45%;
  height: 100%;
  background-color: green;
`;

const InfoSection = styled.section`
  width: 55%;
  height: 100%;
  background-color: blue;
  
  
`;


export default Cafe
