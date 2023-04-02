import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = styled(({ className, children }) => (
  <>
    <Sidebar />
    <Main>{children}</Main>
  </>
))`
  display: flex;
  flex-grow:1;
`;

const Main = styled.main`
  background: #fff200;
  padding: 20px;
  grid-row:2/3;
  grid-column: 2/3;
  max-height:100%;
  overflow:scroll;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  box-sizing:border-box;
`;

export default Layout;
