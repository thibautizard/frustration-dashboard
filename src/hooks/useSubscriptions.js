import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

function useSubscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const subscriptionsFetch = async () => {

        const { data, error } = await supabase.rpc("subscriptions_by_month");
      setSubscriptions(data);
    };
    subscriptionsFetch();
  }, []);

  return [subscriptions, setSubscriptions];
}

export default useSubscriptions;
