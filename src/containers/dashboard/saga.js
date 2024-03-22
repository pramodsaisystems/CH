import { takeEvery, put } from "redux-saga/effects";
import { GET_DATA, GET_NO_OF_CLAIMS } from "./constants";
import { get } from "../../utils/api";
import {
  getDataSuccess,
  getDataFail,
  getNoOfClaimsSuccess,
  getNoOfClaimsFail,
} from "./actions";

function* getData() {
  let data = yield get("/bwserve/v1/feed/?type=post")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const newsData = yield JSON.parse(data.data);
    yield put(getDataSuccess(newsData));
  } else {
    yield put(getDataFail(data));
  }
}

function* getNoOfClaimsData() {
  let data = yield get("api/claims")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const data = yield JSON.parse(data.data);
    yield put(getNoOfClaimsSuccess(data));
  } else {
    yield put(getNoOfClaimsFail(data));
  }
}

function* dashboardSaga() {
  yield takeEvery(GET_DATA, getData);
  yield takeEvery(GET_NO_OF_CLAIMS, getNoOfClaimsData);
}

export default dashboardSaga;
