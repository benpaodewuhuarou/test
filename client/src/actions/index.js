import axios from 'axios';
import * as types from "./types";

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/current_user');
    dispatch({ type: types.FETCH_USER, payload: res.data });
};
export const signup = () => ({
    type: types.SIGN_UP,
    payload: 'sign'
});
export const login = () => ({
    type: types.LOG_IN,
    payload: 'log'
})

export const logclose = () => ({
    type: types.LOG_CLOSE,
    payload: false
})

export const signclose = () => ({
    type: types.SIGN_CLOSE,
    payload: false
})