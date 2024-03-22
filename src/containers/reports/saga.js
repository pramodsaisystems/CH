import { takeEvery, put } from "redux-saga/effects";
import { GET_REPORT_DATA } from "./constants";
import { get } from "../../utils/api";
import { getReportSuccess, getReportFail } from "./actions";

function* getReportData() {
  let data = yield get("/api/claims")
    .then((result) => {
      return result;
    })
    .catch(() => console.error());
  debugger;
  if (data && data.status === 200) {
    const reports = yield data.data;
    yield put(getReportSuccess(reports));
  } else {
    yield put(getReportFail(data));
  }
}

function* reportsSaga() {
  yield takeEvery(GET_REPORT_DATA, getReportData);
}

export default reportsSaga;
