import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="container">
    <div className="jumbotron">
      <h1>Welcome!</h1>
      <p className="lead">Your IBAN: NL 04 VABR 23456780</p>
      <Link to="/payments/add">Send Money</Link>
      <br/>
      <Link to="/payments/request">Request Money</Link>
    </div>
    <div>Home</div>
  </div>);

export { Home };
