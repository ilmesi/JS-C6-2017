import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as actions from './actions';
import Home from './Home';

const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return state.concat({
        id: state.length,
        name: `Item ${state.length}`
      });
    default:
      return state
  }
}

const store = createStore(reducer);

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);

if(module.hot) {
  module.hot.accept();
}
