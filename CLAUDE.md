# Reign Website - Product Requirements Document
## Premium Yellow & White Marketing Website

**Version:** 1.1
**Date:** October 2025
**Design Theme:** Clean Yellow & White (Premium/Modern)
**Target:** Gen Z & Millennials in India (15-35 years)

---

## 1. Executive Summary

### 1.1 Vision Statement
Create a premium, elegant marketing website that inspires visitors to download Reign and start conquering their neighborhoods. The website balances sophistication with playful energy, using clean yellow and white design to communicate both premium quality and approachable fun.

### 1.2 Core Design Principles
- **Premium Yet Playful**: Sophisticated yellow/white design with delightful interactions
- **Elegant Animations**: Smooth, purposeful motion on every scroll
- **Clean & Modern**: Minimalist layouts with strategic use of yellow accents
- **Micro-Interactions**: Subtle animations that enhance without overwhelming
- **Mobile-First**: Optimized for young Indians on phones

### 1.3 Key Objectives
- 50%+ visitor-to-download conversion rate
- <3 second load time on 4G
- 2+ minute average session duration
- 80%+ scroll depth
- Viral social sharing features

---

## 2. Visual Design Language

### 2.1 Color Palette
```css
/* Primary Yellow & White System */
--brand-yellow-50: #FFFEF0;
--brand-yellow-100: #FFFAD1;
--brand-yellow-200: #FFF5A3;
--brand-yellow-300: #FFED75;
--brand-yellow-400: #FFE652;
--brand-yellow-500: #FFD617;  /* Primary Brand Yellow */
--brand-yellow-600: #DBAD10;
--brand-yellow-700: #B7860B;
--brand-yellow-800: #936207;
--brand-yellow-900: #7A4704;

/* Base Colors */
--brand-white: #FFFFFF;
--brand-black: #000000;

/* Gray Scale */
--brand-gray-50: #F9FAFB;
--brand-gray-100: #F3F4F6;
--brand-gray-200: #E5E7EB;
--brand-gray-300: #D1D5DB;
--brand-gray-400: #9CA3AF;
--brand-gray-500: #6B7280;
--brand-gray-600: #4B5563;
--brand-gray-700: #374151;
--brand-gray-800: #1F2937;
--brand-gray-900: #111827;

/* Gradients */
--gradient-hero: linear-gradient(135deg, #FFFFFF 0%, #FFFEF0 50%, #FFFFFF 100%);
--gradient-yellow-text: linear-gradient(135deg, #FFD617 0%, #FFA500 100%);
--gradient-yellow-glow: linear-gradient(135deg, #FFE652 0%, #FFD617 100%);

/* Floating Orbs (Yellow variants) */
--orb-yellow-1: radial-gradient(circle, #FFD617 0%, #FFA500 100%);
--orb-yellow-2: radial-gradient(circle, #FFED75 0%, #FFD617 100%);
--orb-yellow-3: radial-gradient(circle, #FFF5A3 0%, #FFE652 100%);
```

### 2.2 Typography
```css
/* Elegant Headers */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

/* Headers: Playfair Display */
.mega-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(60px, 15vw, 120px);
    font-weight: 700;
    letter-spacing: -0.02em;
}

/* Body: Inter for readability */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

.body-text {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    line-height: 1.6;
}

/* Display Font for Special Elements */
.display-text {
    font-family: 'Playfair Display', serif;
    font-weight: 900;
}
```

### 2.3 Visual Elements

#### Floating Orbs & Shapes
- Constant floating background elements
- Parallax movement on scroll
- Glow effects with CSS filters
- Mouse-reactive movement

#### Character Mascots
- **Crown Character**: Bouncy crown with eyes (main mascot)
- **Territory Creatures**: Hexagonal characters representing different areas
- **User Avatars**: Customizable cartoon runners/walkers
- **Achievement Badges**: Animated sticker-style rewards

#### Trail Visualization
- Animated dotted lines showing routes
- Loop completion animations
- Territory fill effects
- Particle explosions on capture

---

## 3. Website Structure

### 3.1 Page Architecture

```
Homepage (Single Page Application with sections)
├── Hero Splash
├── How It Works (Interactive Demo)
├── Live Map Preview
├── Feature Showcase
├── Leaderboard Teaser
├── Social Proof
├── Download CTA
└── Footer

Supporting Pages
├── /download (App store redirects)
├── /leaderboard (Live global rankings)
├── /territory-map (Interactive explorer)
├── /events (Current challenges)
└── /clubs (Featured groups)
```

---

## 4. Section-by-Section Breakdown

### 4.1 Hero Section - "Your Kingdom Awaits!"

