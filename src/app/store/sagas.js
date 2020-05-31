import { take, put, select } from "redux-saga/effects";
import { v1 as uuid } from "uuid";
import axios from "axios";
import * as mutations from "./mutations";

const url = "http://localhost:7777";

export function* taskCreationSaga() {
  while (true) {
    const { groupId } = yield take(mutations.REQUEST_TASK_CREATION);
    const ownerId = "U1";
    const taskId = uuid();
    yield put(mutations.createTask(taskId, groupId, ownerId));
    yield axios.post(url + "/task/new", {
      task: {
        id: taskId,
        group: groupId,
        isComplete: false,
        name: "New task",
      },
    });
  }
}

export function* taskModificationSaga() {
  while (true) {
    const task = yield take([
      mutations.SET_TASK_GROUP,
      mutations.SET_TASK_NAME,
      mutations.SET_TASK_COMPLETE,
    ]);
    axios.post(url + "/task/update", {
      task: {
        id: task.taskId,
        group: task.groupId,
        name: task.name,
        isComplete: task.isComplete,
      },
    });
  }
}
