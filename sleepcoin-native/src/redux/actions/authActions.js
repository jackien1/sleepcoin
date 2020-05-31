import * as types from '../types';
import { AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { SERVER_URL } from '../../../dotenv.json';

export const changeUserName = (userName) => {
    return {
        type: types.CHANGE_USER_NAME,
        payload: userName,
    };
};

export const changeAge = (age) => {
    return {
        type: types.CHANGE_AGE,
        payload: age,
    };
};

export const changeEmail = (email) => {
    return {
        type: types.CHANGE_EMAIL,
        payload: email,
    };
};

export const changePassword = (password) => {
    return {
        type: types.CHANGE_PASSWORD,
        payload: password,
    };
};

export const changePasswordConfirm = (password_confirm) => {
    return {
        type: types.CHANGE_PASSWORD_CONFIRM,
        payload: password_confirm,
    };
};

export const changeLoginEmail = (loginEmail) => {
    return {
        type: types.CHANGE_LOGIN_EMAIL,
        payload: loginEmail,
    };
};

export const changeLoginPassword = (loginPassword) => {
    return {
        type: types.CHANGE_LOGIN_PASSWORD,
        payload: loginPassword,
    };
};

export const setCurrentUser = (decoded) => {
    return {
        type: types.SET_CURRENT_USER,
        payload: decoded,
    };
};

export const handleRegister = (
    userName,
    age,
    email,
    password,
    password_confirm,
    callback
) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'post',
            url: `${SERVER_URL}/api/auth/register`,
            data: { userName, age, email, password, password_confirm },
        });

        const { token } = res.data;
        await AsyncStorage.setItem('jwtToken', token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
        callback();
    } catch (e) {
        console.log(e);
    }
};

export const handleLogin = (email, password, callback) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'post',
            url: `${SERVER_URL}/api/auth/login`,
            data: { email, password },
        });

        const { token } = res.data;
        await AsyncStorage.setItem('jwtToken', token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
        callback();
    } catch (e) {
        console.log(e);
    }
};

export const logoutUser = () => async (dispatch) => {
    await AsyncStorage.removeItem('jwtToken');
    dispatch(setCurrentUser({}));
};

export const getUser = () => async (dispatch) => {
    try {
        dispatch({ type: types.START_AUTH_REFRESH, payload: data });

        const token = await AsyncStorage.getItem('jwtToken');
        axios.defaults.headers.common['Authorization'] = token;

        const { data } = await axios({
            method: 'get',
            url: `${SERVER_URL}/api/auth/getUser`,
        });

        dispatch(setCurrentUser(data));
        dispatch({ type: types.END_AUTH_REFRESH, payload: data });
    } catch (e) {
        console.log(e);
    }
};

export const getOffers = () => async (dispatch) => {
    try {
        dispatch({ type: types.START_OFFER_REFRESH, payload: data });

        const token = await AsyncStorage.getItem('jwtToken');
        axios.defaults.headers.common['Authorization'] = token;

        const { data } = await axios({
            method: 'get',
            url: `${SERVER_URL}/api/shop/getOffers`,
        });

        dispatch({ type: types.GET_OFFERS, payload: data });
        dispatch({ type: types.END_OFFER_REFRESH, payload: data });
    } catch (e) {
        console.log(e);
    }
};
