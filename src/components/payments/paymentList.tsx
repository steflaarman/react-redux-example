import React from "react";
import { Link } from "react-router-dom";

const PaymentList = ({ payments }) => {
  const listItems = payments.map((payment) =>
    <tr key={payment.id}>
      <td>{payment.date}</td>
      <td><Link to={`/payment/update/${payment.id}`}>{payment.title}</Link></td>
      <td>{payment.authorId}</td>
      <td>{payment.category}</td>
      <td>&euro; {payment.amount}</td>
    </tr>
  );
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>To</th>
            <th>From</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </div>
  );
};

export { PaymentList };
