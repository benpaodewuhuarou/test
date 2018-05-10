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





export { authReducer, log};