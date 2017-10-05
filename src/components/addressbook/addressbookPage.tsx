import React, { Component } from "react";
import { connect } from "react-redux";

import { AddressBookList } from "./addressbookList";


export interface Author {
  id: string;
  firstName: string;
  lastName: string;
}

export interface AddressBookProps {
  authors: Author[]
}

class AddressBook extends Component<AddressBookProps,{}> {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="container mt-4">
        <h1>Address Book</h1>
        <AddressBookList authors={this.props.authors} />
      </div>
    )
  }
}

let mapStateToProps = (state, ownProps) => {
  return {
    authors: state.authors
  }
}

let AB = connect(mapStateToProps)(AddressBook)

export { AB };
