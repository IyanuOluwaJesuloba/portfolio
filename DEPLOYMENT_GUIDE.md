# Quick Deployment Guide

## 🚀 Deploy to Vercel (Recommended - 5 minutes)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
# Opens browser, click "Continue with GitHub"
# Authenticate and return to terminal
```

### Step 3: Deploy
```bash
cd c:\Users\dell\Documents\Dev\portfolio
vercel
```

### Step 4: Follow Prompts
```
? Set up and deploy "~/Documents/Dev/portfolio"? [Y/n] Y
? Which scope do you want to deploy to? (your username)
? Link to existing project? [y/N] N
? What's your project's name? portfolio
? In which directory is your code? ./
? Want to override the settings? [y/N] N
```

**Done!** Your site is now live. URL will be shown in terminal.

---

## 🌐 Custom Domain (Vercel)

### Step 1: Add Domain
```bash
vercel domains add yourdomain.com
```

### Step 2: Update DNS
Add these records to your domain registrar:
- Type: CNAME, Name: www, Value: cname.vercel.com
- Type: A, Name: @, Value: 76.76.19.89

### Step 3: Verify
```bash
vercel domains verify yourdomain.com
```

---

## 📊 Setup Analytics

### Google Analytics 4

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click "Create" → "Property"
3. Fill in property details
4. Select "Web" platform
5. Get your Measurement ID (G-XXXXXXXXXX)
6. Add to `app/layout.tsx`:

```typescript
// Add to <head>
<Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `}
</Script>
```

---

## 📧 Setup Email Notifications

### EmailJS (For Contact Form)

1. Go to [emailjs.com](https://emailjs.com)
2. Sign up (free tier supports 200 emails/month)
3. Add Email Service
4. Create Email Template
5. Get Service ID, Template ID, Public Key
6. Update environment variables:

```bash
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=public_key_xxxxx
```

---

## 📈 Monitor Performance

### Weekly Checklist
- [ ] Check Google Analytics dashboard
- [ ] Verify form submissions received
- [ ] Check for broken links (weekly)
- [ ] Monitor console errors

### Monthly Checklist
- [ ] Review top traffic sources
- [ ] Analyze visitor flow
- [ ] Check conversion metrics
- [ ] Plan optimizations

### Quarterly Checklist
- [ ] Run A/B tests
- [ ] Update case studies
- [ ] Refresh testimonials
- [ ] Plan feature additions

---

## 🛠️ Maintenance

### Keep Fresh
- Update projects quarterly
- Add new case studies
- Refresh testimonials
- Update skills/technologies
- Maintain dependencies

### Command Reference
```bash
# Development
npm run dev

# Production build
npm run build

# Test production locally
npm start

# Update packages
npm update

# Check for security issues
npm audit
```

---

## 🔒 Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 🚨 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -r .next
npm run build
```

### Deployment Issues
```bash
# Check build locally first
npm run build
npm start
```

### Forms Not Working
- Verify EmailJS credentials
- Check console for errors
- Test locally first

---

## 📱 Test Across Devices

### Before Going Live
- [ ] Desktop Chrome/Firefox/Safari
- [ ] Mobile iOS Safari
- [ ] Mobile Android Chrome
- [ ] Tablet (both orientations)
- [ ] Form submissions
- [ ] All links

### Use
- Chrome DevTools (F12)
- BrowserStack (cloud testing)
- LocalHost tunneling (ngrok)

---

## ✅ Pre-Launch Checklist

- [ ] Build succeeds locally
- [ ] All links working
- [ ] Forms tested
- [ ] Images loading
- [ ] Mobile responsive
- [ ] Dark mode works
- [ ] No console errors
- [ ] SEO metadata set
- [ ] Analytics configured
- [ ] Email setup working
- [ ] Domain configured (optional)
- [ ] Deployed to Vercel

---

## 🎉 You're Live!

Share your portfolio on:
- LinkedIn
- Twitter/X
- GitHub
- Dev.to
- Newsletter
- Email to network

**Now watch the opportunities come in! 🚀**
