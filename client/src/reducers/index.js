import { combineReducers } from 'redux';
import { authReducer, log, product, error, errormessage, logout, search } from './Reducer';
import { routerReducer } from "react-router-redux";

export default combineReducers({
    auth: authReducer,
    log: log,
    product: product,
    error: error,
    errormessage: errormessage,
    logout: logout,
    search: search
        // user: user

})