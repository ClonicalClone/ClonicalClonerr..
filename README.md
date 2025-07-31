# ClonicalClonerr

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
It integrates Clerk for authentication and Stripe for payment processing.

---

## Tech Stack

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Clerk](https://clerk.dev) for authentication
- [Stripe](https://stripe.com) for payment processing
- [Tailwind CSS](https://tailwindcss.com) (if used)
- [Geist Font](https://vercel.com/font) via `next/font`

---

## Getting Started

### 1. Install dependencies

Use your preferred package manager to install the project dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Environment Variables
Create a .env.local file in the root directory with the following content:

```bash 
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CLERK_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

STRIPE_SECRET_KEY=sk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```
Replace the placeholders with your actual API keys from Clerk and Stripe.


Start the Development Server
Run the development server using one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
