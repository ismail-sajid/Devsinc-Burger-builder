import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./components/Login";
import { BurgerApp } from "./BurgerApp";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <BurgerApp /> },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
