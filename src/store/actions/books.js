import { ActionTypes } from "../contants/action-types";
import { auth, db } from "../../firebase/firebase"
import { getDocs, query, collection, where } from "firebase/firestore"

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

const getBooksByCategory = async (categories) => {
    const q = query(collection(db, "books"), where("categories", "array-contains-any", [...categories]));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id + " => " + doc.data().name)
    })
}

export const getItemsInit = () => {
    return dispatch => {
        dispatch(getItemsStart())
        try {
            getBooksByCategory(["fantasy"])
        }
        catch (err) {
            dispatch(getItemsFail())
        }
    }
}