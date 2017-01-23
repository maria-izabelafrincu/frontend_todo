import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import * as toDoActions from '../../actions/toDoActions';

const ToDoListRow = ({toDo}) => {
  return (
    <tr>
      <td>{toDo.isDone}</td>
      <td><Link to={'/toDo/' + toDo.title}>{toDo.title}</Link></td>
      <td>{toDo.description}</td>
      <td>{toDo.createdOn}</td>
      <td>{toDo.updatedOn}</td>
      <td>
         <button onClick={props.deleteToDo.bind(null, toDo.title)} className="delete">Delete</button>
      </td>
    </tr>
  );
};

ToDoListRow.propTypes = {
  toDo: PropTypes.object.isRequired
};

export default ToDoListRow;
