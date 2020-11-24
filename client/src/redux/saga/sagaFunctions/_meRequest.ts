import { call, put } from "redux-saga/effects";
import getAuth from "../../../api/Auth/getAuth";
import { loginReceiveData, LoginRequestType } from "../../actions/Auth/authActions";
import { pushMessage } from '../../actions/Message/messageAction';

export function* _meRequest({payload: { token }}: { payload: any }) {
    try{
        const res = yield call(getAuth, token);
        yield put(loginReceiveData(res));
    }catch(err: any){
        yield put(pushMessage(err.message));
    }
}