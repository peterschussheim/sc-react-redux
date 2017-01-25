import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Stream from './presenter';

const mapStateToProps = (state) => {
  const tracks = state.track;
  return {
    tracks,
  };
};

// mapDispatchToProps helps us pass actions to our presentation container.
// Returns an object with functions.
const mapDispatchToProps = (dispatch) => ({
    onAuth: bindActionCreators(actions.auth, dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(Stream);
