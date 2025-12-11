# How to Deploy Your Website to Netlify

## Complete Step-by-Step Guide

---

## Method 1: Deploy via GitHub (Recommended)

This method gives you automatic updates whenever you make changes.

### Step 1: Create a GitHub Account (if you don't have one)

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Create your free account

### Step 2: Create a New Repository

1. Once logged in to GitHub, click the **+** icon (top right)
2. Select **"New repository"**
3. Fill in:
   - **Repository name:** `handmade-kitchen` (or whatever you want)
   - **Description:** "My recipe blog website"
   - **Public or Private:** Your choice (both work with Netlify)
   - **DO NOT** check "Initialize this repository with a README"
4. Click **"Create repository"**

### Step 3: Upload Your Website Files

**Option A - Using GitHub Desktop (Easiest):**

1. Download [GitHub Desktop](https://desktop.github.com)
2. Install and log in with your GitHub account
3. Click **"Add"** → **"Add Existing Repository"**
4. Navigate to your unzipped `handmade-kitchen-FULL` folder
5. Click **"Create Repository"**
6. Click **"Publish repository"**
7. Done! Your files are on GitHub

**Option B - Using Command Line:**

1. Unzip `handmade-kitchen-FINAL-WITH-DESIGN-CMS.zip`
2. Open Terminal/Command Prompt
3. Navigate to the folder:
   ```bash
   cd path/to/handmade-kitchen-FULL
   ```
4. Run these commands (replace YOUR-USERNAME and YOUR-REPO-NAME):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

**Option C - Using GitHub Website (Drag & Drop):**

1. On your repository page, click **"uploading an existing file"**
2. Drag all files from your unzipped folder
3. Scroll down, click **"Commit changes"**
4. Done!

### Step 4: Connect to Netlify

1. Go to [netlify.com](https://www.netlify.com)
2. Click **"Sign up"** (or "Log in" if you have an account)
3. Choose **"Sign up with GitHub"**
4. Authorize Netlify to access your GitHub

### Step 5: Deploy from GitHub

1. Click **"Add new site"** → **"Import an existing project"**
2. Click **"Deploy with GitHub"**
3. Select your repository (`handmade-kitchen`)
4. **Build settings:**
   - **Build command:** Leave empty
   - **Publish directory:** `.` (just a dot)
5. Click **"Deploy site"**

### Step 6: Wait for Deployment

- Netlify will build your site (takes 1-2 minutes)
- You'll see "Site deploy in progress..."
- When done, you'll see "Published"

### Step 7: Your Site is Live! 🎉

- Netlify gives you a URL like: `random-name-123456.netlify.app`
- Click the URL to see your live website!

---

## Method 2: Deploy via Drag & Drop (Quick Start)

Don't want to use GitHub yet? Deploy directly!

### Step 1: Sign Up for Netlify

1. Go to [netlify.com](https://www.netlify.com)
2. Click **"Sign up"**
3. Choose email or GitHub

### Step 2: Deploy Your Site

1. Unzip `handmade-kitchen-FINAL-WITH-DESIGN-CMS.zip`
2. In Netlify dashboard, look for the drag-and-drop area
3. **Drag your entire `handmade-kitchen-FULL` folder** into the box
4. Wait 1-2 minutes
5. Your site is live!

**⚠️ Note:** With drag-and-drop, you'll need to manually re-upload files every time you make changes. GitHub method auto-updates!

---

## Step 8: Enable Netlify Identity (For CMS Access)

This lets you use the admin panel at `/admin`

1. In your Netlify site dashboard, click **"Identity"**
2. Click **"Enable Identity"**
3. Under **Settings** → **Registration**, select:
   - **Registration preferences:** Invite only
4. Scroll down to **Services** → **Git Gateway**
5. Click **"Enable Git Gateway"**

### Step 9: Invite Yourself to the CMS

1. Still in **Identity** tab
2. Click **"Invite users"**
3. Enter your email address
4. Check your email
5. Click the invitation link
6. Set your password
7. You're ready to use `/admin`!

---

## Step 10: Access Your Admin Panel

1. Go to `https://your-site.netlify.app/admin`
2. Log in with the email/password you just created
3. You can now add recipes, blog posts, and change design! 🎉

---

## Step 11: Custom Domain (Optional)

Want `yoursite.com` instead of `random-name.netlify.app`?

### Option A: Buy Domain Through Netlify

1. In site dashboard, click **"Domain settings"**
2. Click **"Add or register domain"**
3. Search for available domains
4. Purchase (usually $10-15/year)
5. Netlify sets it up automatically!

### Option B: Use Existing Domain

1. In site dashboard, click **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter your domain (e.g., `handmadekitchen.com`)
4. Follow Netlify's DNS instructions
5. Point your domain to Netlify

**Most popular domain registrars:**
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)
- [GoDaddy](https://www.godaddy.com)

---

## Making Updates After Deployment

### If You Used GitHub Method:

1. Make changes to your local files
2. Run `npm run sync` (if you changed content/design in CMS)
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
4. Netlify automatically rebuilds your site!
5. Wait 1-2 minutes, your changes are live!

### If You Used Drag & Drop:

1. Make changes to your local files
2. Run `npm run sync` (if needed)
3. Go to Netlify → **Deploys** tab
4. Drag your updated folder to deploy box
5. Site updates!

---

## Setting Up Automatic Sync (GitHub Method Only)

Make the CMS sync automatically when you publish content:

### Create GitHub Action

1. In your `handmade-kitchen-FULL` folder, create:
   ```
   .github/workflows/sync-content.yml
   ```

2. Add this content:

```yaml
name: Sync CMS Content

on:
  push:
    branches: [ main ]
    paths:
      - 'content/**'

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Sync content
        run: node sync-cms-content.js
      
      - name: Commit changes
        uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: "Auto-sync CMS content"
          file_pattern: "full-content-data.js design-settings.js"
```

3. Commit and push to GitHub

**Now:** When you publish in `/admin`, it automatically syncs and updates your site! 🎉

---

## Common Issues & Solutions

### "Site not building"
**Solution:** Check Build log in Netlify → Deploys tab. Look for error messages.

### "Can't access /admin"
**Solution:** 
1. Make sure you enabled Netlify Identity
2. Make sure you enabled Git Gateway
3. Accept email invitation and set password

### "Changes not showing on site"
**Solution:**
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Check Netlify → Deploys → Make sure latest deploy succeeded
3. If using CMS, did you run `npm run sync`?

### "Images not loading"
**Solution:**
1. Make sure images are in the `images/uploads` folder
2. Check image URLs in your content
3. Re-upload images through CMS

### "Custom domain not working"
**Solution:**
1. Wait 24-48 hours for DNS to propagate
2. Check DNS settings match Netlify's instructions
3. Enable HTTPS in Netlify domain settings

---

## Your Deployment Checklist

- [ ] Files uploaded to GitHub (or Netlify directly)
- [ ] Site deployed to Netlify
- [ ] Site URL works
- [ ] Netlify Identity enabled
- [ ] Git Gateway enabled
- [ ] Email invitation accepted
- [ ] Can access `/admin`
- [ ] Can log in to admin panel
- [ ] Can add/edit content in CMS
- [ ] Can change design settings in CMS
- [ ] `npm run sync` works locally
- [ ] Changes deploy successfully
- [ ] Custom domain added (optional)
- [ ] GitHub Action set up for auto-sync (optional)

---

## Helpful Netlify Features

### Build Notifications

Get notified when your site deploys:
1. Site dashboard → **Site settings** → **Build & deploy**
2. Add notification webhooks (email, Slack, etc.)

### Deploy Previews

See changes before going live:
1. Create a new branch in Git
2. Make changes
3. Push to GitHub
4. Netlify creates preview URL
5. Review, then merge to main

### Environment Variables

Store secret keys safely:
1. Site dashboard → **Site settings** → **Environment variables**
2. Add variables (API keys, etc.)
3. They're hidden from public code

### Forms

Netlify handles form submissions for free:
1. Your newsletter form already works!
2. See submissions in **Forms** tab
3. Get email notifications

---

## Next Steps After Deployment

1. **Test everything:**
   - All pages load
   - Navigation works
   - CMS login works
   - Images display

2. **Add content:**
   - Go to `/admin`
   - Add more recipes
   - Write blog posts
   - Customize design

3. **Share your site:**
   - Social media
   - Email signature
   - Business cards

4. **Set up analytics (optional):**
   - Google Analytics
   - Netlify Analytics
   - Track visitors

5. **SEO optimization:**
   - Add meta descriptions
   - Submit to Google Search Console
   - Create sitemap

---

## Support Resources

**Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
**Netlify Support:** support@netlify.com
**Community Forum:** [answers.netlify.com](https://answers.netlify.com)

**Your Documentation:**
- NETLIFY-CMS-GUIDE.md - CMS setup
- DESIGN-CUSTOMIZATION-GUIDE.md - Design changes
- HOW-TO-ADD-CONTENT.md - Content management

---

## You're Ready!

Follow the steps above and your website will be live in about 15 minutes! 🚀

**Recommended path:**
1. Create GitHub account
2. Upload files to GitHub
3. Connect to Netlify
4. Enable Identity & Git Gateway
5. Access admin panel
6. Start adding content!

Good luck with your website! 🎉
