import CafeDataTypeClient from "../../../types/Cafe/CafeDataTypeClient";

export const REQUEST_GET_ALL_CAFE = "REQUEST_GET_ALL_CAFE" as const;
export const GET_ALL_CAFE_RECEIVE_DATA = "GET_ALL_CAFE_RECEIVE_DATA" as const;

export const requestGetAllCafe = () => ({
    type: REQUEST_GET_ALL_CAFE
})

export const getAllCafeReceiveData = (payload: Array<CafeDataTypeClient>) => ({
    type: GET_ALL_CAFE_RECEIVE_DATA,
    payload
})

type requestGetAllCafeType = ReturnType<typeof requestGetAllCafe>;
type getAllCafeReceiveDataType = ReturnType<typeof getAllCafeReceiveData>;

export type CafeActionsType = requestGetAllCafeType | getAllCafeReceiveDataType;
