import { AJAX_CALL_BEGIN, AJAX_CALL_ERROR } from "../actions/actionTypes";
import { InitialState } from "./initialState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == "_SUCCESS";
}

export function ajaxStatusReducer(state = InitialState.ajaxCallsInProgress, action) {
  if(action.type == AJAX_CALL_BEGIN) {
    return +state + 1;
  } else if (action.type == AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)) {
    return +state - 1;
  }

  return state;
}
