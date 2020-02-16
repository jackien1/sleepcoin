import * as types from "../types";

const INITIAL_STATE = {
  user: {},
  isAuthenticated: false,
  campaigns: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
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

    case types.GET_CAMPAIGNS: {
      return {
        ...state,
        campaigns: action.payload
      };
    }

    default:
      return state;
  }
};
