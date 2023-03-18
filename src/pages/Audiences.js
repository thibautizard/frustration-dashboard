import { useState, useEffect } from "react";
import { FaPaintRoller } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
import { createClient } from "@supabase/supabase-js";

const move = keyframes`
  from {
    transform: translateY(-20px);
  }

  to {
    transform: translateY(0px);
  }
`;

const Audiences = styled(({ className }) => {
  const [data, setData] = useState([1]);

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const supabase = createClient(
        "https://mzupudupmctanfznecnz.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16dXB1ZHVwbWN0YW5mem5lY256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIyNTk0MzEsImV4cCI6MTk4NzgzNTQzMX0.Y5JeH5ymjzt68sSq9Iz6iKkGa8j9Mo70Cd8WhoLiob0"
      );
      const { data, error } = await supabase.from("balance").select("*");
      console.log(data);
      // set state when the data received
      setData(data[0]);
    };

    dataFetch();
  }, []);

  return (
    <div className={className}>
      <FaPaintRoller />
      <p>En travaux {data.available}</p>
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
