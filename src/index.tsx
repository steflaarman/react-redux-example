/* eslint-disable no-console */
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { configureStore } from "./store/configureStore";
import { loadPayments } from "./actions/paymentActions";
import { loadAuthors } from "./actions/authorActions";
import { Routes } from "./routes";
import App from "./components/app";

const element = document.getElementById("app");

const store = configureStore({});
store.dispatch(loadPayments());
store.dispatch(loadAuthors());

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
    </Provider>
  );
};

render(<Root />, element);
