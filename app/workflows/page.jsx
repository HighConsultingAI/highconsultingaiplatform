/'use client'

import Sidebar from '../../components/Sidebar'
import Topbar from '../../components/Topbar'
import CanvasArea from '../../components/CanvasArea'

export default function WorkflowsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <CanvasArea />
      </div>
    </div>
  )
}
