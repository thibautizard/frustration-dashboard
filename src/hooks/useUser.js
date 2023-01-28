import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";

function useUser() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    supabase.getUser.then((x) => console.log(x));
  }, []);

  return user;
}

export { useUser };
