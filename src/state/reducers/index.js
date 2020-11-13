// import all of your reducers into this file, and export them back out.
// This allows for the simplification of flow when importing reducers into your actions throughout your app.
import { combineReducers } from 'redux';
import fetchIncidentsReducer from './fetchIncidentsReducer';
import filters from './filtersReducer';
import graph_reducers from './graph_reducers';
export default combineReducers({
  fetchIncidentsReducer,
  filters,
  graph_reducers,
});
