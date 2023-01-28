// import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import Authentification from "../pages/Authentification";
import Layout from "../pages/Layout";
import { useSession } from "../hooks/useSession.js";
import { FaExclamationCircle as IconExclamation } from "react-icons/fa";

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
    </>
  );
}

const Header = styled(({ className }) => (
  <header className={className}>
    <Title>Frustration Dashboard</Title>
    <Version>0.1</Version>
    <Avertissement />
  </header>
))`
  width: 100vw;
  background-color: #000000;
  color: #fff200;
  display: flex;
  justify-content: center;
  align-items: baseline;
  position: relative;
`;

const Title = styled(({ className, children }) => (
  <h1 className={className}>
    <Link to="/">{children}</Link>
  </h1>
))`
  font-family: Bebas Neue;
  font-size: clamp(12px, 10vw, 70px);
  text-transform: uppercase;
`;

const Version = styled(({ className, children }) => (
  <small className={className}>v.{children}</small>
))`
  margin-left: 10px;
`;

const Avertissement = styled(({ className, children }) => (
  <div className={className}>
    <IconExclamation />
    Expérimental
  </div>
))`
  position: absolute;
  bottom: -5px;
  right: 5px;
  padding: 7px 12px;
  translate: 0 100%;
  background: black;
  font-weight: 600;
  display: flex;
  align-items: center;
  border: 2px solid #fff200;
  gap: 10px;
`;

export default Root;
