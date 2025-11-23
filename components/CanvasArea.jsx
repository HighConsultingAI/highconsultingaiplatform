'use client'

import { useCallback } from 'react'
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow'
import 'reactflow/dist/style.css'

import SimpleNode from '@components/NodeTypes/SimpleNode'

const nodeTypes = {
  simpleNode: SimpleNode,
}

const initialNodes = [
  {
    id: '1',
    type: 'simpleNode',
    position: { x: 250, y: 100 },
    data: { 
      label: 'Start Node', 
      icon: 'webhook',
      type: 'Trigger',
      description: 'Workflow starts here'
    },
  },
  {
    id: '2',
    type: 'simpleNode',
    position: { x: 250, y: 300 },
    data: { 
      label: 'Process Data', 
      icon: 'database',
      type: 'Action',
      description: 'Transform and process'
    },
  },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
]

export default function CanvasArea() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  return (
    <div className="flex-1 bg-gray-50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="bg-gray-50"
      >
        <Controls />
        <MiniMap 
          nodeColor={(node) => {
            return '#3b82f6'
          }}
          className="bg-white border border-gray-200"
        />
        <Background variant="dots" gap={12} size={1} color="#d1d5db" />
      </ReactFlow>
    </div>
  )
}
