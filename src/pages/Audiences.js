import { FaPaintRoller } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const move = keyframes`
  from {
    transform: translateY(-20px);
  }

  to {
    transform: translateY(0px);
  }
`;

const Audiences = styled(({ className }) => {
  return (
    <div className={className}>
      <FaPaintRoller />
      <p>En travaux</p>
    </div>
  );
})`
  text-align: center;
  align-self: center;
  margin: auto;
  svg {
    font-size: 6rem;
    animation: ${move} 1s ease-in-out alternate infinite;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.5rem;
  }
`;

export default Audiences;
