// using the returned function of connect, we take Stream component
// as and argument to return a HOC to access the redux store while
// the Stream component is concerned with just presenting our data.

import React from 'react';
import { connect } from 'react-redux';
import Stream from './presenter';

function mapStateToProps(state) {
  const tracks = state.track;
  return {
    tracks,
  };
}

export default connect(mapStateToProps)(Stream);
