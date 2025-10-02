'use client'

import DashboardLayout from '../layout-dashboard'
import { Download, Calendar, Plus, TrendingUp, Users, FileText, DollarSign, Activity, Clock, Star, Zap, AlertCircle } from 'lucide-react'

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
                  <p className="text-2xl font-bold text-gray-900">24</p>
                  <p className="text-xs text-gray-600">24 active proposals</p>
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
                  <p className="text-2xl font-bold text-gray-900">12</p>
                  <p className="text-xs text-gray-600">12 engaged clients</p>
                  <p className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +3 new clients
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
                  <h3 className="text-sm font-medium text-gray-500">Monthly Revenue</h3>
                  <p className="text-2xl font-bold text-gray-900">$45,600</p>
                  <p className="text-xs text-gray-600">$125K total revenue</p>
                  <p className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8% from last month
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
                  <p className="text-2xl font-bold text-gray-900">68%</p>
                  <p className="text-xs text-gray-600">72% win rate</p>
                  <p className="text-sm text-green-600 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +5% improvement
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <DollarSign className="h-5 w-5 text-indigo-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-xs font-medium text-gray-500">Pipeline Value</h3>
                  <p className="text-lg font-bold text-gray-900">$89K</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-2 w-2 mr-1" />
                    +15%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <DollarSign className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-xs font-medium text-gray-500">Avg Deal Size</h3>
                  <p className="text-lg font-bold text-gray-900">$5.2K</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-2 w-2 mr-1" />
                    +3%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Clock className="h-5 w-5 text-orange-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-xs font-medium text-gray-500">Response Time</h3>
                  <p className="text-lg font-bold text-gray-900">2.4h</p>
                  <p className="text-xs text-red-600 flex items-center">
                    <TrendingUp className="h-2 w-2 mr-1" />
                    -12%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Star className="h-5 w-5 text-amber-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-xs font-medium text-gray-500">Satisfaction</h3>
                  <p className="text-lg font-bold text-gray-900">4.8</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-2 w-2 mr-1" />
                    +0.2
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center">
                <div className="p-2 bg-cyan-100 rounded-lg">
                  <Zap className="h-5 w-5 text-cyan-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-xs font-medium text-gray-500">Automated</h3>
                  <p className="text-lg font-bold text-gray-900">15</p>
                  <p className="text-xs text-green-600 flex items-center">
                    <TrendingUp className="h-2 w-2 mr-1" />
                    +5
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border">
              <div className="flex items-center">
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                </div>
                <div className="ml-3">
                  <h3 className="text-xs font-medium text-gray-500">Pending</h3>
                  <p className="text-lg font-bold text-gray-900">3</p>
                  <p className="text-xs text-red-600 flex items-center">
                    <TrendingUp className="h-2 w-2 mr-1" />
                    -2
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="px-6 py-4 border-b flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">Live</span>
                  <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Proposal signed by Acme Corporation for $15,000</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">completed</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Proposal sent to TechStart Inc for $8,500</p>
                        <p className="text-xs text-gray-500">4 hours ago</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-semibold bg-orange-100 text-orange-800 rounded-full">pending</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Meeting completed with Global Solutions</p>
                        <p className="text-xs text-gray-500">1 day ago</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">completed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border">
              <div className="px-6 py-4 border-b flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Tasks</h3>
                <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Follow up with Acme Corp</p>
                        <p className="text-xs text-gray-500">Due Today • 30 min</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded-full">high</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <Clock className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Prepare Q4 proposal</p>
                        <p className="text-xs text-gray-500">Due Tomorrow • 2 hours</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-semibold bg-orange-100 text-orange-800 rounded-full">medium</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Users className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">Client onboarding call</p>
                        <p className="text-xs text-gray-500">Due Friday • 1 hour</p>
                      </div>
                    </div>
                    <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">low</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}