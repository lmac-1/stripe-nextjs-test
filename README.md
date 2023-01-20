This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It is built using TypeScript and Tailwind.

This is a simple project to practice Stripe integration in an application built with Next.js and TypeScript

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Useful resources

- **Example from Next.js using Stripe and TypeScript** This example was the most complete example I could find and helped me a lot with how to configure the TypeScript side of things. It also includes implementation with `use-shopping-cart`, but I think that part of the code is out of date now. [Link](https://github.com/vercel/next.js/tree/canary/examples/with-stripe-typescript) 
- **Dev.to post from Thor on Type-safe Payments with Next.js, TypeScript and Stripe.** This blog post is a deeper explanation of the code implemented in the Next.js example. It's written in 2020, so some parts of the code are now out of date. But it's still a great resource because it explains a bit more of the why about why we have to do certain things with Next.js. [Link](https://dev.to/stripe/type-safe-payments-with-next-js-typescript-and-stripe-4jo7)