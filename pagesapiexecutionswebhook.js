import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.https://cpegoqtlgzveflngwfia.supabase.co, process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwZWdvcXRsZ3p2ZWZsbmd3ZmlhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjgwNTU2MSwiZXhwIjoyMDc4MzgxNTYxfQ.Q9CKx1jT_GQapCbYKceWcfQOJ42YHxOzOuFweQd_KIE)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const payload = req.body
  const { workflow_id, status, result } = payload
  try {
    const { data, error } = await supabase.from('executions').insert([{ workflow_id, status, result }]).select()
    if (error) return res.status(500).json({ error })
    return res.status(200).json({ success: true, row: data[0] })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

