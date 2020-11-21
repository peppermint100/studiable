import RegisterRequest from "../../../types/Auth/RegisterRequest";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST" as const;
export const SIGN_UP_RECEIVE_DATA = "SIGN_UP_RECEIVE_DATA" as const;

// triggered by application
export const signUpRequest = (registerRequest: RegisterRequest) => ({
    type: SIGN_UP_REQUEST,
    payload: registerRequest
})

// triggered by saga
export const signUpReceiveData = (data: any) => ({
    type: SIGN_UP_RECEIVE_DATA,
    data
})

export type AuthActionsType = ReturnType<typeof signUpReceiveData>
export type SignUpReqeustType = ReturnType<typeof signUpRequest>