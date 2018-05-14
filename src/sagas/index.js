import { fork } from "redux-saga/effects";

import {
  addRefItemWatch,
  deleteRefItemWatch,
  getRefItemsWatch,
  updateRefItemWatch
} from "./reference";

export default function*() {
  yield fork(addRefItemWatch);
  yield fork(getRefItemsWatch);
  yield fork(deleteRefItemWatch);
  yield fork(updateRefItemWatch);
}
