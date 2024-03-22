import {
  GET_LOGIN_DATA,
  GET_LOGIN_DATA_SUCCESS,
  GET_LOGIN_DATA_FAIL,
  UPDATE_LOGIN,
} from "./constants";

export const login = () => ({
  type: GET_LOGIN_DATA,
});

export const getDataSuccess = (data) => ({
  type: GET_LOGIN_DATA_SUCCESS,
  data,
});

export const getDataFail = (data) => ({
  type: GET_LOGIN_DATA_FAIL,
  data,
});

export const updateLogin = (data) => ({
  type: UPDATE_LOGIN,
  data,
});
