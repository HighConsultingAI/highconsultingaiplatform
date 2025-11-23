'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Sidebar from '@components/Sidebar'
import Topbar from '@components/Topbar'

const CanvasArea = dynamic(() => import('@components/CanvasArea'), {
  ssr: false,
  loading: () => (
    <div className="flex-1 bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mb-4"></div>
        <p className="text-gray-600">Loading workflow editor...</p>
      </div>
    </div>
  ),
})

export default function WorkflowEditorPage({ params }) {
  const workflowId = params.id
  const workflowName = workflowId === 'new' ? 'New Workflow' : `Workflow ${workflowId}`

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Topbar workflowName={workflowName} />
        
        <Suspense fallback={
          <div className="flex-1 bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mb-4"></div>
              <p className="text-gray-600">Loading canvas...</p>
            </div>
          </div>
        }>
          <CanvasArea />
        </Suspense>
      </div>
    </div>
  )
}
