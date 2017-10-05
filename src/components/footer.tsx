import React from "react";

export const Footer = () => (
  <footer className="container-fluid bg-dark mt-4">
    <div className="container mt-4 mb-4">
      <h4 className="text-light">bankaccount</h4>
      <div className="row">
        <div className="col">
          <ul className="list-group">
            <li className="list-group-item">accounts list</li>
            <li className="list-group-item">apply for creditcard</li>
            <li className="list-group-item">apply for new bankcard</li>
            <li className="list-group-item">balance</li>
            <li className="list-group-item">bankcard manage nfc</li>
          </ul>
        </div>
        <div className="col">
          <ul className="list-group">
            <li className="list-group-item">bank cards</li>
            <li className="list-group-item">bank cards spendinglimits</li>
            <li className="list-group-item">creditcards</li>
            <li className="list-group-item">details</li>
            <li className="list-group-item">overdraft</li>
          </ul>
        </div>
        <div className="col">
          <ul className="list-group">
            <li className="list-group-item">resend pin </li>
            <li className="list-group-item">selector</li>
            <li className="list-group-item">spending limit</li>
            <li className="list-group-item">submit creditcard</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
