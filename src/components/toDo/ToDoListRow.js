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
        <input type="submit"
             value="Delete"
             className="btn btn-danger"
             onClick="toDoActions.deleteToDo({toDo.title})" />
      </td>
    </tr>
  );
};

ToDoListRow.propTypes = {
  toDo: PropTypes.object.isRequired
};

export default ToDoListRow;
