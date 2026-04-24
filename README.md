# Tobams Group — Training and Development Page

A pixel-perfect, fully responsive Next.js implementation of the Tobams Group Training and Development landing page, built as part of the Frontend Intern Assessment.

---

## Live Deployment URL

> [https://tobams-assessment.vercel.app](https://my-interview-assessments-submission.vercel.app/) ← 

---

## Figma Design Reference

[Frontend Intern Assessment — Figma](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Next.js | 15 (App Router) | Framework |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Styling |
| next/font | built-in | Font optimisation |
| next/image | built-in | Image optimisation |
| Vercel | — | Deployment |

---

## Project Structure

```
/app
  layout.tsx         ← Root layout with Navbar, Footer, next/font setup
  page.tsx           ← Main page assembling all section components
  globals.css        ← Global styles and Tailwind import

/components
  Navbar.tsx                  ← Sticky top nav with mobile hamburger menu
  Hero.tsx                    ← Dark hero section with CTA
  ManagementDevelopment.tsx   ← Dark-theme management program section
  TransformationHub.tsx       ← Pink-bg CEO transformation section
  ConsultantTraining.tsx      ← 4-card grid training section
  CTABanner.tsx               ← Dark CTA banner
  Testimonials.tsx            ← 3-column testimonial cards
  WorkTogether.tsx            ← Pre-footer CTA band
  Footer.tsx                  ← Dark multi-column footer

/public
  /images                     ← Section images (lms.jpg, corporate.jpg, etc.)
```

---

## Setup Instructions

### Prerequisites
- Node.js 18.17+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/tobams-assessment.git
cd tobams-assessment

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## Design Decisions

### 1. Component Architecture
The page is broken down into logical, reusable components as per the assessment requirements. Each section (LMS, Training Services, Management, etc.) is encapsulated in its own file under `/components`, ensuring clean and maintainable code.

### 2. Color System
All brand colors are expressed as Tailwind arbitrary values directly derived from the Figma:
- `#1a0a2e` — primary dark purple/navy (hero, footer, dark sections)
- `#c8102e` — primary crimson red (CTAs, accents, bullets)
- `#f9f5ff` — light lavender (alternating section backgrounds)
- `#fce4ec` — light pink/salmon (Transformation Hub section)
- `#2d1654` — mid-purple (dark card backgrounds)

### 3. Mobile-First Responsive Layout
All components use Tailwind's mobile-first breakpoint utilities (`sm:`, `md:`, `lg:`). The grid layout switches from `grid-cols-1` on mobile to `grid-cols-2` on tablet/desktop. The Navbar collapses to a hamburger menu on screens below `lg`.

### 4. Semantic HTML & Accessibility
- All sections use `<section>` with `aria-labelledby` pointing to their heading IDs
- The `<nav>` element is used for the Navbar with `aria-label`
- The `<footer>` element is used for the Footer
- All interactive elements (links, buttons) have visible `:focus` ring states using `focus:ring-2 focus:ring-[#c8102e]`
- All images have descriptive `alt` text
- Social icon links use `aria-label`

### 5. Next.js Optimizations
- `next/image` is used for **all** images with `fill` and responsive `sizes` attributes
- `next/font` (Google Inter) is loaded in `layout.tsx` with `display: swap` and a CSS variable
- No `<img>` tags are used anywhere in the project

---

## Assumptions

1. **Images:** The Figma design contains stock photography. Placeholder image paths (`/images/*.jpg`) are referenced. Real images from Unsplash or the client's asset library should be placed in `/public/images/`.

2. **Navigation links:** All nav links use `href="#"` as the actual route destinations are not specified in the assessment scope.

3. **Font:** Inter was chosen as the closest match to the typography visible in the Figma screenshots. The Figma file itself was not directly accessible to inspect exact font names.

4. **Testimonial data:** Names, roles, and testimonial text were inferred from the Figma screenshot. Exact copy should be verified against the actual Figma file.

5. **Logo:** The Tobams Group logo is rendered as a styled text/div element. The actual SVG logo asset should replace this if available.

---

## AI Usage Disclosure

This project was developed with the assistance of Claude (Anthropic) as a pair-programming tool. The AI helped with:
- Initial project scaffolding
- Component boilerplate generation
- Tailwind class suggestions for design fidelity

All design decisions, component architecture choices, and code review were directed and verified by the developer. The output was reviewed for correctness, accessibility, and adherence to the rubric before submission.

---

## Known Issues

1. **Images are placeholders** — The `/public/images/` directory contains image path references (`lms.jpg`, `corporate.jpg`, `individual.jpg`, `capacity.jpg`, `management.jpg`, `transformation.jpg`). These need to be replaced with real images from the Figma asset export or a stock library. Without them, `next/image` will render broken image states.

2. **Logo is image-based** — The current implementation uses a placeholder logo image. The actual Tobams Group SVG logo asset should replace this if available.

3. **No animations** — The Figma design does not specify transitions or scroll animations. None were added to keep the implementation clean and rubric-compliant. Framer Motion could be added later for scroll-reveal effects.

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | 425px | Single column, hamburger menu |
| Tablet | 768px | Two-column grids begin |
| Desktop | 1280px+ | Full layout, all nav links visible |
