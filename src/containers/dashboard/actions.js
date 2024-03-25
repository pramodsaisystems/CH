import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  GET_NO_OF_CLAIMS,
  GET_NO_OF_CLAIMS_FAIL,
  GET_NO_OF_CLAIMS_SUCCESS,
  GET_NO_OF_PATIENTS,
  GET_NO_OF_PATIENTS_SUCCESS,
  GET_NO_OF_PATIENTS_FAIL,
  GET_STATUS,
  GET_STATUS_SUCCESS,
  GET_STATUS_FAIL,
  GET_CLAIMS_BY_PROVIDER,
  GET_CLAIMS_BY_PROVIDER_SUCCESS,
  GET_CLAIMS_BY_PROVIDER_FAIL,
  GET_CLAIMS_BY_PAYER,
  GET_CLAIMS_BY_PAYER_SUCCESS,
  GET_CLAIMS_BY_PAYER_FAIL,
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

export const getNoOfPatients = () => ({
  type: GET_NO_OF_PATIENTS,
});

export const getNoOfPatientsSuccess = (data) => ({
  type: GET_NO_OF_PATIENTS_SUCCESS,
  data,
});

export const getNoOfPatientsFail = (data) => ({
  type: GET_NO_OF_PATIENTS_FAIL,
  data,
});

export const getStatus = () => ({
  type: GET_STATUS,
});

export const getStatusSuccess = (data) => ({
  type: GET_STATUS_SUCCESS,
  data,
});

export const getStatusFail = (data) => ({
  type: GET_STATUS_FAIL,
  data,
});

export const getClaimsByProvider = () => ({
  type: GET_CLAIMS_BY_PROVIDER,
});

export const getClaimsByProviderSuccess = (data) => ({
  type: GET_CLAIMS_BY_PROVIDER_SUCCESS,
  data,
});

export const getClaimsByProviderFail = (data) => ({
  type: GET_CLAIMS_BY_PROVIDER_FAIL,
  data,
});

export const getClaimsByPayer = () => ({
  type: GET_CLAIMS_BY_PAYER,
});

export const getClaimsByPayerSuccess = (data) => ({
  type: GET_CLAIMS_BY_PAYER_SUCCESS,
  data,
});

export const getClaimsByPayerFail = (data) => ({
  type: GET_CLAIMS_BY_PAYER_FAIL,
  data,
});
