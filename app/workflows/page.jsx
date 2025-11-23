import Link from 'next/link'
import Sidebar from '@components/Sidebar'
import Topbar from '@components/Topbar'
import { Plus, Workflow } from 'lucide-react'

export default function WorkflowsPage() {
  const workflows = [
    { id: 1, name: 'Customer Onboarding', status: 'active', lastRun: '2 hours ago' },
    { id: 2, name: 'Invoice Processing', status: 'active', lastRun: '5 hours ago' },
    { id: 3, name: 'Email Campaign', status: 'draft', lastRun: 'Never' },
  ]

  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Topbar workflowName="My Workflows" />
        
        <main className="flex-1 overflow-auto p-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Workflows</h1>
                <p className="text-gray-600 mt-2">Manage and create your automation workflows</p>
              </div>
              
              <Link 
                href="/workflows/new"
                className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Plus size={20} />
                New Workflow
              </Link>
            </div>

            <div className="grid gap-4">
              {workflows.map((workflow) => (
                <Link 
                  key={workflow.id}
                  href={`/workflows/${workflow.id}`}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <Workflow className="text-primary-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {workflow.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Last run: {workflow.lastRun}
                        </p>
                      </div>
                    </div>
                    
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      workflow.status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {workflow.status}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
