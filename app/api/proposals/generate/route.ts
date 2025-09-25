import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { template, customerInfo, projectDetails, requirements } = await request.json()

    if (!template) {
      return NextResponse.json({ error: 'Template is required' }, { status: 400 })
    }

    // Create a detailed prompt for proposal generation
    const proposalPrompt = `Generate a professional proposal for the following:

Template: ${template}
Customer Information: ${JSON.stringify(customerInfo || {})}
Project Details: ${JSON.stringify(projectDetails || {})}
Requirements: ${JSON.stringify(requirements || {})}

Please generate a comprehensive proposal that includes:

1. Executive Summary
2. Problem Statement & Solution
3. Proposed Approach/Methodology
4. Timeline & Milestones
5. Pricing & Investment
6. Terms & Conditions
7. Next Steps

Make the proposal compelling, professional, and tailored to the specific industry and customer needs. Use persuasive language that emphasizes value and ROI.`

    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
      messages: [
        { 
          role: 'system', 
          content: 'You are an expert proposal writer. Generate professional, compelling proposals that win business. Always focus on value proposition and ROI.' 
        },
        { role: 'user', content: proposalPrompt }
      ],
      temperature: parseFloat(process.env.LLM_TEMPERATURE || '0.7'),
      max_tokens: parseInt(process.env.LLM_MAX_TOKENS || '2000'),
    })

    const proposalContent = completion.choices[0]?.message?.content || 'Failed to generate proposal content.'

    // Parse the generated content into structured sections
    const sections = parseProposalContent(proposalContent)

    return NextResponse.json({
      success: true,
      proposal: {
        title: generateProposalTitle(template, customerInfo),
        content: proposalContent,
        sections,
        template,
        generatedAt: new Date().toISOString(),
        wordCount: proposalContent.split(' ').length
      }
    })

  } catch (error) {
    console.error('Proposal generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate proposal' },
      { status: 500 }
    )
  }
}

function parseProposalContent(content: string) {
  const sections = []
  const lines = content.split('\n')
  let currentSection = null

  for (const line of lines) {
    const trimmedLine = line.trim()
    
    // Check if this is a section header (numbered or bold)
    if (trimmedLine.match(/^\d+\.\s+/) || trimmedLine.match(/^[A-Z][A-Z\s]+:$/)) {
      if (currentSection) {
        sections.push(currentSection)
      }
      currentSection = {
        title: trimmedLine.replace(/^\d+\.\s+/, '').replace(':', ''),
        content: ''
      }
    } else if (currentSection && trimmedLine) {
      currentSection.content += trimmedLine + '\n'
    }
  }

  if (currentSection) {
    sections.push(currentSection)
  }

  return sections
}

function generateProposalTitle(template: string, customerInfo: any) {
  const customerName = customerInfo?.company || customerInfo?.name || 'Client'
  const templateNames = {
    software: 'Software Development',
    marketing: 'Digital Marketing',
    consulting: 'Business Consulting',
    design: 'Design Services'
  }
  
  return `${templateNames[template as keyof typeof templateNames] || 'Professional'} Proposal - ${customerName}`
}
