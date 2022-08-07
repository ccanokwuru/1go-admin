// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

import HomePage from "../pages/IndexPage";

// Our route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way you'd do inside a `<Switch>`.
export const routes = [
  {
    path: "/",
    component: HomePage,
  },
  // {
  //   path: "/tacos",
  //   component: Tacos,
  //   routes: [
  //     {
  //       path: "/tacos/bus",
  //       component: Bus,
  //     },
  //     {
  //       path: "/tacos/cart",
  //       component: Cart,
  //     },
  //   ],
  // },
];
