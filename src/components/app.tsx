import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { renderRoutes, RouteConfig } from "react-router-config";
import { LoadingDots } from "./common/loadingDots";


interface AppProps {
  route: RouteConfig;
  loading: boolean;
}

class App extends Component<AppProps, {}> {
  static propTypes = {
    children: PropTypes.object,
    route: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
  };

  render() {
    return (
      <div className="d-flex flex-column">
        <nav className="navbar navbar-expand-md bg-primary navbar-dark">
          <div className="container">
            <div className="navbar-brand">😁</div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/payments" exact className="nav-link" activeClassName="active">Payments</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/addressbook" exact className="nav-link" activeClassName="active">Address Book</NavLink>
              </li>
            </ul>
            { this.props.loading && <LoadingDots /> }
            <span className="navbar-text">
              BANKING 💰
            </span>
          </div>
        </nav>
        <div className="flex-grow">
          {renderRoutes(this.props.route.routes)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  }
}

export default connect(mapStateToProps)(App);
