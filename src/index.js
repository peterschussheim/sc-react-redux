import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream';

const tracks = [
  {
    title: `Never Gonna Give You Up`
  },
  {
    title: `Can't Touch This`
  }
];

const store = configureStore();
store.dispatch(action.setTracks(tracks));

ReactDOM.render(
  <Stream />,
  document.getElementById('app')
);
