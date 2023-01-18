import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as TYPES from "./types";
import { getTodosApi, addTodosApi } from "../../todosApi";

// Gen
function* getTodos() {
  try {
    const todos = yield call(getTodosApi);
    return yield put({ type: TYPES.GET_TODOS_SUCCESS, payload: todos });
  } catch (error) {
    return put({ type: TYPES.GET_TODOS_FAILURE, payload: error });
  }
}

function* addTodo({ payload }) {
  try {
    debugger;
    const result = yield call(addTodosApi, payload);
    console.log(result);
    return yield put({ type: TYPES.ADD_TODOS_SUCCESS, payload });
  } catch (error) {
    return put({ type: TYPES.ADD_TODOS_FAILURE, payload: error });
  }
}

export function* todosSagas() {
  yield takeEvery(TYPES.GET_TODOS_STARTED, getTodos);
  yield takeEvery(TYPES.ADD_TODOS_STARTED, addTodo);
}
