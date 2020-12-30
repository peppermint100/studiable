import React, { useEffect } from 'react';
import { Form, Field, Formik } from "formik";
import DefaultInput from '../../Input/DefaultInput';
import DefaultButton from '../../Button/DefaultButton';
import { signUpRequest } from '../../../redux/actions/Auth/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerType } from '../../../redux/reducers/rootReducer';
import { useHistory } from 'react-router-dom';

const SignUpForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const signUpResultMessage = useSelector((state: RootReducerType) => state.messageReducer);
    const signUpSuccessResult = useSelector((state: RootReducerType) => state.signUpReducer);
 
    useEffect(() => {
        if(signUpSuccessResult.result){
            history.push("/login");
        }
    })

    return (
        <Formik initialValues={{
            email: "", 
            username:"",
            password: "", 
            confirmPassword: ""}} 

            validate={ values => {
                const errors: Record<string, string> = {};

                if(values.password !== values.confirmPassword){
                    errors.confirmPassword = "두 비밀번호가 일치하지 않습니다."
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);
                console.log('formik submit')
                dispatch(signUpRequest(values));
                if(signUpSuccessResult.result){
                    history.push("/login");
                }
                setSubmitting(false);
            }}>
                {
                    ({ errors, handleChange, isSubmitting }) => (
                        <Form className="flex flex-col justify-center items-center">
                            <div className="my-3">
                                <Field name="email" width="80" height="10" placeholder="   E-Mail Address" onChange={handleChange} as={DefaultInput} type="email"/>
                            </div>
                            <div className="my-3">
                                <Field name="username" width="80" height="10" placeholder="   Username" onChange={handleChange} as={DefaultInput} type="text" />
                            </div>
                            <div className="my-3">
                                <Field name="password" width="80" height="10" placeholder="   Password" onChange={handleChange} as={DefaultInput} type="password" />
                            </div>
                            <div className="my-3">
                                <Field name="confirmPassword" width="80" height="10" placeholder="   Confirm Password" onChange={handleChange} as={DefaultInput} type="password" />
                                <pre className="font-sans text-red-600 top-0 left-0 -my-1 mt-1" >{ errors.confirmPassword ? errors.confirmPassword : null }</pre>
                            </div>
                            <div className="my-3">
                                <DefaultButton width="80" height="10" text="회원가입" disabled={isSubmitting} />
                            </div>
                            <pre className="font-sans text-red-600 top-0 left-0 my-1 -mt-1 font-bold" >{ signUpResultMessage ? signUpResultMessage : null }</pre>
                        </Form>
                    )
                }
        </Formik>
    )
}

export default SignUpForm;

