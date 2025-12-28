const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Paths
const CONTENT_DIR = path.join(__dirname, 'content');
const OUTPUT_FILE = path.join(__dirname, 'full-content-data.js');

// Read all markdown files from a directory
function readMarkdownFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    if (fs.statSync(fullPath).isFile() && item.endsWith('.md')) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Parse markdown file and extract frontmatter
function parseMarkdownFile(filePath) {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const parsed = matter(fileContent);
    
    // Create slug from filename
    const slug = path.basename(filePath, '.md');
    
    return {
      id: slug,
      ...parsed.data,
      content: parsed.content
    };
  } catch (error) {
    console.warn(`⚠️  Warning: Could not parse ${path.basename(filePath)}: ${error.message}`);
    // Return a minimal valid object so the build doesn't fail completely
    return {
      id: path.basename(filePath, '.md'),
      title: path.basename(filePath, '.md').replace(/-/g, ' '),
      description: '',
      content: ''
    };
  }
}

// Generate the content data object
function generateContentData() {
  const data = {
    recipes: [],
    blogPosts: [],
    shopItems: []
  };
  
  // Process recipes
  const recipesDir = path.join(CONTENT_DIR, 'recipes');
  if (fs.existsSync(recipesDir)) {
    const recipeFiles = readMarkdownFiles(recipesDir);
    data.recipes = recipeFiles.map(file => {
      const recipe = parseMarkdownFile(file);
      // Process recipe-specific fields
      return {
        id: recipe.id,
        title: recipe.title || '',
        description: recipe.description || '',
        image: recipe.image || '',
        category: recipe.category || '',
        prepTime: recipe.time || '',
        cookTime: recipe.cookTime || '',
        totalTime: recipe.totalTime || recipe.time || '',
        servings: recipe.servings || '',
        ingredients: recipe.ingredients || {},
        instructions: recipe.instructions || {},
        notes: recipe.notes || ''
      };
    });
  }
  
  // Process blog posts
  const blogDir = path.join(CONTENT_DIR, 'blog');
  if (fs.existsSync(blogDir)) {
    const blogFiles = readMarkdownFiles(blogDir);
    data.blogPosts = blogFiles.map(file => {
      const post = parseMarkdownFile(file);
      return {
        id: post.id,
        title: post.title || '',
        excerpt: post.excerpt || '',
        content: post.content || '',
        image: post.image || '',
        category: post.category || '',
        date: post.date || new Date().toISOString(),
        author: post.author || 'The Handmade Kitchen'
      };
    });
  }
  
  // Process shop items - THIS IS THE IMPORTANT PART!
  const shopDir = path.join(CONTENT_DIR, 'shop');
  if (fs.existsSync(shopDir)) {
    const shopFiles = readMarkdownFiles(shopDir);
    data.shopItems = shopFiles.map(file => {
      const item = parseMarkdownFile(file);
      return {
        id: item.id,
        title: item.title || '',
        type: item.type || '',
        // THIS IS THE FIX - properly extract description as a string
        description: typeof item.description === 'string' 
          ? item.description.trim() 
          : String(item.description || '').trim(),
        price: item.price || '',
        image: item.image || '',
        icon: item.icon || '',
        link: item.link || '',
        featured: item.featured || false
      };
    });
  }
  
  return data;
}

// Write the data to a JavaScript file
function writeContentDataFile(data) {
  const jsContent = `const contentData = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(OUTPUT_FILE, jsContent, 'utf-8');
  console.log('✅ Generated full-content-data.js successfully!');
  console.log(`📦 Recipes: ${data.recipes.length}`);
  console.log(`📝 Blog Posts: ${data.blogPosts.length}`);
  console.log(`🛍️  Shop Items: ${data.shopItems.length}`);
}

// Main execution
try {
  console.log('🔨 Building content data...');
  const contentData = generateContentData();
  writeContentDataFile(contentData);
} catch (error) {
  console.error('❌ Error generating content data:', error);
  process.exit(1);
}
