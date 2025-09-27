import Link from 'next/link'
import { Plus, FileText, Eye, Edit, Trash2, Search, Filter, Star } from 'lucide-react'
import DashboardLayout from '../layout-dashboard'

// Mock data - replace with actual data from database
const mockProposals = [
  {
    id: '1',
    title: 'Website Redesign Proposal',
    customer: 'Acme Corp',
    status: 'DRAFT',
    totalAmount: 15000,
    createdAt: '2024-01-15',
    updatedAt: '2024-01-20'
  },
  {
    id: '2',
    title: 'Mobile App Development',
    customer: 'TechStart Inc',
    status: 'SENT',
    totalAmount: 45000,
    createdAt: '2024-01-10',
    updatedAt: '2024-01-18'
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    customer: 'Retail Solutions',
    status: 'VIEWED',
    totalAmount: 25000,
    createdAt: '2024-01-05',
    updatedAt: '2024-01-22'
  }
]

const statusColors = {
  DRAFT: 'bg-gray-100 text-gray-800',
  SENT: 'bg-blue-100 text-blue-800',
  VIEWED: 'bg-yellow-100 text-yellow-800',
  SIGNED: 'bg-green-100 text-green-800',
  REJECTED: 'bg-red-100 text-red-800',
  EXPIRED: 'bg-gray-100 text-gray-800'
}

export default function ProposalsPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Proposals</h1>
          <p className="text-gray-600">Manage your proposals and track their progress.</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-6 flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search proposals..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>Status: All</option>
            <option>Draft</option>
            <option>Sent</option>
            <option>Viewed</option>
            <option>Signed</option>
          </select>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Total Proposals</h3>
                <p className="text-2xl font-bold text-gray-900">{mockProposals.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <div className="h-6 w-6 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Active</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {mockProposals.filter(p => p.status === 'SENT' || p.status === 'VIEWED').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <div className="h-6 w-6 bg-yellow-500 rounded-full"></div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Draft</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {mockProposals.filter(p => p.status === 'DRAFT').length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <div className="h-6 w-6 text-green-600 font-bold">$</div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">Total Value</h3>
                <p className="text-2xl font-bold text-gray-900">
                  ${mockProposals.reduce((sum, p) => sum + p.totalAmount, 0).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Proposals List */}
        <div className="space-y-4">
          {mockProposals.map((proposal) => (
            <div key={proposal.id} className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 text-gray-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {proposal.title}
                      </h3>
                      {proposal.status === 'SENT' && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <p className="text-sm text-gray-500 truncate">
                      {proposal.customer}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      ${proposal.totalAmount.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(proposal.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[proposal.status as keyof typeof statusColors]}`}>
                    {proposal.status.toLowerCase()}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Link
                      href={`/proposals/${proposal.id}`}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Eye className="h-4 w-4" />
                    </Link>
                    <Link
                      href={`/proposals/${proposal.id}/edit`}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Edit className="h-4 w-4" />
                    </Link>
                    <button className="text-gray-400 hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
