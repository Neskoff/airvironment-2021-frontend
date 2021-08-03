import * as types from "./actionTypes";
import * as measurementsApi from "../../api/measurements";

/**
 * Load average values requested.
 * @returns {{type: string}}
 */
export function loadValuesRequest() {
  return { type: types.ALL_MEASUREMENTS_REQUEST };
}

/**
 * Average values successfully loaded action creator.
 * @param response
 * @returns {{response: *, type: string}}
 */
export function loadValuesSuccess(response) {
  return { type: types.ALL_MEASUREMENTS_SUCCESS, response };
}

/**
 * Average values loading failed action creator.
 * @param error
 * @returns {{error: *, type: string}}
 */
export function loadValuesFailure(error) {
  return { type: types.AVERAGE_MEASUREMENTS_FAILURE, error };
}

/**
 * Fires a get request to fetch average values and returns the received response.
 * @param params
 * @returns {function(*): Promise<void>}
 */
export function loadMeasurements(params) {
  return function (dispatch) {
    dispatch(loadValuesRequest());
    return measurementsApi
      .getMeasurements(params)
      .then((response) => {
        dispatch(loadValuesSuccess(response));
      })
      .catch((error) => {
        dispatch(loadValuesFailure(JSON.parse(error.message)));
        console.log("Error loading values.");
      });
  };
}
