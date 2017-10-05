import { LOAD_PAYMENTS_SUCCESS, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_SUCCESS } from "../actions/actionTypes";
import { InitialState } from "./initialState";

export interface Payment {
  id: string;
  title: string;
  date: string;
  authorId: string;
  amount: string;
  category: string;
};

export const paymentReducer = (state = InitialState.payments, action) => {
  switch(action.type) {
    case LOAD_PAYMENTS_SUCCESS:
      return action.payments;

    case CREATE_PAYMENT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.payment)
      ];

    case UPDATE_PAYMENT_SUCCESS:
      return [
        ...state.filter(function (payment) {
          if (payment.id !== action.course.id) {
            return payment;
          } else {
            return;
          }
        }),
        Object.assign({}, action.payment)
      ]

    default:
      return state;
  }
};
