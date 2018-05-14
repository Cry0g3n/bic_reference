import { call, put, takeLatest } from "redux-saga/effects";

import {
  addRefItem,
  deleteRefItem,
  getRefItems,
  updateRefItem
} from "../api/reference";
import {
  fetchAddItemFailure,
  fetchAddItemRequest,
  fetchAddItemSuccess,
  fetchDeleteItemFailure,
  fetchDeleteItemRequest,
  fetchDeleteItemSuccess,
  fetchEditItemFailure,
  fetchEditItemRequest,
  fetchEditItemSuccess,
  fetchGetItemsFailure,
  fetchGetItemsRequest,
  fetchGetItemsSuccess,
  setMode
} from "../actions/reference";

function* addRefItemFlow(action) {
  try {
    const response = yield call(addRefItem, { item: action.payload });
    yield put(fetchAddItemSuccess(response));
    yield put(setMode("BROWSE"));
    yield put(fetchGetItemsRequest());
  } catch (error) {
    yield put(fetchAddItemFailure(error));
  }
}

function* getItemsFlow() {
  try {
    const response = yield call(getRefItems);
    yield put(fetchGetItemsSuccess(response));
  } catch (error) {
    yield put(fetchGetItemsFailure(error));
  }
}

function* deleteRefItemFlow(action) {
  try {
    const response = yield call(deleteRefItem, { id: action.payload });
    yield put(fetchDeleteItemSuccess(response));
    yield put(setMode("BROWSE"));
    yield put(fetchGetItemsRequest());
  } catch (error) {
    yield put(fetchDeleteItemFailure(error));
  }
}

function* updateRefItemFlow(action) {
  try {
    const response = yield call(updateRefItem, { item: action.payload });
    yield put(fetchEditItemSuccess(response));
    yield put(setMode("BROWSE"));
    yield put(fetchGetItemsRequest());
  } catch (error) {
    yield put(fetchEditItemFailure(error));
  }
}

export function* addRefItemWatch() {
  yield takeLatest(fetchAddItemRequest, addRefItemFlow);
}

export function* getRefItemsWatch() {
  yield takeLatest(fetchGetItemsRequest, getItemsFlow);
}

export function* deleteRefItemWatch() {
  yield takeLatest(fetchDeleteItemRequest, deleteRefItemFlow);
}

export function* updateRefItemWatch() {
  yield takeLatest(fetchEditItemRequest, updateRefItemFlow);
}
