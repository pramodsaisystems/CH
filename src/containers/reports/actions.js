import {
  GET_REPORT_DATA,
  GET_REPORT_DATA_SUCCESS,
  GET_REPORT_DATA_FAIL,
  GET_CLAIMS_REPORT,
  GET_CLAIMS_REPORT_SUCCESS,
  GET_CLAIMS_REPORT_FAIL,
  GET_PAYMENTS_REPORT,
  GET_PAYMENTS_REPORT_SUCCESS,
  GET_PAYMENTS_REPORT_FAIL,
  GET_PATIENTS_REPORT,
  GET_PATIENTS_REPORT_SUCCESS,
  GET_PATIENTS_REPORT_FAIL,
  GET_YEARS_REPORT,
  GET_YEARS_REPORT_SUCCESS,
  GET_YEARS_REPORT_FAIL,
} from "./constants";

export const getReport = () => ({
  type: GET_REPORT_DATA,
});

export const getReportSuccess = (data) => ({
  type: GET_REPORT_DATA_SUCCESS,
  data,
});

export const getReportFail = (data) => ({
  type: GET_REPORT_DATA_FAIL,
  data,
});

export const getClaimsReport = () => ({
  type: GET_CLAIMS_REPORT,
});

export const getClaimsReportSuccess = (data) => ({
  type: GET_CLAIMS_REPORT_SUCCESS,
  data,
});

export const getClaimsReportFail = (data) => ({
  type: GET_CLAIMS_REPORT_FAIL,
  data,
});

export const getPaymentsReport = () => ({
  type: GET_PAYMENTS_REPORT,
});

export const getPaymentsReportSuccess = (data) => ({
  type: GET_PAYMENTS_REPORT_SUCCESS,
  data,
});

export const getPaymentsReportFail = (data) => ({
  type: GET_PAYMENTS_REPORT_FAIL,
  data,
});

export const getPatientsReport = () => ({
  type: GET_PATIENTS_REPORT,
});

export const getPatientsReportSuccess = (data) => ({
  type: GET_PATIENTS_REPORT_SUCCESS,
  data,
});

export const getPatientsReportFail = (data) => ({
  type: GET_PATIENTS_REPORT_FAIL,
  data,
});

export const getYearsReport = () => ({
  type: GET_YEARS_REPORT,
});

export const getYearsReportSuccess = (data) => ({
  type: GET_YEARS_REPORT_SUCCESS,
  data,
});

export const getYearsReportFail = (data) => ({
  type: GET_YEARS_REPORT_FAIL,
  data,
});