#### Layout & Elements
```
┌─────────────────────────────────────┐
│  Floating Crown Mascot (animated)   │
│                                      │
│     RULE YOUR STREETS                │
│     WITH EVERY STEP! 🏃‍♂️            │
│                                      │
│   [Animated Territory Map Preview]   │
│     • Live user trails appearing     │
│     • Territories being captured     │
│     • Point counters incrementing    │
│                                      │
│  ┌─────────────┐  ┌────────────┐   │
│  │ PLAY NOW 🎮 │  │ Watch Demo │   │
│  └─────────────┘  └────────────┘   │
│                                      │
│    23,456 rulers competing now!     │
└─────────────────────────────────────┘
```

#### Interactions
- **Crown mascot**: Follows mouse movement, blinks, bounces
- **Background**: Gradient shifts colors smoothly
- **Map preview**: Real-time data from actual users (anonymized)
- **CTA buttons**: Jelly-like squish on hover/tap
- **Counter**: Live updating with WebSocket connection

#### Animations
```javascript
// Entrance sequence
1. Crown drops from top (bounce effect)
2. Title text types in character by character
3. Map fades in with growing radius
4. Buttons slide up from bottom
5. Floating orbs begin movement
```

### 4.2 How It Works - "Three Steps to Glory!"

#### Interactive Tutorial Design
```
Step 1: Walk/Run/Cycle
┌──────────────┐
│   😊 → 🏃‍♂️   │  Character transforms
│              │  and starts moving
└──────────────┘

Step 2: Draw Your Territory  
┌──────────────┐
│  Trail loops │  Interactive demo where
│  animation   │  users can draw with mouse
└──────────────┘

Step 3: Claim Your Kingdom!
┌──────────────┐
│  🎉 Confetti │  Territory fills with color
│   Explosion  │  Points counter goes crazy
└──────────────┘
```

#### Features
- **Try It Mode**: Users can draw territories on sample map
- **Instant Gratification**: See points accumulate as they draw
- **Sound Effects**: Playful boops and celebration sounds
- **Progress Bar**: Shows completion through tutorial

### 4.3 Live Map Section - "The Battle Rages On!"

#### Real-Time Territory Viewer
```
┌────────────────────────────────────┐
│         LUCKNOW RIGHT NOW           │
│   ┌──────────────────────────┐     │
│   │                          │     │
│   │   [Interactive Map]      │     │
│   │   • Live captures        │     │
│   │   • Territory changes    │     │
│   │   • Activity heat spots  │     │
│   └──────────────────────────┘     │
│                                     │
│  🔥 Hot Zones:                      │
│  • Gomti Nagar: 45 active          │
│  • Hazratganj: 38 active           │
│  • Aminabad: 29 active             │
│                                     │
│  [Explore Your Area →]             │
└────────────────────────────────────┘
```

#### Technical Features
- WebGL-powered map (Mapbox GL JS)
- Real-time WebSocket updates
- Particle effects for new captures
- Heat map overlay for activity
- Zoom to user's location automatically

### 4.4 Features Showcase - "Power-Ups for Your Fitness!"

#### Card-Based Feature Display
```
Features Grid (Scroll-triggered animations):

┌─────────┐ ┌─────────┐ ┌─────────┐
│ Morning │ │ Friend  │ │ Festival│
│ Walks   │ │ Clubs   │ │ Events  │
│   👥    │ │   🎯    │ │   🎊   │
└─────────┘ └─────────┘ └─────────┘

┌─────────┐ ┌─────────┐ ┌─────────┐
│Rewards  │ │Leader-  │ │ Ghost  │
│   🎁    │ │ boards  │ │ Mode   │
└─────────┘ └─────────┘ └─────────┘
```

#### Card Interactions
- **Hover**: 3D tilt effect with mouse position
- **Click**: Expands to show details
- **Icons**: Animated and reactive
- **Background**: Gradient morphing

### 4.5 Leaderboard Preview - "Today's Champions!"

#### Live Rankings Display
```
┌────────────────────────────────────┐
│        THRONE ROOM 👑               │
│                                     │
│  1. 🥇 RajTheConqueror  2,456 pts  │
│     ░░░░░░░░░░░░░░░ (animated bar) │
│                                     │
│  2. 🥈 FitnessFighter   2,301 pts  │
│     ░░░░░░░░░░░░                   │
│                                     │
│  3. 🥉 MorningWarrior   2,156 pts  │
│     ░░░░░░░░░░                     │
│                                     │
│  [See Full Rankings →]              │
└────────────────────────────────────┘
```

#### Dynamic Elements
- **Live updates**: Rankings change in real-time
- **Avatar animations**: Winners' avatars bounce
- **Progress bars**: Animated filling
- **Confetti**: Random celebrations for rank changes

### 4.6 Social Proof - "Join the Movement!"

