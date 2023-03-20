import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

function useSubscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const subscriptionsFetch = async () => {
      const { data, error } = await supabase
        .from("balance_transactions")
        .select("amount, net, created")
        .eq("description", "subscription_creation");
      setSubscriptions(data);
    };
    subscriptionsFetch();
  }, []);

  return [subscriptions, setSubscriptions];
}

export default useSubscriptions;
