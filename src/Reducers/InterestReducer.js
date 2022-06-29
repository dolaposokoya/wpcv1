import { ADD_INTEREST, GET_INTEREST } from '../ActionType/ActionType';
const initial_state = {
    interestData: [],
    response: {}
};

const InterestReducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_INTEREST:
            return { ...state, response: action.payload, message: action.message };
        case GET_INTEREST:
            return { ...state, interestData: action.payload, message: action.message };
        default:
            return state;
    }
};

export default InterestReducer;
