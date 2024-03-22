import { takeEvery, put } from "redux-saga/effects";
import { GET_F837, GET_F835, GET_ACK } from "./constants";
import { get } from "../../utils/api";
import {
  getF837Success,
  getF837Fail,
  getF835Success,
  getF835Fail,
  getAck,
  getAckFail,
  getAckSuccess,
} from "./actions";

function* getF837Data() {
  let data = yield get("/api/claims")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  debugger;
  if (data && data.status === 200) {
    const f837 = yield data.data;
    yield put(getF837Success(f837));
  } else {
    yield put(getF837Fail(data));
  }
}

function* getF835Data() {
  let data = yield get("/api/claims")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const f835 = yield data.data;
    yield put(getF835Success(f835));
  } else {
    yield put(getF835Fail(data));
  }
}

function* getAckData() {
  let data = yield get("/api/claims")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const ack = yield data.data;
    yield put(getAckSuccess(ack));
  } else {
    yield put(getAckFail(data));
  }
}

function* filesSaga() {
  yield takeEvery(GET_F837, getF837Data);
  yield takeEvery(GET_F835, getF835Data);
  yield takeEvery(GET_ACK, getAckData);
}

export default filesSaga;
