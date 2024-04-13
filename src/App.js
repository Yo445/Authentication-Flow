import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return ( 
      <Outlet />
  );
}

export default App;
