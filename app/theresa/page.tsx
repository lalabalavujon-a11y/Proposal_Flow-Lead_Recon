'use client'

import { useState } from 'react'
import { Bot, Send, MessageCircle, Sparkles } from 'lucide-react'
import DashboardLayout from '../layout-dashboard'

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

export default function TheresaPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Theresa, your AI proposal assistant. I can help you create compelling proposals, suggest content, and optimize your sales process. What would you like to work on today?",
      role: 'assistant',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const currentInput = input
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/theresa/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentInput,
          context: 'proposal_assistance'
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response from Theresa')
      }

      const data = await response.json()
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response,
        role: 'assistant',
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error communicating with Theresa:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
        role: 'assistant',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <DashboardLayout>
      <div className="p-6">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Theresa AI Assistant</h1>
            <p className="text-gray-600">Your intelligent proposal assistant</p>
          </div>
          <div className="flex items-center space-x-2">
            <Sparkles className="h-5 w-5 text-green-500" />
            <span className="text-sm text-green-600 font-medium">Online</span>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-lg shadow-sm border h-[600px] flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 max-w-xs lg:max-w-md px-4 py-2 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600"></div>
                    <span className="text-sm">Theresa is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask Theresa anything about proposals..."
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Send className="h-4 w-4" />
                <span>Send</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setInput("Help me create a proposal for a software development project")}
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-sm text-left"
            >
              <MessageCircle className="h-6 w-6 text-primary-600 mb-2" />
              <h4 className="font-medium text-gray-900">Create Proposal</h4>
              <p className="text-sm text-gray-600">Get help creating a new proposal</p>
            </button>
            <button
              onClick={() => setInput("Review and improve my existing proposal content")}
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-sm text-left"
            >
              <Sparkles className="h-6 w-6 text-primary-600 mb-2" />
              <h4 className="font-medium text-gray-900">Improve Content</h4>
              <p className="text-sm text-gray-600">Enhance your proposal text</p>
            </button>
            <button
              onClick={() => setInput("What are the best practices for proposal writing?")}
              className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-sm text-left"
            >
              <Bot className="h-6 w-6 text-primary-600 mb-2" />
              <h4 className="font-medium text-gray-900">Best Practices</h4>
              <p className="text-sm text-gray-600">Learn proposal writing tips</p>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
