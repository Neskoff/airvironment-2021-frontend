import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function measurementsReducer(
  state = initialState.measurements,
  action
) {
  switch (action.type) {
    case types.ALL_MEASUREMENTS_SUCCESS:
      return action.response;
    case types.ALL_MEASUREMENTS_REQUEST:
      return state;
    case types.ALL_MEASUREMENTS_FAILURE:
      return state;
    default:
      return state;
  }
}
