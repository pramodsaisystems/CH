import { takeEvery, put } from "redux-saga/effects";
import { GET_DATA } from "./constants";
import { getDataSuccess } from "./actions";

function* login() {
  yield put(getDataSuccess(true));
}

function* loginSaga() {
  yield takeEvery(GET_DATA, login);
}

export default loginSaga;
