#!/usr/bin/env node

/**
 * Netlify CMS Content Sync Script
 * 
 * This script automatically converts content from Netlify CMS (markdown files)
 * into the JavaScript format used by the website (full-content-data.js)
 * 
 * Run this script after adding/editing content in Netlify CMS:
 * node sync-cms-content.js
 */

const fs = require('fs');
const path = require('path');

// Directories
const RECIPES_DIR = './content/recipes';
const BLOG_DIR = './content/blog';
const SHOP_DIR = './content/shop';
const DESIGN_SETTINGS_FILE = './content/settings/design.md';
const OUTPUT_FILE = './full-content-data.js';
const DESIGN_OUTPUT_FILE = './design-settings.js';

/**
 * Parse markdown frontmatter and content
 */
function parseMarkdown(fileContent) {
  const lines = fileContent.split('\n');
  const data = {};
  let inFrontmatter = false;
  let contentLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim() === '---') {
      if (!inFrontmatter) {
        inFrontmatter = true;
      } else {
        inFrontmatter = false;
        // Remaining lines are content
        contentLines = lines.slice(i + 1);
        break;
      }
      continue;
    }
    
    if (inFrontmatter) {
      const match = line.match(/^(\w+):\s*(.+)$/);
      if (match) {
        const key = match[1];
        let value = match[2].trim();
        
        // Handle different value types
        if (value.startsWith('[') && value.endsWith(']')) {
          // Array - remove brackets and split
          value = value.slice(1, -1).split(',').map(v => v.trim().replace(/['"]/g, ''));
        } else if (value.startsWith('"') && value.endsWith('"')) {
          // String - remove quotes
          value = value.slice(1, -1);
        } else if (value === 'true') {
          value = true;
        } else if (value === 'false') {
          value = false;
        }
        
        data[key] = value;
      }
    }
  }
  
  // Join content lines
  data.content = contentLines.join('\n').trim();
  
  return data;
}

/**
 * Read all markdown files from a directory
 */
function readMarkdownFiles(directory) {
  if (!fs.existsSync(directory)) {
    console.log(`Directory ${directory} does not exist, skipping...`);
    return [];
  }
  
  const files = fs.readdirSync(directory);
  const markdownFiles = files.filter(f => f.endsWith('.md'));
  
  return markdownFiles.map(filename => {
    const filepath = path.join(directory, filename);
    const content = fs.readFileSync(filepath, 'utf-8');
    return parseMarkdown(content);
  });
}

/**
 * Convert recipe data to JavaScript format
 */
function formatRecipe(data) {
  return {
    title: data.title || 'Untitled Recipe',
    category: data.category || 'Uncategorized',
    time: data.time || '30 min',
    servings: data.servings || '4 servings',
    image: data.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
    ingredients: data.ingredients || [],
    instructions: data.instructions || []
  };
}

/**
 * Convert blog post data to JavaScript format
 */
function formatBlogPost(data) {
  return {
    title: data.title || 'Untitled Post',
    category: data.category || 'Uncategorized',
    excerpt: data.excerpt || '',
    image: data.image || 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800',
    content: data.content || data.body || ''
  };
}

/**
 * Convert shop item data to JavaScript format
 */
function formatShopItem(data) {
  return {
    title: data.title || 'Untitled Product',
    type: data.type || 'Digital Product',
    description: data.description || '',
    price: data.price || '$0',
    icon: data.icon || '📦',
    featured: data.featured || false
  };
}

/**
 * Generate the full-content-data.js file
 */
function generateContentFile(recipes, blogPosts, shopItems) {
  const jsContent = `const contentData = {
  recipes: ${JSON.stringify(recipes, null, 2).replace(/"([^"]+)":/g, '$1:')},
  blogPosts: ${JSON.stringify(blogPosts, null, 2).replace(/"([^"]+)":/g, '$1:')},
  shopItems: ${JSON.stringify(shopItems, null, 2).replace(/"([^"]+)":/g, '$1:')}
};
`;
  
  fs.writeFileSync(OUTPUT_FILE, jsContent, 'utf-8');
  console.log(`✅ Generated ${OUTPUT_FILE}`);
  console.log(`   - ${recipes.length} recipes`);
  console.log(`   - ${blogPosts.length} blog posts`);
  console.log(`   - ${shopItems.length} shop items`);
}

/**
 * Read and process design settings
 */
function readDesignSettings() {
  if (!fs.existsSync(DESIGN_SETTINGS_FILE)) {
    console.log('⚠️  Design settings file not found, using defaults');
    return null;
  }
  
  const content = fs.readFileSync(DESIGN_SETTINGS_FILE, 'utf-8');
  const data = parseMarkdown(content);
  
  // Parse the nested objects from the frontmatter
  const settings = {
    colors: {},
    typography: {},
    branding: {},
    carousel: {},
    background: {}
  };
  
  // Extract nested settings
  Object.keys(data).forEach(key => {
    if (key.startsWith('colors.')) {
      settings.colors[key.replace('colors.', '')] = data[key];
    } else if (key.startsWith('typography.')) {
      settings.typography[key.replace('typography.', '')] = data[key];
    } else if (key.startsWith('branding.')) {
      settings.branding[key.replace('branding.', '')] = data[key];
    } else if (key.startsWith('carousel.')) {
      settings.carousel[key.replace('carousel.', '')] = data[key];
    } else if (key.startsWith('background.')) {
      settings.background[key.replace('background.', '')] = data[key];
    }
  });
  
  return settings;
}

/**
 * Generate design-settings.js file
 */
function generateDesignSettingsFile(settings) {
  if (!settings) {
    console.log('⚠️  Skipping design settings generation');
    return;
  }
  
  const jsContent = `// Auto-generated design settings from Netlify CMS
const designSettings = ${JSON.stringify(settings, null, 2)};
`;
  
  fs.writeFileSync(DESIGN_OUTPUT_FILE, jsContent, 'utf-8');
  console.log(`✅ Generated ${DESIGN_OUTPUT_FILE}`);
}

/**
 * Main sync function
 */
function syncContent() {
  console.log('🔄 Syncing Netlify CMS content...\n');
  
  // Read markdown files
  const recipesData = readMarkdownFiles(RECIPES_DIR);
  const blogData = readMarkdownFiles(BLOG_DIR);
  const shopData = readMarkdownFiles(SHOP_DIR);
  
  // Format data
  const recipes = recipesData.map(formatRecipe);
  const blogPosts = blogData.map(formatBlogPost);
  const shopItems = shopData.map(formatShopItem);
  
  // Read design settings
  const designSettings = readDesignSettings();
  
  // Generate output files
  generateContentFile(recipes, blogPosts, shopItems);
  generateDesignSettingsFile(designSettings);
  
  console.log('\n✅ Sync complete!');
}

// Run the sync
syncContent();
