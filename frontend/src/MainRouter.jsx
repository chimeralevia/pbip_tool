import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NetworkGraphView from "./views/NetworkGraphView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>app</>,
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
