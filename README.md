# ProposalFlow - AI-Powered Proposal Generation Platform

ProposalFlow is a modern, AI-powered platform for creating professional proposals with Theresa, your intelligent AI assistant. Built with Next.js 14, TypeScript, and integrated with OpenAI for intelligent content generation.

## Features

- 🤖 **Theresa AI Assistant**: Intelligent proposal generation and content optimization
- 📝 **Professional Templates**: Industry-specific proposal templates
- 👥 **Customer Management**: Track customers and proposal relationships
- ✍️ **Digital Signatures**: Built-in signature capabilities
- 💳 **Stripe Integration**: Payment processing for premium features
- 🎨 **Modern UI**: Beautiful, responsive interface built with Tailwind CSS
- 📊 **Analytics**: Track proposal performance and success rates

## Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: SQLite (development), PostgreSQL (production)
- **AI**: OpenAI GPT-3.5-turbo, LangChain
- **Payments**: Stripe
- **Document Generation**: Gamma API
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 22.12.0 or higher
- pnpm (recommended) or npm
- OpenAI API key
- Stripe account (for payments)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd proposalflow
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your `.env.local` file with the required API keys:
```env
# Database
DATABASE_URL="file:./prisma/dev.db"

# App
APP_URL=http://localhost:3001

# OpenAI
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-3.5-turbo

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# Gamma API
GAMMA_API_KEY=your_gamma_api_key
```

5. Set up the database:
```bash
pnpm db:generate
pnpm db:push
```

6. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:3001`.

## Project Structure

```
proposalflow/
├── app/                    # Next.js 14 app directory
│   ├── api/               # API routes
│   │   ├── theresa/       # Theresa AI endpoints
│   │   └── proposals/     # Proposal management endpoints
│   ├── proposals/         # Proposal pages
│   │   └── enhanced/      # Enhanced proposal creation
│   ├── theresa/           # Theresa AI interface
│   └── customers/         # Customer management
├── components/            # Reusable React components
├── lib/                   # Utility functions and configurations
├── prisma/               # Database schema and migrations
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## Key Features

### Theresa AI Assistant

Theresa is your intelligent proposal assistant that can:
- Generate proposal content based on templates and customer data
- Optimize existing proposals for better conversion
- Provide industry-specific advice and best practices
- Answer questions about proposal writing

### Enhanced Proposal Creation

The enhanced proposal creation flow includes:
- Template selection with industry-specific options
- AI-powered content generation
- Real-time collaboration with Theresa
- Professional formatting and styling

### Customer Management

- Track customer information and history
- Manage proposal relationships
- Store communication history
- Track proposal success rates

## API Endpoints

### Theresa AI
- `POST /api/theresa/chat` - Chat with Theresa AI assistant

### Proposals
- `POST /api/proposals/generate` - Generate new proposal with AI
- `GET /api/proposals` - List all proposals
- `GET /api/proposals/[id]` - Get specific proposal
- `PUT /api/proposals/[id]` - Update proposal
- `DELETE /api/proposals/[id]` - Delete proposal

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production

Make sure to set these in your deployment platform:
- `DATABASE_URL` - Production database connection string
- `OPENAI_API_KEY` - Your OpenAI API key
- `STRIPE_SECRET_KEY` - Stripe secret key
- `STRIPE_PUBLISHABLE_KEY` - Stripe publishable key
- `GAMMA_API_KEY` - Gamma API key for document generation

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@proposalflow.com or join our Discord community.

---

Built with ❤️ by the ProposalFlow team
# Trigger deployment
# Updated Thu Oct  2 12:53:51 BST 2025
