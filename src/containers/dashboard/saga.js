import { takeEvery, put } from "redux-saga/effects";
import {
  GET_DATA,
  GET_NO_OF_CLAIMS,
  GET_NO_OF_PATIENTS,
  GET_STATUS,
} from "./constants";
import { get } from "../../utils/api";
import {
  getDataSuccess,
  getDataFail,
  getNoOfClaimsSuccess,
  getNoOfClaimsFail,
  getNoOfPatientsSuccess,
  getNoOfPatientsFail,
  getStatusSuccess,
  getStatusFail,
} from "./actions";

function* getData() {
  let data = yield get("/bwserve/v1/feed/?type=post")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const newsData = yield data.data;
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
    const claims = yield data.data;
    yield put(getNoOfClaimsSuccess(claims));
  } else {
    yield put(getNoOfClaimsFail(data));
  }
}

function* getNoOfPatientsData() {
  let data = yield get("api/claims")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const patients = yield data.data;
    yield put(getNoOfPatientsSuccess(patients));
  } else {
    yield put(getNoOfPatientsFail(data));
  }
}

function* getStatusData() {
  let data = yield get("api/claims")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const status = yield data.data;
    yield put(getStatusSuccess(status));
  } else {
    yield put(getStatusFail(data));
  }
}

function* dashboardSaga() {
  yield takeEvery(GET_DATA, getData);
  yield takeEvery(GET_NO_OF_CLAIMS, getNoOfClaimsData);
  yield takeEvery(GET_NO_OF_PATIENTS, getNoOfPatientsData);
  yield takeEvery(GET_STATUS, getStatusData);
}

export default dashboardSaga;
