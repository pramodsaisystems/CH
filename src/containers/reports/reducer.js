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
  claimsReport: [
    {
      ClaimId: "01245",
      ClaimDate: "3/27/2024",
      ProviderName: "Alpha Services",
      ProviderId: "01234568970",
      PatientId: "5564565",
      PatientName: "John Smith",
      Gender: "Male",
      AdmitDate: "3/25/2024",
      Diagnosis: "Anxiety Disorder",
      DiagnosisId: "F41.9",
      Date: "3/25/2024",
      Services: ["99213", "0300", "0305", "0730", "840087"],
      ChargeAmount: "146",
      ChargeRange: "0-700",
      Priority: "High",
      ServicesDetails: [
        {
          ID: "100",
          ServiceDate: "3/25/2024",
          ProcedureCode: "A047",
          Description:
            "Ambulance service, advanced life support, emergency transport, level 1 (als 1 - emergency)",
          Units: "1",
          ChargeAmt: "700",
        },
        {
          ID: "101",
          ServiceDate: "3/26/2024",
          ProcedureCode: "A046",
          Description:
            "Ambulance Transportaion, Basic Life Support, Non Emergency",
          Units: "21",
          ChargeAmt: "8",
        },
      ],
    },
  ],
  paymentsReport: [
    {
      ClaimId: "01245",
      ClaimDate: "3/27/2024",
      Payor: "Blue Cross",
      PayorAddress: "123 Main St, Atony USA",
      PayeeID: "1236665",
      PayeeAddress: "Coastal Accounting Solutions",
      PaidDate: "9/1/2024",
      ServiceDate: "6/1/2024",
      PatientId: "5564565",
      PatientName: "John Smith",
      Gender: "Male",
      AdmitDate: "3/25/2024",
      Services: ["99213", "0300", "0305", "0730", "840087"],
      ChargeAmount: "146",
      ChargeRange: "0-700",
      PaidAmount: "100",
      PaidRange: "0-200",
      ServicesDetails: [
        {
          ID: "100",
          ServiceDate: "3/25/2024",
          ProcedureCode: "A047",
          Description:
            "Ambulance service, advanced life support, emergency transport, level 1 (als 1 - emergency)",
          Units: "1",
          ChargeAmt: "700",
        },
        {
          ID: "101",
          ServiceDate: "3/26/2024",
          ProcedureCode: "A046",
          Description:
            "Ambulance Transportaion, Basic Life Support, Non Emergency",
          Units: "21",
          ChargeAmt: "8",
        },
      ],
    },
  ],
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
