// app/workflows/page.js
'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function WorkflowsPage(){
  const [workflows, setWorkflows] = useState([])
  const [name,setName] = useState('')
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    fetchWorkflows()
  },[])

  async function fetchWorkflows(){
    const user = (await supabase.auth.getUser()).data?.user
    if(!user) return
    const { data, error } = await supabase.from('workflows').select('*').eq('owner', user.id)
    if(!error) setWorkflows(data || [])
  }

  async function createWorkflow(){
    setLoading(true)
    const user = (await supabase.auth.getUser()).data?.user
    const payload = { name, owner: user?.id }
    const res = await fetch('/api/workflows/create', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    })
    const json = await res.json()
    setLoading(false)
    if(res.ok){
      setName('')
      fetchWorkflows()
      alert('Workflow created')
    } else {
      alert('Error: ' + (json.error?.message || JSON.stringify(json)))
    }
  }

  return (
    <div className="container">
      <h1>Workflows</h1>
      <div className="card" style={{marginTop:12}}>
        <div style={{display:'flex',gap:8}}>
          <input placeholder="Workflow name" value={name} onChange={(e)=>setName(e.target.value)} style={{flex:1,padding:10,borderRadius:6}}/>
          <button className="btn" onClick={createWorkflow} disabled={loading}>{loading ? '...' : 'Create'}</button>
        </div>
      </div>

      <div style={{marginTop:18}}>
        {workflows.length === 0 && <div className="card">No workflows yet</div>}
        {workflows.map(w => (
          <div key={w.id} className="card" style={{marginTop:12, display:'flex', justifyContent:'space-between'}}>
            <div>
              <strong>{w.name}</strong>
              <div style={{color:'var(--muted)'}}>{w.description}</div>
            </div>
            <div style={{alignSelf:'center'}}><a href={`/workflows/${w.id}`}>Open</a></div>
          </div>
        ))}
      </div>
    </div>
  )
}
