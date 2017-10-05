import React, { Component } from "react";
import PropTypes from "prop-types";

interface TextInputOnChange {
  (state): boolean
}

export interface TextInputProps {
  name: string;
  label: string;
  onChange: TextInputOnChange;
  placeholder: string;
  value: string;
  error: string;
}

class TextInput extends Component<TextInputProps, {}> {

  render() {
    let wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length > 0) {
      wrapperClass += " " + 'has-error';
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
          <input type="text"
            name={this.props.name}
            className="form-control"
            placeholder={this.props.placeholder}
            ref={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange} />
          <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
}

export { TextInput }
