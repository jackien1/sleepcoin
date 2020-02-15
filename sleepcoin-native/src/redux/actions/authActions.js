import * as types from "../types";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const changeUserName = userName => {
  return {
    type: types.CHANGE_USER_NAME,
    payload: userName
  };
};

export const changeAge = age => {
  return {
    type: types.CHANGE_AGE,
    payload: age
  };
};

export const changeEmail = email => {
  return {
    type: types.CHANGE_EMAIL,
    payload: email
  };
};

export const changePassword = password => {
  return {
    type: types.CHANGE_PASSWORD,
    payload: password
  };
};

export const changePasswordConfirm = password_confirm => {
  return {
    type: types.CHANGE_PASSWORD_CONFIRM,
    payload: password_confirm
  };
};

export const changeLoginEmail = loginEmail => {
  return {
    type: types.CHANGE_LOGIN_EMAIL,
    payload: loginEmail
  };
};

export const changeLoginPassword = loginPassword => {
  return {
    type: types.CHANGE_LOGIN_PASSWORD,
    payload: loginPassword
  };
};

export const handleRegister = (
  userName,
  age,
  email,
  password,
  password_confirm,
  callback
) => async dispatch => {
  try {
    const res = await axios({
      method: "post",
      url: "https://d1a44994.ngrok.io/api/auth/register",
      data: { userName, age, email, password, password_confirm }
    });

    const { token } = res.data;
    await AsyncStorage.setItem("jwtToken", token);
    callback();
  } catch (e) {
    console.log(e);
  }
};

export const handleLogin = (email, password, callback) => async dispatch => {
  try {
    const res = await axios({
      method: "post",
      url: "https://d1a44994.ngrok.io/api/auth/login",
      data: { email, password }
    });

    const { token } = res.data;
    await AsyncStorage.setItem("jwtToken", token);
    callback();
  } catch (e) {
    console.log(e);
  }
};

export const logoutUser = () => async dispatch => {
  await AsyncStorage.removeItem("jwtToken");
};
