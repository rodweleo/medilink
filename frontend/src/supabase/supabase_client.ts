import { createClient } from '@supabase/supabase-js';

export const SupabaseClient = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANION_KEY)