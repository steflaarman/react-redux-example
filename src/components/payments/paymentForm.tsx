import React, { Component } from "react";
import { TextInput } from "../common/textInput";
import { SelectInput } from "../common/selectInput";

import { Payment } from "../../reducers/paymentReducer"

interface CourseFormOnChange {
  (state): boolean;
}

export interface PaymentFormErrors {
  title: string;
  authorId: string;
  category: string;
  amount: string;
}

export interface PaymentFormProps {
  payment: Payment;
  allAuthors: any;
  onSave: any;
  onChange: any;
  loading: boolean;
  errors: PaymentFormErrors;
}

class PaymentForm extends Component<PaymentFormProps, {}> {
  render() {
    return (
      <form>
        <fieldset>
          <legend>New Payment</legend>

          <TextInput
            name="amount"
            label="Amount"
            placeholder="Amount"
            value={this.props.payment.amount}
            onChange={this.props.onChange}
            error={this.props.errors.amount} />

          <SelectInput
            name="authorId"
            label="Author"
            value={this.props.payment.authorId}
            defaultOption="Select Author"
            options={this.props.allAuthors}
            onChange={this.props.onChange}
            error={this.props.errors.authorId} />

          <TextInput
            name="title"
            label="Description"
            placeholder="Description"
            value={this.props.payment.title}
            onChange={this.props.onChange}
            error={this.props.errors.title} />

          <TextInput
            name="category"
            label="Category"
            placeholder="Category"
            value={this.props.payment.category}
            onChange={this.props.onChange}
            error={this.props.errors.category} />

          <input
            type="submit"
            disabled={this.props.loading}
            value={this.props.loading ? "Saving..." : "Save"}
            className="btn btn-primary"
            onClick={this.props.onSave} />
        </fieldset>
      </form>
    );
  }
};

export { PaymentForm };
