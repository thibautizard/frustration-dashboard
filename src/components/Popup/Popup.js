import React, { useRef } from "react";
import styled from "styled-components";
import { Box } from "@mantine/core";
import { FaTimes as CrossIcon } from "react-icons/fa";

const Popup = styled(
  ({ children, className, title = "Titre", isClosable = true }) => {
    const boxEl = useRef(null);

    const closePopup = () => {
      boxEl.current.style.display = "none";
    };

    return (
      <Box className={className} ref={boxEl}>
        <Title>
          {title}
          {isClosable && <Cross onClick={closePopup} />}
        </Title>
        <Content>{children}</Content>
      </Box>
    );
  }
)`
  --bg-color-hover: #191a00;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 500px;
  width: fit-content;
  margin: auto;
  padding: 0;
  background: white;
  box-shadow: 0px 0px 2.2px rgba(0, 0, 0, 0.02),
    0px 0px 5.3px rgba(0, 0, 0, 0.028), 0px 0px 10px rgba(0, 0, 0, 0.035),
    0px 0px 17.9px rgba(0, 0, 0, 0.042), 0px 0px 33.4px rgba(0, 0, 0, 0.05),
    0px 0px 80px rgba(0, 0, 0, 0.07); ;
`;

const Title = styled.h2`
  font-family: Bebas Neue;
  background: #000000;
  color: #fff200;
  padding: 7px 0;
  margin: 0;
  font-size: 30px;
  text-align: center;
  position: relative;
`;

const Cross = styled(CrossIcon)`
  fill: #fff200;
  position: absolute;
  right: 2%;
  font-size: 60%;
  top: 50%;
  translate: 0 -50%;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: var(--bg-color-hover);
  }
  padding: 1%;
`;

const Content = styled.div`
  padding: 20px 20px;
  font-family: Poppins;
`;

export default Popup;
