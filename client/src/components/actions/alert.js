import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";
// import { dispatch } from "rxjs/internal/observable/pairs";

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  //after 5sec REMOVE_ALERT will be dispatched
  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: id
      }),
    timeout
  );
};