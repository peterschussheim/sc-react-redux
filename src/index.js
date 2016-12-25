import React from 'react';
import ReactDOM from 'react-dom';

const title = `SoundCloud React-Redux app!!! :)`;
const tracks = [
  {
    title: `Never Gonna Give You Up`
  },
  {
    title: `Can't Touch This`
  }
];

ReactDOM.render(
  <div>{
    tracks.map((track, key) => { return <div className="track" key={key}>{track.title}</div> })
  }</div>,
  document.getElementById('app')
);
