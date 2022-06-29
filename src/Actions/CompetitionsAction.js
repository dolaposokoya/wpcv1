import { COMPETITION, COMPETITION_REQUEST, COMPETITION_DETAILS } from '../ActionType/ActionType';
import { headers, apiUrl } from '../Config/Config';



export const CompetitionAction = (callback) => {
    return dispatch => {
        dispatch({ type: COMPETITION_REQUEST });
        const formData = new FormData()
        formData.append('actionType', COMPETITION)
        formData.append("offset", 1);
        const requestOptions = {
            method: 'POST',
            body: formData,
            headers: headers,
            redirect: 'follow'
        }
        fetch(`${apiUrl.competitionUrl}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success === 1) {
                    dispatch({ type: COMPETITION, payload: data });
                    callback({ success: data.success, message: 'Success', data: data, error: false });
                }
                else {
                    dispatch({ type: COMPETITION, payload: data });
                    callback({ success: data.success, message: 'Something went wrong', data: [], error: true });
                }
            })
            .catch(error => {
                dispatch({ type: COMPETITION, payload: [], message: error.message });
                callback({
                    error: true, message: error.message, data: []
                });
            });
    };
};

export const GetCompetitionDetailsAction = (comp_code, callback) => {
    return dispatch => {
        console.log('comp_code', comp_code)
        dispatch({ type: COMPETITION_REQUEST });
        if (comp_code === '') {
            dispatch({ type: COMPETITION_DETAILS, payload: data });
            callback({ success: 0, message: 'Competition Id is empty', data: {}, error: true });
        }
        else {
            const formData = new FormData()
            formData.append('actionType', COMPETITION_DETAILS)
            formData.append("comp_code", comp_code);
            const requestOptions = {
                method: 'POST',
                body: formData,
                headers: headers,
                redirect: 'follow'
            }
            fetch(`${apiUrl.competitionUrl}`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.success === 1) {
                        dispatch({ type: COMPETITION_DETAILS, payload: data });
                        callback({ success: data.success, message: 'Success', data: data, error: false });
                    }
                    else {
                        dispatch({ type: COMPETITION, payload: data });
                        callback({ success: data.success, message: 'Something went wrong', data: {}, error: true });
                    }
                })
                .catch(error => {
                    dispatch({ type: COMPETITION, payload: {}, message: error.message });
                    callback({
                        error: true, message: error.message, data: {}
                    });
                });
        }
    };
};