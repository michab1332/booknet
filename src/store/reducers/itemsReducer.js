import { ActionTypes } from "../contants/action-types";

const initialState = {
    loading: false,
    error: null,
    books: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_ITEMS_START:
            return {
                ...state,
                loading: true,
            }
        case ActionTypes.GET_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                books: action.payload
            }
        case ActionTypes.GET_ITEMS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer