# VrixaaLabs Frontend App Documentation

A frontend-only pre-launch website for **VrixaaLabs**, an EdTech company revolutionizing STEM education through immersive simulations and intelligent learning platforms. This site serves as an investor- and partner-facing brand presence while the product is under active development.

---

## 📌 Core Concept

**VrixaaLabs** is working at the intersection of education, simulation, and AI. Our core aim is to bring science and engineering education to life through interactive, gamified, and scalable virtual environments.

The product is currently in **stealth mode**, and this site serves as a teaser for the world to see our mission, connect with us, and get excited about what’s coming.

---

## 🚀 Standout Features

The website is built with the following in mind:

- **Immersive STEM Learning**: Highlighting our focus on building game-like simulations and labs.
- **AI-Driven Education**: Hints at future integration of LLMs and feedback engines.
- **Scalable Impact**: Emphasizes accessibility without physical constraints.
- **Institutional Backing**: Supported by Tezpur University, with collaborations in progress with IIT Kharagpur.
- **Swayam Plus Integration**: Future-ready for AICTE credit transfer.
- **Hardware Integration**: Smart controllers to bring hands-on experience into the digital world.

These features are presented **vaguely**, with placeholders for real product details post-launch.

---

## 🧭 Pages and Content Overview

### `/` - Home Page
- Hero section with tagline: *"The Future of STEM is Coming..."*
- Subtext: *"We’re building something immersive, intelligent, and scalable."*
- Cards linking to other pages: Vision, Team, Contact
- CTA: Join Waitlist / Collaborate with Us

### `/vision`
- Abstract problem-solution narrative
- Highlights our desire to make education interactive, intelligent, and universal

### `/what-we-are-building`
- Vague bullet points hinting at:
  - Gamified Labs
  - AI Insights
  - Virtual Experiments
- Closed development message with contact CTA

### `/team`
- Founders and advisors (blurbs, photos or silhouettes)
- Optional future job board

### `/contact`
- Embedded contact form
- Email, social links
- Optional waitlist integration (Mailchimp / Airtable)

### `/investors` (Optional)
- Placeholder for strategic collaboration and investor conversations

---

## 🧱 Component Structure

The app will follow a modular folder structure optimized for scale and readability.

### 📁 `/components`

#### `shared/`
Reusable, global components:
- `Navbar.tsx`
- `Footer.tsx`
- `Button.tsx`
- `Container.tsx`
- `SectionHeader.tsx`

#### `features/`
Feature-specific blocks for each page:
- `HeroSection.tsx`
- `VisionCards.tsx`
- `FeatureTeasers.tsx`
- `TeamGrid.tsx`
- `ContactForm.tsx`
- `WaitlistModal.tsx`

#### `contexts/`
  - `ThemeProvider.tsx` - Light/Dark
  - `ModalProvider.tsx` Waitlist and Notification modals
  
#### `Custom Hooks`
  - `useTheme.ts`
  - `useScrollPosition.ts`
  - `useFormValidation.ts`
  - `useModal.ts`

## Animation Framework
- **Framer Motion**: For smooth transitions and animations.
  - Hero text and buttons fade-in
  - Section fade and staggered card reveals
  - Optional GSAP for complex scroll-based effects (e.g., hero backdrop blur, flowing visuals)
  - Timeline animations for landing or investor page if needed




## 🎨 Design Theme
<!-- make it in text format -->
### Design Theme
Futuristic Minimalism: Sleek, techy, mysterious
- **Colors**: Dark mode base, with teal, neon blue, soft purple accents
- **Typography**: Inter, Poppins, Space Grotesk
- **Visual Vibe**: Glassmorphism, particle background, gradients
- **UX Focus**: Smooth animations, clear CTAs, crisp sections
- **Accessibility**: Keyboard-friendly, ARIA labels, high contrast text
- **Responsive**: Fully mobile-optimized, grid-based responsiveness
- **Animations**: 
  - Hero text and buttons fade-in
  - Section fade and staggered card reveals
  - Optional GSAP for complex scroll-based effects (e.g., hero backdrop blur, flowing visuals)
  - Timeline animations for landing or investor page if needed
- **Icons**: Custom SVGs for features, team members, and contact

## Award-Worthy Design Aspects
- **Performance-First**: Lazy-loaded assets for blazing speed
- **Lighthouse Score Optimization**: High performance and accessibility scores
- **WCAG-Compliant Structure**: Ensures accessibility for all users
- **Fully Responsive**: Mobile-first design for all devices
- **Semantic HTML**: Optimized for SEO and bots
- **Lightweight, Reusable Components**: Modular design for easy updates
- **Tailwind’s Utility-First CSS**: Reduces style conflicts and improves maintainability
- **Animation with Motion Reduction Support**: Ensures smooth animations without overwhelming users
- **Custom Icons**: SVGs for features, team members, and contact


## Implementation Roadmap
- **1**: Set up TypeScript project with Tailwind, Framer, and folder structure
- **2**: Build navbar, footer, and shared layout
- **3**: Implement Hero + Home page (with motion + CTA)
- **4**: Build Vision and Team pages
- **5**: Add What We Are Building + Contact Page
- **6**: Animate sections using Framer Motion
- **7**: Add GSAP (optional) for scroll effects
- **8**: Polish responsive styles + a11y features
- **9**: Connect contact form to Formspree / Airtable
- **10**: Final QA + deploy to Vercel

## Tech Stack
- **Purpose**: Frontend-only pre-launch website
- **Technology**: React / Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP (optional)
- **Forms**: Formspree / Mailchimp
- **Hosting**: Vercel
- **Icons**: Lucide / Tabler Icons
- **State Management**: Context API
- **Version Control**: GitHub
- **Fonts**: Inter, Poppins (Google Fonts)
- **Design System**: Tailwind CSS with custom utility classes for consistent styling

Theme Style

 -->

## 🧠 Core Data Models (TypeScript Types)

```ts
// types/index.ts
export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  image?: string;
};

export type VisionStatement = {
  heading: string;
  description: string;
};

export type FeatureHighlight = {
  title: string;
  description: string;
  icon?: string;
};

export type ContactFormInput = {
  name: string;
  email: string;
  message: string;
};

```

## Final Notes
- This is a pre-launch, front-facing site, and not meant to include backend or auth.
- The messaging should remain vague, aspirational, and professional.
- It acts as a soft teaser while product development continues.
- Later expansion may include:
  - Public product demos
  - Dynamic blog/press updates
  - Interactive investor dashboard
  - This site will serve as a flexible, high-performance foundation for the full launch.
