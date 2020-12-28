import { combineReducers } from "redux";
import authReducers from "./../reducers/Auth/authReducers";
import messageReducer from "./Message/messageReducer";
import cafeReducer from "./Cafe/cafeReducer";
import mapReducer from "./Map/mapReducer";
import searchPlacesResultsReducer from "./Map/searchPlacesResultsReducer";

const RootReducer = combineReducers({
    authReducers,
    messageReducer,
    cafeReducer,
    mapReducer,
    searchPlacesResultsReducer
});

export type RootReducerType = ReturnType<typeof RootReducer>;

export default RootReducer;