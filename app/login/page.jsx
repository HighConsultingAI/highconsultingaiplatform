'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabaseClient'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function signIn() {
    setLoading(true)
    setMessage('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) return setMessage(error.message)
    router.push('/workflows')
  }

  async function signUp() {
    setLoading(true)
    setMessage('')
    const { error } = await supabase.auth.signUp({ email, password })
    setLoading(false)
    if (error) return setMessage(error.message)
    setMessage('Check your email to confirm your account.')
  }

  return (
    <div className="container">
      <h1>Sign in / Sign up</h1>
      <div className="card">
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={signIn} disabled={loading}>{loading ? '...' : 'Sign in'}</button>
          <button onClick={signUp} disabled={loading}>Sign up</button>
        </div>

        {message && <p>{message}</p>}
      </div>
    </div>
  )
}
