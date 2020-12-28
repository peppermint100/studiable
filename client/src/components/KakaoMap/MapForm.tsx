import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setCurrentPosition } from '../../redux/actions/Map/mapActions';
import { LatLngType, SearchPlaceResultType } from '../../types/Map';
// import _ from "lodash";
import { setSearchPlacesResults } from '../../redux/actions/Map/searchPlacesResultActions';
import SearchResultIndicator from './SearchResultIndicator';
import { RootReducerType } from '../../redux/reducers/rootReducer';

const { kakao } = window as any;

interface Props extends LatLngType {
    address: string;
}

const MapForm: React.FC<Props> = ({ lat, lng, address }) => {

    const searchPlacesResults = useSelector((state:RootReducerType) => state.searchPlacesResultsReducer); 
    const dispatch = useDispatch();

    const searchPlace = (places: any) => {
        places.keywordSearch(address, placesSearchCB);
    }

    function placesSearchCB(data: any, status : any, __: any) {
        if (status === kakao.maps.services.Status.OK) {
            console.log("result: ", data);
            
            const result = data as SearchPlaceResultType;

            // set store
            dispatch(setSearchPlacesResults(data));
        } 
    }

    useEffect(() => {
        const container = document.getElementById("map");
        const center = new kakao.maps.LatLng(lat, lng); 
        const places = new kakao.maps.services.Places()

        const options = {
            center,
            level: 3
        }

        const marker = new kakao.maps.Marker({
            position: center,
            draggable: true
        })

        const map = new kakao.maps.Map(container, options);

        kakao.maps.event.addListener(marker, 'dragend', function() {
            const { La , Ma } = marker.getPosition();

            const position: LatLngType = {
                lat: Ma,
                lng: La
            }

            dispatch(setCurrentPosition(position));
        });

        marker.setMap(map);
        places.setMap(map);

        searchPlace(places);
        // debounce(places)

        return () => {
            kakao.maps.event.removeListener(marker, 'dragend');
        }

    }, [lat, lng, address])

  return (
    <Container>
        {
            address.length > 0 
            ? <SearchResultIndicator results={searchPlacesResults} />
            : null
        }
        <MapContainer id="map">
        </MapContainer>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    position: relative;
`

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
`

export default MapForm;