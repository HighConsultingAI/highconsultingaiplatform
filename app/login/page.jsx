// app/login/page.jsx
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@lib/supabaseClient'

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
    <div className="container p-6">
      <h1 className="text-2xl font-bold">Sign in / Sign up</h1>
      <div className="card mt-4 p-4 max-w-md">
        <label className="block mb-2">Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-2 rounded border mb-3" />

        <label className="block mb-2">Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full p-2 rounded border mb-3" />

        <div className="flex gap-3">
          <button className="btn" onClick={signIn} disabled={loading}>{loading ? '...' : 'Sign in'}</button>
          <button className="btn bg-purple-600 text-white" onClick={signUp} disabled={loading}>{loading ? '...' : 'Sign up'}</button>
        </div>

        {message && <p className="mt-3 text-sm text-red-400">{message}</p>}
      </div>
    </div>
  )
}
