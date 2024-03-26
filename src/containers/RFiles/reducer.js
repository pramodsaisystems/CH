import produce from "immer";

import {
  GET_F837,
  GET_F837_SUCCESS,
  GET_F837_FAIL,
  GET_F835,
  GET_F835_SUCCESS,
  GET_F835_FAIL,
  GET_ACK,
  GET_ACK_SUCCESS,
  GET_ACK_FAIL,
  GET_PUSH_837,
  GET_PUSH_837_SUCCESS,
  GET_PUSH_837_FAIL,
} from "./constants";

const initialState = {
  loading: false,
  f837: [],
  f835: [],
  ack: [],
};

const filesReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_F837:
        draft.loading = true;
        draft.f837 = [];
        break;
      case GET_F837_SUCCESS:
        draft.loading = false;
        draft.f837 = action.data;
        break;
      case GET_F837_FAIL:
        draft.loading = false;
        break;
      case GET_F835:
        draft.loading = true;
        draft.f835 = [];
        break;
      case GET_F835_SUCCESS:
        draft.loading = false;
        draft.f835 = action.data;
        break;
      case GET_F835_FAIL:
        draft.loading = false;
        break;
      case GET_ACK:
        draft.loading = true;
        draft.ack = [];
        break;
      case GET_ACK_SUCCESS:
        draft.loading = false;
        draft.ack = action.data;
        break;
      case GET_ACK_FAIL:
        draft.loading = false;
        break;
      case GET_PUSH_837:
        draft.loading = true;
        break;
      case GET_PUSH_837_SUCCESS:
        draft.loading = false;
        let data = state.f837;
        data = data.filter(function (obj) {
          return obj.FileName !== action.data;
        });

        draft.f837 = data;

        break;
      case GET_PUSH_837_FAIL:
        draft.loading = false;
        break;
      default:
        return draft;
    }
  });

export default filesReducer;
