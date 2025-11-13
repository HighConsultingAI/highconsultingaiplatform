import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const router = useRouter()

  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password: pass })
    if (error) return alert(error.message)
    router.push('/dashboard')
  }

  const signUp = async () => {
    const { data, error } = await supabase.auth.signUp({ email, password: pass })
    if (error) return alert(error.message)
    alert('Check your email to confirm sign-up (or approve in Supabase Auth settings).')
  }

  return (
    <div style={{fontFamily:'Arial, sans-serif', background:'#000', color:'#fff', minHeight:'100vh', padding:40}}>
      <div style={{maxWidth:600, margin:'0 auto'}}>
        <img src="/logo.svg" alt="HCAI" style={{height:60}}/>
        <h2>Sign in / Sign up</h2>
        <input placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%', padding:8, marginBottom:10}} />
        <input placeholder="password" type="password" value={pass} onChange={e=>setPass(e.target.value)} style={{width:'100%', padding:8, marginBottom:10}} />
        <div style={{display:'flex', gap:10}}>
          <button onClick={signIn} style={{padding:'8px 12px'}}>Sign in</button>
          <button onClick={signUp} style={{padding:'8px 12px'}}>Sign up</button>
        </div>
      </div>
    </div>
  )
}
