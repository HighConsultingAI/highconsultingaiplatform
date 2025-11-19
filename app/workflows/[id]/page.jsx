// app/workflows/[id]/page.jsx
'use client'

import { useEffect, useState } from 'react'
import CanvasArea from '../../../components/CanvasArea.jsx'

export default function WorkflowEditor({ params }) {
  const { id } = params
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // placeholder: fetch workflow by id
    setLoading(false)
  }, [id])

  if (loading) return <div className="p-4">Loading workflow...</div>

  return (
    <div className="p-4">
      <CanvasArea workflowId={id} />
    </div>
  )
}
