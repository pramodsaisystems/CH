import { takeEvery, put } from "redux-saga/effects";
import {
  GET_DATA,
  GET_NO_OF_CLAIMS,
  GET_NO_OF_PATIENTS,
  GET_STATUS,
  GET_CLAIMS_BY_PROVIDER,
  GET_CLAIMS_BY_PAYER,
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
  getClaimsByProviderSuccess,
  getClaimsByProviderFail,
  getClaimsByPayerSuccess,
  getClaimsByPayerFail,
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

function* getClaimsByProviderData() {
  let data = yield get("api/claims")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const status = yield data.data;
    yield put(getClaimsByProviderSuccess(status));
  } else {
    yield put(getClaimsByProviderFail(data));
  }
}

function* getClaimsByPayerData() {
  let data = yield get("api/claims")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const status = yield data.data;
    yield put(getClaimsByPayerSuccess(status));
  } else {
    yield put(getClaimsByPayerFail(data));
  }
}

function* dashboardSaga() {
  yield takeEvery(GET_DATA, getData);
  yield takeEvery(GET_NO_OF_CLAIMS, getNoOfClaimsData);
  yield takeEvery(GET_NO_OF_PATIENTS, getNoOfPatientsData);
  yield takeEvery(GET_STATUS, getStatusData);
  yield takeEvery(GET_CLAIMS_BY_PROVIDER, getClaimsByProviderData);
  yield takeEvery(GET_CLAIMS_BY_PAYER, getClaimsByPayerData);
}

export default dashboardSaga;
