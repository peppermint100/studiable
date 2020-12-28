import React, { useEffect } from 'react'
import styled from 'styled-components';
import { LatLngType } from '../../types/Map';

const { kakao } = window as any;

interface Props extends LatLngType {
  
}

const KakaoMap: React.FC<Props> = ({ lat, lng }) => {

  useEffect(() => {
    const container = document.getElementById("map");
    const center = new kakao.maps.LatLng(lat, lng); 
    
    //add marker to use map;

    const options = {
      center,
      level: 3
    }
    const map = new kakao.maps.Map(container, options);

  }, [lat, lng])

  return (
    <Container id="map"></Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 500px;
`

export default KakaoMap;