import React, { useEffect } from 'react';
import { Formik } from "formik";
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../../redux/actions/Auth/authActions';
import FormInput from '../AuthForm/FormInput';
import FormButton from '../AuthForm/FormButton';
import styled from 'styled-components';
import { RootReducerType } from '../../../redux/reducers/rootReducer';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const message = useSelector((state: RootReducerType) => state.messageReducer);
    const currentUser = useSelector((state: RootReducerType) => state.authReducers);

    useEffect(() => {
        if(currentUser.email && currentUser.username){
            history.push("/");
        }
    })

    return (
        <div style={{width: "fit-content"}}>
            <Formik initialValues={{ email: "", password: "" }} onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true)
                // api calls
                dispatch(loginRequest(data))
                setSubmitting(false)
            }}>
                {
                ({ values, handleChange, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <FormSection>
                            <Label>이메일</Label>
                            <FormInput type="email" name="email" placeholder="   E-Mail Address" value={values.email} onChange={handleChange} />
                        </FormSection>
                        <FormSection>
                            <Label>비밀번호</Label>
                            <FormInput type="password" name="password" placeholder="   Password" value={values.password} onChange={handleChange} />
                        </FormSection>
                        <br />
                        <FormButton type="submit" disabled={isSubmitting}>Log In</FormButton>
                        <br />
                        <MessageContainer>
                            { message ? message : null}
                        </MessageContainer>
                    </form>
                )
                }
            </Formik>
        </div>
    )
}

const Label = styled.label`
    display: block;
    font-size: 18px;
    font-weight: 600;
    margin-top: 18px;
    margin-bottom: 5px;
`

const FormSection = styled.section`
    margin-bottom: 5px;
`

const MessageContainer = styled.p`
    color: #e74c3c;
    font-weight:600;
`

export default LoginForm;
