import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAIL } from "./constants";

export const getData = () => ({
  type: GET_DATA,
});

export const getDataSuccess = (data) => ({
  type: GET_DATA_SUCCESS,
  data,
});

export const getDataFail = (data) => ({
  type: GET_DATA_FAIL,
  data,
});
