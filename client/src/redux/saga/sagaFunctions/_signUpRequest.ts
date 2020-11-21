import { SignUpReqeustType } from './../../actions/Auth/authActions';
import { signup } from './../../../api/Auth/SignUp';
import { call } from "redux-saga/effects";

export function* _signUpRequest({ payload: { username, email, password, confirmPassword} }: SignUpReqeustType) {
    try{
        const data = yield call(signup, username, email, password, confirmPassword);
        console.log(data);
    }catch(err: any){
        console.log(err.message);
    }
}