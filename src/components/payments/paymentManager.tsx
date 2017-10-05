import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import toastr from "toastr";

import { UpdatePaymentAction } from "../../actions/actionTypes";
import { loadPayments, savePayment } from "../../actions/paymentActions";
import { Payment } from "../../reducers/paymentReducer";
import { Author } from "../../reducers/authorReducer";
import { PaymentForm, PaymentFormErrors } from "./paymentForm";

interface PaymentManagerProps {
  payment: Payment;
  authors: Author[];
  actions: any;
}
interface PaymentManagerState {
  payment: Payment;
  errors: PaymentFormErrors;
  saving: boolean;
}

class PaymentManager extends Component<PaymentManagerProps,PaymentManagerState> {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      payment: Object.assign({}, this.props.payment),
      errors: { title: "", authorId: "", category: "", amount: ""},
      saving: false
    };
    this.updatePaymentState = this.updatePaymentState.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.payment.id != nextProps.payment.id) {
      this.setState({ payment: Object.assign({}, nextProps.payment )});
    }
  }

  updatePaymentState(event) {
    const field = event.target.name;
    let payment = this.state.payment;
    payment[field] = event.target.value;
    return this.setState({ payment: payment });
  }

  onSave(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.savePayment(this.state.payment)
      .then(() => this.redirect())
      .catch((error) => {
        toastr.error(error);
        this.setState({ saving: false });
      });
    return;
  }

  redirect() {
    this.setState({saving: false});
    toastr.success("Payment has been sent");
    this.context.router.history.push("/payments");
  }

  render() {
    return (
      <div className="container mt-4">
        <h1>Payments</h1>
        <PaymentForm
          payment={this.state.payment}
          errors={this.state.errors}
          allAuthors={this.props.authors}
          onSave={this.onSave}
          onChange={this.updatePaymentState}
          loading={this.state.saving}
        />
      </div>
    );
  }
};

const getPaymentById = (payments, paymentId) => {
  const payment = payments.filter(payment => payment.id == paymentId);
  if(payment)
    return payment[0];
  return null;
};

const mapStateToProps = (state, ownProps) => {
  const paymentId = ownProps.match.params.id;

  let payment = { id: "", date: "", title: "", authorId: "", amount: "", category: "" };

  if(paymentId && state.payments.length > 0) {
    payment = getPaymentById(state.payments, paymentId);
  }

  let authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + " " + author.lastName
    }
  });
  return {
    payment: payment,
    authors: authorsFormattedForDropdown
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: {
      loadPayments: () => dispatch(loadPayments()),
      savePayment: (payment) => dispatch(savePayment(payment))
    }
  }
};

const PayManager = connect(mapStateToProps, mapDispatchToProps)(PaymentManager);

export { PayManager };
