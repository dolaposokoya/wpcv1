import { ADD_INTEREST, ADD_INTEREST_REQUEST, GET_INTEREST } from '../ActionType/ActionType';
import { apiUrl, headers } from '../Config/Config';;
import AsyncStorage from '@react-native-async-storage/async-storage';

const useWebKit = true;

export const AddInterestAction = (photoType, user_id, callback) => {
    return dispatch => {
        dispatch({ type: ADD_INTEREST_REQUEST });
        const formData = new FormData()
        formData.append("photoType", photoType);
        formData.append("user_id", user_id);
        formData.append("actionType", ADD_INTEREST);
        const requestOptions = {
            method: 'POST',
            body: formData,
            headers: headers
        }
        fetch(`${apiUrl.generalUrl}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.success === 1) {
                    dispatch({ type: ADD_INTEREST, payload: data, message: 'Success', });
                    callback({ success: data.success, message: 'Success', data: data, error: false });
                }
                else {
                    dispatch({ type: ADD_INTEREST, payload: [], message: 'Something went wrong' });
                    callback({ success: data.success, message: 'Something went wrong', data: data, error: true });
                }
            }).catch(error => {
                dispatch({ type: ADD_INTEREST, payload: [], message: error.message });
                callback({ success: false, error: true, message: error.message });
            });
    };
};

export const GetInterestAction = (callback) => {
    return dispatch => {
        dispatch({ type: ADD_INTEREST_REQUEST });
        AsyncStorage.getItem('@USER_INTEREST').then(response => {
            dispatch({ type: GET_INTEREST, payload: response });
            callback({ success: true, message: 'Success', data: response, error: false });
        }).catch(error => {
            dispatch({ type: GET_INTEREST, payload: error.message });
            callback({ success: false, error: true, message: error.message });
        });
    };
};