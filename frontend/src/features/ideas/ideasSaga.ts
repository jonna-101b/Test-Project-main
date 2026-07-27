import { call, put, takeLatest } from "redux-saga/effects"; // saga effets

const API_URL = "/api/ideas";

function* workerSagaFunction() {
  yield "demo function";
}

export function* ideasSaga() {
  // yield takeLatest(payload_type, worker_function);
}
