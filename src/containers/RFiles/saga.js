import { takeEvery, put } from "redux-saga/effects";
import { GET_F837, GET_F835, GET_ACK, GET_PUSH_837 } from "./constants";
import { get } from "../../utils/api";
import {
  getF837Success,
  getF837Fail,
  getF835Success,
  getF835Fail,
  getAckFail,
  getAckSuccess,
  getPush837Success,
  getPush837Fail,
} from "./actions";

function* getF837Data() {
  let data = yield get("/api/claims")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
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

function* getPush837File(payload) {
  let data = yield get(`/api/push??filename=${payload.data}`)
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    yield put(getPush837Success(payload.data));
  } else {
    yield put(getPush837Fail(data));
  }
}

function* filesSaga() {
  yield takeEvery(GET_F837, getF837Data);
  yield takeEvery(GET_F835, getF835Data);
  yield takeEvery(GET_ACK, getAckData);
  yield takeEvery(GET_PUSH_837, getPush837File);
}

export default filesSaga;
