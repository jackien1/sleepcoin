import * as types from "../types";

const INITIAL_STATE = {
  userName: "",
  age: "",
  email: "",
  password: "",
  password_confirm: "",
  loginEmail: "",
  loginPassword: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CHANGE_USER_NAME:
      return { ...state, userName: action.payload };

    case types.CHANGE_AGE:
      return { ...state, age: action.payload };

    case types.CHANGE_EMAIL:
      return { ...state, email: action.payload };

    case types.CHANGE_PASSWORD:
      return { ...state, password: action.payload };

    case types.CHANGE_PASSWORD_CONFIRM:
      return { ...state, password_confirm: action.payload };

    case types.CHANGE_LOGIN_EMAIL:
      return { ...state, loginEmail: action.payload };

    case types.CHANGE_LOGIN_PASSWORD:
      return { ...state, loginPassword: action.payload };

    default:
      return state;
  }
};
