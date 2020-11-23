import { SignUpReqeustType } from './../../actions/Auth/authActions';
import { signup } from './../../../api/Auth/SignUp';
import { call, put } from "redux-saga/effects";
import { pushMessage } from '../../actions/Message/messageAction';

export function* _signUpRequest({ payload: { username, email, password, confirmPassword} }: SignUpReqeustType) {
    try{
        const res = yield call(signup, username, email, password, confirmPassword);
        yield put(pushMessage(res.data.message));
    }catch(err: any){
        yield put(pushMessage(err.message));
    }
}