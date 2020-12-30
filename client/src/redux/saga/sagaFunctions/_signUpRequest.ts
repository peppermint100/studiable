import { signUp } from './../../../api/Auth/signUp';
import { signUpReceiveFailure, signUpReceiveSuccess, SignUpReqeustType } from './../../actions/Auth/authActions';
import { call, put } from "redux-saga/effects";
import { pushMessage } from '../../actions/Message/messageAction';

export function* _signUpRequest({ payload }: SignUpReqeustType) {
        try{
            const res = yield call(signUp , payload);
            if(res.error){
                yield put(pushMessage(res.message));
                yield put(signUpReceiveFailure({result: null, error: res.error, loading: false}));
            }else{
                yield put(pushMessage(res.message));
                yield put(signUpReceiveSuccess({ result: res, loading: false, error: null}));
            }
        }catch(err){
            console.error(err);
        }
}