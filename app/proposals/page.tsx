'use client'

import Link from 'next/link'
import { Plus, FileText, Eye, Edit, Trash2, Search, Filter, Star, Bell, User, ChevronDown } from 'lucide-react'

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
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-yellow-500" />
                <span className="ml-2 text-xl font-bold text-gray-900">ProposalFlow</span>
              </div>
              <div className="text-xs text-gray-500">Powered by Lead Recon</div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  className="block w-80 pl-8 pr-3 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Search clients, proposals..."
                  type="search"
                />
              </div>
              
              <button className="p-2 text-gray-400 hover:text-gray-600 relative">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"></span>
              </button>
              
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <ChevronDown className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Proposals</h1>
              <p className="text-gray-600 mt-2">Manage your proposals and track their progress.</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
                <option>Status: All</option>
                <option>Draft</option>
                <option>Sent</option>
                <option>Viewed</option>
                <option>Signed</option>
              </select>
              <button 
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 flex items-center space-x-2 transition-colors shadow-sm"
                onClick={() => {
                  window.location.href = '/proposals/enhanced';
                }}
              >
                <Plus className="h-4 w-4" />
                <span className="font-semibold">New Proposal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search proposals..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
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
            <div key={proposal.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-gray-600" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-medium text-gray-900 truncate">
                        {proposal.title}
                      </h3>
                      {proposal.status === 'SENT' && (
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      )}
                    </div>
                    <p className="text-sm text-gray-500 truncate">
                      {proposal.customer}
                    </p>
                    <p className="text-xs text-gray-400">
                      Updated {new Date(proposal.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">
                      ${proposal.totalAmount.toLocaleString()}
                    </p>
                  </div>
                  <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${statusColors[proposal.status as keyof typeof statusColors]}`}>
                    {proposal.status.toLowerCase()}
                  </span>
                  <div className="flex items-center space-x-3">
                    <Link
                      href={`/proposals/${proposal.id}`}
                      className="text-gray-400 hover:text-blue-600 p-2 rounded-lg hover:bg-blue-50"
                      title="View"
                    >
                      <Eye className="h-5 w-5" />
                    </Link>
                    <Link
                      href={`/proposals/${proposal.id}/edit`}
                      className="text-gray-400 hover:text-yellow-600 p-2 rounded-lg hover:bg-yellow-50"
                      title="Edit"
                    >
                      <Edit className="h-5 w-5" />
                    </Link>
                    <button 
                      className="text-gray-400 hover:text-red-600 p-2 rounded-lg hover:bg-red-50"
                      title="Delete"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}