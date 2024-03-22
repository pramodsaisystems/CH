import { spawn } from "redux-saga/effects";
import dashboardSaga from "../containers/dashboard/saga";
import loginSaga from "../containers/login/saga";

export default function* rootSaga() {
  yield spawn(dashboardSaga);
  yield spawn(loginSaga);
}
