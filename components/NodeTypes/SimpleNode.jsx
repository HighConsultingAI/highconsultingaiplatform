'use client'

import { Handle, Position } from 'reactflow'
import { Database, Mail, Webhook } from 'lucide-react'

const iconMap = {
  database: Database,
  email: Mail,
  webhook: Webhook,
}

export default function SimpleNode({ data }) {
  const Icon = iconMap[data.icon] || Database

  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg shadow-md min-w-[200px]">
      <Handle type="target" position={Position.Top} className="w-3 h-3 !bg-primary-500" />
      
      <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-primary-100 rounded flex items-center justify-center">
            <Icon size={18} className="text-primary-600" />
          </div>
          <div>
            <div className="font-semibold text-gray-800">{data.label || 'Node'}</div>
            <div className="text-xs text-gray-500">{data.type || 'Action'}</div>
          </div>
        </div>
        
        {data.description && (
          <p className="text-sm text-gray-600 mt-2">{data.description}</p>
        )}
      </div>

      <Handle type="source" position={Position.Bottom} className="w-3 h-3 !bg-primary-500" />
    </div>
  )
}
