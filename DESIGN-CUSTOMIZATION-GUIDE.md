# Customizing Your Website Design

## Overview

You can now customize your website's appearance through the **Netlify CMS admin panel** - no code editing required!

Access: `https://your-site.netlify.app/admin` → **Site Settings** → **Design Settings**

---

## What You Can Customize

### 🎨 Colors

Change the entire color scheme of your website:

**Primary Color** (Default: Olive Green #2c5f4f)
- Used for: Headers, navigation, buttons, main brand color
- Appears in: All headings, CTA buttons, category badges

**Secondary Color** (Default: Sage #8fa893)
- Used for: Accents, hover states
- Appears in: Button hovers, link colors

**Accent Color** (Default: Gold #d4a574)
- Used for: Highlights, CTAs, special elements
- Appears in: Category icons, important buttons

**Background Color** (Default: Off-White #fafaf9)
- Used for: Main page background
- Creates the overall feel of your site

**Text Color** (Default: Charcoal #2d2d2d)
- Used for: All body text
- Make sure it contrasts well with your background!

**💡 Tip:** Use a color palette generator like [Coolors.co](https://coolors.co) to create harmonious color schemes!

---

### ✍️ Typography (Fonts)

Choose from professional Google Fonts:

**Heading Font** (Default: Playfair Display)
- Used for: All titles, section headers, recipe names
- Options:
  - **Playfair Display** - Elegant serif (current)
  - **Merriweather** - Classic, readable serif
  - **Cormorant Garamond** - Refined, sophisticated
  - **Libre Baskerville** - Traditional, bookish
  - **Montserrat** - Modern, clean sans-serif

**Body Font** (Default: Lora)
- Used for: All paragraphs, descriptions, instructions
- Options:
  - **Lora** - Beautiful, readable serif (current)
  - **Merriweather** - Classic serif
  - **Open Sans** - Clean, modern sans-serif
  - **Karla** - Friendly sans-serif
  - **Source Sans Pro** - Professional sans-serif

**Accent Font** (Default: Karla)
- Used for: Navigation, buttons, labels
- Options:
  - **Karla** - Friendly, approachable (current)
  - **Montserrat** - Modern, geometric
  - **Raleway** - Elegant, thin
  - **Open Sans** - Clean, professional

**💡 Font Pairing Tips:**
- Serif heading + Serif body = Traditional, elegant
- Serif heading + Sans body = Modern, clean
- Sans heading + Serif body = Contemporary
- Sans heading + Sans body = Minimalist, modern

---

### 🏷️ Logo & Branding

**Site Name**
- Changes the text logo in the navigation
- Default: "The Handmade Kitchen"

**Site Logo** (Optional)
- Upload your own logo image
- **Best size:** 200px wide x 50px tall (PNG with transparent background)
- **When uploaded:** Replaces text logo with your image

**Favicon** (Optional)
- Small icon that appears in browser tabs
- **Best size:** 32x32px or 64x64px (PNG or ICO)
- **Tip:** Use [Favicon.io](https://favicon.io) to generate from text or image

---

### 🎠 Carousel Images

Customize all 4 carousel slides:

**Slide 1 Image** - Main hero (default: kitchen/ingredients)
**Slide 2 Image** - Real ingredients focus
**Slide 3 Image** - Meal planning theme
**Slide 4 Image** - Shop/digital products

**💡 Image Requirements:**
- **Size:** 1600px wide x 600px tall (minimum)
- **Format:** JPG or PNG
- **Subject:** Horizontal/landscape images work best
- **Quality:** Use high-resolution food photography

**Where to find images:**
- [Unsplash.com](https://unsplash.com) - Free high-quality photos
- [Pexels.com](https://pexels.com) - Free stock photos
- Your own photography!

---

### 🖼️ Background Settings

Add subtle patterns or background images:

**Use Pattern Background**
- Toggle on/off for subtle background patterns

**Pattern Type** (when enabled):
- **None** - Solid color background
- **Subtle Dots** - Tiny dot pattern (elegant)
- **Light Grid** - Subtle grid lines (organized)
- **Diagonal Lines** - Subtle stripes (modern)

**Background Image** (Optional)
- Full-page background image
- **⚠️ Use sparingly!** Can make text hard to read
- **Best practice:** Use very light/faded images
- **Recommended:** Stick to patterns for most cases

---

## How to Apply Your Changes

### Step 1: Access Design Settings

1. Log in to `/admin`
2. Click **Site Settings** in the left sidebar
3. Click **Design Settings**

### Step 2: Make Changes

**For Colors:**
- Click the color box
- Choose from color picker OR enter hex code
- See preview immediately

**For Fonts:**
- Click dropdown menu
- Select your preferred font
- Preview shows font name

**For Images:**
- Click "Choose an image"
- Upload from computer OR paste image URL
- Image preview appears

**For Patterns:**
- Toggle switches on/off
- Select from dropdown menus

### Step 3: Save & Publish

1. Click **Publish** at the top
2. Select **Publish now**
3. Changes are saved!

### Step 4: Sync to Website

**Option A - Automatic:**
If you set up GitHub Actions, changes apply automatically!

**Option B - Manual:**
```bash
npm run sync
git add design-settings.js
git commit -m "Update design settings"
git push
```

### Step 5: View Changes

1. Netlify automatically rebuilds your site
2. Wait 1-2 minutes
3. Refresh your website
4. See your new design! ✨

---

## Design Change Examples

### Example 1: Earthy Natural

```
Primary Color: #4a6741 (Forest Green)
Secondary Color: #8b7355 (Warm Brown)
Accent Color: #d4a574 (Gold - keep)
Background: #f9f7f4 (Cream)
Heading Font: Merriweather
Body Font: Lora
```

### Example 2: Modern Minimalist

```
Primary Color: #1a1a1a (Almost Black)
Secondary Color: #666666 (Gray)
Accent Color: #ff6b6b (Coral)
Background: #ffffff (Pure White)
Heading Font: Montserrat
Body Font: Open Sans
```

### Example 3: Warm & Rustic

```
Primary Color: #8b4513 (Saddle Brown)
Secondary Color: #cd853f (Peru)
Accent Color: #daa520 (Goldenrod)
Background: #faf8f3 (Warm Beige)
Heading Font: Libre Baskerville
Body Font: Merriweather
```

---

## Troubleshooting

**"My colors changed but fonts didn't"**
→ Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**"I uploaded a logo but it's not showing"**
→ Make sure you ran the sync script and deployed changes

**"The site looks broken after my changes"**
→ Revert to previous version in Git or reset design.md to defaults

**"Background image makes text unreadable"**
→ Choose a lighter image or remove it - patterns work better!

**"Changes aren't appearing on live site"**
→ Check Netlify deploy log - site needs to rebuild after sync

---

## Best Practices

✅ **Test changes incrementally** - Change one thing at a time
✅ **Keep good contrast** - Text must be readable on backgrounds
✅ **Use web-safe fonts** - Stick to the provided options
✅ **Optimize images** - Large files slow down your site
✅ **Save your colors** - Write down hex codes you like
✅ **Get feedback** - Show friends/family before finalizing

❌ **Don't use too many colors** - 3-5 is plenty
❌ **Don't use busy backgrounds** - Keep it simple
❌ **Don't change fonts constantly** - Pick and stick
❌ **Don't forget mobile** - Design should work on phones too

---

## Reverting to Defaults

If you want to go back to the original design:

1. Go to `/admin` → Site Settings → Design Settings
2. Set these values:

```
Colors:
  Primary: #2c5f4f
  Secondary: #8fa893
  Accent: #d4a574
  Background: #fafaf9
  Text: #2d2d2d

Typography:
  Heading Font: Playfair Display
  Body Font: Lora
  Accent Font: Karla

Branding:
  Site Name: The Handmade Kitchen
  Logo: (leave empty)
  Favicon: (leave empty)

Carousel: (leave all empty to use defaults)

Background:
  Use Pattern: Off
  Pattern Type: None
  Background Image: (leave empty)
```

3. Save and sync

---

## Advanced: Multiple Design Themes

Want seasonal designs or special themes?

1. Document your current settings
2. Create new design in CMS
3. Save settings as backup
4. Switch between them by updating design settings

**Example:** Holiday theme with reds/greens in December!

---

## Need Help?

The design settings are powerful but safe to experiment with. You can always revert back to defaults or a previous version through Git.

**Happy designing!** 🎨
