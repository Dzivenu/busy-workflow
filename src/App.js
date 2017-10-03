import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect } from 'react-router';
import configureStore from './store';
import createHistory from 'history/createBrowserHistory';

import Main from './containers/Main';
import Trending from './containers/Trending';

import './styles/App.css';

const store = configureStore();
const history = createHistory();

class App extends Component {
  render() {
    return (
      <Provider store={store} key="provider">
        <Router history={history}>
          <Main>
            <Route exact path="/" render={() => <Redirect to="/trending"/>}/>
            <Route deault path="/trending" component={Trending}/>
          </Main>
        </Router>
      </Provider>
    );
  }
}

export default App;
