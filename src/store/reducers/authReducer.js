import { ActionTypes } from "../contants/action-types";

const initialState = {
    loading: false,
    currentUser: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.REGISTER_START:
        case ActionTypes.LOGIN_START:
        case ActionTypes.LOGOUT_START:
            return {
                ...state,
                loading: true,
            };
        case ActionTypes.REGISTER_SUCCESS:
        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                currentUser: action.payload
            };
        case ActionTypes.REGISTER_FAIL:
        case ActionTypes.LOGIN_FAIL:
        case ActionTypes.LOGOUT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case ActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                currentUser: null,
                loading: false
            };
        default:
            return state;
    }
}

export default reducer