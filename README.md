# Jeff's Karts - Custom Golf Carts Melbourne, FL

A modern, SEO-optimized website for Jeff's Karts, a custom golf cart business in Melbourne, Florida.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
jeffs-karts/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Homepage
│   ├── inventory/          # Inventory page
│   ├── services/           # Services page
│   ├── gallery/            # Gallery page
│   ├── about/              # About page
│   └── contact/            # Contact page
├── components/             # Reusable React components
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   └── Logo.tsx            # SVG logo component
├── data/                   # JSON data files (simple CMS)
│   ├── inventory.json      # Golf cart listings
│   └── services.json       # Services offered
└── public/                 # Static assets
```

## Managing Content

### Adding Inventory

Edit `data/inventory.json` to add or update golf cart listings:

```json
{
  "carts": [
    {
      "id": "unique-id",
      "name": "Cart Name",
      "description": "Description of the cart",
      "price": 5999,
      "status": "available",
      "specs": {
        "type": "Electric",
        "seats": "4",
        "features": ["Feature 1", "Feature 2"]
      },
      "images": ["/images/cart1.jpg"],
      "featured": true
    }
  ]
}
```

Status options: `"available"`, `"sold"`, `"coming_soon"`

### Adding Images

1. Add images to the `public/images/` folder
2. Reference them in the JSON files as `/images/filename.jpg`

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Option 2: Deploy via CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Custom Domain Setup

1. In Vercel dashboard, go to your project settings
2. Click "Domains"
3. Add your domain (e.g., jeffskarts.com)
4. Update your domain's DNS settings as instructed

## SEO Features

- ✅ Server-side rendering for all pages
- ✅ Semantic HTML structure
- ✅ Meta tags and Open Graph data
- ✅ LocalBusiness schema markup
- ✅ Auto-generated sitemap.xml
- ✅ robots.txt configured
- ✅ Mobile-responsive design

### Setting Up Google Business Profile

1. Go to [Google Business Profile](https://business.google.com)
2. Create a listing for "Jeff's Karts"
3. Add the same NAP (Name, Address, Phone) as on the website
4. Add photos and business hours
5. Request reviews from customers

## Contact Form Setup

The contact form uses Formspree for handling submissions:

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form
3. Copy your form endpoint (looks like `https://formspree.io/f/xxxxx`)
4. Update `app/contact/page.tsx` with your endpoint

## Customization

### Colors

Edit `tailwind.config.ts` to change brand colors:

```typescript
colors: {
  primary: {
    500: '#14b8a6',  // Main teal color
    600: '#0d9488',  // Darker teal
    // ...
  },
  accent: {
    500: '#f97316',  // Orange accent
    // ...
  },
}
```

### Logo

The logo is an SVG component in `components/Logo.tsx`. Edit it directly or replace with your own SVG.

## License

Private - All rights reserved.
