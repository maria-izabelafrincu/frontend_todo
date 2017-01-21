import React, {PropTypes} from 'react';
import ToDoListRow from './ToDoListRow';

const ToDoList = ({toDos}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Created on</th>
        <th>Updated on</th>
      </tr>
      </thead>
      <tbody>
      {toDos.map(toDo =>
        <ToDoListRow key={toDo.title} toDo={toDo}/>
      )}
      </tbody>
    </table>
  );
};

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired
};

export default ToDoList;
