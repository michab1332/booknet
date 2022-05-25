import { ActionTypes } from "../contants/action-types";

const initialState = {
    loading: false,
    currentUser: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.REGISTER_START:
            return {
                ...state,
                loading: true,
            };
        case ActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            };
        case ActionTypes.REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case ActionTypes.LOGIN_START:
            return {
                ...state,
                loading: true,
            }
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            }
        case ActionTypes.LOGIN_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default reducer