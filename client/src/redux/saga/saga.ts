import { TakeableChannel } from "redux-saga";
import { takeLatest } from "redux-saga/effects";

import { LOG_IN_REQUEST, ME_REQUEST, SIGN_UP_REQUEST } from "../actions/Auth/authActions";
import { REQUEST_GET_ALL_CAFE } from "../actions/Cafe/CafeActions";
import { _getAllCafe } from "./sagaFunctions/_getAllCafe";
import { _loginRequest } from "./sagaFunctions/_loginRequest";
import { _meRequest } from "./sagaFunctions/_meRequest";
import { _signUpRequest } from "./sagaFunctions/_signUpRequest";

export default function* saga() {
    yield takeLatest(LOG_IN_REQUEST as unknown as TakeableChannel<unknown>, _loginRequest);
    yield takeLatest(SIGN_UP_REQUEST as unknown as TakeableChannel<unknown>, _signUpRequest);
    yield takeLatest(ME_REQUEST as unknown as TakeableChannel<unknown>, _meRequest);
    yield takeLatest(REQUEST_GET_ALL_CAFE as unknown as TakeableChannel<unknown>, _getAllCafe);
}