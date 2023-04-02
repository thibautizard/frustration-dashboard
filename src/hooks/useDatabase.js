import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

function useDatabase() {
  const [donations, setDonations] = useState([]);
  const [events, setEvents] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [subscriptionsType, setSubscriptionsType] = useState([]);
  const [balance, setBalance] = useState({});

  useEffect(() => {
    const donationsFetch = async () => {
      const { data, error } = await supabase.rpc("donations_by_month");
      if (error) console.error(error);
      setDonations(data);
    };

    const subscriptionsFetch = async () => {
      const { data, error } = await supabase.rpc("subscriptions_by_month");
      if (error) console.error(error);
      setSubscriptions(data);
    };

    const subscriptionsTypeFetch = async () => {
      const { data, error } = await supabase.rpc("subscriptions_type_by_month");
      if (error) console.error(error);
      setSubscriptionsType(data);
    };

    const eventsFetch = async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: false });
      setEvents(data);
    };

    const balanceFetch = async () => {
      const { data, error } = await supabase.from("balance").select("*");
      setBalance(data[0]);
    };

    subscriptionsTypeFetch();
    subscriptionsFetch();
    donationsFetch();
    eventsFetch();
    balanceFetch();
  }, []);

  return { subscriptions, subscriptionsType, donations, events, balance };
}

export default useDatabase;
