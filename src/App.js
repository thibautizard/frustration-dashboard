import { useState, useEffect } from "react";
import supabase from "./config/supabaseClient";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  Link,
  Routes,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Paiements";
import Layout from "./Layout";
import Auth from "./pages/Authentification";
import Account from "./pages/Account";
import Accueil from "./pages/Accueil";
import NoAccesAuthorized from "./pages/AuthentificationError";
import "./global.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Accueil />,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  return (
    <Router router={router}>
      <Layout>
        {session ? (
          <NoAccesAuthorized />
        ) : (
          <Route path="/">
            <Home />
          </Route>
        )}
      </Layout>
    </Router>
  );
};

export default App;
