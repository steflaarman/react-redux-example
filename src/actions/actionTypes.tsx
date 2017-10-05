import { Payment } from "../reducers/paymentReducer";

export const LOAD_PAYMENTS_SUCCESS = "LOAD_PAYMENTS_SUCCESS";
export const UPDATE_PAYMENT_SUCCESS = "UPDATE_PAYMENT_SUCCESS";
export const CREATE_PAYMENT_SUCCESS = "CREATE_PAYMENT_SUCCESS";

export const AJAX_CALL_BEGIN = "AJAX_CALL_BEGIN";
export const AJAX_CALL_ERROR = "AJAX_CALL_ERROR";

export type LoadPaymentsAction = { type: string, payments: Payment[] };
export type UpdatePaymentAction = { type: string, payment: Payment };
export type CreatePaymentAction = { type: string, payment: Payment };
