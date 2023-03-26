// Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Root
import Root from "./routes/root";

// Pages
import Revenus from "./pages/Revenus";
import Accueil from "./pages/Accueil";
import Audiences from "./pages/Audiences";
import Laboratoire from "./pages/Laboratoire";
import Passwords from "./pages/Passwords";
import Error from "./pages/Error";

//Styles
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/revenus",
        element: <Revenus />,
      },
      {
        path: "/audiences",
        element: <Audiences />,
      },
      {
        path: "/passwords",
        element: <Passwords />,
      },
      {
        path: "/laboratoire",
        element: <Laboratoire />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
