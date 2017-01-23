import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import store from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
//import {loadToDos} from './actions/toDoActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
require('es6-promise').polyfill();
//const store = configureStore();
//store.dispatch(loadToDos());

render(
  <Provider store={store()}>
      <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
