import * as types from "../types";
import axios from "axios";
import jwt_decode from "jwt-decode";

export const registerUser = (user, callback) => async dispatch => {
  try {
    const res = await axios({
      method: "post",
      url: "https://e034fc0d.ngrok.io/api/auth/registerAdvertiser",
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
      url: "http://localhost:5000/api/auth/loginAdvertiser",
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
