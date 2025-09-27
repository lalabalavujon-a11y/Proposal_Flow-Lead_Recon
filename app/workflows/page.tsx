'use client'

import { useState } from 'react'
import DashboardLayout from '../layout-dashboard'
import { Plus, Play, Pause, Edit, Trash2, Search, Filter, Clock, CheckCircle, AlertCircle } from 'lucide-react'

// Mock workflow data
const mockWorkflows = [
  {
    id: '1',
    name: 'New Client Onboarding',
    description: 'Automated workflow for new client setup and initial proposal',
    status: 'ACTIVE',
    lastRun: '2024-01-20T10:30:00Z',
    nextRun: '2024-01-21T09:00:00Z',
    steps: 5,
    successRate: 95
  },
  {
    id: '2',
    name: 'Proposal Follow-up',
    description: 'Follow up sequence for sent proposals',
    status: 'PAUSED',
    lastRun: '2024-01-19T14:15:00Z',
    nextRun: null,
    steps: 3,
    successRate: 78
  },
  {
    id: '3',
    name: 'Contract Renewal',
    description: 'Automated contract renewal reminders and process',
    status: 'ACTIVE',
    lastRun: '2024-01-18T16:45:00Z',
    nextRun: '2024-01-25T10:00:00Z',
    steps: 4,
    successRate: 88
  }
]

const statusColors = {
  ACTIVE: 'bg-green-100 text-green-800',
  PAUSED: 'bg-yellow-100 text-yellow-800',
  DRAFT: 'bg-gray-100 text-gray-800',
  ERROR: 'bg-red-100 text-red-800'
}

const statusIcons = {
  ACTIVE: <CheckCircle className="h-4 w-4" />,
  PAUSED: <Pause className="h-4 w-4" />,
  DRAFT: <Clock className="h-4 w-4" />,
  ERROR: <AlertCircle className="h-4 w-4" />
}

export default function WorkflowsPage() {
  const [workflows, setWorkflows] = useState(mockWorkflows)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredWorkflows = workflows.filter(workflow =>
    workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workflow.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleWorkflowStatus = (id: string) => {
    setWorkflows(workflows.map(workflow => 
      workflow.id === id 
        ? { 
            ...workflow, 
            status: workflow.status === 'ACTIVE' ? 'PAUSED' : 'ACTIVE',
            nextRun: workflow.status === 'ACTIVE' ? null : new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
          }
        : workflow
    ))
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Not scheduled'
    return new Date(dateString).toLocaleDateString() + ' ' + new Date(dateString).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
  }

  return (
    <DashboardLayout>
      <div className="p-6 pt-0">
        {/* Header */}
        <div className="mb-6 pt-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Workflows</h1>
            <p className="text-gray-600">Automate your business processes and streamline operations.</p>
          </div>
          <button
            onClick={() => {
              console.log('New workflow clicked');
              alert('New workflow creation will be implemented');
            }}
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>New Workflow</span>
          </button>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search workflows..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>Status: All</option>
            <option>Active</option>
            <option>Paused</option>
            <option>Draft</option>
          </select>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Play className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Total Workflows</h3>
                <p className="text-2xl font-bold text-gray-900">{workflows.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Active</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {workflows.filter(w => w.status === 'ACTIVE').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Pause className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Paused</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {workflows.filter(w => w.status === 'PAUSED').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Avg Success Rate</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {Math.round(workflows.reduce((sum, w) => sum + w.successRate, 0) / workflows.length)}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Workflows List */}
        <div className="space-y-4">
          {filteredWorkflows.map((workflow) => (
            <div key={workflow.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Play className="h-6 w-6 text-gray-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="text-lg font-medium text-gray-900 truncate">
                        {workflow.name}
                      </h3>
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${statusColors[workflow.status as keyof typeof statusColors]}`}>
                        {statusIcons[workflow.status as keyof typeof statusIcons]}
                        <span className="ml-1">{workflow.status.toLowerCase()}</span>
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">
                      {workflow.description}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>{workflow.steps} steps</span>
                      <span>{workflow.successRate}% success rate</span>
                      <span>Last run: {formatDate(workflow.lastRun)}</span>
                      {workflow.nextRun && <span>Next: {formatDate(workflow.nextRun)}</span>}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleWorkflowStatus(workflow.id)}
                    className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                      workflow.status === 'ACTIVE' 
                        ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' 
                        : 'bg-green-100 text-green-800 hover:bg-green-200'
                    }`}
                  >
                    {workflow.status === 'ACTIVE' ? 'Pause' : 'Start'}
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 p-1">
                    <Edit className="h-4 w-4" />
                  </button>
                  <button className="text-gray-400 hover:text-red-600 p-1">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredWorkflows.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Play className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No workflows found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm ? 'Try adjusting your search terms.' : 'Get started by creating your first workflow.'}
            </p>
            {!searchTerm && (
              <button
                onClick={() => {
                  console.log('Create workflow clicked');
                  alert('Workflow creation will be implemented');
                }}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
              >
                Create Workflow
              </button>
            )}
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
