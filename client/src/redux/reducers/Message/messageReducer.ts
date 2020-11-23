import { MessageActionType, PUSH_MESSAGE } from "../../actions/Message/messageAction";

const initialState:string | null = null 

export default (state: any = initialState, action: MessageActionType) => {
    switch(action.type){
        case PUSH_MESSAGE:
            return action.payload;
        default:
            return state;
    }
}

