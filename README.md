
# Professional Portfolio Website

A premium, production-ready portfolio website showcasing frontend development expertise and Web3 specialization. Built with modern web technologies, professional design patterns, and accessibility best practices.

🔗 **Live**: [iyanuoluwa-portfolio.vercel.app](https://iyanuoluwa-portfolio.vercel.app)

## ✨ Features

### 🎯 Core Capabilities
- **Responsive Design**: Mobile-first approach with smooth responsiveness
- **Dark/Light Theme**: System-aware theme switching with smooth transitions
- **Professional Animations**: Framer Motion-powered smooth interactions
- **Accessibility**: WCAG AA+ compliance with keyboard navigation
- **Performance**: Optimized bundle, lazy loading, image optimization
- **SEO Ready**: Comprehensive metadata, structured data, Open Graph

### 🧩 Sections
- **Hero**: Engaging introduction with parallax effects
- **About**: Timeline-based professional journey
- **Stats**: Key metrics and achievements showcase
- **Skills**: Technology proficiency visualization
- **Projects**: Showcase of 11+ Web2 & Web3 projects
- **Services**: Professional services offered
- **Experience**: Timeline of professional growth
- **Tech Stack**: Technologies mastery display
- **Open Source**: Contributed to blockchain projects
- **Contact**: Form and social links

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or Bun
- pnpm, npm, or bun

### Installation

```bash
# Clone repository
git clone <repository-url>
cd portfolio

# Install dependencies
pnpm install
# or
npm install
# or
bun install

# Set environment variables
cp .env.example .env.local
```

### Environment Setup

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

```bash
# Start development server
pnpm dev

# Open browser
# http://localhost:3000
```

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## 📁 Project Structure

```
portfolio/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── hero-section.tsx
│   ├── about.tsx
│   ├── stats-section.tsx
│   ├── skills-section.tsx
│   ├── projects-section.tsx
│   ├── contact-section.tsx
│   └── ui/                  # Radix UI components
├── hooks/                   # Custom React hooks
│   ├── useScrollAnimation.ts
│   ├── useParallax.ts
│   ├── useResponsive.ts
│   └── index.ts
├── lib/                     # Utilities and data
│   ├── animations.ts        # Animation variants
│   ├── portfolio-data.ts    # Project data
│   ├── constants.ts         # Configuration
│   ├── seo.ts              # SEO utilities
│   └── index.ts
├── public/                  # Static assets
├── DEVELOPER_GUIDE.md       # Developer documentation
└── REVAMP_NOTES.md         # Change log
```

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and developer experience
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Radix UI** - Accessible components

### Design & UX
- **Lucide React** - Modern icons
- **React Simple Icons** - Brand icons
- **Heroicons** - Professional iconography

### Forms & Validation
- **React Hook Form** - Efficient form handling
- **Zod** - Schema validation
- **EmailJS** - Email service

### Development
- **ESLint** - Code linting
- **TypeScript Strict** - Enhanced type safety
- **Prettier** - Code formatting

## 🎨 Design System

### Color Palette
**Light Mode**: Warm, professional tones
- Primary: `#1a0f0a`
- Secondary: `#7a7268`
- Accent: `#8a6239`

**Dark Mode**: Rich, comfortable tones
- Primary: `#f5f1ed`
- Background: `#3d251e`

### Animations
- 40+ professional animation variants
- Optimized easing curves
- Reduced motion support
- Performance-first approach

### Typography
- Professional font hierarchy
- Optimized readability
- Consistent sizing scale

## ♿ Accessibility

- ✅ WCAG AA+ compliance
- ✅ Keyboard navigation support
- ✅ ARIA labels and descriptions
- ✅ Semantic HTML structure
- ✅ Focus indicators
- ✅ Reduced motion support

## 📊 Performance

### Metrics
- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Optimizations
- Image optimization (WebP)
- Code splitting
- Lazy loading
- React.memo for expensive components
- Memoized animations

## 🔍 SEO

- Comprehensive metadata
- Open Graph tags
- Twitter Card optimization
- Structured data (JSON-LD)
- Responsive design
- Fast load times

## 📱 Responsive Design

Fully responsive across all devices:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🔐 Security

- XSS protection (React escaping)
- Secure environment variables
- No sensitive data exposed
- HTTPS ready

## 📚 Documentation

- **[DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)** - Architecture and guidelines
- **[REVAMP_NOTES.md](./REVAMP_NOTES.md)** - Detailed change log

## 🤝 Contributing

Contributions are welcome! Please ensure:
- TypeScript strict mode compliance
- Component documentation
- Accessibility compliance
- Mobile responsiveness

## 📝 Customization

### Update Portfolio Data
Edit `lib/portfolio-data.ts`:
```ts
export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Your Project",
    description: "Project description",
    tags: ["React", "Next.js"],
    // ... more fields
  },
];
```

### Update Configuration
Edit `lib/constants.ts` for site-wide configuration:
```ts
export const PORTFOLIO_CONFIG = {
  SITE_NAME: 'Your Name',
  SITE_URL: 'https://your-domain.com',
  // ... more config
};
```

### Customize Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  'portfolio-primary': '#your-color',
  // ... more colors
}
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy with one command
vercel deploy

# Set environment variables in Vercel dashboard
```

### Other Platforms
- GitHub Pages
- Netlify
- AWS Amplify
- Railway
- Any Node.js host

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Best Practices

- Images optimized (WebP format)
- CSS-in-JS minimized
- Animations GPU-accelerated
- Bundle size optimized
- Caching strategies implemented

## 🐛 Troubleshooting

### Email form not sending
- Verify EmailJS credentials in `.env.local`
- Check service ID, template ID, public key
- Test with EmailJS dashboard

### Animations not smooth
- Clear browser cache
- Check `prefers-reduced-motion` setting
- Verify hardware acceleration enabled

### Dark mode not working
- Check system theme setting
- Clear localStorage
- Verify theme provider in layout

## 📞 Support

For issues and questions:
- GitHub Issues: [Report an issue](https://github.com/IyanuOluwaJesuloba/portfolio/issues)
- Email: jesulobaowoseni1@gmail.com
- LinkedIn: [Connect](https://linkedin.com/in/iyanuoluwa-owoseni)

## 📄 License

© 2025 IyanuOluwa Owoseni. All rights reserved.

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://framer.com/motion)
- [Radix UI](https://radix-ui.com)
- [TypeScript](https://typescriptlang.org)

---

**Version**: 2.0 (Professional Edition)  
**Last Updated**: May 2025  
**Status**: ✅ Production Ready
