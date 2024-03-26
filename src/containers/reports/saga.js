import { takeEvery, put } from "redux-saga/effects";
import {
  GET_REPORT_DATA,
  GET_CLAIMS_REPORT,
  GET_PAYMENTS_REPORT,
  GET_PATIENTS_REPORT,
  GET_YEARS_REPORT,
} from "./constants";
import { get, post } from "../../utils/api";
import {
  getReportSuccess,
  getReportFail,
  getClaimsReportSuccess,
  getClaimsReportFail,
  getPaymentsReportSuccess,
  getPaymentsReportFail,
  getPatientsReportSuccess,
  getPatientsReportFail,
  getYearsReportSuccess,
  getYearsReportFail,
} from "./actions";

function* getReportData() {
  let data = yield get("/api/claims")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const reports = yield data.data;
    yield put(getReportSuccess(reports));
  } else {
    yield put(getReportFail(data));
  }
}

function* getClaimsReportData() {
  let data = yield get("/api/claims")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const claims = yield data.data;
    yield put(getClaimsReportSuccess(claims));
  } else {
    yield put(getClaimsReportFail(data));
  }
}

function* getPaymentsReportData() {
  let data = yield post("/api/payments", {
    date1: "2024-03-21",
    date2: "2024-03-24",
  })
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const payments = yield data.data;
    yield put(getPaymentsReportSuccess(payments));
  } else {
    yield put(getPaymentsReportFail(data));
  }
}

function* getPatientsReportData() {
  let data = yield get("/api/claims")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const patients = yield data.data;
    yield put(getPatientsReportSuccess(patients));
  } else {
    yield put(getPatientsReportFail(data));
  }
}

function* getYearsReportData() {
  let data = yield get("/api/claims")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  if (data && data.status === 200) {
    const years = yield data.data;
    yield put(getYearsReportSuccess(years));
  } else {
    yield put(getYearsReportFail(data));
  }
}

function* reportsSaga() {
  yield takeEvery(GET_REPORT_DATA, getReportData);
  yield takeEvery(GET_CLAIMS_REPORT, getClaimsReportData);
  yield takeEvery(GET_PAYMENTS_REPORT, getPaymentsReportData);
  yield takeEvery(GET_PATIENTS_REPORT, getPatientsReportData);
  yield takeEvery(GET_YEARS_REPORT, getYearsReportData);
}

export default reportsSaga;
