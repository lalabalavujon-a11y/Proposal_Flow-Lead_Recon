import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    // Create a system prompt for Theresa
    const systemPrompt = `You are Theresa, an AI proposal assistant. You help users create compelling, professional proposals. You are knowledgeable about:

- Proposal writing best practices
- Industry-specific proposal formats
- Sales psychology and persuasion techniques
- Pricing strategies and value propositions
- Client relationship management

Always be helpful, professional, and provide actionable advice. When users ask about proposals, provide specific, practical suggestions they can implement immediately.

Context: ${context || 'General proposal assistance'}`

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message }
      ],
      temperature: parseFloat(process.env.LLM_TEMPERATURE || '0.7'),
      max_tokens: parseInt(process.env.LLM_MAX_TOKENS || '1000'),
    })

    const response = completion.choices[0]?.message?.content || 'I apologize, but I could not generate a response at this time.'

    return NextResponse.json({
      response,
      timestamp: new Date().toISOString(),
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo'
    })

  } catch (error) {
    console.error('Theresa API error:', error)
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
