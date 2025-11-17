// app/api/workflows/create/route.js - server
import { NextResponse } from 'next/server'
import axios from 'axios'
import { createServerClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.import axios from 'axios'
import { createServerClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

const N8N_BASE_URL = process.env.N8N_BASE_URL
const N8N_API_KEY = process.env.N8N_API_KEY

const SUPABASE_SERVICE_ROLE_KEY = process.env. SUPABASE_SERVICE_ROLE_KEY
const N8N_BASE_URL = process.env.N8N_BASE_URL
const N8N_API_KEY = process.env.N8N_API_KEY

const supabaseAdmin = createServerClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  // server-side
})

export async function POST(req) {
  try {
    const body = await req.json()
    const { name = 'Untitled Workflow', description = '', owner = null } = body

    const workflowPayload = {
      name,
      nodes: [],
      connections: {}
    }

    const headers = {}
    if (N8N_API_KEY) headers['Authorization'] = `Bearer ${N8N_API_KEY}`

    const createResp = await axios.post(`${N8N_BASE_URL}/workflows`, workflowPayload, { headers })
    const n8nWorkflow = createResp.data

    const insertPayload = {
      name,
      description,
      n8n_workflow_id: n8nWorkflow.id || null,
      owner: owner || null
    }

    const { data, error } = await supabaseAdmin
      .from('workflows')
      .insert([insertPayload])
      .select()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ db: data[0], n8nWorkflow }, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 })
  }
}
