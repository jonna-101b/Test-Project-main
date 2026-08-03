import { call, put, takeLatest } from "redux-saga/effects"; // saga effets
import { api } from "../../api/api";
import { fetchIdeas, fetchSucceeded, fetchFailed, createIdeas, createSucceeded, createFailed, updateIdeas, updateSucceeded, updateFailed,
    deleteIdeas, deleteSucceeded, deleteFailed } from './ideasSlice';

function* fetchIdeasWorker(): Generator {
  try {
    const res = yield call(api.get, "/ideas");
    yield put(fetchSucceeded(res.data));
  }
  catch (error) {
    yield put(fetchFailed("Failed to load ideas!"));
  }
}

function* createIdeasWorker(action: any): Generator {
  try {
    const res = yield call(api.post, "/ideas", action.payload);
    yield put(createSucceeded(res.data));
  }
  catch (error) {
    yield put(createFailed("Failed to create idea!"));
  }
}

function* updateIdeasWorker(action: any): Generator {
  const { _id, data } = action.payload;

  try {
    const res = yield call(api.put, `/ideas/${_id}`, data);
    yield put(updateIdeas(res.data));
  }
  catch (error) {
    yield put(updateFailed("Failed to edit idea!"));
  }
}

function* deleteIdeasWorker(action: any): Generator {
  try {
    const res = yield call(api.delete, `/ideas/${action.payload}`);
    yield put(deleteSucceeded(res.data));
  }
  catch (error) {
    yield put(deleteFailed("Failed to load ideas!"));
  }
}

export function* ideasSaga() {
  yield takeLatest(fetchIdeas.type, fetchIdeasWorker);
  yield takeLatest(createIdeas.type, createIdeasWorker);
  yield takeLatest(updateIdeas.type, updateIdeasWorker);
  yield takeLatest(deleteIdeas.type, deleteIdeasWorker);
}
