# THE HANDMADE KITCHEN - COMPLETE CONTENT GUIDE

This package includes a fully functional website with:

## CONTENT INCLUDED

### Recipes (30 Full Recipes with Complete Instructions)
Organized into 6 categories:
- **Kid Snacks** (5 recipes)
- **Breakfasts** (5 recipes) 
- **Lunches** (5 recipes)
- **Dinners** (5 recipes)
- **Appetizers** (5 recipes)
- **Desserts** (5 recipes)

Each recipe includes:
- Full ingredient list
- Step-by-step instructions
- Prep/cook time
- Servings
- Beautiful food photography

### Blog Posts (15 Full Articles with Complete Content)
- **Meal Planning** (5 posts)
- **Mom Hacks** (5 posts)
- **Lifestyle** (5 posts)

Each blog post includes:
- Full article content (800-1200 words)
- Engaging headlines
- Practical tips
- Conversational tone

## HOW TO ADD MORE CONTENT

### Adding Recipes

Open `content-data.js` and find the recipes section. Add new recipes following this format:

```javascript
{
  title: "Your Recipe Name",
  time: "30 min",
  servings: "4 servings",
  image: "https://images.unsplash.com/photo-xxxxx?w=800&h=600&fit=crop",
  ingredients: [
    "1 cup ingredient",
    "2 tablespoons another ingredient",
    // add all ingredients
  ],
  instructions: [
    "First step with details.",
    "Second step explained clearly.",
    // add all steps
  ]
}
```

### Adding Blog Posts

Add new blog posts in the `blogPosts` array:

```javascript
{
  title: "Your Post Title",
  category: "meal-planning", // or "mom-hacks" or "lifestyle"
  excerpt: "Short description that appears on the blog card.",
  image: "https://images.unsplash.com/photo-xxxxx?w=800&h=600&fit=crop",
  content: `
# Your Post Title

Full article content here in markdown format.

## Section Headers

Paragraphs, lists, everything you need.

**Bold text** and *italic text* work great.
`
}
```

## FEATURES

✅ Click recipes to see full details in modal
✅ Click blog posts to read full articles in modal  
✅ Category filtering for both recipes and blog
✅ Mobile-responsive hamburger menu
✅ Netlify CMS ready for easy editing
✅ Clean eating focused (no refined sugar, no seed oils)

## DEPLOYMENT

1. Upload all files to GitHub
2. Connect to Netlify
3. Site deploys automatically
4. Access CMS at yoursite.com/admin

---

Ready to expand? Just follow the format above!
