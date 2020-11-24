import RegisterRequest from "../../../types/Auth/RegisterRequest";
import LoginRequest from "../../../types/Auth/LoginRequest";
import LoginReceiveData from "../../../types/Auth/LoginReceiveData";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST" as const;
export const SIGN_UP_RECEIVE_DATA = "SIGN_UP_RECEIVE_DATA" as const;
export const LOG_IN_REQUEST = "LOG_IN_REQUEST" as const;
export const LOG_IN_RECEIVE_DATA = "LOG_IN_RECEIVE_DATA" as const;
export const ME_REQUEST = "ME_REQUEST" as const;

// triggered by application
export const signUpRequest = (registerRequest: RegisterRequest) => ({
    type: SIGN_UP_REQUEST,
    payload: registerRequest
})

// triggered by saga
export const signUpReceiveData = (response: any) => ({
    type: SIGN_UP_RECEIVE_DATA,
    payload: response 
})

export const loginRequest = (request: LoginRequest) => ({
    type: LOG_IN_REQUEST,
    payload: request
})

export const loginReceiveData = (response: LoginReceiveData) => ({
    type: LOG_IN_RECEIVE_DATA,
    payload: response
})

export const meRequest = (token: string) => ({
    type: ME_REQUEST,
    payload: token
})

export type signUpReceiveDataType = ReturnType<typeof signUpReceiveData>
export type SignUpReqeustType = ReturnType<typeof signUpRequest>
export type LoginRequestType = ReturnType<typeof loginRequest>
export type LoginReceiveDataType = ReturnType<typeof loginReceiveData>
export type MeRequestType = ReturnType<typeof meRequest>

export type AuthActionsType = SignUpReqeustType | signUpReceiveDataType | LoginRequestType | LoginReceiveDataType | MeRequestType; 