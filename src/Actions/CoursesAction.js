import { COURSES, COURSES_REQUEST } from '../ActionType/ActionType';
import { apiUrl,headers } from '../Config/Config';



export const CourseAction = (callback) => {
    return dispatch => {
        dispatch({ type: COURSES_REQUEST });
        const formData = new FormData()
        formData.append("actionType", COURSES);
        const requestOptions = {
            method: 'POST',
            body: formData,
            headers: headers
        }
        fetch(`${apiUrl.generalUrl}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success === 1) {
                    dispatch({ type: COURSES, payload: data });
                    callback({ success: data.success, message: 'Success', data: data, error: false });
                }
                else {
                    dispatch({ type: COURSES, payload: data });
                    callback({ success: data.success, message: 'Something went wrong', data: data, error: true });
                }
            })
            .catch(error => {
                dispatch({ type: COURSES, payload: error.message });
                callback({
                    error: true, message: error.message
                });
            });
    };
};