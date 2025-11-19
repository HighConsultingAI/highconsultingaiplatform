'use client'

import Siderbar from '../../components/Siderbar.jsx'
import Topbar from '../../components/Topbar.jsx'
import CanvasArea from '../../components/CanvasArea.jsx'

export default function WorkflowsPage() {
  return (
    <div className="flex">
      <Siderbar />
      <div className="flex-1">
        <Topbar />
        <CanvasArea />
      </div>
    </div>
  )
}
