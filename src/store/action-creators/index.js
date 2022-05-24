export const addBook = (data) => {
    return (dispatch) => {
        dispatch({
            type: "addBook",
            payload: data
        })
    }
}

export const deleteBook = (id) => {
    return (dispatch) => {
        dispatch({
            type: "deleteBook",
            payload: id
        })
    }
}

//auth

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