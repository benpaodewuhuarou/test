import { FETCH_USER } from '../actions/actions';

export default function(state = null, action) {
    switch (action.type) {
        case FETCH_USER:
            return action.user || false;
        default:
            return state;
    }

}