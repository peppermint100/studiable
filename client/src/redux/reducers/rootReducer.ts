import { combineReducers } from "redux";
import authReducers from "./../reducers/Auth/authReducers";
import messageReducer from "./Message/messageReducer";
import cafeReducer from "./Cafe/cafeReducer";

const RootReducer = combineReducers({
    authReducers,
    messageReducer,
    cafeReducer
});

export type RootReducerType = ReturnType<typeof RootReducer>;

export default RootReducer;