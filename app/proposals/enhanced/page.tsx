'use client'

import { useState, useEffect } from 'react'
import { Bot, FileText, Users, Zap, Shield, CheckCircle, ArrowRight, Sparkles, User } from 'lucide-react'

interface Customer {
  id: string
  name: string
  email: string
  company?: string
  phone?: string
}

export default function EnhancedProposalsPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const [customers, setCustomers] = useState<Customer[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [projectDetails, setProjectDetails] = useState('')
  const [requirements, setRequirements] = useState('')

  const templates = [
    {
      id: 'software',
      name: 'Software Development',
      description: 'Custom software solutions and development services',
      icon: '💻',
      features: ['Technical specifications', 'Timeline & milestones', 'Pricing breakdown']
    },
    {
      id: 'marketing',
      name: 'Digital Marketing',
      description: 'Comprehensive marketing strategies and campaigns',
      icon: '📈',
      features: ['Strategy overview', 'Campaign details', 'ROI projections']
    },
    {
      id: 'consulting',
      name: 'Business Consulting',
      description: 'Strategic business advice and implementation',
      icon: '🎯',
      features: ['Analysis & recommendations', 'Implementation plan', 'Success metrics']
    },
    {
      id: 'design',
      name: 'Design Services',
      description: 'Creative design solutions and branding',
      icon: '🎨',
      features: ['Creative brief', 'Design concepts', 'Deliverables timeline']
    }
  ]

  useEffect(() => {
    fetchCustomers()
  }, [])

  const fetchCustomers = async () => {
    try {
      const response = await fetch('/api/customers')
      const data = await response.json()
      setCustomers(data.customers || [])
    } catch (error) {
      console.error('Error fetching customers:', error)
    }
  }

  const handleGenerateProposal = async () => {
    if (!selectedTemplate || !selectedCustomer) return
    
    setIsGenerating(true)
    
    try {
      const response = await fetch('/api/proposals/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          template: selectedTemplate,
          customerInfo: selectedCustomer,
          projectDetails,
          requirements
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate proposal')
      }

      const data = await response.json()
      
      // Store the generated proposal and redirect to view it
      localStorage.setItem('generatedProposal', JSON.stringify(data.proposal))
      window.location.href = '/proposals/generated'
      
    } catch (error) {
      console.error('Error generating proposal:', error)
      alert('Failed to generate proposal. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="relative">
                <FileText className="h-8 w-8 text-primary-600" />
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <h1 className="ml-2 text-2xl font-bold text-gray-900">Enhanced Proposals</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Bot className="h-5 w-5 text-green-500" />
                <span className="text-sm text-green-600 font-medium">Theresa AI Active</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-yellow-500 mr-2" />
            <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
              AI-Enhanced Proposal Creation
            </h1>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Create professional, compelling proposals in minutes with Theresa's AI assistance. 
            Choose from industry-specific templates and let AI generate personalized content.
          </p>
        </div>

        {/* Customer Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Select Customer
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {customers.map((customer) => (
                <div
                  key={customer.id}
                  onClick={() => setSelectedCustomer(customer)}
                  className={`p-4 bg-white rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedCustomer?.id === customer.id
                      ? 'border-primary-500 ring-2 ring-primary-200'
                      : 'border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-primary-600" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900 truncate">
                        {customer.name}
                      </h3>
                      <p className="text-sm text-gray-500 truncate">
                        {customer.email}
                      </p>
                      {customer.company && (
                        <p className="text-xs text-gray-400 truncate">
                          {customer.company}
                        </p>
                      )}
                    </div>
                    {selectedCustomer?.id === customer.id && (
                      <CheckCircle className="h-5 w-5 text-primary-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
            {customers.length === 0 && (
              <div className="text-center py-8">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">No customers found. Add customers first.</p>
                <a
                  href="/customers"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Go to Customer Management →
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Template Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Choose Your Proposal Template
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {templates.map((template) => (
              <div
                key={template.id}
                onClick={() => setSelectedTemplate(template.id)}
                className={`relative p-6 bg-white rounded-xl shadow-sm border-2 cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedTemplate === template.id
                    ? 'border-primary-500 ring-2 ring-primary-200'
                    : 'border-gray-200 hover:border-primary-300'
                }`}
              >
                {selectedTemplate === template.id && (
                  <div className="absolute -top-2 -right-2 h-6 w-6 bg-primary-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                )}
                <div className="text-4xl mb-4">{template.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {template.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {template.description}
                </p>
                <ul className="space-y-1">
                  {template.features.map((feature, index) => (
                    <li key={index} className="text-xs text-gray-500 flex items-center">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* AI Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Powered by Theresa AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Content Generation</h3>
              <p className="text-sm text-gray-600">
                AI generates personalized content based on your industry and customer data
              </p>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Intelligence</h3>
              <p className="text-sm text-gray-600">
                Leverages customer data to create targeted, relevant proposals
              </p>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-600 mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-sm text-gray-600">
                AI reviews and optimizes proposals for maximum impact and clarity
              </p>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Project Details
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Description
              </label>
              <textarea
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                placeholder="Describe the project scope, objectives, and key deliverables..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                rows={4}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specific Requirements
              </label>
              <textarea
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="List any specific requirements, constraints, or preferences..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                rows={3}
              />
            </div>
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center">
          <button
            onClick={handleGenerateProposal}
            disabled={!selectedTemplate || !selectedCustomer || isGenerating}
            className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3 mx-auto transition-all duration-200"
          >
            {isGenerating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Theresa is generating your proposal...</span>
              </>
            ) : (
              <>
                <Bot className="h-5 w-5" />
                <span>Generate with Theresa AI</span>
                <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>
          {(!selectedTemplate || !selectedCustomer) && (
            <p className="mt-4 text-sm text-gray-500">
              Please select a customer and template to continue
            </p>
          )}
        </div>
      </main>
    </div>
  )
}
