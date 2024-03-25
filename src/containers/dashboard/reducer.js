import produce from "immer";

import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  GET_NO_OF_CLAIMS,
  GET_NO_OF_CLAIMS_SUCCESS,
  GET_NO_OF_CLAIMS_FAIL,
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

const initialState = {
  loading: false,
  data: [
    { type: "02/03", claim: 24000 },
    { type: "03/04", claim: 19000 },
    { type: "02/05", claim: 22000 },
    { type: "04/06", claim: 5000 },
    { type: "02/07", claim: 13500 },
  ],
  noOfClaims: [],
  noOfPatients: [],
  status: [],
  providerClaims: [],
  payerClaims: [],
};

const dashboardReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_DATA:
        draft.loading = true;
        break;
      case GET_DATA_SUCCESS:
        draft.loading = false;
        draft.data = action.data;
        break;
      case GET_DATA_FAIL:
        draft.loading = false;
        break;
      case GET_NO_OF_CLAIMS:
        draft.loading = true;
        draft.noOfClaims = [];
        break;
      case GET_NO_OF_CLAIMS_SUCCESS:
        draft.loading = false;
        draft.noOfClaims = action.data;
        break;
      case GET_NO_OF_CLAIMS_FAIL:
        draft.loading = false;
        break;
      case GET_NO_OF_PATIENTS:
        draft.loading = true;
        draft.noOfPatients = [];
        break;
      case GET_NO_OF_PATIENTS_SUCCESS:
        draft.loading = false;
        draft.noOfPatients = action.data;
        break;
      case GET_NO_OF_PATIENTS_FAIL:
        draft.loading = false;
        break;
      case GET_STATUS:
        draft.loading = true;
        draft.status = [];
        break;
      case GET_STATUS_SUCCESS:
        draft.loading = false;
        draft.status = action.data;
        break;
      case GET_STATUS_FAIL:
        draft.loading = false;
        break;
      case GET_CLAIMS_BY_PROVIDER:
        draft.loading = true;
        draft.providerClaims = [];
        break;
      case GET_CLAIMS_BY_PROVIDER_SUCCESS:
        draft.loading = false;
        draft.providerClaims = action.data;
        break;
      case GET_CLAIMS_BY_PROVIDER_FAIL:
        draft.loading = false;
        break;
      case GET_CLAIMS_BY_PAYER:
        draft.loading = true;
        draft.payerClaims = [];
        break;
      case GET_CLAIMS_BY_PAYER_SUCCESS:
        draft.loading = false;
        draft.payerClaims = action.data;
        break;
      case GET_CLAIMS_BY_PAYER_FAIL:
        draft.loading = false;
        break;
      default:
        return draft;
    }
  });

export default dashboardReducer;
