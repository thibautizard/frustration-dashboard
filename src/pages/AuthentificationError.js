import React from "react";
import styled from "styled-components";

function NoAccesAuthorized() {
  return (
    <Message>
      <Header>Information</Header>
      <Body> Vous n'êtes pas autorisé à accéder à cette application 🤷🏼‍♂️</Body>
    </Message>
  );
}

const Message = styled.div`
  margin: auto;
  background: white;
  width: 600px;
  margin: 100px auto;
`;

const Header = styled.p`
  background: black;
  color: #fff200;
  padding: 10px 15px;
  font-family: Bebas Neue;
  font-size: 28px;
`;

const Body = styled.p`
  padding: 20px 15px;
  font-size: 20px;
`;

export default NoAccesAuthorized;
