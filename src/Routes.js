import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Login from "./components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
