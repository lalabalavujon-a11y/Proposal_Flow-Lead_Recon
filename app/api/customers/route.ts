import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET /api/customers - List all customers
export async function GET(request: NextRequest) {
  try {
    const customers = await prisma.customer.findMany({
      include: {
        proposals: {
          select: {
            id: true,
            title: true,
            status: true,
            createdAt: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json({ customers })
  } catch (error) {
    console.error('Error fetching customers:', error)
    return NextResponse.json(
      { error: 'Failed to fetch customers' },
      { status: 500 }
    )
  }
}

// POST /api/customers - Create a new customer
export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone } = await request.json()

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // For now, we'll use a default user ID since we don't have auth yet
    const defaultUserId = 'default-user-id'

    const customer = await prisma.customer.create({
      data: {
        name,
        email,
        company,
        phone,
        userId: defaultUserId
      }
    })

    return NextResponse.json({ customer }, { status: 201 })
  } catch (error) {
    console.error('Error creating customer:', error)
    return NextResponse.json(
      { error: 'Failed to create customer' },
      { status: 500 }
    )
  }
}
