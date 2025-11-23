'use client'

import { Save, Play, User } from 'lucide-react'

export default function Topbar({ workflowName = 'Untitled Workflow' }) {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-800">{workflowName}</h2>
        <span className="text-sm text-gray-500">Last saved: 2 minutes ago</span>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
          <Save size={18} />
          <span className="font-medium">Save</span>
        </button>

        <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
          <Play size={18} />
          <span className="font-medium">Run</span>
        </button>

        <button className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors">
          <User size={20} />
        </button>
      </div>
    </div>
  )
}
