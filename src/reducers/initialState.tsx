import { Author } from "./authorReducer";
import { Payment } from "./paymentReducer";

export interface iInitialState {
  authors: Author[];
  payments: Payment[];
  ajaxCallsInProgress: Number;
}

export const InitialState: iInitialState = {
  authors: [],
  payments: [],
  ajaxCallsInProgress: 0
}
