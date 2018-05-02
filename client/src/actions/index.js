import * as type from './actions';
import axios from 'axios';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/current_user');
    dispatch({ type: type.FETCH_USER, user: res.data });
}