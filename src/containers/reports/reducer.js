import produce from "immer";

import {
  GET_REPORT_DATA,
  GET_REPORT_DATA_SUCCESS,
  GET_REPORT_DATA_FAIL,
} from "./constants";

const initialState = {
  loading: false,
  reports: [],
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

      default:
        return draft;
    }
  });

export default reportReducer;
