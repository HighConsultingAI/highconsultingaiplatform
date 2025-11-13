// app/login/page.js
'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function signIn() {
    setLoading(true)
    setMessage('')
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    setLoading(false)
    if (error) {
      setMessage(error.message)
      return
    }
    router.push('/workflows')
  }

  async function signUp() {
    setLoading(true)
    setMessage('')
    const { data, error } = await supabase.auth.signUp({ email, password })
    setLoading(false)
    if (error) {
      setMessage(error.message)
      return
    }
    setMessage('Check your email to confirm. You can sign in after confirmation.')
  }

  return (
    <div className="container">
      <h1>Sign in / Sign up</h1>
      <div className="card" style={{maxWidth:480, marginTop:16}}>
        <label style={{display:'block',marginBottom:8}}>Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} style={{width:'100%',padding:10,marginBottom:12,borderRadius:6}}/>
        <label style={{display:'block',marginBottom:8}}>Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{width:'100%',padding:10,marginBottom:12,borderRadius:6}}/>
        <div style={{display:'flex',gap:12}}>
          <button className="btn" onClick={signIn} disabled={loading}>{loading ? '...' : 'Sign in'}</button>
          <button className="btn" style={{background:'#6b21a8'}} onClick={signUp} disabled={loading}>{loading ? '...' : 'Sign up'}</button>
        </div>
        {message && <p style={{marginTop:10,color:'#ffdcdc'}}>{message}</p>}
      </div>
    </div>
  )
}
