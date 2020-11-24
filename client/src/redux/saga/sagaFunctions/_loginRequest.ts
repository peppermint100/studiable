import { call, put } from "redux-saga/effects";
import { login } from "../../../api/Auth/Login";
import { loginReceiveData, LoginRequestType } from "../../actions/Auth/authActions";
import { pushMessage } from '../../actions/Message/messageAction';

export function* _loginRequest({ payload: { email, password } }: LoginRequestType) {
    try{
        const res = yield call(login, email, password);
        yield put(pushMessage(res.data?.message));
        yield put(loginReceiveData(res.data));
    }catch(err: any){
        yield put(pushMessage(err.message));
    }
}