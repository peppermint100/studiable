import { AuthActionsType,  SIGN_UP_RECEIVE_SUCCESS, SIGN_UP_RECEIVE_FAILURE } from './../../actions/Auth/authActions';

interface ISignUpResultState {
    result: any;
    loading: boolean | null;
    error: any;
}

const initialState: ISignUpResultState = {
    result: null,
    loading: null,
    error: null
}


const signUpReducer = (state: ISignUpResultState = initialState, action:AuthActionsType) => {
    switch(action.type){
        case SIGN_UP_RECEIVE_SUCCESS:
            const { payload : { result, loading, error }} = action;
            return { loading, error: null, result};
        case SIGN_UP_RECEIVE_FAILURE:
            return { 
                loading, 
                error,
                result
        };
        default:
            return state;
    }
}

export default signUpReducer;