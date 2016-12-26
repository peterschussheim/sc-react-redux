import { combineReducers } from 'redux';
import track from './track';

// using combineReducers, we can have multiple reducers,
// then combine them so that each reducer returns a substate.
export default combineReducers({
  track,
});
