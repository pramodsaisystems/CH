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

export const getF837 = () => ({
  type: GET_F837,
});

export const getF837Success = (data) => ({
  type: GET_F837_SUCCESS,
  data,
});

export const getF837Fail = (data) => ({
  type: GET_F837_FAIL,
  data,
});

export const getF835 = () => ({
  type: GET_F835,
});

export const getF835Success = (data) => ({
  type: GET_F835_SUCCESS,
  data,
});

export const getF835Fail = (data) => ({
  type: GET_F835_FAIL,
  data,
});

export const getAck = () => ({
  type: GET_ACK,
});

export const getAckSuccess = (data) => ({
  type: GET_ACK_SUCCESS,
  data,
});

export const getAckFail = (data) => ({
  type: GET_ACK_FAIL,
  data,
});

export const getPush837 = (data) => ({
  type: GET_PUSH_837,
  data,
});

export const getPush837Success = (data) => ({
  type: GET_PUSH_837_SUCCESS,
  data,
});

export const getPush837Fail = (data) => ({
  type: GET_PUSH_837_FAIL,
  data,
});
