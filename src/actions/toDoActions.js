import * as types from './actionTypes';
import toDoApi from '../api/mockToDoApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export const URL = 'http://localhost:8081/to_do';

export function loadToDosSuccess(toDos) {
  return { type: types.LOAD_TODOS_SUCCESS, payload: toDos};
}

export function createToDoSuccess(toDo) {
  return { type: types.CREATE_TODO_SUCCESS, payload: {
    toDo, isDone: false
  }};
}

export function updateToDoSuccess(toDo) {
  return { type: types.UPDATE_TODO_SUCCESS,payload: toDo};
}

export function deleteToDoSuccess(toDo) {
  return { type: types.DELETE_TODO, payload: toDo};
}


export function loadToDos(){
  return function(dispatch){
    return fetch(URL)
      .then(toDos => {
      dispatch(loadToDosSuccess(toDos));
    }).catch(error =>{
      throw(error);
    });
  };
}

export function saveToDo(toDo) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    return fetch(URL,{ method: "POST",
      body: JSON.stringify(toDo)})
      .then(toDo => {
      toDo.id ? dispatch(updateToDoSuccess(toDo)) :
        dispatch(createToDoSuccess(toDo));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteToDo(toDoId){
  return function(dispatch){
    return toDoApi.deleteToDo(toDoId).then(toDo => {
      dispatch(deleteToDoSuccess(toDo));
    }).catch(error =>{
      throw(error);
    });
  };
}
