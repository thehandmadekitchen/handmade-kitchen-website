# Using Netlify CMS to Add Content

## Overview

You now have **TWO ways** to add content to your website:

1. **Netlify CMS Admin Panel** (recommended for non-technical users)
2. **Manual editing** of `full-content-data.js` (for quick updates)

Both methods work! The CMS is easier and more visual.

---

## Setup: Netlify CMS (One-Time)

### Step 1: Deploy to Netlify

1. Create a new site on Netlify
2. Connect your GitHub repository
3. Deploy the site

### Step 2: Enable Netlify Identity

1. In Netlify Dashboard → **Identity**
2. Click "**Enable Identity**"
3. Under **Registration**, select "**Invite only**"
4. Under **External providers**, enable any you want (GitHub, Google, etc.)

### Step 3: Enable Git Gateway

1. Still in Identity settings
2. Scroll to **Services** → **Git Gateway**
3. Click "**Enable Git Gateway**"

### Step 4: Invite Yourself

1. Identity → **Invite users**
2. Enter your email
3. Check your email and click the invitation link
4. Set your password

### Step 5: Access the CMS

Go to: `https://your-site.netlify.app/admin`

You'll see the Netlify CMS login screen. Log in with the account you just created!

---

## Using the CMS to Add Content

### Adding a New Recipe

1. Go to `https://your-site.netlify.app/admin`
2. Click **Recipes** in the sidebar
3. Click **New Recipe**
4. Fill in the form:
   - **Title**: Recipe name
   - **Category**: Select from dropdown (Kid Snacks, Breakfasts, etc.)
   - **Prep/Cook Time**: e.g., "25 min"
   - **Servings**: e.g., "4 servings"
   - **Featured Image**: Upload an image or paste image URL
   - **Ingredients**: Click "Add ingredient" for each one
   - **Instructions**: Click "Add instruction" for each step
   - **Publish Date**: Set to today
5. Click **Publish** → **Publish now**

**The recipe is saved!** But it won't show on the website yet...

### Adding a New Blog Post

1. Click **Blog Posts** in the sidebar
2. Click **New Blog Post**
3. Fill in:
   - **Title**: Post title
   - **Category**: Meal Planning, Mom Hacks, or Lifestyle
   - **Excerpt**: Short preview (2-3 sentences)
   - **Featured Image**: Upload image
   - **Body**: Write your full article (use Markdown formatting)
   - **Publish Date**: Set to today
4. Click **Publish** → **Publish now**

---

## 🔄 IMPORTANT: Syncing CMS Content to Your Website

**When you add/edit content in Netlify CMS, it saves to markdown files in the `content/` folder. But your website loads from `full-content-data.js`.**

**You need to run the sync script to update your website!**

### Option A: Automatic Sync (Recommended)

**Set up a GitHub Action to run automatically:**

1. Create `.github/workflows/sync-content.yml` in your repository:

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
      - run: node sync-cms-content.js
      - uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: "Auto-sync CMS content"
          file_pattern: full-content-data.js
```

**Now every time you publish in the CMS, it automatically syncs!**

### Option B: Manual Sync

**If you don't set up the GitHub Action, run the sync manually:**

1. After adding content in CMS, open your terminal
2. Navigate to your website folder
3. Run: `npm run sync`
4. Commit and push the changes:
   ```bash
   git add full-content-data.js
   git commit -m "Update content from CMS"
   git push
   ```

---

## How It Works

### The Flow

1. **Add content in Netlify CMS** → Saves to `content/recipes/my-recipe.md`
2. **Sync script runs** → Reads markdown files
3. **Converts to JavaScript** → Updates `full-content-data.js`
4. **Website loads** → Reads from `full-content-data.js`
5. **Content appears!** → Your recipe/post is live

### File Structure

```
your-site/
├── admin/
│   └── config.yml          # CMS configuration
├── content/
│   ├── recipes/           # CMS saves recipes here (markdown)
│   ├── blog/              # CMS saves blog posts here (markdown)
│   └── shop/              # CMS saves shop items here (markdown)
├── full-content-data.js   # Website reads from here (JavaScript)
└── sync-cms-content.js    # Script that converts content
```

---

## Quick Reference

### To Add Content:
1. Go to `/admin`
2. Add your recipe/blog post
3. Click Publish
4. Run sync (automatic or manual)
5. Your content appears!

### To Edit Content:
1. Go to `/admin`
2. Find the item in the list
3. Click to edit
4. Make changes
5. Click Save
6. Run sync
7. Changes appear!

### To Delete Content:
1. Go to `/admin`
2. Find the item
3. Click the three dots → Delete
4. Run sync
5. Item removed!

---

## Troubleshooting

**"I added content in CMS but it's not showing on the site"**
→ Did you run the sync script? Check if `full-content-data.js` was updated.

**"The sync script says 'directory does not exist'"**
→ Make sure you have the `content/recipes/` and `content/blog/` folders.

**"I can't access /admin"**
→ Make sure you enabled Netlify Identity and Git Gateway in your Netlify dashboard.

**"The CMS login doesn't work"**
→ Check that you accepted the email invitation and set a password.

**"Changes appear in GitHub but not on the live site"**
→ Netlify needs to rebuild. Go to Deploys → Trigger Deploy.

---

## Tips

✅ **Add content regularly** - The homepage shows latest 4 recipes and 3 blog posts
✅ **Use good images** - Unsplash.com has great free food photos
✅ **Write clear instructions** - Keep recipe steps short and numbered
✅ **Use categories consistently** - Stick to the preset categories
✅ **Set publish dates correctly** - Newest content appears first on homepage

---

## Advanced: Custom Workflows

Want to add content a different way? You have options:

1. **CMS + Auto-sync** (easiest, recommended)
2. **Manual `full-content-data.js` edits** (fastest for quick updates)
3. **Individual JSON files** (use templates in `recipes-data/` and `blog-data/`)

All three work! Choose what fits your workflow.

---

## Need Help?

The sync script is in `sync-cms-content.js` - it's well-commented if you want to understand how it works or customize it!
