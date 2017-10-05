import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Payment } from "../../reducers/paymentReducer";
import { PaymentList } from "./paymentList";

interface PaymentPageProps {
  createPayment: Function;
  payments: [Payment];
};

interface PaymentPageState {};

class PaymentPage extends Component<PaymentPageProps, PaymentPageState> {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container mt-4">
        <h1>Payments</h1>
        <PaymentList payments={this.props.payments} />
        <Link className="btn btn-primary" to="/payments/add">+ New Payment</Link>
      </div>
    );
  }

  static propTypes = {
    payments: PropTypes.array.isRequired
  }
}

function mapStateToProps(state, ownProps) {
  return {
    payments: state.payments
  };
}

function mapDispatchToProps(dispatch) {
  return { }
}

const Payments = connect(mapStateToProps, mapDispatchToProps)(PaymentPage);

export { Payments };
