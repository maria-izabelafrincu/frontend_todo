import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/toDo/ToDoPage';
import ManageToDoPage from './components/toDo/ManageToDoPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="toDo" component={ManageToDoPage} />
    <Route path="toDo/:id" component={ManageToDoPage} />
  </Route>
);
