// app/workflows/[id]/page.jsx
'use client'

import CanvasArea from '@components/CanvasArea'

export default function WorkflowEditor({ params }) {
  const { id } = params

  return (
    <div className="p-4">
      <CanvasArea workflowId={id} />
    </div>
  )
}
