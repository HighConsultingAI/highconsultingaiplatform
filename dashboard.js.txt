import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function Dashboard() {
  const [workflows, setWorkflows] = useState([])
  const [name, setName] = useState('')
  const router = useRouter()

  useEffect(() => {
    (async ()=>{
      const { data: session } = await supabase.auth.getSession()
      if (!session?.data?.session) return router.push('/login')
      const uid = session.data.session.user.id
      const { data } = await supabase.from('workflows').select('*').eq('owner', uid)
      setWorkflows(data || [])
    })()
  }, [])

  const createWorkflow = async () => {
    const payload = { name, description: 'Created from dashboard' }
    const res = await axios.post('/api/workflows/create', payload)
    if (res.data?.workflow) {
      setWorkflows(prev => [res.data.workflow, ...prev])
      setName('')
    } else alert('Error creating workflow: ' + JSON.stringify(res.data))
  }

  return (
    <div style={{fontFamily: 'Arial, sans-serif', background:'#000', color:'#fff', minHeight:'100vh', padding:40}}>
      <div style={{maxWidth:900, margin:'0 auto'}}>
        <img src="/logo.svg" alt="HCAI" style={{height:60}}/>
        <h1>Dashboard</h1>
        <div>
          <input placeholder="Workflow name" value={name} onChange={e=>setName(e.target.value)} style={{width:'60%', padding:8, marginRight:8}} />
          <button onClick={createWorkflow} style={{padding:'8px 12px'}}>Create Workflow</button>
        </div>
        <h2>Your workflows</h2>
        <ul>
          {workflows.map(w => (
            <li key={w.id} style={{marginBottom:8}}>
              <strong>{w.name}</strong> — n8n id: {w.n8n_workflow_id || '—'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
