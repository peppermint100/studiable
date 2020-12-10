import { call, put } from "redux-saga/effects";
import getAuth from "../../../api/Auth/getAuth";
import { loginReceiveData } from "../../actions/Auth/authActions";
import { pushMessage } from '../../actions/Message/messageAction';

export function* _meRequest({payload: { token }}: { payload: any }) {
    try{
        const res = yield call(getAuth, token);
        yield put(loginReceiveData(res));
    }catch(err: any){
        yield put(loginReceiveData({ token : "" , email: "", username: "", userId: ""}));
        yield put(pushMessage(err.message));
    }
}