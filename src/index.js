import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import App from './components/App';

let store = null;

if (process.env.NODE_ENV === 'production') {
  store = createStore(reducers, {}, applyMiddleware(reduxThunk));
} else {
  store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(reduxThunk))
  );
}

/* eslint-disable react/jsx-filename-extension */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
