import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './app/App';
import * as serviceWorker from './serviceWorker';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <Route exact path="/" render={() => (
        <Redirect to='/questions/0' />
      )}/>
      <Route exact path="/questions" render={() => (
        <Redirect to='/questions/0' />
      )}/>
      <App />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
