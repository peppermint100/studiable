import { TakeableChannel } from "redux-saga";
import {  takeLatest } from "redux-saga/effects";

import { LOG_IN_REQUEST, SIGN_UP_REQUEST } from "../actions/Auth/authActions";
import { _loginRequest } from "./sagaFunctions/_loginRequest";
import { _signUpRequest } from "./sagaFunctions/_signUpRequest";

export default function* saga() {
    yield takeLatest(SIGN_UP_REQUEST as unknown as TakeableChannel<unknown>, _signUpRequest);
    yield takeLatest(LOG_IN_REQUEST as unknown as TakeableChannel<unknown>, _loginRequest);
}