import { GET_USER, GET_QUOTA } from '../ActionType/ActionType';
const initial_state = {
    userData: {},
    userQuota: {}
};

const userReducer = (state = initial_state, action) => {
    switch (action.type) {
        case GET_USER:
            return { ...state, userData: action.payload, message: action.message };
        case GET_QUOTA:
            return { ...state, userQuota: action.payload, message: action.message };
        default:
            return state;
    }
};

export default userReducer;
