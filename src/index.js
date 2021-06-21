import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk'
import './firebase';

import reducers from './store/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(reduxThunk))
)

const app = (
  <Provider store={store}>
      <App />
  </Provider>
)


ReactDOM.render(
  app,
  document.getElementById('root')
);
