import RegisterRequest from "../../../types/Auth/RegisterRequest";
import LoginRequest from "../../../types/Auth/LoginRequest";
import LoginReceiveData from "../../../types/Auth/LoginReceiveData";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST" as const;
export const SIGN_UP_RECEIVE_SUCCESS = "SIGN_UP_RECEIVE_SUCCESS" as const;
export const SIGN_UP_RECEIVE_FAILURE = "SIGN_UP_RECEIVE_FAILURE" as const;

export const LOG_IN_REQUEST = "LOG_IN_REQUEST" as const;
export const LOG_IN_RECEIVE_SUCCESS = "LOG_IN_RECEIVE_SUCCESS" as const;
export const LOG_IN_RECEIVE_FAILURE = "LOG_IN_RECEIVE_FAILURE" as const;

export const ME_REQUEST = "ME_REQUEST" as const;

export const signUpRequest = (registerRequest: RegisterRequest) => ({
    type: SIGN_UP_REQUEST,
    loading: true,
    payload: registerRequest
})

export const signUpReceiveSuccess = (response: any) => ({
    type: SIGN_UP_RECEIVE_SUCCESS,
    loading: false,
    payload: response 
})

export const signUpReceiveFailure = (response: any) => ({
    type: SIGN_UP_RECEIVE_FAILURE,
    loading: false,
    payload: response,
})

export const loginRequest = (request: LoginRequest) => ({
    type: LOG_IN_REQUEST,
    payload: request
})

export const loginReceiveSuccess = (response: LoginReceiveData) => ({
    type: LOG_IN_RECEIVE_SUCCESS,
    payload: response
})

export const loginReceiveFailure = () => ({
    type: LOG_IN_RECEIVE_FAILURE
})

export const meRequest = () => ({
    type: ME_REQUEST
})

export type SignUpReqeustType = ReturnType<typeof signUpRequest>
export type signUpReceiveSuccessType = ReturnType<typeof signUpReceiveSuccess>
export type signUpReceiveFailureType = ReturnType<typeof signUpReceiveFailure>
export type LoginRequestType = ReturnType<typeof loginRequest>
export type LoginReceiveSuccessType = ReturnType<typeof loginReceiveSuccess>
export type LoginReceiveFailureType = ReturnType<typeof loginReceiveFailure>
export type MeRequestType = ReturnType<typeof meRequest>

export type AuthActionsType = SignUpReqeustType | signUpReceiveSuccessType | signUpReceiveFailureType | LoginRequestType | LoginReceiveSuccessType | LoginReceiveFailureType | MeRequestType; 