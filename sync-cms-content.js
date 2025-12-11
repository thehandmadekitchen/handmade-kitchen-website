const fs = require('fs');
const path = require('path');

// Parse frontmatter
function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { data: {}, content: text };
  
  const yaml = match[1];
  const content = text.slice(match[0].length).trim();
  const data = {};
  
  let currentSection = null;
  
  yaml.split('\n').forEach(line => {
    if (!line.trim()) return;
    
    const indent = line.search(/\S/);
    const trimmed = line.trim();
    
    if (trimmed.includes(':')) {
      const colonIdx = trimmed.indexOf(':');
      const key = trimmed.substring(0, colonIdx).trim();
      let value = trimmed.substring(colonIdx + 1).trim();
      
      // Remove quotes
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Convert booleans
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      
      if (indent === 0) {
        // Top level
        if (value === '' || value === null) {
          data[key] = {};
          currentSection = key;
        } else {
          data[key] = value;
          currentSection = null;
        }
      } else if (currentSection) {
        // Nested
        if (!data[currentSection]) data[currentSection] = {};
        data[currentSection][key] = value || null;
      }
    }
  });
  
  return { data, content };
}

// Format recipe
function formatRecipe(filename, text) {
  const { data } = parseFrontmatter(text);
  return {
    id: filename.replace('.md', ''),
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

// Format blog post
function formatBlog(filename, text) {
  const { data, content } = parseFrontmatter(text);
  return {
    id: filename.replace('.md', ''),
    title: data.title || 'Untitled',
    excerpt: data.excerpt || '',
    content: content,
    image: data.featured_image || data.image || '',
    category: data.category || 'Uncategorized',
    date: data.date || new Date().toISOString(),
    author: data.author || 'The Handmade Kitchen'
  };
}

// Format shop item
function formatShop(filename, text) {
  const { data } = parseFrontmatter(text);
  return {
    id: filename.replace('.md', ''),
    title: data.title || 'Untitled',
    description: data.description || '',
    price: data.price || '',
    image: data.image || '',
    link: data.link || '#'
  };
}

// Read directory
function readDirectory(dirPath, formatter) {
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  
  const files = fs.readdirSync(dirPath);
  const items = [];
  
  for (const file of files) {
    if (file.endsWith('.md')) {
      const filePath = path.join(dirPath, file);
      const text = fs.readFileSync(filePath, 'utf-8');
      items.push(formatter(file, text));
    }
  }
  
  return items;
}

// Main sync function
function syncContent() {
  console.log('🔄 Starting sync...');
  
  // Read content
  const recipes = readDirectory('./content/recipes', formatRecipe);
  const blog = readDirectory('./content/blog', formatBlog);
  const shop = readDirectory('./content/shop', formatShop);
  
  console.log('Found:', recipes.length, 'recipes,', blog.length, 'blog posts,', shop.length, 'shop items');
  
  // Generate content file
  const contentData = {
    recipes: recipes,
    blogPosts: blog,
    shopItems: shop
  };
  
  const contentJS = 'const contentData = ' + JSON.stringify(contentData, null, 2) + ';\n';
  fs.writeFileSync('./full-content-data.js', contentJS);
  console.log('✅ Generated full-content-data.js');
  
  // Read design settings
  const designPath = './content/settings/design.md';
  let designData = {
    colors: {},
    typography: {},
    branding: {},
    carousel: {},
    background: {}
  };
  
  if (fs.existsSync(designPath)) {
    console.log('📖 Reading design.md...');
    const designText = fs.readFileSync(designPath, 'utf-8');
    const { data } = parseFrontmatter(designText);
    
    if (data.colors) {
      designData.colors = data.colors;
      console.log('   Colors:', Object.keys(data.colors).length, 'settings');
    }
    if (data.typography) {
      designData.typography = data.typography;
      console.log('   Typography:', Object.keys(data.typography).length, 'fonts');
    }
    if (data.branding) {
      designData.branding = data.branding;
    }
    if (data.carousel) {
      designData.carousel = data.carousel;
    }
    if (data.background) {
      designData.background = data.background;
    }
  } else {
    console.log('⚠️  design.md not found');
  }
  
  // Generate design file
  const designJS = 'const designSettings = ' + JSON.stringify(designData, null, 2) + ';\n';
  fs.writeFileSync('./design-settings.js', designJS);
  console.log('✅ Generated design-settings.js');
  
  console.log('✅ Sync complete!');
}

// Generate RSS feed for blog
function generateRSSFeed(blogPosts) {
  const siteUrl = 'https://tubular-kulfi-20dd81.netlify.app';
  const now = new Date().toUTCString();
  
  const items = blogPosts.map(post => {
    const postUrl = `${siteUrl}/blog-post.html?id=${post.id}`;
    const pubDate = new Date(post.date).toUTCString();
    
    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt || post.content.substring(0, 200)}]]></description>
      <link>${postUrl}</link>
      <guid>${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>noreply@handmadekitchen.com (${post.author})</author>
      ${post.image ? `<enclosure url="${post.image}" type="image/jpeg"/>` : ''}
    </item>`;
  }).join('\n');
  
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Handmade Kitchen Blog</title>
    <link>${siteUrl}</link>
    <description>Clean eating recipes and meal planning tips for busy families</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;
  
  fs.writeFileSync('./rss.xml', rss);
  console.log('✅ Generated rss.xml');
}

// Run sync
function runSync() {
  syncContent();
  
  // Generate RSS after content is synced
  const blog = readDirectory('./content/blog', formatBlog);
  generateRSSFeed(blog);
}

runSync();

