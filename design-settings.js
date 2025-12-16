const designSettings = {
  "colors": {
    "primary": "#7b8a66",
    "secondary": "#d3c9b2",
    "accent": "#8e7e67",
    "background": "#f8f2e9",
    "text": "#322c2c"
  },
  "typography": {
    "heading_font": "Cormorant Garamond",
    "body_font": "Merriweather",
    "accent_font": "Lato"
  },
  "branding": {
    "site_name": "Our Handmade Kitchen",
    "logo": null,
    "favicon": null
  },
  "hero": {
    "image": "/images/uploads/lauren-gray-zqh5l1jws5m-unsplash.jpg",
    "title": "Clean Eating Made Simple",
    "subtitle": "Real food. Real families. Real results.",
    "button_text": "Explore Recipes",
    "button_link": "recipes.html"
  },
  "carousel": {
    "slide1_image": "/images/uploads/lauren-gray-zqh5l1jws5m-unsplash.jpg",
    "slide2_image": null,
    "slide3_image": null,
    "slide4_image": null
  },
  "background": {
    "use_pattern": null,
    "pattern_type": "none",
    "bg_image": null
  },
  "socialMedia": {
    "pinterest": "https://www.pinterest.com/thehandmadekitchen",
    "facebook": "https://www.facebook.com/thehandmadekitchen",
    "instagram": "https://www.instagram.com/thehandmadekitchen",
    "tiktok": "https://www.tiktok.com/@thehandmadekitchen",
    "youtube": "https://www.youtube.com/@thehandmadekitchen"
  }
};

// Load fonts dynamically
(function() {
  if (designSettings.typography) {
    const fonts = [];
    if (designSettings.typography.heading_font) fonts.push(designSettings.typography.heading_font + ':wght@400;600;700');
    if (designSettings.typography.body_font) fonts.push(designSettings.typography.body_font + ':wght@400;600;700');
    if (designSettings.typography.accent_font) fonts.push(designSettings.typography.accent_font + ':wght@400;600;700');
    
    if (fonts.length > 0) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=' + fonts.join('&family=') + '&display=swap';
      document.head.appendChild(link);
    }
  }
})();
