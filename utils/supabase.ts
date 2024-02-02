import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL || "";
const SUPABASE_ANON = process.env.SUPABASE_ANON || "";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

export { supabase };
