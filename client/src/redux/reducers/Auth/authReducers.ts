import { AuthActionsType, LOG_IN_RECEIVE_DATA, SIGN_UP_RECEIVE_DATA } from './../../actions/Auth/authActions';

interface CurrentUser {
    email: string;
    username: string;
}
const initialState: CurrentUser | any = {}
const authReducer = (state: CurrentUser | any = initialState, action:AuthActionsType) => {
    switch(action.type){
        case LOG_IN_RECEIVE_DATA: 
            const { payload : { email, username, userId }} = action;
            return { email, username, userId };
        case SIGN_UP_RECEIVE_DATA:
            return action.payload;
        default:
            return state;
    }
}

export default authReducer;