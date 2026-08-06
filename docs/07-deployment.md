# Deployment Guide

## Overview

The MBSCET Website is a static site that can be deployed to any static hosting provider. This guide covers deployment to Vercel (recommended), Netlify, and other platforms.

---

## Prerequisites

- Node.js 18+ installed
- Git repository access
- Hosting account (Vercel/Netlify)

---

## Deployment Options

### Option 1: Vercel (Recommended)

**Why Vercel:**
- Free tier for personal projects
- Automatic deployments from Git
- Global CDN
- Custom domain support
- Analytics included

#### Steps:

1. **Push to Git**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Sign up/Login
- Click "New Project"
- Import Git repository

3. **Configure Project**
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

4. **Deploy**
- Click "Deploy"
- Wait for build to complete
- Get your URL: `https://your-project.vercel.app`

5. **Custom Domain**
- Go to Project Settings → Domains
- Add your domain
- Configure DNS

---

### Option 2: Netlify

**Why Netlify:**
- Free tier available
- Easy setup
- Form handling
- Serverless functions

#### Steps:

1. **Push to Git**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Connect to Netlify**
- Go to [netlify.com](https://netlify.com)
- Sign up/Login
- Click "New site from Git"
- Select repository

3. **Configure Build**
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18

4. **Deploy**
- Click "Deploy site"
- Wait for build
- Get your URL: `https://your-site.netlify.app`

---

### Option 3: GitHub Pages

**Limitation:** Requires static export

#### Steps:

1. **Configure Static Export**
```javascript
// next.config.ts
const nextConfig = {
  output: 'export',
};
```

2. **Build**
```bash
npm run build
```

3. **Deploy**
- Push `out/` folder to `gh-pages` branch
- Enable GitHub Pages in repository settings

---

### Option 4: Traditional Hosting

For VPS/dedicated servers:

1. **Build Locally**
```bash
npm run build
npm run export  # If using static export
```

2. **Upload Files**
```bash
# Upload .next folder or out/ folder
scp -r .next user@server:/var/www/mbscet/
```

3. **Configure Server**
```nginx
# Nginx configuration
server {
    listen 80;
    server_name mbscet.edu.in;
    root /var/www/mbscet;
    
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }
}
```

---

## Environment Variables

### Required Variables

None required for basic deployment.

### Optional Variables

```env
# Analytics
NEXT_PUBLIC_GA_ID=UA-XXXXXXXXX

# API URLs
NEXT_PUBLIC_API_URL=https://api.example.com
```

### Setting Variables

**Vercel:**
- Project Settings → Environment Variables

**Netlify:**
- Site Settings → Build & Deploy → Environment

---

## Build Process

### What Happens During Build

1. **TypeScript Compilation** - Check for type errors
2. **ESLint** - Check for code quality
3. **Next.js Build** - Compile pages
4. **Static Generation** - Pre-render pages
5. **Optimization** - Compress assets

### Build Output

```
.next/
├── server/           # Server-side code
├── static/           # Static assets
├── chunks/           # JavaScript chunks
└── pages/            # Pre-rendered pages
```

---

## Post-Deployment

### Verify Deployment

1. Check all pages load correctly
2. Test mobile responsiveness
3. Verify PDFs display properly
4. Check images load
5. Test navigation links

### Performance Check

- Run Lighthouse audit
- Check Core Web Vitals
- Verify loading times

---

## Custom Domain Setup

### Vercel

1. Go to Project Settings → Domains
2. Add domain name
3. Configure DNS:
   - Type: CNAME
   - Name: @
   - Value: cname.vercel-dns.com

### Netlify

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS:
   - Type: CNAME
   - Name: @
   - Value: your-site.netlify.app

---

## SSL/HTTPS

Both Vercel and Netlify provide free SSL certificates automatically.

### Custom Server

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d mbscet.edu.in
```

---

## Continuous Deployment

### Automatic Deployments

Both Vercel and Netlify automatically deploy when you push to Git:

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Auto-deploys in ~2-5 minutes
```

### Branch Deployments

- **main** → Production
- **develop** → Preview URL
- **feature/** → Preview URL

---

## Rollback

### Vercel

1. Go to Project → Deployments
2. Find previous deployment
3. Click "Promote to Production"

### Netlify

1. Go to Site → Deploys
2. Find previous deploy
3. Click "Publish deploy"

---

## Monitoring

### Uptime Monitoring

Use services like:
- UptimeRobot (free)
- Pingdom
- StatusCake

### Analytics

Add analytics tracking:

```tsx
// src/app/layout.tsx
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

---

## Troubleshooting

### Build Errors

**Issue:** Build fails with TypeScript errors
**Solution:** Fix type errors, check imports

**Issue:** Build fails with missing modules
**Solution:** Run `npm install`

**Issue:** Build fails with ESLint errors
**Solution:** Fix linting issues or disable rules

### Deployment Issues

**Issue:** Page not found (404)
**Solution:** Check routing, verify page exists

**Issue:** Styles not loading
**Solution:** Check CSS imports, verify build output

**Issue:** Images not loading
**Solution:** Check file paths, verify files exist in public/

---

## Cost Comparison

| Provider | Free Tier | Paid Plan |
|----------|-----------|-----------|
| Vercel | 100GB bandwidth | $20/month |
| Netlify | 100GB bandwidth | $19/month |
| GitHub Pages | 1GB storage | Free |
| Traditional Hosting | N/A | $20-100/month |

**Recommendation:** Vercel for most use cases (best Next.js integration).

---

## Security

### Static Site = Secure

- No server to hack
- No database to attack
- No PHP vulnerabilities
- No WordPress exploits

### Best Practices

1. Keep dependencies updated
2. Use HTTPS (automatic with Vercel/Netlify)
3. Don't expose sensitive data
4. Monitor for vulnerabilities

---

## Performance Optimization

### Already Optimized

- Static generation (fast loads)
- Image optimization (Next.js)
- Code splitting (automatic)
- Compression (gzip/brotli)

### Further Optimization

1. **CDN** - Vercel/Netlify include CDN
2. **Caching** - Browser caching headers
3. **Lazy Loading** - Images and components
4. **Minification** - Automatic with Next.js

---

## Backup Strategy

### Git Backup

All code is in Git repository:

```bash
# Clone repository
git clone https://github.com/your-repo/mbscet-website.git
```

### Content Backup

```bash
# Backup content
tar -czf content-backup.tar.gz src/content/
```

---

## Support

### Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

### Community

- [Next.js Discord](https://discord.gg/bUG2bvbtHy)
- [Vercel Discord](https://vercel.com/discord)