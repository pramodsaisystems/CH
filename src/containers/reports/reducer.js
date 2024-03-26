import produce from "immer";

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
import { GET_CLAIMS_BY_PAYER } from "../dashboard/constants";

const initialState = {
  loading: false,
  reports: [],
  claimsReport: [],
  paymentsReport: [],
  patientsReport: [],
  yearsReport: [],
};

const reportReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_REPORT_DATA:
        draft.loading = true;
        draft.reports = [];
        break;
      case GET_REPORT_DATA_SUCCESS:
        draft.loading = false;
        draft.reports = action.data;
        break;
      case GET_REPORT_DATA_FAIL:
        draft.loading = false;
        break;

      case GET_CLAIMS_REPORT:
        draft.loading = true;
        draft.claimsReport = [];
        break;
      case GET_CLAIMS_REPORT_SUCCESS:
        draft.loading = false;
        draft.claimsReport = action.data;
        break;
      case GET_CLAIMS_REPORT_FAIL:
        draft.loading = false;
        break;

      case GET_PAYMENTS_REPORT:
        draft.loading = true;
        draft.paymentsReport = [];
        break;
      case GET_PAYMENTS_REPORT_SUCCESS:
        draft.loading = false;
        draft.paymentsReport = action.data;
        break;
      case GET_PAYMENTS_REPORT_FAIL:
        draft.loading = false;
        break;

      case GET_PATIENTS_REPORT:
        draft.loading = true;
        draft.patientsReport = [];
        break;
      case GET_PATIENTS_REPORT_SUCCESS:
        draft.loading = false;
        draft.patientsReport = action.data;
        break;
      case GET_PATIENTS_REPORT_FAIL:
        draft.loading = false;
        break;

      case GET_YEARS_REPORT:
        draft.loading = true;
        draft.yearsReport = [];
        break;
      case GET_YEARS_REPORT_SUCCESS:
        draft.loading = false;
        draft.yearsReport = action.data;
        break;
      case GET_YEARS_REPORT_FAIL:
        draft.loading = false;
        break;

      default:
        return draft;
    }
  });

export default reportReducer;
