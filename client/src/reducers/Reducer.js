import * as types from '../actions/types';
import { logclose } from '../actions/index';

const authReducer = (state = null, action) => {
    switch (action.type) {
        case types.FETCH_USER:
            return action.payload.username || false;
        default:
            return state;
    }
}

const log = (state = true, action) => {
    switch (action.type) {
        case types.LOG_IN:
            return action.payload;
        case types.SIGN_UP:
            return action.payload;
        case types.SIGN_CLOSE:
            return action.payload;
        case types.LOG_CLOSE:
            return action.payload;
        default:
            return state;
    }
}
const product = (state = null, action) => {
    switch (action.type) {
        case types.ID:
            return action.payload;
        case types.TYPE:
            return action.payload;
        case types.INDEX:
            return action.payload;
        default:
            return state;
    }
}
const search = (state = null, action) => {
    switch (action.type) {
        case types.SEARCH:
            return action.payload;
        default:
            return state;
    }
}
const error = (state = true, action) => {
    switch (action.type) {
        case types.SAMEUSER:
            return action.payload;
        default:
            return state;
    }
}
const errormessage = (state = null, action) => {
    switch (action.type) {
        case types.SAMEPASS:
            return 'password should be same';
        case types.SIGNUPERRORMESSAGE:
            return 'This username already exists, please change other one';
        case types.LOGINERRORMESSAGE:
            return 'The password or username is wrong';
        case types.PRODUCTTYPEERROR:
            return 'There isn\'t any item in this type';
        case types.PRODUCTSEARCHERROR:
            return 'NO RESULT';
        default:
            return state;
    }
}
const logout = (state = false, action) => {
        switch (action.type) {
            case types.LOGOUT:
                return action.payload;
            default:
                return state;
        }
    }
    // const user = (state = {
    // 	isWaiting: false,
    // 	authenticated: false,
    // 	username: ""
    // }, action) => {
    // 	switch(action.type) {
    // 		case types.MANUAL_LOGIN_USER:
    // 			return Object.assign({}, state, { isWaiting: true })
    // 		case types.LOGIN_SUCCESS_USER:
    // 			return Object.assign({}, state, { isWaiting: false, authenticated: true, email: action.data.email })
    // 		case types.LOGIN_ERROR_USER:
    // 			return Object.assign({}, state, { isWaiting: false, authenticated: false })
    // 		case types.SIGNUP_USER:
    // 			return Object.assign({}, state, { isWaiting: true })
    // 		case types.SIGNUP_SUCCESS_USER:
    // 			return Object.assign({}, state, { isWaiting: false, authenticated: true })
    // 		case types.SIGNUP_ERROR_USER:
    // 			return Object.assign({}, state, { isWaiting: false, authenticated: false })
    // 		case types.LOGOUT_USER:
    // 			return Object.assign({}, state, { isWaiting: true })
    // 		case types.LOGOUT_SUCCESS_USER:
    // 			return Object.assign({}, state, { isWaiting: false, authenticated: false, email: "" })
    // 		case types.LOGOUT_ERROR_USER:
    // 			return Object.assign({}, state, { isWaiting: false, authenticated: true })
    // 		case types.REGISTER_USER:
    // 			return Object.assign({}, state, { isWaiting: true })
    // 		case types.REGISTER_SUCCESS_USER:
    // 			return Object.assign({}, state, { isWaiting: false })
    // 		case types.REGISTER_ERROR_USER:
    // 			return Object.assign({}, state, { isWaiting: false })
    // 		default:
    // 			return state
    // 	}
    // }





export { authReducer, log, product, error, errormessage, logout, search };