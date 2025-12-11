<details>
<summary>Click to expand complete script (copy all of this)</summary>
````javascript
const fs = require('fs');
const path = require('path');
// Configuration
const CONTENT_DIR = './content';
const RECIPES_DIR = path.join(CONTENT_DIR, 'recipes');
const BLOG_DIR = path.join(CONTENT_DIR, 'blog');
const SHOP_DIR = path.join(CONTENT_DIR, 'shop');
const DESIGN_FILE = path.join(CONTENT_DIR, 'settings', 'design.md');
const OUTPUT_FILE = './full-content-data.js';
const DESIGN_OUTPUT_FILE = './design-settings.js';
// Parse YAML frontmatter with proper nested object support
function parseFrontmatter(content) {
const match = content.match(/^---\n([\s\S]*?)\n---/);
if (!match) return { frontmatter: {}, content };
const yaml = match[1];
const body = content.slice(match[0].length).trim();
const lines = yaml.split('\n');
const result = {};
let currentObj = result;
let stack = [result];
let lastIndent = 0;
lines.forEach(line => {
if (!line.trim()) return;
const indent = line.search(/\S/);
const trimmed = line.trim();

// Handle indent changes
if (indent < lastIndent) {
  const levels = Math.floor((lastIndent - indent) / 2);
  for (let i = 0; i < levels; i++) {
    stack.pop();
  }
  currentObj = stack[stack.length - 1];
}

if (trimmed.includes(':')) {
  const colonIndex = trimmed.indexOf(':');
  const key = trimmed.slice(0, colonIndex).trim();
  let value = trimmed.slice(colonIndex + 1).trim();
  
  // Remove quotes
  if ((value.startsWith('"') && value.endsWith('"')) || 
      (value.startsWith("'") && value.endsWith("'"))) {
    value = value.slice(1, -1);
  }
  
  // Handle boolean values
  if (value === 'true') value = true;
  if (value === 'false') value = false;
  
  // Handle empty values
  if (value === '') value = null;
  
  // Check if this is a parent key (no value or nested items coming)
  const nextLine = lines[lines.indexOf(line) + 1];
  const isParent = !value || (nextLine && nextLine.search(/\S/) > indent);
  
  if (isParent && !value) {
    currentObj[key] = {};
    stack.push(currentObj[key]);
    currentObj = currentObj[key];
  } else {
    currentObj[key] = value || null;
  }
}

lastIndent = indent;
});
return { frontmatter: result, content: body };
}
// Format functions
function formatRecipe(filename, content) {
const { frontmatter } = parseFrontmatter(content);
return {
id: filename.replace('.md', ''),
title: frontmatter.title || 'Untitled',
description: frontmatter.description || '',
image: frontmatter.image || '',
category: frontmatter.category || 'Uncategorized',
prepTime: frontmatter.prep_time || '',
cookTime: frontmatter.cook_time || '',
totalTime: frontmatter.total_time || '',
servings: frontmatter.servings || '',
ingredients: frontmatter.ingredients || [],
instructions: frontmatter.instructions || [],
notes: frontmatter.notes || ''
};
}
function formatBlogPost(filename, content) {
const { frontmatter, content: body } = parseFrontmatter(content);
return {
id: filename.replace('.md', ''),
title: frontmatter.title || 'Untitled',
excerpt: frontmatter.excerpt || '',
content: body || '',
image: frontmatter.featured_image || frontmatter.image || '',
category: frontmatter.category || 'Uncategorized',
date: frontmatter.date || new Date().toISOString(),
author: frontmatter.author || 'The Handmade Kitchen'
};
}
function formatShopItem(filename, content) {
const { frontmatter } = parseFrontmatter(content);
return {
id: filename.replace('.md', ''),
title: frontmatter.title || 'Untitled',
description: frontmatter.description || '',
price: frontmatter.price || '',
image: frontmatter.image || '',
link: frontmatter.link || '#'
};
}
// Read directory
function readDir(dir, formatter) {
if (!fs.existsSync(dir)) return [];
return fs.readdirSync(dir)
.filter(f => f.endsWith('.md'))
.map(f => formatter(f, fs.readFileSync(path.join(dir, f), 'utf-8')));
}
// Read design settings
function readDesignSettings() {
if (!fs.existsSync(DESIGN_FILE)) {
console.log('⚠️  design.md not found, using defaults');
return { colors: {}, typography: {}, branding: {}, carousel: {}, background: {} };
}
const content = fs.readFileSync(DESIGN_FILE, 'utf-8');
const { frontmatter } = parseFrontmatter(content);
console.log('📖 Read design.md - found:', Object.keys(frontmatter));
console.log('   Colors:', frontmatter.colors ? Object.keys(frontmatter.colors).length + ' settings' : 'none');
console.log('   Typography:', frontmatter.typography ? Object.keys(frontmatter.typography).length + ' fonts' : 'none');
return frontmatter;
}
// Generate files
function generateContentFile(recipes, posts, shop) {
const content = // Auto-generated: ${new Date().toISOString()} const contentData = {   recipes: ${JSON.stringify(recipes, null, 2)},   blogPosts: ${JSON.stringify(posts, null, 2)},   shopItems: ${JSON.stringify(shop, null, 2)} }; ;
fs.writeFileSync(OUTPUT_FILE, content);
}
function generateDesignFile(settings) {
const content = // Auto-generated: ${new Date().toISOString()} const designSettings = ${JSON.stringify(settings, null, 2)}; ;
fs.writeFileSync(DESIGN_OUTPUT_FILE, content);
console.log('✅ Generated design-settings.js with', Object.keys(settings).length, 'sections');
}
// Main
function syncContent() {
console.log('🔄 Syncing Netlify CMS content...');
const recipes = readDir(RECIPES_DIR, formatRecipe);
const posts = readDir(BLOG_DIR, formatBlogPost);
const shop = readDir(SHOP_DIR, formatShopItem);
generateContentFile(recipes, posts, shop);
console.log('✅ Generated ./full-content-data.js');
console.log('   -', recipes.length, 'recipes');
console.log('   -', posts.length, 'blog posts');
console.log('   -', shop.length, 'shop items');
const design = readDesignSettings();
generateDesignFile(design);
console.log('✅ Sync complete!');
}
syncContent();

</details>
