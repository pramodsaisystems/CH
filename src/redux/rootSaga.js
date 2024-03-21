import { spawn } from "redux-saga/effects";
import dashboardSaga from "../containers/dashboard/saga";

export default function* rootSaga() {
  yield spawn(dashboardSaga);
}
