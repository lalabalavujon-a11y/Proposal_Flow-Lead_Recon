'use client'

import { useState, useEffect } from 'react'
import { FileText, Download, Share, Edit, ArrowLeft, CheckCircle } from 'lucide-react'

interface GeneratedProposal {
  title: string
  content: string
  sections: Array<{
    title: string
    content: string
  }>
  template: string
  generatedAt: string
  wordCount: number
}

export default function GeneratedProposalPage() {
  const [proposal, setProposal] = useState<GeneratedProposal | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedProposal = localStorage.getItem('generatedProposal')
    if (storedProposal) {
      setProposal(JSON.parse(storedProposal))
    }
    setLoading(false)
  }, [])

  const handleDownload = () => {
    if (!proposal) return
    
    const element = document.createElement('a')
    const file = new Blob([proposal.content], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = `${proposal.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleShare = async () => {
    if (!proposal) return
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: proposal.title,
          text: proposal.content.substring(0, 200) + '...',
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(proposal.content)
      alert('Proposal content copied to clipboard!')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!proposal) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No Proposal Found</h2>
          <p className="text-gray-600 mb-4">No generated proposal was found in your session.</p>
          <a
            href="/proposals/enhanced"
            className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
          >
            Generate New Proposal
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <a
                href="/proposals/enhanced"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Generator
              </a>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-primary-600" />
                <h1 className="ml-2 text-2xl font-bold text-gray-900">Generated Proposal</h1>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Share className="h-4 w-4" />
                <span>Share</span>
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                <Download className="h-4 w-4" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Proposal Header */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{proposal.title}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>Template: {proposal.template}</span>
                <span>•</span>
                <span>{proposal.wordCount} words</span>
                <span>•</span>
                <span>Generated {new Date(proposal.generatedAt).toLocaleDateString()}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm font-medium">AI Generated</span>
            </div>
          </div>
        </div>

        {/* Proposal Content */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-8">
            {proposal.sections && proposal.sections.length > 0 ? (
              <div className="space-y-8">
                {proposal.sections.map((section, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                        {section.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="prose max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {proposal.content}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="/proposals/enhanced"
            className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <Edit className="h-4 w-4" />
            <span>Generate Another</span>
          </a>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            <Download className="h-4 w-4" />
            <span>Download Proposal</span>
          </button>
        </div>
      </main>
    </div>
  )
}
