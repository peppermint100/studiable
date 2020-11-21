import React from 'react';
import { Formik } from "formik";
import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../redux/actions/Auth/authActions';

const SignUpForm = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <Formik initialValues={{ username: "", email: "", password: "", confirmPassword: "" }} onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true)
                // api calls
                dispatch(signUpRequest(data))
                setSubmitting(false)
            }}>
                {
                ({ values, handleChange, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="text" name="username" value={values.username} onChange={handleChange} />
                        </div>
                        <div>
                            <input type="email" name="email" value={values.email} onChange={handleChange} />
                        </div>
                        <div>
                            <input type="password" name="password" value={values.password} onChange={handleChange} />
                        </div>
                        <div>
                            <input type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} />
                        </div>
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </form>
                )
                }
            </Formik>
        </div>
    )
}

export default SignUpForm;
