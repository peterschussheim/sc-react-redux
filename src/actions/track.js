import * actionTypes from '../constants/actionTypes';

// setTracks :: Tracks -> {ActionType, Payload}
export function setTracks(tracks) {
  return {
    type: actionTypes.TRACKS_SET,
    tracks
  };
};
