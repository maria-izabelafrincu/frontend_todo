import * as types from '../actions/actionTypes';
import initialState from './initialState';
import _ from 'lodash';

export default function toDoReducer(state = initialState.toDos, action){
  switch (action.type) {
    case types.LOAD_TODOS_SUCCESS:
          //return action.toDos;
      return Object.assign({}, state, { toDos: action.toDos });
    case types.CREATE_TODO_SUCCESS:
          return [...state,
          Object.assign({}, action.toDo)
          ];
    case types.UPDATE_TODO_SUCCESS:
      return [
        ...state.filter(toDo => toDo.title !== action.toDo.title),
        Object.assign({}, action.toDo)
      ];
    case types.DELETE_TODO:
      // Use lodash to create a new user array without the user we want to remove
      const newToDo = _.filter(state.toDos, toDo => toDo.title != action.toDoTitle);
      return Object.assign({}, state, { toDos: newToDo });
    default:
          return state;
  }
}
