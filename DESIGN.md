# PinkCity Design Documentation

## 🎨 Visual Identity & Brand Design

PinkCity is a premium brand rooted in the heritage of Jaipur. The design reflects a fusion of traditional Rajasthani royalty and modern aesthetic minimalism.

### 🍱 Color Palette

The brand uses a vibrant and energetic primary palette that symbolizes the "Pink City" (Jaipur).

- **Primary Pink**: `#fe5e85` (vibrant, enthusiastic)
- **Deep Pink/Dark**: `#d93a61` (sophisticated, traditional)
- **Background**: White/Light surfaces for a clean, modern feel.
- **Accents**: Subtle gold/green accents used in product banners (e.g., `#51914E` for title backgrounds).

### 🖋️ Typography

- **Primary (Sans)**: `Poppins` — Used for body text, UI elements, and navigation. It provides a clean, modern, and readable experience.
- **Display/Serif**: `Prata` (aliased as `--font-bentham` in code) — Used for headings and premium section titles to evoke a sense of tradition and elegance.

### ✨ Visual Effects & Motion

The application uses dynamic animations to engage users:

- **Radial Gradients**: Predominantly used in backgrounds (`bg-[radial-gradient(circle,_#FE5E85,_#D93A61)]`) to create depth.
- **Micro-animations**:
  - `bounce-up` / `bounce-down`: Continuous floating animations for product images.
  - **Hover Effects**: Complex 3D-like scale and translate effects on product cards.
  - **Smooth Scrolling**: Global `scroll-behavior: smooth` for elegant navigation transitions.
- **Custom UI Components**: CSS-only custom scrollbars and grid-based interactive layouts.

---

## 🏗️ Architecture & Structure

The project follows a modular React/Next.js architecture designed for performance and maintainability.

### 📂 Directory Structure

- `/src/app`: Next.js App Router root. Contains layouts, global styles, and the main page.
- `/src/outlets`: Major page sections. Each "outlet" is a self-contained section of the homepage (Hero, About Us, etc.).
- `/src/components`: Reusable, atomic UI components used across different outlets.
- `/src/data`: Static data configurations (e.g., product lists, faq content).
- `/src/svgs`: Custom SVG components for headers, dividers, and decorative elements.

### 🌐 Key Outlets (Page Sections)

1. **Hero**: High-impact entry section with logo and key call-to-action.
2. **AboutUs**: Narrative section detailing the 40+ year heritage of the brand.
3. **ProductBanners**: Information-rich, visually appealing banners for specific product categories (Paan vs Mukhwas).
4. **TopSellers**: Grid/Carousel of the most popular items.
5. **OurProducts**: Comprehensive listing of the product catalog.
6. **SocialMedia**: Feed integration/links to Instagram and Facebook.
7. **FAQ**: Accordion-based section for common customer queries.
8. **ContactUs**: Integrated support/inquiry form.

---

## 🛠️ Technical Implementation

### **Tech Stack**

- **Framework**: Next.js 15 (App Router)
- **State Management**: React Hooks (useState, useEffect for scroll animations).
- **Styling**: Tailwind CSS 4.0 (Utilizing `@theme` for design tokens).
- **Icons**: FontAwesome 7.
- **Analytics**: Firebase Analytics for tracking user engagement.

### **SEO & Conversion**

- **Structured Data**: Comprehensive JSON-LD implementation (Organization, LocalBusiness, BreadcrumbList) for enhanced Google Search results.
- **Performance**: Heavy use of SVG icons and Next.js Image optimization for fast LCP.
- **Meta Tags**: Fully configured OpenGraph and Twitter cards for social sharing.

### **Responsive Design**

- The layout is built using a mobile-first approach.
- Complex grid animations (like the ones in `globals.css`) are optimized to transition smoothly between mobile (single column) and desktop (multi-columns).
- Custom `no-scrollbar` utility ensures a clean look on all platforms while maintaining horizontal scrollability for carousels.

---

## 🚀 Vision

PinkCity's digital presence aims to be as refreshing as its products—blending the warmth of Indian tradition with the precision of modern web standards.
