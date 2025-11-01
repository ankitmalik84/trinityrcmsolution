import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Route configurations with metadata
const routes = {
  '/': {
    title: 'Trinity RCM Solution - Healthcare Revenue Cycle Management Services',
    description: 'Leading healthcare RCM solution provider offering dental and medical billing, coding, credentialing, and revenue cycle management services. Free RCM audit available.',
    url: '/',
    image: '/logo.png',
  },
  '/contact': {
    title: 'Contact Us - Trinity RCM Solution | Get Your Free RCM Audit',
    description: 'Contact Trinity RCM Solution for expert healthcare revenue cycle management services. Get a free RCM audit and consultation. Located in Bangalore and Gurugram, India.',
    url: '/contact',
    image: '/logo.png',
  },
  '/testimonials': {
    title: 'Client Testimonials - Trinity RCM Solution | Success Stories',
    description: 'Read testimonials from satisfied clients of Trinity RCM Solution. Discover how we\'ve helped dental and medical practices improve their revenue cycle management with our expert billing and credentialing services.',
    url: '/testimonials',
    image: '/logo.png',
  },
  '/services/revenueCycleManagement': {
    title: 'Revenue Cycle Management Services - Trinity RCM Solution',
    description: 'Comprehensive Revenue Cycle Management services to optimize your healthcare practice\'s financial performance. End-to-end RCM solutions including billing, coding, A/R management, and more.',
    url: '/services/revenueCycleManagement',
    image: '/logo.png',
  },
  '/services/medicalCodingBilling': {
    title: 'Medical Coding & Billing Services - Trinity RCM Solution',
    description: 'Expert medical coding and billing services using CPT, ICD-10, and HCPCS codes. Accurate coding for maximum reimbursement and faster claim processing.',
    url: '/services/medicalCodingBilling',
    image: '/logo.png',
  },
  '/services/insuranceVerification': {
    title: 'Insurance Verification & Eligibility Services - Trinity RCM Solution',
    description: 'Real-time insurance verification and eligibility checks to confirm patient coverage before treatment. Reduce denials and improve cash flow.',
    url: '/services/insuranceVerification',
    image: '/logo.png',
  },
  '/services/priorAuthorization': {
    title: 'Prior Authorization Management Services - Trinity RCM Solution',
    description: 'Expert prior authorization services to secure approvals before treatment. Fast turnaround times and high approval rates for procedures and medications.',
    url: '/services/priorAuthorization',
    image: '/logo.png',
  },
  '/services/arManagement': {
    title: 'Accounts Receivable (A/R) Management Services - Trinity RCM Solution',
    description: 'Comprehensive A/R management services to reduce outstanding receivables, improve cash flow, and accelerate collections. Expert follow-up and aging analysis.',
    url: '/services/arManagement',
    image: '/logo.png',
  },
  '/services/denialManagement': {
    title: 'Denial Management & Appeals Services - Trinity RCM Solution',
    description: 'Expert denial management and appeals services to recover denied claims and reduce future denials. Increase revenue recovery with strategic appeals process.',
    url: '/services/denialManagement',
    image: '/logo.png',
  },
  '/services/paymentPosting': {
    title: 'Payment Posting & Reconciliation Services - Trinity RCM Solution',
    description: 'Automated payment posting and reconciliation services for faster payment processing. EFT posting, deposit reconciliation, and accurate payment tracking.',
    url: '/services/paymentPosting',
    image: '/logo.png',
  },
  '/services/providerCredentialing': {
    title: 'Provider Credentialing & Enrollment Services - Trinity RCM Solution',
    description: 'Expert provider credentialing and payer enrollment services. Fast, efficient enrollment with insurance networks to get providers credentialed quickly.',
    url: '/services/providerCredentialing',
    image: '/logo.png',
  },
};

function generateHTML(route, meta, baseUrl) {
  const fullUrl = `${baseUrl}${meta.url}`;
  const imageUrl = `${baseUrl}${meta.image}`;

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Essential Meta Tags -->
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    
    <!-- Open Graph (Facebook, LinkedIn) -->
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:url" content="${fullUrl}" />
    <meta property="og:type" content="website" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${imageUrl}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
}

// Generate HTML files
function generatePages() {
  const distPath = path.join(__dirname, 'dist');
  const baseUrl = 'https://trinityrcmsolution.vercel.app/';

  console.log('🚀 Generating static HTML pages for SEO...\n');

  Object.entries(routes).forEach(([route, meta]) => {
    const html = generateHTML(route, meta, baseUrl);
    
    // Determine file path
    let filePath;
    if (route === '/') {
      filePath = path.join(distPath, 'index.html');
    } else {
      // Create directory structure for nested routes
      const routePath = path.join(distPath, route);
      fs.mkdirSync(routePath, { recursive: true });
      filePath = path.join(routePath, 'index.html');
    }

    // Write HTML file
    fs.writeFileSync(filePath, html);
    console.log(`✅ Generated: ${route} -> ${filePath}`);
  });

  console.log('\n✨ All HTML pages generated successfully!');
  console.log('📦 Your dist folder now has static HTML for each route with proper meta tags.');
}

// Run the generator
generatePages();

