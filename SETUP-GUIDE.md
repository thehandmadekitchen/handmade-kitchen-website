# The Handmade Kitchen - AUTOMATIC CMS Setup Guide

## 🎉 NEW: Everything is Automated!

This version automatically pulls ALL content from your CMS, including:
- ✅ Home page text (hero, welcome, features)
- ✅ Social media links (Instagram, Pinterest, Facebook, TikTok)
- ✅ About page content
- ✅ **NO HTML editing needed - EVER!**

---

## 📋 Step-by-Step Setup (20 minutes)

### STEP 1: Create a GitHub Account (Free - 2 min)

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Create a free account
4. Verify your email

---

### STEP 2: Create a New Repository (2 min)

1. Once logged into GitHub, click the **"+"** icon in top right
2. Click **"New repository"**
3. Name it: `handmade-kitchen-website`
4. Select **Public** (required for free Netlify hosting)
5. Check **"Add a README file"**
6. Click **"Create repository"**

---

### STEP 3: Upload Your Website Files (3 min)

1. **Download and unzip** the `handmade-kitchen-auto.zip` file I created
2. On your GitHub repository page, click **"Add file"** → **"Upload files"**
3. Drag ALL the files and folders from the unzipped folder:
   - `index.html`
   - `admin` folder
   - `content` folder
   - `images` folder
4. Scroll down and click **"Commit changes"**

Your files are now on GitHub!

---

### STEP 4: Deploy to Netlify (2 min)

1. Go to [netlify.com](https://netlify.com)
2. Click **"Sign up"** → Choose **"Sign up with GitHub"**
3. Authorize Netlify
4. Click **"Add new site"** → **"Import an existing project"**
5. Click **"GitHub"**
6. Select your `handmade-kitchen-website` repository
7. Click **"Deploy site"**

Wait 30 seconds... Your site is LIVE! 🎉

---

### STEP 5: Enable Netlify Identity (5 min)

This lets you log in to your admin panel.

1. In Netlify, click on your site
2. Go to **"Site configuration"** (top menu)
3. Click **"Identity"** in left sidebar
4. Click **"Enable Identity"**
5. Scroll to **"Registration preferences"**
6. Select **"Invite only"**
7. Click **"Save"**

---

### STEP 6: Enable Git Gateway (1 min)

Allows CMS to save your changes.

1. Still in **"Identity"** settings
2. Scroll to **"Services"**
3. Click **"Enable Git Gateway"**

---

### STEP 7: Invite Yourself (2 min)

1. Still in **"Identity"** section
2. Click **"Invite users"**
3. Enter your email
4. Click **"Send"**
5. Check your email and click the invitation link
6. Create your admin password

---

### STEP 8: Access Your Admin Panel (1 min)

1. Go to `https://your-site-name.netlify.app/admin`
2. Log in with your email and password

**YOU'RE IN!** 🎊

---

## 🎨 How to Edit Everything in CMS

### Update Social Media Links

1. Go to `/admin`
2. Click **"Site Settings"** in left sidebar
3. Click **"Contact Info"**
4. Enter your social media URLs:
   - Instagram: `https://instagram.com/yourhandle`
   - Pinterest: `https://pinterest.com/yourhandle`
   - Facebook: `https://facebook.com/yourpage`
   - TikTok: `https://tiktok.com/@yourhandle`
5. Click **"Publish"**

**The footer icons update automatically!** No HTML editing needed! 🎉

---

### Update Home Page Text

1. Click **"Site Settings"** → **"Home Page"**
2. Edit any field:
   - **Hero Title:** Main headline
   - **Hero Subtitle:** Text under headline
   - **Welcome Title:** "Welcome Home" section
   - **Welcome Subtitle:** Tagline
   - **Feature 1/2/3:** The three feature cards
3. Click **"Publish"**

**Changes appear automatically on your site!**

---

### Update About Page

1. Click **"Site Settings"** → **"About Page"**
2. Edit the title, subtitle, and main content
3. Click **"Publish"**

---

### Add a Recipe

1. Click **"Recipes"** → **"New Recipe"**
2. Fill in all fields:
   - Title
   - Category
   - Time & Servings
   - Upload image
   - Add ingredients (one per line)
   - Add instructions (one per step)
3. Click **"Publish"**

---

### Write a Blog Post

1. Click **"Blog Posts"** → **"New Blog Post"**
2. Fill in:
   - Title & Category
   - Excerpt (summary)
   - Upload feature image
   - Write your post using rich text editor
3. Click **"Publish"**

---

### Add Shop Products

1. Click **"Shop Products"** → **"New Shop Products"**
2. Fill in:
   - Product name
   - Type (e.g., "Digital Planner")
   - Description
   - Price
   - Icon (emoji like 📋)
   - Buy link (your Gumroad URL)
3. Click **"Publish"**

---

## ✨ What's Automated

When you edit in CMS, these update automatically:

✅ **Social media icons** - Pull from Contact Info settings  
✅ **Hero text** - From Home Page settings  
✅ **Feature cards** - From Home Page settings  
✅ **About page** - From About Page settings  
✅ **All recipes** - From Recipes collection  
✅ **All blog posts** - From Blog collection  
✅ **Shop products** - From Shop collection  

**Zero HTML editing. Everything through the CMS!**

---

## 🚀 Advanced: Custom Domain

Want `thehandmadekitchen.com`?

1. Buy domain from Namecheap ($10-15/year)
2. In Netlify: **"Domain management"** → **"Add custom domain"**
3. Enter your domain
4. Follow DNS setup instructions
5. Netlify adds HTTPS automatically

---

## ❓ Troubleshooting

**Social icons not showing?**
- Make sure you clicked "Publish" in Contact Info
- Wait 2 minutes for site to rebuild
- Hard refresh browser (Ctrl+Shift+R)

**Changes not appearing?**
- Always click "Publish" (not just Save)
- Wait 1-2 minutes for Netlify to rebuild
- Clear browser cache

**Can't log in to /admin?**
- Check you enabled Netlify Identity
- Verify you accepted email invitation
- Try password reset in Identity tab

---

## 📝 How the Automation Works

The website uses JavaScript to:
1. Fetch your settings from `/content/settings/` files
2. Parse the YAML data
3. Update the page content automatically
4. Display your social links with proper icons

**You never see the technical stuff - just edit in CMS!**

---

## 🎓 Next Steps

1. **Update your social links** in CMS
2. **Customize home page text**
3. **Write your about page**
4. **Add real recipes**
5. **Create blog posts**
6. **Add shop products**

Everything is ready - just fill it with your content!

---

## 💡 Pro Tips

- **Images:** Upload high-quality photos (at least 800x600px)
- **SEO:** Use descriptive titles and good excerpts
- **Consistency:** Post regularly to build audience
- **Backup:** Your content is safe on GitHub automatically

---

## 📧 Need Help?

If you get stuck, just ask! The setup is straightforward, but I'm here to help troubleshoot.

**Total setup time:** ~20 minutes  
**Editing time per post:** ~2-3 minutes  
**HTML knowledge required:** ZERO! 🎉
