export const logIn = () => {
    return (dispatch) => {
        dispatch({
            type: "logIn"
        })
    }
}

export const logOut = () => {
    return (dispatch) => {
        dispatch({
            type: "logOut"
        })
    }
}