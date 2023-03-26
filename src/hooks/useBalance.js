import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";

function useBalance() {
  const [balance, setBalance] = useState({});

  useEffect(() => {
    const balanceFetch = async () => {
      const { data, error } = await supabase.from("balance").select("*");
      setBalance(data[0]);
    };
    balanceFetch();
  }, []);

  return [balance, setBalance];
}

export default useBalance;
