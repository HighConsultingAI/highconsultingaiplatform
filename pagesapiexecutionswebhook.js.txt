import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

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
