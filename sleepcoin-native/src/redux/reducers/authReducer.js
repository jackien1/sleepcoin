import * as types from "../types";

const INITIAL_STATE = {
  userName: "",
  age: "",
  email: "",
  password: "",
  password_confirm: "",
  loginEmail: "",
  loginPassword: "",
  user: "",
  isAuthenticated: false,
  refreshing: false,
  offers: [],
  offerRefreshing: false
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

    case types.START_AUTH_REFRESH:
      return { ...state, freshing: true };

    case types.END_AUTH_REFRESH:
      return { ...state, freshing: false };

    case types.GET_OFFERS:
      return { ...state, offers: action.payload };

    case types.START_OFFER_REFRESH:
      return { ...state, offerRefreshing: true };

    case types.END_OFFER_REFRESH:
      return { ...state, offerRefreshing: false };

    case types.SET_CURRENT_USER: {
      return {
        ...state,
        isAuthenticated: !(
          Object.keys(action.payload).length === 0 &&
          action.payload.constructor === Object
        ),
        user: action.payload
      };
    }

    default:
      return state;
  }
};
