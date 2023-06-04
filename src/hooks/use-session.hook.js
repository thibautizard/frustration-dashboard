import supabase from "../config/supabaseClient";
import { useState, useEffect } from "react";

function useSession() {
  const [session, setSession] = useState(null);

  supabase.auth.refreshSession();
  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => setSession(session));
    supabase.auth.onAuthStateChange((_event, session) => setSession(session));
  }, []);

  return session;
}

export { useSession };