#### Statistics & Testimonials
```
Animated Counters:
┌─────────────┐ ┌──────────────┐ ┌──────────────┐
│  1.2M+      │ │   50K+       │ │   10M+       │
│  Players    │ │   Daily      │ │  Territories │
│             │ │   Battles    │ │   Captured   │
└─────────────┘ └──────────────┘ └──────────────┘

User Reviews (Carousel):
"Finally, a reason to wake up early!" - Priya, Delhi
"Lost 10kg while building my empire" - Rahul, Mumbai  
"My whole colony is competing now!" - Amit, Bangalore
```

### 4.7 Download Section - "Begin Your Reign!"

#### App Store Links with Animation
```
┌────────────────────────────────────┐
│      YOUR THRONE AWAITS! 🏰        │
│                                     │
│   [Floating phone mockup showing]  │
│   [app gameplay with trail drawing] │
│                                     │
│  ┌──────────────┐ ┌──────────────┐ │
│  │  App Store   │ │ Google Play  │ │
│  │      🍎      │ │      🤖      │ │
│  └──────────────┘ └──────────────┘ │
│                                     │
│    📱 Scan QR Code to Download     │
│         [Animated QR Code]          │
└────────────────────────────────────┘
```

---

## 5. Micro-Interactions & Animations

### 5.1 Scroll-Triggered Animations
```javascript
// Progressive reveal patterns
- Fade up with slight bounce
- Scale from 0 to 100% with spring
- Rotate in with 3D perspective
- Draw SVG paths on scroll
- Parallax at different speeds

// Intersection Observer API for performance
threshold: [0.1, 0.25, 0.5, 0.75, 1.0]
```

### 5.2 Mouse/Touch Interactions
```css
/* Magnetic buttons */
.cta-button {
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Hover states */
- Buttons: Squish and glow
- Cards: 3D tilt
- Links: Underline draw animation
- Images: Subtle zoom
```

### 5.3 Sound Design (Optional)
- **Hover sounds**: Subtle pops and clicks
- **Success sounds**: Coin collection, level up
- **Background**: Ambient upbeat music (mutable)
- **Interactions**: Playful boops and beeps

---

## 6. Technical Specifications

### 6.1 Performance Requirements
```yaml
Core Web Vitals:
  - LCP: < 2.5s
  - FID: < 100ms  
  - CLS: < 0.1
  - TTI: < 3.5s

Bundle Size:
  - Initial JS: < 100KB
  - Initial CSS: < 50KB
  - Lazy load everything else

Optimization:
  - WebP images with fallbacks
  - Cloudflare CDN
  - Service Worker for caching
  - Preconnect to API endpoints
```

### 6.2 Tech Stack
```javascript
// Frontend Framework
- React 18+ with Next.js 13
- TypeScript for type safety
- Framer Motion for animations
- Three.js for 3D elements
- Mapbox GL JS for maps

// Styling
- Tailwind CSS base
- CSS Modules for components
- SASS for complex animations

// Real-time
- Socket.io for live updates
- React Query for caching

// Analytics
- Google Analytics 4
- Hotjar for heatmaps
- Custom event tracking
```

### 6.3 Browser Support
- Chrome 90+ (primary)
- Safari 14+ (iOS)
- Firefox 88+
- Samsung Internet 14+
- Opera Mobile 62+

---

## 7. Mobile Responsiveness

### 7.1 Breakpoints
```css
/* Mobile First */
320px  - Small phones
375px  - Standard phones  
425px  - Large phones
768px  - Tablets
1024px - Desktop
1440px - Large desktop
```

### 7.2 Mobile-Specific Features
- **Touch gestures**: Swipe for navigation
- **Haptic feedback**: Vibration on interactions
- **Reduced motion**: Respect accessibility settings
- **Data saver**: Lower quality images option
- **App banner**: Smart app install prompt

---

## 8. SEO & Marketing

### 8.1 SEO Strategy
```html
<!-- Meta tags -->
<title>Reign - Rule Your Streets | India's #1 Fitness Game</title>
<meta name="description" content="Turn your daily walks into territory conquest! Join millions conquering neighborhoods across India.">

<!-- Open Graph -->
<meta property="og:image" content="territory-preview.jpg">
<meta property="og:video" content="gameplay-preview.mp4">

<!-- Schema.org -->
<script type="application/ld+json">
{
  "@type": "MobileApplication",
  "name": "Reign",
  "applicationCategory": "GameApplication",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "12453"
  }
}
</script>
```

### 8.2 Social Sharing
- **Territory Cards**: Generate shareable images of conquered areas
- **Achievement Badges**: Instagram story templates
- **Leaderboard Position**: Twitter/WhatsApp share cards
- **Referral System**: "Invite friends to your kingdom"

---

## 9. A/B Testing Plans

### 9.1 Hero Section Variants
- A: Animated mascot focus
- B: Live map focus
- C: Video background
- D: User testimonial focus

