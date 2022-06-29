import { COURSES } from '../ActionType/ActionType';
const initial_state = {
    courseData: {},
};

const courseReducer = (state = initial_state, action) => {
    switch (action.type) {
        case COURSES:
            return { ...state, courseData: action.payload };
        default:
            return state;
    }
};

export default courseReducer;
