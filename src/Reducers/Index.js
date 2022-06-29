import CompetitionReducer from './CompetitionReducer';
import CoursesReducer from './CoursesReducer';
import CookieReducer from './CookieReducer';
import UserReducer from './UserReducer';
import InterestReducer from './InterestReducer';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    CompetitionReducer,
    CoursesReducer,
    CookieReducer,
    UserReducer,
    InterestReducer
});

export default allReducer;
