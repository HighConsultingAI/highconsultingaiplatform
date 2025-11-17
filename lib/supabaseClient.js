// lib/supabaseClient.js (client-safe)
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.https://cpegoqtlgzveflngwfia.supabase.co
const supabaseAnonKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwZWdvcXRsZ3p2ZWZsbmd3ZmlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4MDU1NjEsImV4cCI6MjA3ODM4MTU2MX0.DH-df0Mxq6qlGA4cMQJLL-ANCpVAnczkN_DoC7vfwT8
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
