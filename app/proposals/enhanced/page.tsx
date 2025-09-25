'use client'

import { useState } from 'react'
import { Bot, FileText, Users, Zap, Shield, CheckCircle, ArrowRight, Sparkles } from 'lucide-react'

export default function EnhancedProposalsPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

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

  const handleGenerateProposal = async () => {
    if (!selectedTemplate) return
    
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false)
      // Redirect to generated proposal
      window.location.href = '/proposals/new?template=' + selectedTemplate
    }, 3000)
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

        {/* Generate Button */}
        <div className="text-center">
          <button
            onClick={handleGenerateProposal}
            disabled={!selectedTemplate || isGenerating}
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
          {!selectedTemplate && (
            <p className="mt-4 text-sm text-gray-500">
              Please select a template to continue
            </p>
          )}
        </div>
      </main>
    </div>
  )
}
