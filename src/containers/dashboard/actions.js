import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  GET_NO_OF_CLAIMS,
  GET_NO_OF_CLAIMS_FAIL,
  GET_NO_OF_CLAIMS_SUCCESS,
} from "./constants";

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

export const getNoOfClaims = () => ({
  type: GET_NO_OF_CLAIMS,
});

export const getNoOfClaimsSuccess = (data) => ({
  type: GET_NO_OF_CLAIMS_SUCCESS,
  data,
});

export const getNoOfClaimsFail = (data) => ({
  type: GET_NO_OF_CLAIMS_FAIL,
  data,
});
