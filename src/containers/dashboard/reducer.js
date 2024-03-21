import produce from "immer";

import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_FAIL } from "./constants";

const initialState = {
  loading: false,
  data: [
    { type: "02/03", claim: 24000 },
    { type: "03/04", claim: 19000 },
    { type: "02/05", claim: 22000 },
    { type: "04/06", claim: 5000 },
    { type: "02/07", claim: 13500 },
  ],
};

const dashboardReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_DATA:
        draft.loading = true;
        break;
      case GET_DATA_SUCCESS:
        draft.loading = false;
        draft.newsData = action.data;
        break;
      case GET_DATA_FAIL:
        draft.loading = false;
        break;
      default:
        return draft;
    }
  });

export default dashboardReducer;
