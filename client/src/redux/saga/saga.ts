import { TakeableChannel } from "redux-saga";
import { call, put, takeLatest, takeEvery, take } from "redux-saga/effects";

import { SIGN_UP_REQUEST } from "../actions/Auth/authActions";
import { _signUpRequest } from "./sagaFunctions/_signUpRequest";

export default function* saga() {
    yield takeLatest(SIGN_UP_REQUEST as unknown as TakeableChannel<unknown>, _signUpRequest);
}