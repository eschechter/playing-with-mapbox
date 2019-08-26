import { combineReducers } from "redux";

const defaultState = {
  markers: [],
  funNum: 0
};

function markersReducer(state = defaultState.markers, action) {
  switch (action.type) {
    case "ADD-MARKER":
      return [...state, action.payload];
    case "REMOVE-MARKER":
      return state.slice(0, state.length - 1);
    default:
      return state;
  }
}

function funNumReducer(state = defaultState.funNum, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const reducer = combineReducers({
  markers: markersReducer,
  funNum: funNumReducer
});
export default reducer;
