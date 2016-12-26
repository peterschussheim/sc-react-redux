import React from 'react';
import { connect } from 'react-redux';

function Stream({ tracks = [] }) {
  return (
    <div>
      {
        tracks.map((track, key) => <div className="track" key={key}>{track.title}</div>)
      }
    </div>
  );
}

// using the returned function of connect, we take Stream component
// as and argument to return a HOC to access the redux store while
// the Stream component is concerned with just presenting our data.
function mapStateToProps(state) {
  const tracks = state.track;
  return {
    tracks
  }
}

export default connect(mapStateToProps)(Stream);
