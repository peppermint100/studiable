import CafeDataTypeClient from "../../../types/Cafe/CafeDataTypeClient";
import { CafeActionsType, GET_ALL_CAFE_RECEIVE_DATA } from "../../actions/Cafe/CafeActions";

const initialState: Array<CafeDataTypeClient> = [];

const cafeReducer = (state: Array<CafeDataTypeClient> = initialState, action: CafeActionsType) => {
    switch(action.type){
        case GET_ALL_CAFE_RECEIVE_DATA:
            return action.payload;

        default: return state;
    }
}

export default cafeReducer;