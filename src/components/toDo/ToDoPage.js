import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as toDoActions from '../../actions/toDoActions';
import {bindActionCreators} from 'redux';
import ToDoList from './ToDoList';
import {browserHistory} from 'react-router';
import store from '../../store/configureStore';
import * as toDoApi from '../../api/toDoApi';

class ToDoPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.redirectToAddToDoPage = this.redirectToAddToDoPage.bind(this);
  }

  componentDidMount() {
    toDoApi.getToDos();
  }

  toDoRow(toDo, index){
    return <div key={index}>{toDo.title}</div>;
  }

  redirectToAddToDoPage(){
    browserHistory.push('/toDo');
  }

  render() {
    const{toDos} = this.props;
    return (
      <div className="jumbotron">
        <h1>TO DO</h1>
        <ToDoList toDos={toDos} deleteToDo ={toDoApi.deleteToDo} />
        <input type="submit"
               value="Add To Do"
               className="btn btn-primary"
               onClick={this.redirectToAddToDoPage} />
      </div>
    );
  }
}

ToDoPage.propTypes ={
  toDos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  console.log(store);
  console.log(state);
  return{
    toDos: state.toDos
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(toDoActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoPage);
