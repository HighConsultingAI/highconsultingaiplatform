// components/Sidebar.jsx
'use client'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 min-h-screen p-4 text-white flex flex-col">
      <div className="brand mb-6">
        <div className="logo w-10 h-10 rounded bg-white text-black flex items-center justify-center mb-2">H</div>
        <div className="font-semibold">High Consulting AI</div>
        <div className="text-xs text-zinc-400">Automation</div>
      </div>

      <div className="mb-4">
        <button className="w-full py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-sm">Create</button>
      </div>

      <nav className="flex flex-col gap-2">
        <Link className="block p-2 rounded hover:bg-zinc-800" href="/workflows">Workflows</Link>
        <Link className="block p-2 rounded hover:bg-zinc-800" href="/executions">Executions</Link>
        <Link className="block p-2 rounded hover:bg-zinc-800" href="/credentials">Credentials</Link>
      </nav>

      <div className="mt-auto text-xs text-zinc-500">v0.1.0</div>
    </aside>
  )
}
