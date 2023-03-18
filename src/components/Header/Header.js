import React from "react";
import styled from "styled-components";
import { FaExclamationCircle as IconExclamation } from "react-icons/fa";
import { Link } from "react-router-dom";

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
  gap: 10px;
  position: relative;
`;

const Title = styled(({ className, children }) => (
  <h1 className={className}>
    <Link to="/">{children}</Link>
  </h1>
))`
  font-size: clamp(12px, 10vw, 70px);
  font-family: Bebas Neue;
  text-transform: uppercase;

  position: relative;
`;

const Version = styled(({ className, children }) => (
  <small className={className}>v.{children}</small>
))`
  font-size: clamp(12px, 0.7vw, 20px);
  font-weight: 200;
  text-transform: lowercase;
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

export default Header;
