import React, { useEffect } from 'react'
import ImageAddButton from '../../StyleProperties/ImageAddButton/ImageAddButton'
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from '../../../redux/reducers/rootReducer';
import styled from 'styled-components';
import DefaultFormInput from '../../Form/CafeForm/DefaultFormInput';
import TextAreaForm from '../../Form/CafeForm/TextAreaForm';
import ArrayForm from '../../Form/CafeForm/ArrayForm';
import { setCurrentPosition } from '../../../redux/actions/Map/mapActions';
import MapForm from '../../KakaoMap/MapForm';
import ImageAddForm from '../../Form/CafeForm/ImageAddForm';

const CafeCreationForm = () => {

    // get current user from private route?
    const currentUser = useSelector((state: RootReducerType) => state.authReducers);
    const currentLatLng = useSelector((state: RootReducerType) => state.mapReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition( position => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                dispatch(setCurrentPosition({lat, lng}));
            })
        }
    }, [currentUser, dispatch ])
    
    return (
        <Formik
            initialValues={
                {
                    cafeName:"", // default form
                    cafeContent:"", // textarea form with editor
                    cafeFeatures:[], // icon, array style add form
                    americanoPrice: 0, // default form
                    cafeLocation:"", // google map form
                    file: "", // image form
                    user:currentUser,
                    address: ""
                }
            }
            onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true)
                console.log('cafe creation form data : ', data);
                let imageData = new FormData();
                imageData.append("file", data.file)
                console.log("creation form image data: ", imageData);
                setSubmitting(false)
            }}
        >
            {
                ({ values, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue}) =>
               
                (
                    <Form>
                        <Container>
                            <section style={{ alignSelf: "center", marginTop: "50px", position: "relative", minHeight: "200px" }}>
                                <ImageAddButton />
                                <Field as={ImageAddForm} name="file" type="file" onChange={(e: any) => {
                                    setFieldValue("file", e.currentTarget.files[0]);
                                }}/>
                            </section>
                            <section>
                                <Field as={DefaultFormInput} name="cafeName" label="카페이름" width="100%" autoComplete="off"/>
                            </section>
                            <section>
                                <Field as={TextAreaForm} name="cafeContent" label="상세정보" width="100%" height="400px" autoComplete="off"/>
                            </section>
                            <section>
                                <Field as={ArrayForm} name="cafeFeatures" cafeFeatures={values.cafeFeatures} />
                            </section>
                             <section>
                                <Field as={DefaultFormInput} name="americanoPrice" label="아메리카노 가격" type="number" width="10%" height="30px" autoComplete="off"/>
                            </section>
                            <section>
                                <Field as={DefaultFormInput} name="address" label="주소" width="100%" height="30px" autoComplete="off"/>
                                <MapForm lat={currentLatLng.lat} lng={currentLatLng.lng} address={values.address} />
                            </section>
                            <SubmitButton type="submit">카페 등록하기</SubmitButton>
                        </Container>
                    </Form>
                )
        }

        </Formik>
    )
}

const Container = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    & > section {
        margin: 10px 0;
    }
`

const SubmitButton = styled.button`
    width:100%;
    height: 60px;
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
    text-align: center;
    font-size: 24px;
    border-radius: 7px;
    margin: 20px 0;
    cursor: pointer;
`

export default CafeCreationForm;
