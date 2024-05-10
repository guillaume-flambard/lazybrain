# LazyBrain 🧠

`LazyBrain` is an all-in-one AI-driven interface that allows users to generate text, video, music, photos, code, and more. Harnessing the power of AI technologies, LazyBrain streamlines creative processes, making it easier than ever to bring your ideas to life.

---

<div style="display:flex; justify-content:center; gap:20px;">
    <img src="public/landing.png" alt="lazybrain-text-generation" style="border-radius:10px; width:45%;" />
    <img src="public/screen.jpg" alt="lazybrain-video-generation" style="border-radius:10px; width:45%;" />
    <img src="public/screen2.jpg" alt="lazybrain-video-generation" style="border-radius:10px; width:45%;" />
    <img src="public/screen3.jpg" alt="lazybrain-video-generation" style="border-radius:10px; width:45%;" />
</div>

## 🤔 Why Use LazyBrain?

`LazyBrain` simplifies the process of content creation by using advanced AI models to generate a variety of media types. Whether you're a content creator, developer, or just someone looking to automate tasks, LazyBrain provides an intuitive interface to help you achieve your goals efficiently.

## 💻 Browser Compatibility

| ![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![UC](https://raw.github.com/alrra/browser-logos/master/src/uc/uc_48x48.png) |
| :--------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
|                                            ✔                                             |                                              ✔                                              |                                         ✔                                          |                                                             9+ ✔                                                             |                                            ✔                                             |                                           ✔                                           |                                      ✔                                       |

## 🚀 Quick Start

### 🛠 Install Dependencies

### 1. Use NPM (Recommended)

```bash
npm install
```

### 2. Build

```bash
npm run build
```

### 3. Start the Server

```bash
npm run dev
```

---

## ☔️ Dependencies

- [Next.js 14](https://nextjs.org/) Features and API of Next.js.
- [Tailwind CSS](https://tailwindcss.com/)  Learn about Tailwind CSS.
- [TypeScript](https://www.typescriptlang.org/) Official TypeScript documentation.
- [PostgreSQL](https://www.postgresql.org/) Comprehensive guide to PostgreSQL.
- [Prisma](https://www.prisma.io/) Guides and API for using Prisma.
- [Stripe](https://stripe.com/) Official Stripe documentation.
- [ShadcnUI](https://shadcn.github.io/) Official ShadcnUI documentation.
- [openai](https://beta.openai.com/docs/) Official OpenAI documentation.
- [replicate](https://replicate.com/) Official Replicate documentation.


### ⚙️ Configuration

To configure the project, create a `.env.local` file in the root directory and add the following environment variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable"
CLERK_SECRET_KEY="your-clerk-secret"

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/lazybrain

OPENAI_API_KEY=your-openai-api-key

NEXT_PUBLIC_APP_URL=http://localhost:3000
REPLICATE_API_TOKEN=your-replicate-api-token

STRIPE_SECRET_API_KEY="your-stripe-secret-api-key"
STRIPE_WEBHOOK_SECRET="your-stripe-webhook-secret"
```

### How to get the keys?

1. Sign up for an account on [Clerk](https://clerk.dev/).
2. Create a new project and get your `PUBLISHABLE_KEY` and `SECRET_KEY`.
3. Sign up for an account on [OpenAI](https://beta.openai.com/).
4. Get your `API_KEY` from OpenAI.
5. Sign up for an account on [Replicate](https://replicate.com/).
6. Get your `API_TOKEN` from Replicate.
7. Sign up for an account on [Stripe](https://stripe.com/).
8. Get your `SECRET_API_KEY` and `WEBHOOK_SECRET` from Stripe.
9. Create a new database on [PostgreSQL](https://www.postgresql.org/).
10. Add the database URL to the `.env.local` file.
11. Generate the db schema using `npx prisma generate` and `npx prisma db push`.
12. Run the project using `npm run dev`.

### 🙃 Start generating

ENJOY! 🎉
