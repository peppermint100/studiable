import { combineReducers } from "redux";
import authReducers from "./../reducers/Auth/authReducers";

const RootReducer = combineReducers({
    authReducers
});

export default RootReducer;