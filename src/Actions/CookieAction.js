import { GET_COOKIE, COOKIE_REQUEST, DELETE_COOKIE } from '../ActionType/ActionType';
import { base_url, cookieName } from '../Config/Config';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const GetCookieAction = (callback) => {
    return dispatch => {
        dispatch({ type: COOKIE_REQUEST });
        AsyncStorage.getItem(`@${cookieName}`).then(data => {
            if (data !== null) {
                const response = JSON.parse(data)
                dispatch({ type: GET_COOKIE, payload: response });
                callback({ success: true, message: 'Success', data: response, error: false });
            }
            else {
                dispatch({ type: GET_COOKIE, payload: null });
                callback({ success: false, message: 'No cookie present', data: null, error: true });
            }
        }).catch(error => {
            dispatch({ type: GET_COOKIE, payload: error.message });
            callback({ success: false, error: true, message: error.message });
        });
    };
};

export const DeleteCookieAction = (callback) => {
    return dispatch => {
        dispatch({ type: COOKIE_REQUEST });
        AsyncStorage.removeItem(`@${cookieName}`).then(response => {
            dispatch({ type: DELETE_COOKIE, payload: response });
            callback({ success: true, message: 'Success', data: response, error: false });
        }).catch(error => {
            dispatch({ type: DELETE_COOKIE, payload: error.message });
            callback({ success: false, error: true, message: error.message, data: {} });
        });
    };
};

export const SetCookieAction = (callback) => {
    return dispatch => {
        dispatch({ type: COOKIE_REQUEST });
        AsyncStorage.removeItem(`@${cookieName}`).then(response => {
            dispatch({ type: DELETE_COOKIE, payload: response });
            callback({ success: true, message: 'Success', data: response, error: false });
        }).catch(error => {
            dispatch({ type: DELETE_COOKIE, payload: error.message });
            callback({ success: false, error: true, message: error.message, data: {} });
        });
    };
};