import { LatLngType } from "../../../types/Map";
import { MapActionsType, SET_CURRENT_POSITION } from "../../actions/Map/mapActions";

const initialState: LatLngType = {
    lat: 37.566536,
    lng: 126.977966
}; 

const mapReducer = (state: LatLngType = initialState, action: MapActionsType) => {
    switch(action.type){
        case SET_CURRENT_POSITION:
            // if(!action.payload){
            //     return initialState;
            // }
            return action.payload;
        default: return state;
    }
}

export default mapReducer;