import { combineReducers } from "redux";
import authReducers from "./../reducers/Auth/authReducers";
import messageReducer from "./Message/messageReducer";

const RootReducer = combineReducers({
    authReducers,
    messageReducer
});

export type RootReducerType = ReturnType<typeof RootReducer>;

export default RootReducer;