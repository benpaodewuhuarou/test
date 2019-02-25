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
export const existUser = (user) => async dispatch => {
    const res = await axios.get(`/product/existUser?username=${user}`);
    dispatch({ type: types.SAMEUSER, payload: res.message })
}
export const samePass = () => ({
    type: types.SAMEPASS
})
export const signuperrormessage = () => ({
    type: types.SIGNUPERRORMESSAGE
})
export const loginerrormessage = () => ({
    type: types.LOGINERRORMESSAGE
})
export const fetchProductByType = (type) => async dispatch => {
    const res = await axios.get(`/product/getProductByType?type=${type}&from=0&size=12`);
    dispatch({ type: types.TYPE, payload: res.data })
}
export const fetchProductByID = (id) => async dispatch => {
    const res = await axios.get(`/product/getProductById?itemId=${id}`);
    dispatch({ type: types.ID, payload: res.data })
}
export const fetchIndexProduct = () => async dispatch => {
    const res = await axios.get('/product/getIndexProduct');
    dispatch({ type: types.INDEX, payload: res.data })
}
export const fetchBySearch = (value) => async dispatch => {
    const res = await axios.get(`/product/searchProduct?condition=${value}`);
    dispatch({ type: types.SEARCH, payload: res.data })
}
export const logout = () => async dispatch => {
    console.log('dispathc');
    const res = await axios.get('/auth/logout');
    dispatch({ type: types.LOGOUT, payload: res.data })
}

export const productType = () => ({
    type: types.PRODUCTTYPEERROR
})
export const productSearch = () => ({
    type: types.PRODUCTSEARCHERROR
})