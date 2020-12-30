import { combineReducers } from "redux";
import userReducer from "./Auth/userReducer";
import messageReducer from "./Message/messageReducer";
import cafeReducer from "./Cafe/cafeReducer";
import mapReducer from "./Map/mapReducer";
import searchPlacesResultsReducer from "./Map/searchPlacesResultsReducer";
import signUpReducer from "./Auth/signUpReducer";

const RootReducer = combineReducers({
    userReducer,
    messageReducer,
    cafeReducer,
    mapReducer,
    searchPlacesResultsReducer,
    signUpReducer
});

export type RootReducerType = ReturnType<typeof RootReducer>;

export default RootReducer;