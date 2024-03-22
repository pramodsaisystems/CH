import produce from "immer";

import {
  GET_LOGIN_DATA,
  GET_LOGIN_DATA_SUCCESS,
  GET_LOGIN_DATA_FAIL,
  UPDATE_LOGIN,
} from "./constants";

const initialState = {
  loading: false,
  loggedIn: false,
};

const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_LOGIN_DATA:
        draft.loading = true;
        break;
      case GET_LOGIN_DATA_SUCCESS:
        draft.loading = false;
        draft.loggedIn = true;
        break;
      case GET_LOGIN_DATA_FAIL:
        draft.loading = false;
        break;
      case UPDATE_LOGIN:
        draft.loggedIn = true;
        break;
      default:
        return draft;
    }
  });

export default loginReducer;
