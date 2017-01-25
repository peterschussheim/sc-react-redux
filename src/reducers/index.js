import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import track from './track';

// using combineReducers, we can have multiple reducers,
// then combine them so that each reducer returns a substate.
export default combineReducers({ auth, track, routing: routerReducer });
