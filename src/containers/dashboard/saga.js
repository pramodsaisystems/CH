import { takeEvery, put } from "redux-saga/effects";
import { GET_DATA } from "./constants";
import { get } from "../../utils/api";
import { getDataSuccess, getDataFail } from "./actions";

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

function* dashboardSaga() {
  yield takeEvery(GET_DATA, getData);
}

export default dashboardSaga;
