# Reign Website

A playful, gaming-inspired marketing website for the Reign fitness app. Built with Next.js 14, TypeScript, Framer Motion, and Tailwind CSS.

## 🎮 Features

- **Hero Section** - Animated crown mascot, floating orbs, live user counter
- **Interactive Tutorial** - 3-step demo with animations
- **Live Map Preview** - Real-time territory visualization
- **Features Showcase** - 6 feature cards with 3D tilt effects
- **Leaderboard** - Live rankings with smooth animations
- **Social Proof** - Animated counters and testimonial carousel
- **Download Section** - App store links and QR code

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design System

### Colors

- Primary Purple: `#8B5CF6`
- Primary Pink: `#EC4899`
- Primary Blue: `#3B82F6`
- Gradients: Hero, Sunrise, Territory

### Typography

- **Headers**: Rubik (Black 900)
- **Body**: Inter
- **Annotations**: Kalam (Handwritten)

### Breakpoints

- Mobile: `320px` - `768px`
- Tablet: `768px` - `1024px`
- Desktop: `1024px+`

## 📁 Project Structure

```
reign-website/
├── app/
│   ├── globals.css          # Global styles & design tokens
│   ├── layout.tsx            # Root layout with fonts
│   └── page.tsx              # Main page with all sections
├── components/
│   ├── hero/                 # Hero section components
│   ├── tutorial/             # Tutorial section
│   ├── map/                  # Live map section
│   ├── features/             # Features showcase
│   ├── leaderboard/          # Leaderboard section
│   ├── social-proof/         # Stats and testimonials
│   ├── download/             # Download CTA
│   ├── shared/               # Reusable components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   └── animations/           # Animation components
│       ├── FloatingOrbs.tsx
│       ├── ScrollReveal.tsx
│       └── TypingText.tsx
├── lib/
│   └── utils.ts              # Utility functions
└── public/                   # Static assets

```

## 🎬 Animations

All animations use **Framer Motion** for smooth, performant transitions:

- **Scroll animations** - Elements fade/slide in on scroll
- **Interactive elements** - Buttons, cards with hover/tap effects
- **Background animations** - Floating orbs, gradient shifts
- **Live updates** - Counters, leaderboard rankings

## 🔧 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D**: Three.js / React Three Fiber
- **Fonts**: Google Fonts (Rubik, Inter, Kalam)

## 📱 Mobile First

The entire website is built mobile-first with responsive design:

- Touch-friendly interactions
- Optimized animations for mobile
- Responsive typography
- Adaptive layouts

## ⚡ Performance

- Code splitting for optimal loading
- Lazy loading for below-the-fold content
- WebP images with fallbacks
- Framer Motion's hardware acceleration
- CSS-in-JS for critical styles

## 🎯 Browser Support

- Chrome 90+
- Safari 14+
- Firefox 88+
- Samsung Internet 14+
- Opera Mobile 62+

## 🐛 Known Issues

- SWC binary may fail to load on some systems (falls back to Babel)
- Mapbox integration is placeholder (add API key for real maps)
- WebSocket for live features not connected (mock data used)

## 📝 Future Enhancements

- Real Mapbox GL JS integration with API
- WebSocket connection for live data
- Image optimization and asset loading
- A/B testing setup
- Analytics integration
- SEO meta tags per route

## 📄 License

Private - All rights reserved

## 🤝 Contributing

This is a proprietary project for Reign app.

---

Built with ❤️ for fitness warriors across India 🏃‍♂️👑
