import { COMPETITION, COMPETITION_REQUEST, COMPETITION_DETAILS } from '../ActionType/ActionType';
const initial_state = {
    competitionData: {},
    competitionDetailsData: {},
};

const userReducer = (state = initial_state, action) => {
    switch (action.type) {
        case COMPETITION:
            return { ...state, competitionData: action.payload };
        case COMPETITION_DETAILS:
            return { ...state, competitionDetailsData: action.payload };
        default:
            return state;
    }
};

export default userReducer;
