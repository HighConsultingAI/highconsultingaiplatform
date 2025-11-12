import axios from 'axios'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { name, description } = req.body || {}
  try {
    const n8nUrl = process.env.N8N_BASE_URL + '/rest/workflows'
    const axiosConfig = { headers: { 'Content-Type': 'application/json' } }
    if (process.env.N8N_API_KEY) axiosConfig.headers['Authorization'] = `Bearer ${process.env.N8N_API_KEY}`
    else if (process.env.N8N_BASIC_AUTH_USER && process.env.N8N_BASIC_AUTH_PASSWORD) axiosConfig.auth = { username: process.env.N8N_BASIC_AUTH_USER, password: process.env.N8N_BASIC_AUTH_PASSWORD }
    const createResp = await axios.post(n8nUrl, { name: name || 'Untitled Workflow', nodes: [], connections: {} }, axiosConfig)
    const n8nWorkflowId = createResp?.data?.id || createResp?.data?.workflow?.id || createResp?.data
    // Insert into Supabase (owner must be set by you or null)
    const { data, error } = await supabase.from('workflows').insert([{ owner: null, name, description, n8n_workflow_id: String(n8nWorkflowId) }]).select()
    if (error) throw error
    res.status(200).json({ workflow: data[0], n8nWorkflowId })
  } catch (err) {
    console.error(err?.response?.data || err.message)
    res.status(500).json({ error: err?.response?.data || err.message })
  }
}
