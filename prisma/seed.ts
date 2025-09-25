import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create a default user
  const user = await prisma.user.upsert({
    where: { email: 'demo@proposalflow.com' },
    update: {},
    create: {
      email: 'demo@proposalflow.com',
      name: 'Demo User',
    },
  })

  // Create sample customers
  const customers = [
    {
      name: 'John Smith',
      email: 'john@techcorp.com',
      company: 'TechCorp Solutions',
      phone: '+1 (555) 123-4567',
    },
    {
      name: 'Sarah Johnson',
      email: 'sarah@innovate.com',
      company: 'Innovate Inc',
      phone: '+1 (555) 987-6543',
    },
    {
      name: 'Mike Chen',
      email: 'mike@startup.io',
      company: 'StartupIO',
      phone: '+1 (555) 456-7890',
    },
    {
      name: 'Emily Davis',
      email: 'emily@creative.com',
      company: 'Creative Agency',
      phone: '+1 (555) 321-0987',
    },
  ]

  for (const customerData of customers) {
    await prisma.customer.create({
      data: {
        ...customerData,
        userId: user.id,
      },
    })
  }

  console.log('Seed data created successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
