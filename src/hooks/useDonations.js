import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

function useDonations() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const donationsFetch = async () => {
      const { data, error } = await supabase.rpc("donations_by_month");
      setDonations(data);
      console.log("data", data);
    };
    donationsFetch();
  }, []);

  return [donations, setDonations];
}

export default useDonations;
