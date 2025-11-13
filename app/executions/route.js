// app/api/executions/webhook/route.js
import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNwZWdvcXRsZ3p2ZWZsbmd3ZmlhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MjgwNTU2MSwiZXhwIjoyMDc4MzgxNTYxfQ.Q9CKx1jT_GQapCbYKceWcfQOJ42YHxOzOuFweQd_KIE
const supabaseAdmin = createServerClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

export async function POST(req) {
  try {
    const body = await req.json()
    const { workflow_id, status, result, execution_id } = body

    const { data, error } = await supabaseAdmin
      .from('executions')
      .insert([{ workflow_id, status, result: JSON.stringify(result), execution_id }])

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }
    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 })
  }
}
