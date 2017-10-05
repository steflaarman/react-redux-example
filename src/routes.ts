import { RouteConfig } from "react-router-config";
import App from "./components/app";
import { Home } from "./components/home";
import { NotFoundPage } from "./components/notfound";
import { Payments } from "./components/payments/paymentPage";
import { PayManager } from "./components/payments/paymentManager";
import { AB } from "./components/addressbook/addressbookPage";

export const Routes: RouteConfig[] = [{
  component: App,
  routes: [{
    path: '/',
    exact: true,
    component: Home
  },{
    path: '/child',
    exact: true,
    component: NotFoundPage
  },{
    path: "/payments",
    exact: true,
    component: Payments
  },{
    path: "/payments/add",
    exact: true,
    component: PayManager
  },{
    path: "/payments/update/:id",
    exact: true,
    component: PayManager
  },{
    path: "/addressbook",
    exact: true,
    component: AB
  },{
    path: "*",
    component: NotFoundPage
  }]
}];
