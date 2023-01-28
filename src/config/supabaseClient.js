import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mzupudupmctanfznecnz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16dXB1ZHVwbWN0YW5mem5lY256Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIyNTk0MzEsImV4cCI6MTk4NzgzNTQzMX0.Y5JeH5ymjzt68sSq9Iz6iKkGa8j9Mo70Cd8WhoLiob0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
