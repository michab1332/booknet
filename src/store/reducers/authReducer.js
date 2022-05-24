const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'logIn':
            return true;
        case 'logOut':
            return false;
        default:
            return state;
    }
}

const initialState = false

export default reducer