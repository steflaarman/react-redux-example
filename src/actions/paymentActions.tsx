
import paymentApi from "../api/mockPaymentApi";
import { ajaxCallBegin, ajaxCallError } from "./ajaxStatusActions";
import {
  CREATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_SUCCESS,
  LOAD_PAYMENTS_SUCCESS,
  LoadPaymentsAction,
  UpdatePaymentAction,
  CreatePaymentAction
} from "./actionTypes";

export const loadPaymentsSuccess = (payments): LoadPaymentsAction => {
  return {
    type: LOAD_PAYMENTS_SUCCESS,
    payments: payments
  }
};

export const updatePaymentSuccess = (payment): UpdatePaymentAction => {
  return {
    type: UPDATE_PAYMENT_SUCCESS,
    payment: payment
  }
};

export const createPaymentSuccess = (payment): CreatePaymentAction => {
  return {
    type: CREATE_PAYMENT_SUCCESS,
    payment: payment
  }
};

export const loadPayments = () => {
  return function(dispatch) {
    dispatch(ajaxCallBegin());
    return paymentApi.getAllPayments().then(payments =>{
      dispatch(loadPaymentsSuccess(payments));
    }).catch(error => {
      throw(error)
    });
  }
};

export function savePayment(payment) {
  return function (dispatch, getState) { //getstate: get info from the store
    dispatch(ajaxCallBegin());
    return paymentApi.savePayment(payment).then(savedPayment => {
      if(payment.id) {
        dispatch(updatePaymentSuccess(savedPayment));
      } else {
        dispatch(createPaymentSuccess(savedPayment));
      }
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  }
}
