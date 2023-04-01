import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

function useEvents() {
  const [events, setEvents] = useState([{}]);

  useEffect(() => {
    const eventsFetch = async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: false });
      setEvents(data);
    };

    eventsFetch();
  }, []);

  return [events, setEvents];
}

export default useEvents;
