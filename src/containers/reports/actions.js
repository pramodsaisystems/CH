import {
  GET_REPORT_DATA,
  GET_REPORT_DATA_SUCCESS,
  GET_REPORT_DATA_FAIL,
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
