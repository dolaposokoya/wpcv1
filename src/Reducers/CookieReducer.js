import { GET_COOKIE, DELETE_COOKIE } from '../ActionType/ActionType';
const initial_state = {
    cookie: {},
};

const cookieReducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_COOKIE:
            return { ...state };
        case DELETE_COOKIE:
            return { ...state, cookie: action.payload };
        default:
            return state;
    }
};

export default cookieReducer;
