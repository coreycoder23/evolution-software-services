# 🚀 Quick Deployment Guide - Ready for Expo Tomorrow!

## ⚡ Fastest Deployment Options (5-10 minutes)

### Option 1: Vercel (Recommended - Easiest)
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy (from evolution-landing directory)
vercel

# 3. Follow prompts:
# - Login to Vercel
# - Set project name: evolution-software-services
# - Build Command: npm run build
# - Output Directory: dist
# - Install command: npm install

# 4. Configure domain:
# - Go to Vercel dashboard
# - Add custom domain: www.evolutionsoftwareservices.com
```

### Option 2: Netlify (Drag & Drop)
```bash
# 1. Build the project
npm run build

# 2. Go to netlify.com
# 3. Drag the 'dist' folder to the deploy area
# 4. Configure domain in site settings
```

### Option 3: AWS S3 + CloudFront
```bash
# 1. Build the project
npm run build

# 2. Upload dist/ contents to your S3 bucket
# 3. Enable static website hosting
# 4. Configure CloudFront distribution
# 5. Point domain to CloudFront
```

## 🌐 Domain Setup (GoDaddy)

1. **DNS Configuration:**
   - Point A record `@` to your hosting IP
   - Point CNAME `www` to your hosting domain
   
2. **For Vercel:**
   - Add custom domain in Vercel dashboard
   - Follow their DNS instructions

3. **For Netlify:**
   - Add custom domain in site settings
   - Update nameservers if needed

## 🔧 Pre-Deployment Checklist

- ✅ Build completes successfully (`npm run build`)
- ✅ Logo file is in place (`src/assets/evolution_website.svg`)
- ✅ Contact email updated (`corey@evolutionsoftwareservices.com`)
- ✅ Domain references updated (`evolutionsoftwareservices.com`)
- ✅ Meta tags configured for SEO
- ✅ Modal form captures leads properly

## 📱 Post-Deployment Testing

1. **Desktop & Mobile Responsive**
2. **Waitlist Modal Functions**
3. **Form Submission (check console for API calls)**
4. **Page Load Speed (<3 seconds)**
5. **SEO Meta Tags (view page source)**

## 🆘 Emergency Backup Plan

If main deployment fails, you can run locally for demo:

```bash
# Start local server
npm run dev

# Share via ngrok for public access
npx ngrok http 5173
```

## 📞 Need Help?

- Email: corey@evolutionsoftwareservices.com
- This is production-ready code - deploy with confidence!

---

**🎪 EXPO READY: Your landing page is optimized and ready to capture leads tomorrow!** 