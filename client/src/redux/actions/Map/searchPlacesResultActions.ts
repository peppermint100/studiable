import { SearchPlaceResultType } from "../../../types/Map";

export const SET_SEARCH_PLACES_RESULTS = "SET_SEARCH_PLACES_RESULTS";

export const setSearchPlacesResults = (payload: Array<SearchPlaceResultType>) => {
    return {
        type: SET_SEARCH_PLACES_RESULTS,
        payload
    }
}

type setSearchPlacesResultsType = ReturnType<typeof setSearchPlacesResults>;

export type SearchPlacesResultsActionsType = setSearchPlacesResultsType;