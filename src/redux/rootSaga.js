import { spawn } from "redux-saga/effects";
import dashboardSaga from "../containers/dashboard/saga";
import loginSaga from "../containers/login/saga";
import filesSaga from "../containers/RFiles/saga";
import reportsSaga from "../containers/reports/saga";

export default function* rootSaga() {
  yield spawn(dashboardSaga);
  yield spawn(loginSaga);
  yield spawn(filesSaga);
  yield spawn(reportsSaga);
}
