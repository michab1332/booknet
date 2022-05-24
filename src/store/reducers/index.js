import { combineReducers } from "redux";
import booksReducer from './booksReducer';
import authReducer from './authReducer'

const reducers = combineReducers({
    books: booksReducer,
    userAuth: authReducer
})

export default reducers;