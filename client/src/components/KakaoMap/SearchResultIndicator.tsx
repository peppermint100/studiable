import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setCurrentPosition } from '../../redux/actions/Map/mapActions';
import { SearchPlaceResultType } from '../../types/Map';


interface Props {
    results: Array<SearchPlaceResultType>;
}

const SearchResultIndicator:React.FC<Props> = ({ results }) => {
    const dispatch = useDispatch();
    return (
        <Container>
            <InnerContainer>
                {
                    results.length > 0 
                    
                    ? (
                        results.map((result:SearchPlaceResultType) => (
                            <li key={result.id}>
                                <PlaceName onClick={() => {
                                    const lat = parseFloat(result.y)
                                    const lng = parseFloat(result.x)
                                    console.log(lat, lng);
                                    dispatch(setCurrentPosition({ lat, lng }));
                                }}>{result.place_name}</PlaceName>
                                <AddressName>{result.address_name.substring(0, 12)}</AddressName>
                                <PlaceDetail href={result.place_url} target="_blank">상세정보</PlaceDetail>
                            </li>
                        ))
                    )
                    : null 
                }
            </InnerContainer>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    left: 1%;
    min-width: 30%;
    width: fit-content;
    z-index: 200;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: #fff;
`;

const InnerContainer = styled.ul`
    & > li {
        display: flex;
        margin-top: 2px;
    }
`;

const PlaceName = styled.p`
    font-size: 16px;
    cursor: pointer;
`;
const AddressName = styled.p`
    font-size: 13px;
    color: ${props => props.theme.colors.lightGray};
`;

const PlaceDetail = styled.a`
    padding: 10px;
    width: 50px;
    background-color: ${props=> props.theme.colors.lightGray};
    color: #fff;
    border-radius: 8px;
    font-size: 10px;
`;


export default SearchResultIndicator;
