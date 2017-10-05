import React from "react";

const NewComp = (props) => {
  console.log(props);
  return (
    <div>
    {props.payments.map((payment) => {
      console.log(payment.title);
      <div>{payment.title}</div>
    })}
    </div>
  );
}

export default NewComp;
