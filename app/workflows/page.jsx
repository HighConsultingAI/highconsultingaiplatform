// app/workflows/page.jsx
'use client'

import Sidebar from '@components/Sidebar'
import Topbar from '@components/Topbar'
import CanvasArea from '@components/CanvasArea'

export default function WorkflowsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <main className="p-6">
          <h2 className="text-xl font-semibold mb-4">Workflows</h2>
          <CanvasArea />
        </main>
      </div>
    </div>
  )
}
