'use client'

import Link from 'next/link'
import { Workflow, Home, Settings, Plus } from 'lucide-react'

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col">
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">High Consulting AI</h1>
        <p className="text-sm text-gray-400">Workflow Platform</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Link 
          href="/" 
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Home size={20} />
          <span>Home</span>
        </Link>

        <Link 
          href="/workflows" 
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Workflow size={20} />
          <span>Workflows</span>
        </Link>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors text-left">
          <Plus size={20} />
          <span>New Workflow</span>
        </button>

        <Link 
          href="/settings" 
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Settings size={20} />
          <span>Settings</span>
        </Link>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <div className="text-xs text-gray-400">
          <p>© 2024 High Consulting</p>
        </div>
      </div>
    </div>
  )
}
