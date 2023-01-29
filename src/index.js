import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import Paiements from "./pages/Paiements";
import Accueil from "./pages/Accueil";
import Audiences from "./pages/Audiences";
import Laboratoire from "./pages/Laboratoire";
import Error from "./pages/Error";
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
        path: "/paiements",
        element: <Paiements />,
      },
      {
        path: "/audiences",
        element: <Audiences />,
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
