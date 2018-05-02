import { combineReducers } from 'redux';
import authUser from './authReducer';

export default combineReducers({
    auth: authUser
})