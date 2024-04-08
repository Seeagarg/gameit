import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import AccountPage from "./pages/AccountPage";

const App = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/category/:cat",
      element: <CategoryPage  />,
    },
    {
      path: "/account",
      element: <AccountPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
