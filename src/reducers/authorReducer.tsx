import { InitialState } from "./initialState";

export interface Author {
    id: string;
    firstName: string;
    lastName: string;
};

export const authorReducer = (state = InitialState.authors, action) => {
  switch(action.type) {
    case "LOAD_AUTHORS_SUCCESS":
      return action.authors;

    default:
      return state;
  }
}
