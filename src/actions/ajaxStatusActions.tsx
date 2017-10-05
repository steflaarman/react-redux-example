import { AJAX_CALL_BEGIN, AJAX_CALL_ERROR } from "./actionTypes";

export function ajaxCallBegin() {
  return {
    type: AJAX_CALL_BEGIN
  };
}

export function ajaxCallError() {
  return {
    type: AJAX_CALL_ERROR
  };
}
