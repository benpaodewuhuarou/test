import { combineReducers } from 'redux';
import { authReducer, log, user } from './Reducer';
import { routerReducer } from "react-router-redux";

export default combineReducers({
    auth: authReducer,
    log: log,
    // user: user

})