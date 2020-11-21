import { AuthActionsType, SIGN_UP_RECEIVE_DATA, SIGN_UP_REQUEST } from './../../actions/Auth/authActions';

const initialState:any = {}
export default (state: any = initialState, action:AuthActionsType) => {
    switch(action.type){
        case SIGN_UP_RECEIVE_DATA:
            return action.data;
        default:
            return state;
    }
}