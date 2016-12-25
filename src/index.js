import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';

const tracks = [
  {
    title: `Never Gonna Give You Up`
  },
  {
    title: `Can't Touch This`
  }
];

ReactDOM.render(
  <Stream tracks={tracks}>,
  document.getElementById('app')
);
