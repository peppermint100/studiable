import { SearchPlaceResultType } from "../../../types/Map";
import { SearchPlacesResultsActionsType, SET_SEARCH_PLACES_RESULTS } from "../../actions/Map/searchPlacesResultActions";

const initialState: Array<SearchPlaceResultType> = []; 

const searchPlacesResultsType = (state: Array<SearchPlaceResultType> = initialState, action: SearchPlacesResultsActionsType) => {
    switch(action.type){
        case SET_SEARCH_PLACES_RESULTS:
            return action.payload;
        default: return state;
    }
}

export default searchPlacesResultsType;