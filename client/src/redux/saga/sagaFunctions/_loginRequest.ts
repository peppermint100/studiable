import { loginReceiveFailure, loginReceiveSuccess } from './../../actions/Auth/authActions';
import { LoginRequestType } from "../../actions/Auth/authActions";
import { pushMessage } from '../../actions/Message/messageAction';
import * as Effects from "redux-saga/effects";
import { login } from '../../../api/Auth/Login';

const call: any = Effects.call;
const put: any = Effects.put;

export function* _loginRequest({ payload }: LoginRequestType) {
    try{
        const res = yield call(login, payload);
        if(res.error){
                yield put(pushMessage(res.message));
                yield put(loginReceiveFailure());
            }else{
                const { email, username, userId } = res;
                yield put(loginReceiveSuccess({email, username, userId}));
            }
    }catch(err){
        console.error(err);
    }
}