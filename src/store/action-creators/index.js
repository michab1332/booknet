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