import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Main from './Main.js';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main}/>
    </Route>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'));
