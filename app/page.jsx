import Link from 'next/link'
import { ArrowRight, Workflow, Zap, Shield } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary-600">High Consulting AI</div>
            <Link 
              href="/workflows" 
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Automate Your Workflows
            <br />
            <span className="text-primary-600">With AI-Powered Intelligence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build powerful automation workflows with our visual editor. 
            Connect your apps, automate tasks, and scale your business.
          </p>
          <Link 
            href="/workflows" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white text-lg rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
          >
            Start Building
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Workflow className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Visual Workflow Builder</h3>
            <p className="text-gray-600">
              Drag and drop nodes to create complex automation workflows without writing code.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-gray-600">
              Execute workflows in real-time with our optimized infrastructure and smart routing.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
            <p className="text-gray-600">
              Bank-level encryption and compliance with industry standards to keep your data safe.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
