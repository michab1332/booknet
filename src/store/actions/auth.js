import { ActionTypes } from "../contants/action-types"
import { auth } from "../../firebase"

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

export const registerInit = (email, password, displayName) => {
    return function (dispatch) {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName,
                })
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
        dispatch(loginStart())
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(loginSuccess(user))
            })
            .catch(err => {
                if (err) dispatch(loginFail(err.message))
            })
    }
}