import { ActionTypes } from "../contants/action-types";

const getItemsStart = () => {
    return {
        type: ActionTypes.GET_ITEMS_START
    }
}

const getItemsSuccess = (books) => {
    return {
        type: ActionTypes.GET_ITEMS_SUCCESS,
        payload: books
    }
}

const getItemsFail = (err) => {
    return {
        type: ActionTypes.GET_ITEMS_FAIL,
        payload: err
    }
}

const getItemsInit = () => {
    return dispatch => {
        dispatch(getItemsStart)
        //firebase function to get items and dispatch(getItemsSuccess(books))
        //on error => dispatch(getItemsFail(err))
    }
}