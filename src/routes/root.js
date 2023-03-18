import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Authentification from "../pages/authentification/Authentification";
import Layout from "../pages/Layout";
import { ToastContainer } from "react-toastify";
import { useSession } from "../hooks/useSession.js";

function Root() {
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
