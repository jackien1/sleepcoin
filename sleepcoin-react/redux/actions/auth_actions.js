import * as types from "../types";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const registerUser = (user, callback) => async dispatch => {
  try {
    const res = await axios({
      method: "post",
      url: "https://48162b9d.ngrok.io/api/auth/registerAdvertiser",
      data: { ...user }
    });

    const { token } = res.data;
    localStorage.setItem("jwtToken", token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
    callback();
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = (user, callback) => async dispatch => {
  try {
    const res = await axios({
      method: "post",
      url: "https://48162b9d.ngrok.io/api/auth/loginAdvertiser",
      data: { ...user }
    });

    const { token } = res.data;
    localStorage.setItem("jwtToken", token);
    const decoded = jwt_decode(token);
    dispatch(setCurrentUser(decoded));
    callback();
  } catch (err) {
    console.log(err);
  }
};

export const getUser = () => async dispatch => {
  try {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );

    const { data } = await axios({
      method: "get",
      url: "https://48162b9d.ngrok.io/api/auth/getAdvertiser"
    });

    dispatch(setCurrentUser(data));
  } catch (e) {
    console.log(e);
  }
};

export const getCampaigns = () => async dispatch => {
  try {
    axios.defaults.headers.common["Authorization"] = localStorage.getItem(
      "jwtToken"
    );

    const { data } = await axios({
      method: "get",
      url: "https://48162b9d.ngrok.io/api/shop/getCampaigns"
    });

    dispatch({ type: types.GET_CAMPAIGNS, payload: data });
  } catch (e) {
    console.log(e);
  }
};

export const setCurrentUser = decoded => {
  return {
    type: types.SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = callback => dispatch => {
  localStorage.removeItem("jwtToken");
  dispatch(setCurrentUser({}));
  callback ? callback() : null;
};
