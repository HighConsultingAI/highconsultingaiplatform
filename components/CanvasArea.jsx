// components/CanvasArea.jsx
'use client'
import React, { useCallback, useState } from 'react'
import dynamic from 'next/dynamic'
import SimpleNode from './NodeTypes/SimpleNode'

// ReactFlow v11 default export is the component itself
const ReactFlow = dynamic(() => import('reactflow').then(m => m.default), { ssr: false })
const Background = dynamic(() => import('reactflow').then(m => m.Background), { ssr: false })
const Controls = dynamic(() => import('reactflow').then(m => m.Controls), { ssr: false })
const MiniMap = dynamic(() => import('reactflow').then(m => m.MiniMap), { ssr: false })

export default function CanvasArea({ workflowId }) {
  const [nodes, setNodes] = useState([
    { id: '1', type: 'simple', position: { x: 50, y: 50 }, data: { label: 'Trigger', desc: 'Starts workflow' } },
    { id: '2', type: 'simple', position: { x: 360, y: 80 }, data: { label: 'HTTP Request', desc: 'Calls API' } }
  ])

  const [edges, setEdges] = useState([
    { id: 'e1-2', source: '1', target: '2', animated: false }
  ])

  const nodeTypes = { simple: SimpleNode }

  const onNodesChange = useCallback((changes) => {
    // no-op for now
  }, [])

  return (
    <div className="canvas-shell">
      <div style={{ height: 720 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          nodeTypes={nodeTypes}
          fitView
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  )
}
