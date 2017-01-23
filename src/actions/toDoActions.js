import * as types from './actionTypes';

export const URL = 'http://localhost:8081/to_do';

export function loadToDosSuccess(toDos) {
  return { type: types.LOAD_TODOS_SUCCESS, toDos};
}

export function createToDoSuccess(toDo) {
  return { type: types.CREATE_TODO_SUCCESS, toDo};
}

export function updateToDoSuccess(toDo) {
  return { type: types.UPDATE_TODO_SUCCESS, toDo};
}

export function deleteToDoSuccess(toDoId) {
  return { type: types.DELETE_TODO, toDoId};
}
