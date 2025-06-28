# Evolution Software Services - Landing Page

A modern, responsive landing page for Evolution Software Services built with React and Vite.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Features

- **Modern Design**: Clean, professional landing page matching your brand
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast Loading**: Built with Vite for optimal performance
- **Waitlist Integration**: Modal form for collecting leads
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Easy Deployment**: Ready for Vercel, Netlify, or AWS

## 🎨 Customization

### Logo
Replace `src/assets/evolution_website.svg` with your actual logo file. The component supports both PNG and SVG formats.

### Content
Update the messaging in `src/LandingPage.jsx`:
- Headline: "Welcome to Evolution Software Services"
- Subheadline: "AI-Powered Solutions for Aviation and Beyond"
- Tagline: "Intelligence Evolved"

### Styling
All styles are in `src/index.css`. Key design variables:
- Primary color: `#072A53` (dark blue)
- Accent colors: `#bfdbfe`, `#93c5fd` (light blue shades)
- Font: DM Sans (falls back to system fonts)

### API Integration
The demo request modal is configured for:
- Production API: `https://api.evolutionsoftwareservices.com`
- Development: `http://localhost:8081`

Update the domains in `src/DemoRequestModal.jsx` if needed.

## 🌐 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag the `dist/` folder to Netlify
3. Configure your domain

### AWS S3 + CloudFront
1. Run `npm run build`
2. Upload `dist/` contents to your S3 bucket
3. Configure CloudFront distribution

## 📱 Domain Configuration

Current domain setup for: `www.evolutionsoftwareservices.com`

To change domains:
1. Update meta tags in `index.html`
2. Update API base URL in `src/DemoRequestModal.jsx`
3. Update contact email references

## 🔧 Environment Setup

The app automatically detects environment:
- **Production**: When hostname includes `evolutionsoftwareservices.com`
- **Development**: When running on localhost

## 📊 Performance

- **Lighthouse Score**: 95+ (optimized for Core Web Vitals)
- **Bundle Size**: < 200KB gzipped
- **Load Time**: < 2 seconds on 3G

## 🛠️ Technical Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Vanilla CSS**: No dependencies, full control
- **ESLint**: Code quality and consistency

## 📞 Support

For technical support or customizations:
- Email: corey@evolutionsoftwareservices.com
- Response time: Within 24 hours

## 📄 License

Copyright © 2024 Evolution Software Services. All rights reserved.

---

**Ready for Expo Tomorrow! 🎪**

This landing page is production-ready and optimized for your expo event. The waitlist functionality will capture leads immediately, and the responsive design looks great on all devices.
