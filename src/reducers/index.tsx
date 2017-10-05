import { combineReducers } from "redux";
import { paymentReducer, Payment } from "./paymentReducer";
import { authorReducer, Author } from "./authorReducer";
import { ajaxStatusReducer } from "./ajaxStatusReducer";

export type All = {
  payments: Payment,
  authors: Author
};

export const reducers = combineReducers<All>({
  payments: paymentReducer,
  authors: authorReducer,
  ajaxCallsInProgress: ajaxStatusReducer
});
