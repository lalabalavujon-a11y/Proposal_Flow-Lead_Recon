'use client'

import DashboardLayout from '../layout-dashboard'
import { Download, Calendar, Plus, TrendingUp, Users, FileText, DollarSign, Activity } from 'lucide-react'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header Section */}
        <div className="bg-white shadow-sm border-b">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Enterprise Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome back! Here's your comprehensive business overview.</p>
              </div>
              <div className="flex items-center space-x-3">
                <button 
                  className="bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center space-x-2 transition-colors text-gray-900 hover:text-black shadow-sm"
                  onClick={() => {
                    console.log('Export Data clicked');
                    alert('Export functionality will be implemented');
                  }}
                >
                  <Download className="h-4 w-4 text-gray-700" />
                  <span className="font-semibold">Export Data</span>
                </button>
                <button 
                  className="bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center space-x-2 transition-colors text-gray-900 hover:text-black shadow-sm"
                  onClick={() => {
                    console.log('View Calendar clicked');
                    alert('Calendar functionality will be implemented');
                  }}
                >
                  <Calendar className="h-4 w-4 text-gray-700" />
                  <span className="font-semibold">View Calendar</span>
                </button>
                <button 
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 flex items-center space-x-2 transition-colors shadow-sm"
                  onClick={() => {
                    console.log('New Proposal clicked');
                    window.location.href = '/proposals/enhanced';
                  }}
                >
                  <Plus className="h-4 w-4" />
                  <span className="font-semibold">New Proposal</span>
                </button>
              </div>
            </div>
            
            {/* System Status */}
            <div className="flex items-center space-x-2 mt-3">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">System Online</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">Last updated: 2 minutes ago</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Total Proposals</h3>
                  <p className="text-2xl font-bold text-gray-900">247</p>
                  <p className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12% from last month
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Active Clients</h3>
                  <p className="text-2xl font-bold text-gray-900">89</p>
                  <p className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8% from last month
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center">
                <div className="p-2 bg-yellow-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Revenue</h3>
                  <p className="text-2xl font-bold text-gray-900">$124.5K</p>
                  <p className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +23% from last month
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Activity className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">Conversion Rate</h3>
                  <p className="text-2xl font-bold text-gray-900">68.2%</p>
                  <p className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +5% from last month
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="px-6 py-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Recent Proposals</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Q4 Marketing Campaign</p>
                        <p className="text-xs text-gray-500">Acme Corp • $45,000</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">Approved</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Website Redesign</p>
                        <p className="text-xs text-gray-500">TechStart Inc • $32,000</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">Pending</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Brand Identity Package</p>
                        <p className="text-xs text-gray-500">Creative Co • $18,500</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">Approved</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border">
              <div className="px-6 py-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Plus className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">New Client</p>
                        <p className="text-xs text-gray-500">Add prospect</p>
                      </div>
                    </div>
                  </button>
                  
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Template</p>
                        <p className="text-xs text-gray-500">Use template</p>
                      </div>
                    </div>
                  </button>
                  
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Users className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Team</p>
                        <p className="text-xs text-gray-500">Manage team</p>
                      </div>
                    </div>
                  </button>
                  
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Activity className="h-4 w-4 text-yellow-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Analytics</p>
                        <p className="text-xs text-gray-500">View reports</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}