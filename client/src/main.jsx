import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./components/home/Home.jsx";
import { createContext } from "react";
import FoodDetails from "./components/foodDetails/FoodDetails.jsx";
import PageNotFound from "./components/pageNotFound/PageNotFound.jsx";
import Singup from "./components/singup/Singup.jsx";
import Singin from "./components/singin/Singin.jsx";
import ContextProvider from "./components/context/ContextProvider.jsx";
import PrivetRoute from "./components/privetRoute/PrivetRoute.jsx";
import ChefDetails from "./components/chefDetails/ChefDetails.jsx";
import Foods from "./components/foods/Foods.jsx";
import Chefs from "./components/chefs/Chefs.jsx";
import Blog from "./components/blogs/Blog.jsx";

export const Context = createContext();
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/foods/",
        element: (
          <PrivetRoute>
            <Foods />
          </PrivetRoute>
        ),
      },
      {
        path: "/foods/:id",
        element: (
          <PrivetRoute>
            <FoodDetails />
          </PrivetRoute>
        ),
      },
      {
        path: "blog",
        element: (
          <PrivetRoute>
            <Blog />
          </PrivetRoute>
        ),
      },
      {
        path: "chefs",
        element: (
          <PrivetRoute>
            <Chefs />
          </PrivetRoute>
        ),
      },
      {
        path: "/chefs/:id",
        element: (
          <PrivetRoute>
            <ChefDetails />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/user/register",
    element: <Singup />,
  },
  {
    path: "/user/login",
    element: <Singin />,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={route} />
    </ContextProvider>
  </React.StrictMode>
);
