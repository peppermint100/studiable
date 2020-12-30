import { LOG_IN_RECEIVE_SUCCESS, LOG_IN_RECEIVE_FAILURE } from './../../actions/Auth/authActions';
import { CurrentUserType } from './../../../types/Auth/CurrentUserType';
import { AuthActionsType } from '../../actions/Auth/authActions';

const initialState: CurrentUserType = {
    email: null,
    username: null,
    userId: null
}


const userReducer = (state: CurrentUserType = initialState, action:AuthActionsType) => {
    switch(action.type){
        case LOG_IN_RECEIVE_SUCCESS:
            return action.payload;
        case LOG_IN_RECEIVE_FAILURE:
            return initialState;
        default:
            return state;
    }
}

export default userReducer;