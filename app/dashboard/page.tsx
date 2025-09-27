import DashboardLayout from '../layout-dashboard'

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Enterprise Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your comprehensive business overview.</p>
        </div>

        {/* System Status */}
        <div className="mb-6 flex items-center space-x-2">
          <div className="h-2 w-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">System Online</span>
          <span className="text-sm text-gray-500">Last updated: 2 minutes ago</span>
        </div>

        {/* Quick Actions */}
        <div className="mb-8 flex items-center space-x-4">
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
            <span>Export Data</span>
          </button>
          <button className="bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 flex items-center space-x-2">
            <span>View Calendar</span>
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 flex items-center space-x-2">
            <span>New Proposal</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Total Proposals</h3>
            <p className="text-3xl font-bold text-gray-900">24</p>
            <p className="text-sm text-gray-600 mt-1">24 active proposals</p>
            <p className="text-sm text-green-600 mt-1">+12% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Active Clients</h3>
            <p className="text-3xl font-bold text-gray-900">12</p>
            <p className="text-sm text-gray-600 mt-1">12 engaged clients</p>
            <p className="text-sm text-green-600 mt-1">+3 new clients</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Monthly Revenue</h3>
            <p className="text-3xl font-bold text-gray-900">$45,600</p>
            <p className="text-sm text-gray-600 mt-1">$125K total revenue</p>
            <p className="text-sm text-green-600 mt-1">+8% from last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Conversion Rate</h3>
            <p className="text-3xl font-bold text-gray-900">68%</p>
            <p className="text-sm text-gray-600 mt-1">72% win rate</p>
            <p className="text-sm text-green-600 mt-1">+5% improvement</p>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Pipeline Value</h3>
                <p className="text-2xl font-bold text-gray-900">$89K</p>
              </div>
              <span className="text-sm text-green-600">+15%</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Avg Deal Size</h3>
                <p className="text-2xl font-bold text-gray-900">$5.2K</p>
              </div>
              <span className="text-sm text-green-600">+3%</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Response Time</h3>
                <p className="text-2xl font-bold text-gray-900">2.4h</p>
              </div>
              <span className="text-sm text-red-600">-12%</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-blue-600">AC</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Proposal signed by Acme Corporation for $15,000</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">completed</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-yellow-600">TI</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Proposal sent to TechStart Inc for $8,500</p>
                  <p className="text-xs text-gray-500">4 hours ago</p>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">pending</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-green-600">GS</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">Meeting completed with Global Solutions</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">completed</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Tasks</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Follow up with Acme Corp</p>
                  <p className="text-xs text-gray-500">Due Today • 30 min</p>
                </div>
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">high</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Prepare Q4 proposal</p>
                  <p className="text-xs text-gray-500">Due Tomorrow • 2 hours</p>
                </div>
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">medium</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">Client onboarding call</p>
                  <p className="text-xs text-gray-500">Due Friday • 1 hour</p>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">low</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
