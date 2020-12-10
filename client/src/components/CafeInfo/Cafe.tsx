import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components'
import CafeDataTypeClient from '../../types/Cafe/CafeDataTypeClient'
import defaultCafeImage from "./../../assets/default2.jpg";

interface Props extends CafeDataTypeClient {
   
}

const Cafe: React.FC<Props>= ({ imageLocation, cafeName, cafeId, cafeScore, cafeLocation, cafeFeatures  }) => {

  const history = useHistory();

  const toCafeDetailPage = (cafeId: number) => {
    history.push(`/cafe/${cafeId}`);
  }

    return (
        <Container>
          <ImageSection>
            <img src={imageLocation ? imageLocation : defaultCafeImage} />
          </ImageSection>
          <InfoSection>
            <InnerInfoSection onClick={() => {
              toCafeDetailPage(cafeId)
            }}>
              <InfoText>
                <BigLabel>
                  매장 : 
                </BigLabel>
                <p style={{fontSize: "24px"}}>
                 { cafeName }
                </p>
              </InfoText>
              <InfoText>
                <Label>
                  주소 : 
                </Label>
                <p>
                 { cafeLocation }
                </p>
              </InfoText>
              <InfoText>
                <Label>
                  별점 : 
                </Label>
                <p>
                  { cafeScore }
                </p>
              </InfoText>
              <InfoText>
                <Label>
                  편의시설 : 
                </Label>
                <p>
                  { cafeFeatures }
                </p>
              </InfoText>
            </InnerInfoSection>
          </InfoSection>
        </Container>
    )
}

const Container = styled.div`
  background-color: #fff; 
  width: 350px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
  margin: 2%;

  &:hover {
    transition: transform .2s ease;
    transform: translateY(-2%);
  }
`

const ImageSection = styled.section`
  width: 100%;
  height: 50%;
  background-color: green;

  & > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const InfoSection = styled.section`
  width: 100%;
  height: 60%;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerInfoSection = styled.ul`
  /* background-color: yellow; */
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  li:first-child {
    margin-bottom: 10px;
  }
`


const InfoText = styled.li`
  display: flex;
  font-size: 18px;
  font-weight: 600;

  & > p {
    font-size: 18px;
  }
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  color: #773300;
  display: inline;
  width: 100px;
`;


const BigLabel = styled(Label)`
  font-size: 24px;
`


export default Cafe
