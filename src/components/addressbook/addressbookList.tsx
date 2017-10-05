import React from "react";
import { Link } from "react-router-dom";

const AddressBookList = ({ authors }) => {
  const listItems = authors.map((author) =>
    <tr key={author.id}>
      <td><Link to={`/addressbook/update/${author.id}`}>{author.firstName}</Link></td>
      <td><Link to={`/addressbook/update/${author.id}`}>{author.lastName}</Link></td>
    </tr>
  );
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </div>
  );
};

export { AddressBookList };
