import Link from 'next/link'
import { FileText, Users, Zap, Shield } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-primary-600" />
              <h1 className="ml-2 text-2xl font-bold text-gray-900">ProposalFlow</h1>
            </div>
            <nav className="flex space-x-8">
              <Link href="/proposals" className="text-gray-500 hover:text-gray-900">
                Proposals
              </Link>
              <Link href="/customers" className="text-gray-500 hover:text-gray-900">
                Customers
              </Link>
              <Link href="/theresa" className="text-gray-500 hover:text-gray-900">
                Theresa AI
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            AI-Powered Proposal Generation
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Create professional proposals in minutes with Theresa, your intelligent AI assistant. 
            Streamline your sales process and close more deals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/proposals/new"
              className="rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Create New Proposal
            </Link>
            <Link
              href="/theresa"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600"
            >
              Meet Theresa <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">AI-Powered</h3>
              <p className="mt-2 text-sm text-gray-600">
                Theresa uses advanced AI to generate compelling proposal content
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Professional Templates</h3>
              <p className="mt-2 text-sm text-gray-600">
                Industry-specific templates for every type of proposal
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Customer Management</h3>
              <p className="mt-2 text-sm text-gray-600">
                Track customers and manage proposal relationships
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Secure Signatures</h3>
              <p className="mt-2 text-sm text-gray-600">
                Built-in digital signature capabilities
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
