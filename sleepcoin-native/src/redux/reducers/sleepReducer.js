import * as types from "../types";

const INITIAL_STATE = {
  nights: [],
  refreshing: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_NIGHTS:
      return { ...state, nights: action.payload };

    case types.START_REFRESH:
      return { ...state, freshing: true };

    case types.END_REFRESH:
      return { ...state, freshing: false };

    default:
      return state;
  }
};
