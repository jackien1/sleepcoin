import * as types from '../types';
import { AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { SERVER_URL } from '../../../dotenv.json';

export const trackSleep = (data, date, callback1, callback2) => async (dispatch) => {
    try {
        const token = await AsyncStorage.getItem('jwtToken');
        axios.defaults.headers.common['Authorization'] = token;

        const res = await axios({
            method: 'post',
            url: `${SERVER_URL}/api/sleep/newSleep`,
            data: { data, date },
        });

        callback1();
        callback2();
    } catch (e) {
        console.log(e);
    }
};

export const getSleep = () => async (dispatch) => {
    try {
        dispatch({ type: types.START_REFRESH, payload: data });

        const token = await AsyncStorage.getItem('jwtToken');
        axios.defaults.headers.common['Authorization'] = token;

        const { data } = await axios({
            method: 'get',
            url: `${SERVER_URL}/api/sleep/getSleep`,
        });

        dispatch({ type: types.GET_NIGHTS, payload: data });
        dispatch({ type: types.END_REFRESH, payload: data });
    } catch (e) {
        console.log(e);
    }
};
