import * as actionTypes from '../constants/actionTypes';

const initialState = [];

/**
 * @param {object} state
 * @param {object} action
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.TRACKS_SET:
      return setTracks(state, action);
  }
  return state;
}

function setTracks(state, action) {
  const { tracks } = action;
  
  // spread over our previous state plus the action payload
  // in our new returned state.
  return [...state, ...tracks];
}
