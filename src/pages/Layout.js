import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = styled(({ className, children }) => (
  <div className={className}>
    <Sidebar />
    <Main>{children}</Main>
  </div>
))`
  display: flex;
  width: 100vw;
  box-sizing: border-box;
  height: 100%;
`;

const Main = styled.main`
  background: #fff200;
  padding: 40px;
  flex-grow: 1;
`;

export default Layout;
