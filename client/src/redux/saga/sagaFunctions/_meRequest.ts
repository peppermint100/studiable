import { loginReceiveFailure, loginReceiveSuccess } from './../../actions/Auth/authActions';
import { me } from './../../../api/Auth/me';
import * as Effects from "redux-saga/effects";

const call: any = Effects.call;
const put: any = Effects.put;

export function* _meRequest() {
    try{
        const res = yield call(me);
        if(res.error){
            yield put(loginReceiveFailure());
        }else{
            const { email, username, userId } = res;
            yield put(loginReceiveSuccess({email, username, userId}));
        }
    }catch(err){
        console.error(err);
    }
}