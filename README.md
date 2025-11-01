# Trinity RCM solution - Healthcare Revenue Cycle Management

A modern, responsive React frontend application for healthcare RCM (Revenue Cycle Management) services, built with TypeScript, Vite, and Tailwind CSS.

## Features

- **SEO Optimized**: Complete meta tags, structured data, sitemap, and robots.txt
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI/UX**: Clean, professional design inspired by healthcare industry standards
- **Performance**: Built with Vite for fast development and optimized builds
- **Accessibility**: WCAG compliant components and navigation
- **Type Safety**: Full TypeScript implementation

## Sections

- **Hero Section**: Compelling value proposition with CTA
- **Services**: Comprehensive dental and medical RCM solution
- **Specialties**: Interactive tabs for different healthcare specialties
- **Testimonials**: Client success stories with carousel
- **Contact Form**: Functional contact form with validation
- **Footer**: Complete site navigation and company information

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Router** for navigation
- **React Helmet Async** for SEO
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trinityrcmsolution
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schema markup for organization
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Performance**: Optimized images and code splitting

## Deployment

The application is ready for deployment to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **AWS S3**: Upload the `dist` folder contents
- **GitHub Pages**: Use the `dist` folder contents

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  }
}
```

### Content
- Update company information in `src/components/SEOHead.tsx`
- Modify services in `src/components/Services.tsx`
- Update testimonials in `src/components/Testimonials.tsx`
- Change contact information in `src/components/Contact.tsx` and `src/components/Footer.tsx`

## License

This project is proprietary software. All rights reserved.

## Support

For technical support or questions about this application, please contact the development team.