### 9.2 CTA Variations
- A: "Play Now"
- B: "Start Conquering"
- C: "Begin Your Reign"
- D: "Download Free"

### 9.3 Color Schemes
- A: Yellow/White (current - clean & premium)
- B: Yellow/Black (bold & energetic)
- C: Darker Yellow shades (sophisticated)
- D: Yellow with accent colors (playful)

---

## 10. Launch Strategy

### 10.1 Phase 1 - Soft Launch (Week 1-2)
- Launch in select cities (Bangalore, Delhi NCR)
- Gather initial feedback
- Fix critical bugs
- Optimize performance

### 10.2 Phase 2 - Marketing Push (Week 3-4)
- Influencer partnerships
- Social media campaign
- College campus activations
- Morning walk group partnerships

### 10.3 Phase 3 - National Rollout (Week 5+)
- All major cities
- Regional language support
- Local event integrations
- Press coverage

---

## 11. Analytics & Success Metrics

### 11.1 Key Performance Indicators
```yaml
Engagement:
  - Bounce Rate: < 30%
  - Session Duration: > 2 minutes
  - Scroll Depth: > 80%
  - Video Play Rate: > 60%

Conversion:
  - Visitor to Download: > 50%
  - Download to Install: > 80%
  - Install to First Activity: > 60%
  - Social Share Rate: > 20%

Technical:
  - Page Load Time: < 3s
  - Error Rate: < 1%
  - Cross-browser Compatibility: > 98%
```

### 11.2 Event Tracking
```javascript
// Custom events to track
- Hero_CTA_Click
- Tutorial_Complete
- Map_Interaction
- Feature_Card_Expand
- Download_Button_Click
- Social_Share
- Video_Play
- Scroll_Milestone (25%, 50%, 75%, 100%)
```

---

## 12. Content Strategy

### 12.1 Copy Voice & Tone
- **Playful**: "Your throne awaits, Your Majesty! 👑"
- **Encouraging**: "Every step makes you stronger!"
- **Competitive**: "Can you beat RajTheRunner's record?"
- **Inclusive**: "From morning walkers to marathoners"
- **Urgent**: "23 neighbors are conquering RIGHT NOW!"

### 12.2 Visual Content
- **Hero video**: 30-second sizzle reel
- **Tutorial GIFs**: How-to animations
- **User stories**: Success testimonials
- **Live footage**: Real app gameplay
- **Mascot stickers**: Downloadable pack

---

## 13. Accessibility

### 13.1 WCAG 2.1 AA Compliance
- Keyboard navigation
- Screen reader support
- Color contrast ratios
- Focus indicators
- Alt text for images
- Closed captions for videos

### 13.2 Performance Accessibility
- Reduced motion option
- Data saver mode
- Offline fallback
- Progressive enhancement

---

## 14. Development Timeline

### Week 1-2: Foundation
- Setup Next.js project
- Implement design system
- Create component library
- Setup animations framework

### Week 3-4: Core Sections
- Hero section with animations
- Interactive tutorial
- Live map integration
- Feature cards

### Week 5-6: Enhancements
- Real-time features
- Social proof sections
- Performance optimization
- Mobile responsiveness

### Week 7-8: Polish & Launch
- A/B testing setup
- Analytics integration
- SEO optimization
- Launch preparation

---

## 15. Risk Mitigation

### Technical Risks
- **WebGL compatibility**: Provide canvas fallback
- **Real-time connection issues**: Cache and retry logic
- **Heavy animations**: Progressive enhancement
- **API rate limits**: Implement queuing

### UX Risks
- **Information overload**: Progressive disclosure
- **Slow connections**: Skeleton screens
- **Small screens**: Prioritized mobile layout
- **User confusion**: Clear onboarding

---

## 16. Future Enhancements

### Version 2.0 Ideas
- **AR Preview**: See territories in camera view
- **Mini-game**: Browser-based trail drawing game
- **Live Streaming**: Watch top players in action
- **NFT Territories**: Blockchain integration
- **Voice Commands**: "Hey Reign, start walking"
- **AI Coach**: Personalized route suggestions

---

## Appendices

### A. Competitor Analysis
- Strava: Too serious, not playful
- Nike Run Club: Great UX but not territorial
- Zombies Run: Good gamification but not social
- Pokemon GO: Similar concept but not fitness-focused

### B. Inspiration References
- ponpon-mania.com (playful design)
- stripe.com (smooth animations)
- discord.com (community focus)
- duolingo.com (gamification)

### C. Asset Requirements
- Crown mascot (multiple poses)
- Territory creatures (6 variants)
- Background patterns
- Icon set (50+ custom icons)
- Sound effects library

---

**This website will be the digital kingdom that attracts millions of fitness warriors to join the Reign revolution! 🏰**

---

*Document prepared for immediate development. Let's build something legendary!*