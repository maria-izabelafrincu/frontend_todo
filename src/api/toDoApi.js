import axios from 'axios';
import store from '../store/configureStore';
import { loadToDosSuccess, createToDoSuccess, deleteToDoSuccess, updateToDoSuccess } from '../actions/toDoActions';

export function getToDos() {
  return axios.get('http://localhost:8081/to_do')
    .then(response => {
      store.dispatch(loadToDosSuccess(response.data));
      return response;
    });
}

export function deleteToDo(toDoId) {
  return axios.delete('http://localhost:8081/to_do/' + toDoId)
    .then(response => {
      store.dispatch(deleteUserSuccess(toDoId));
      return response;
    });
}
