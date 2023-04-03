import styled from "styled-components";
import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Authentification from "../pages/authentification/Authentification";
import Layout from "../pages/Layout";
import { ToastContainer } from "react-toastify";
import useSession from "../hooks/useSession.js";

function Root() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development" && !document.title.match(/DEV/))
      document.title = "DEV " + document.title;
  }, []);

  const session = useSession();

  return (
    <>
      <Header />
      {session ? (
        <Layout>
          <Outlet />
        </Layout>
      ) : (
        <Authentification />
      )}
      <ToastContainer />
    </>
  );
}

export default Root;
