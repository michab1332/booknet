import { ActionTypes } from "../contants/action-types"
import { auth, db } from "../../firebase/firebase.js"
import { doc, setDoc } from "firebase/firestore"

//register
const registerStart = () => {
    return {
        type: ActionTypes.REGISTER_START
    }
}

const registerSuccess = (user) => {
    return {
        type: ActionTypes.REGISTER_SUCCESS,
        payload: user
    }
}

const registerFail = (error) => {
    return {
        type: ActionTypes.REGISTER_FAIL,
        payload: error
    }
}

const setUserDoc = async ({ uid, name, email }) => {
    await setDoc(doc(db, "users", uid), {
        name,
        id: uid,
        email,
        addedBooks: [],
        startedBooks: [],
        likedBooks: [],
        readBooks: [],
        readPages: 0
    })
}

export const registerInit = (email, password, displayName) => {
    return function (dispatch) {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName: displayName
                })
                setUserDoc({ uid: user.uid, name: displayName, email: user.email, })
                dispatch(registerSuccess(user))
            })
            .catch(err => {
                if (err) dispatch(registerFail(err.message))
            })
    }
}

//login
const loginStart = () => {
    return {
        type: ActionTypes.LOGIN_START
    }
}

const loginSuccess = (user) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: user
    }
}

const loginFail = (error) => {
    return {
        type: ActionTypes.LOGIN_FAIL,
        payload: error
    }
}

export const loginInit = (email, password) => {
    return function (dispatch) {
        dispatch(loginStart());
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(loginSuccess(user));
            })
            .catch(err => {
                if (err) dispatch(loginFail(err.message));
            })
    }
}

//logout
const logoutStart = () => {
    return {
        type: ActionTypes.LOGOUT_START
    }
}

const logoutSuccess = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    }
}

const logoutFail = (error) => {
    return {
        type: ActionTypes.LOGOUT_FAIL,
        payload: error
    }
}

export const logoutInit = () => {
    return function (dispatch) {
        dispatch(logoutStart())
        auth
            .signOut()
            .then((response) => {
                dispatch(logoutSuccess())
            })
            .catch(err => {
                if (err) dispatch(logoutFail(err))
            })
    }
}