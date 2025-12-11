# How to Add New Recipes and Blog Posts

## The Easy Way: Individual Files

Each recipe and blog post is now its own file! This makes it super easy to add, edit, or remove content.

## Adding a New Recipe

### Step 1: Create a new file in `recipes-data/`

Example: `recipes-data/banana-bread.json`

```json
{
  "id": "banana-bread",
  "title": "Whole Wheat Banana Bread",
  "category": "Breakfasts",
  "time": "1 hour",
  "servings": "12 slices",
  "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",
  "ingredients": [
    "3 ripe bananas, mashed",
    "1/3 cup melted coconut oil",
    "1/2 cup honey",
    "2 eggs",
    "2 cups whole wheat flour",
    "1 teaspoon baking soda"
  ],
  "instructions": [
    "Preheat oven to 350°F.",
    "Mix wet ingredients.",
    "Add dry ingredients.",
    "Pour into greased loaf pan.",
    "Bake 50-60 minutes."
  ]
}
```

### Step 2: Add it to the list

Open `full-content-data.js` and add your new recipe to the recipes array. The file will automatically show up on the site!

**Categories available:**
- Kid Snacks
- Breakfasts  
- Lunches
- Dinners
- Appetizers
- Desserts

## Adding a New Blog Post

### Step 1: Create a new file in `blog-data/`

Example: `blog-data/freezer-meals.json`

```json
{
  "id": "freezer-meals",
  "title": "Ultimate Guide to Freezer Meals",
  "category": "Meal Planning",
  "excerpt": "Make 30 freezer meals in 3 hours. Here's exactly how I do it.",
  "image": "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800",
  "content": "Full article content here...\n\n## Section Heading\n\nYour content with **bold text** and regular paragraphs.\n\n- Bullet point 1\n- Bullet point 2"
}
```

### Step 2: Add it to the list

Open `full-content-data.js` and add your new blog post to the blogPosts array.

**Categories available:**
- Meal Planning
- Mom Hacks
- Lifestyle

## Content Formatting Tips

### For Recipe Images
Use Unsplash for free high-quality food photos:
- Go to unsplash.com
- Search for your food
- Right-click image → Copy image address
- Use URL like: `https://images.unsplash.com/photo-XXXXX?w=800`

### For Blog Content
- Use `\n\n` for new paragraphs
- Use `## ` for section headings
- Use `**text**` for bold
- Use `- ` for bullet points

### Recipe Instructions
- Each instruction is a separate string in the array
- Keep instructions short and clear (1-2 sentences max)
- Number them in order

## Quick Reference

**Recipe File Location:** `recipes-data/your-recipe-name.json`
**Blog File Location:** `blog-data/your-post-name.json`
**Main Data File:** `full-content-data.js` (add reference here)

## Why This Is Better

✅ **Easy to edit** - Just open one file instead of searching through a huge file
✅ **Easy to add** - Copy an existing file, change the content
✅ **Easy to organize** - All recipes in one folder, all blog posts in another
✅ **Easy to delete** - Just delete the file
✅ **Version control friendly** - Each change is to one small file

## Example Workflow

**Want to add a new cookie recipe?**

1. Copy `recipes-data/honey-chocolate-chip-cookies.json`
2. Rename to `recipes-data/oatmeal-raisin-cookies.json`
3. Edit the content (change title, ingredients, instructions)
4. Add it to `full-content-data.js` recipes array
5. Done! It appears on your site

**Want to add a new blog post about meal prep?**

1. Copy `blog-data/5-meal-framework.json`
2. Rename to `blog-data/meal-prep-containers.json`
3. Edit the content
4. Add it to `full-content-data.js` blogPosts array
5. Done! It appears on your blog

## Need Help?

The structure is simple:
- Recipes need: id, title, category, time, servings, image, ingredients, instructions
- Blog posts need: id, title, category, excerpt, image, content

Just follow the examples and you can't go wrong!
