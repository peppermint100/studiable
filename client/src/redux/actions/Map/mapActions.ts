import { LatLngType } from "../../../types/Map";

export const SET_CURRENT_POSITION = "SET_CURRENT_POSITION" as const;

export const setCurrentPosition = (payload: LatLngType) => {
    return {
        type: SET_CURRENT_POSITION,
        payload
    }
}

type setCurrentPositionType = ReturnType<typeof setCurrentPosition>;

export type MapActionsType = setCurrentPositionType;

