
import { Author } from "../reducers/authorReducer";
import { ajaxCallBegin } from "./ajaxStatusActions";
import authorApi from "../api/mockAuthorApi";

export type GetAuthorsAction = { type: string, authors: [Author] };

export function getAuthorsSuccess(authors) : GetAuthorsAction {
  return {
    type: "LOAD_AUTHORS_SUCCESS",
    authors: authors
  }
};

export function loadAuthors() {
  return function(dispatch) {
    dispatch(ajaxCallBegin());
    return authorApi.getAllAuthors().then((authors) => {
      dispatch(getAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    })
  }
};
