const fs = require('fs');
const path = require('path');

// Paths
const CONTENT_DIR = './content';
const OUTPUT_FILE = './full-content-data.js';
const DESIGN_OUTPUT = './design-settings.js';

// Simple frontmatter parser
function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { data: {}, content: text };
  
  const yaml = match[1];
  const content = text.slice(match[0].length).trim();
  const data = {};
  
  const lines = yaml.split('\n');
  let currentKey = null;
  let currentObj = data;
  const stack = [data];
  
  lines.forEach((line, idx) => {
    if (!line.trim()) return;
    
    const indent = line.search(/\S/);
    const trimmed = line.trim();
    
    if (trimmed.includes(':')) {
      const [key, ...valueParts] = trimmed.split(':');
      let value = valueParts.join(':').trim();
      
      // Clean quotes
      value = value.replace(/^["']|["']$/g, '');
      
      // Convert booleans
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      if (value === '') value = null;
      
      // Check if next line is indented (nested object)
      const nextLine = lines[idx + 1];
      const hasNested = nextLine && nextLine.search(/\S/) > indent;
      
      if (hasNested && !value) {
        // This is a parent key
        currentObj[key.trim()] = {};
        currentKey = key.trim();
      } else {
        // Simple value
        if (currentKey && indent > 0) {
          // Nested value
          if (!data[currentKey]) data[currentKey] = {};
          data[currentKey][key.trim()] = value;
        } else {
          // Top level
          data[key.trim()] = value;
          currentKey = null;
        }
      }
    }
  });
  
  return { data, content };
}

// Format functions
function formatRecipe(file, text) {
  const { data } = parseFrontmatter(text);
  return {
    id: file.replace('.md', ''),
    title: data.title || 'Untitled',
    description: data.description || '',
    image: data.image || '',
    category: data.category || 'Uncategorized',
    prepTime: data.prep_time || '',
    cookTime: data.cook_time || '',
    totalTime: data.total_time || '',
    servings: data.servings || '',
    ingredients: data.ingredients || [],
    instructions: data.instructions || [],
    notes: data.notes || ''
  };
}

function formatBlog(file, text) {
  const { data, content } = parseFrontmatter(text);
  return {
    id: file.replace('.md', ''),
    title: data.title || 'Untitled',
    excerpt: data.excerpt || '',
    content: content || '',
    image: data.featured_image || data.image || '',
    category: data.category || 'Uncategorized',
    date: data.date || new Date().toISOString(),
    author: data.author || 'The Handmade Kitchen'
  };
}

function formatShop(file, text) {
  const { data } = parseFrontmatter(text);
  return {
    id: file.replace('.md', ''),
    title: data.title || 'Untitled',
    description: data.description || '',
    price: data.price || '',
    image: data.image || '',
    link: data.link || '#'
  };
}

// Read directory
function readDir(dir, formatter) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const text = fs.readFileSync(path.join(dir, f), 'utf-8');
      return formatter(f, text);
    });
}

// Main sync
console.log('🔄 Syncing content...');

const recipes = readDir(path.join(CONTENT_DIR, 'recipes'), formatRecipe);
const blog = readDir(path.join(CONTENT_DIR, 'blog'), formatBlog);
const shop = readDir(path.join(CONTENT_DIR, 'shop'), formatShop);

// Write content file
const contentJS = `const contentData = {
  recipes: ${JSON.stringify(recipes, null, 2)},
  blogPosts: ${JSON.stringify(blog, null, 2)},
  shopItems: ${JSON.stringify(shop, null, 2)}
};
`;
fs.writeFileSync(OUTPUT_FILE, contentJS);
console.log('✅ Content:', recipes.length, 'recipes,', blog.length, 'posts,', shop.length, 'shop');

// Read design settings
let designData = { colors: {}, typography: {}, branding: {}, carousel: {}, background: {} };
const designFile = path.join(CONTENT_DIR, 'settings', 'design.md');

if (fs.existsSync(designFile)) {
  const designText = fs.readFileSync(designFile, 'utf-8');
  const { data } = parseFrontmatter(designText);
  
  if (data.colors) designData.colors = data.colors;
  if (data.typography) designData.typography = data.typography;
  if (data.branding) designData.branding = data.branding;
  if (data.carousel) designData.carousel = data.carousel;
  if (data.background) designData.background = data.background;
  
  console.log('📖 Design:', Object.keys(data).length, 'sections');
  if (data.colors) console.log('   Colors:', Object.keys(data.colors).join(', '));
  if (data.typography) console.log('   Fonts:', Object.keys(data.typography).join(', '));
}

// Write design file
const designJS = `const designSettings = ${JSON.stringify(designData, null, 2)};
`;
fs.writeFileSync(DESIGN_OUTPUT, designJS);
console.log('✅ Design settings generated');
console.log('✅ Sync complete!');
```

