import React from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import NetworkGraphView from "./views/NetworkGraphView.jsx";
import App from "./App.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/forcegraph",
    element: <NetworkGraphView />,
  },
  {
    path: "/autoformat",
    element: <>autoformat</>,
  },
  {
    path: "/springboot",
    element: <>springboot</>,
  },
]);

export default function MainRouter() {

  return <RouterProvider router={router} />;
}
