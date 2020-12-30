import React, { useEffect } from 'react';
import { Form, Field, Formik } from "formik";
import DefaultInput from '../../Input/DefaultInput';
import DefaultButton from '../../Button/DefaultButton';
import { useSelector } from 'react-redux';
import { RootReducerType } from '../../../redux/reducers/rootReducer';
import { useDispatch } from "react-redux";
import { loginRequest } from '../../../redux/actions/Auth/authActions';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
    const signUpResultMessage = useSelector((state: RootReducerType) => state.messageReducer);
    const dispatch = useDispatch();
    const currentUser = useSelector((state: RootReducerType) => state.userReducer);
    const history = useHistory();

    useEffect(() => {
        if(currentUser.email && currentUser.userId && currentUser.username){
            history.push("/");
        }
    }, [currentUser, history])

    return (
        <Formik initialValues={{
            email: "", 
            password: "", 
            }} 
            onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);
                dispatch(loginRequest(data));
                setSubmitting(false);
            }}>
                {
                    () => (
                        <Form className="flex flex-col justify-center items-center">
                            <div className="my-3">
                                <Field name="email"  width="80" height="10" type="email" placeholder="   E-MAIL Address" as={DefaultInput} />
                            </div>
                            <div className="my-3">
                                <Field name="password"  width="80" height="10" type="password" placeholder="   Password" as={DefaultInput} />
                            </div>
                            <div className="my-3">
                                <DefaultButton width="80" height="10" text="로그인" />
                            </div>
                            <pre className="font-sans text-red-600 top-0 left-0 my-1 -mt-1 font-bold">{ signUpResultMessage ? signUpResultMessage : null }</pre>
                        </Form>
                    )
                }
        </Formik>
    )
}

export default LoginForm
