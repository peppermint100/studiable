import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import SectionDivider from '../StyleProperties/SectionDivider'
import Cafe from './Cafe'
import { requestGetAllCafe } from "./../../redux/actions/Cafe/CafeActions";
import { RootReducerType } from '../../redux/reducers/rootReducer'
import CafeDataTypeClient from '../../types/Cafe/CafeDataTypeClient'

const CafeInfo = () => {
    const dispatch = useDispatch();

    const cafeList = useSelector((state: RootReducerType) => state.cafeReducer);

    useEffect(() => {
        dispatch(requestGetAllCafe());
    }, [dispatch])

    return (
        <Container>
            <InnerContainer>
                <section>
                    <SectionDivider text="카페정보" textMargin="30px" fontSize="24px" fontWeight="600" fontColor="#000" lineColor="#AAA6A6" lineWidth="550px" lineHeight="2px" />
                </section>
                <section>
                    <CafeListContainer>
                        {!cafeList ? null
                            : (
                                <ul>
                                    { cafeList.map((cafe: CafeDataTypeClient) => {
                                        return (
                                            <li key={cafe.cafeId}>
                                                <Cafe {...cafe}/>
                                            </li>
                                        )
                                    })}
                                </ul>
                            )
                        }
                    </CafeListContainer>
                </section>
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

    & > section {
        display: flex;
        justify-content: center;
        margin: 50px 0;
    }
`

const CafeListContainer = styled.div`
    display: grid;
`


export default CafeInfo;
