# Figma + Builder.io Integration Guide

## 🎨 **Figma to Builder.io Workflow for Real Estate Website**

### **Step 1: Design in Figma**

1. **Create your Figma design** with these key sections:
   - Hero section with property search
   - Property listings grid
   - About section
   - Contact form
   - Footer

2. **Use Figma's Auto Layout** for responsive design
3. **Create components** for reusable elements (buttons, cards, etc.)
4. **Export assets** as SVG or PNG

### **Step 2: Builder.io Setup (Alternative Approach)**

Since the Builder.io SDK has compatibility issues with Node.js v24, let's use a **headless approach**:

#### **Option A: Builder.io Visual Editor (Recommended)**

1. **Sign up at [builder.io](https://builder.io)**
2. **Create a new space** for your real estate website
3. **Use Builder.io's visual editor** to recreate your Figma design
4. **Import your Figma assets** directly into Builder.io

#### **Option B: Figma Plugin Integration**

1. **Install Builder.io Figma Plugin**:
   - Go to Figma → Plugins → Browse all plugins
   - Search for "Builder.io"
   - Install the official Builder.io plugin

2. **Sync your design**:
   - Select your Figma frames
   - Use the Builder.io plugin to export to Builder.io
   - This creates Builder.io components automatically

### **Step 3: Real-time Editing Setup**

#### **Method 1: Builder.io Visual Editor (Easiest)**

```javascript
// 1. Create a simple Builder.io integration
// Add this to your public/index.html head section:

<script>
  // Builder.io script for visual editing
  (function(b,u,i,l,e,r){b[builder]=b[builder]||function(){(b[builder].q=b[builder].q||[]).push(arguments)};
  b[builder].q=b[builder].q||[];var t=u.createElement(i);var n=u.getElementsByTagName(i)[0];
  t.async=1;t.src=l;n.parentNode.insertBefore(t,n)})(window,document,'script','https://cdn.builder.io/js/builder');
</script>
```

#### **Method 2: React Integration (Advanced)**

```javascript
// Install a lighter Builder.io package
npm install @builder.io/sdk-react

// Create src/components/BuilderComponent.jsx
import { BuilderComponent, builder } from '@builder.io/sdk-react';

// Initialize Builder.io
builder.init('YOUR_BUILDER_API_KEY');

export default function BuilderComponent({ model, content }) {
  return (
    <BuilderComponent
      model={model}
      content={content}
    />
  );
}
```

### **Step 4: Figma to Code Workflow**

#### **Option 1: Figma Dev Mode + Builder.io**

1. **Use Figma Dev Mode**:
   - Switch to Dev Mode in Figma
   - Copy CSS properties
   - Export assets

2. **Apply to Builder.io**:
   - Paste CSS into Builder.io custom CSS
   - Upload assets to Builder.io media library
   - Use Builder.io's responsive tools

#### **Option 2: Figma Tokens + Builder.io**

1. **Install Figma Tokens Plugin**:
   - Create design tokens (colors, spacing, typography)
   - Export as JSON

2. **Import to Builder.io**:
   - Use tokens in Builder.io's design system
   - Maintain consistency across designs

### **Step 5: Real-time Collaboration Setup**

#### **Builder.io Visual Editor Features:**

1. **Live Preview**:
   - Edit in Builder.io
   - See changes instantly
   - Test on different devices

2. **Team Collaboration**:
   - Share Builder.io space with team
   - Comment and review changes
   - Version control

3. **A/B Testing**:
   - Create variants in Builder.io
   - Test different designs
   - Measure performance

### **Step 6: Integration with Your React App**

#### **Simple Integration (No SDK):**

```javascript
// Create src/components/BuilderPage.jsx
import React, { useState, useEffect } from 'react';

const BuilderPage = ({ pageId }) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch content from Builder.io API
    const fetchContent = async () => {
      try {
        const response = await fetch(
          `https://cdn.builder.io/api/v1/page/${pageId}?apiKey=YOUR_API_KEY`
        );
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error('Error fetching Builder.io content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [pageId]);

  if (loading) return <div>Loading...</div>;
  if (!content) return <div>Content not found</div>;

  return (
    <div dangerouslySetInnerHTML={{ __html: content.html }} />
  );
};

export default BuilderPage;
```

### **Step 7: Deployment & Hosting**

#### **Builder.io Hosting Options:**

1. **Builder.io Hosting** (Easiest):
   - Deploy directly from Builder.io
   - Automatic CDN
   - Built-in analytics

2. **Vercel/Netlify Integration**:
   - Connect your GitHub repo
   - Auto-deploy on changes
   - Custom domain support

3. **Custom Hosting**:
   - Export static files
   - Host on your server
   - Full control

### **Step 8: Workflow Best Practices**

#### **Design to Development Process:**

1. **Figma Design** → **Builder.io Visual Editor** → **Live Website**
2. **Figma Components** → **Builder.io Components** → **Reusable Elements**
3. **Figma Tokens** → **Builder.io Design System** → **Consistent Styling**

#### **Real-time Editing Features:**

- **Visual Editor**: Drag & drop interface
- **Responsive Design**: Test on all devices
- **Content Management**: Easy text/image updates
- **SEO Optimization**: Built-in SEO tools
- **Performance**: Optimized loading

### **Step 9: Advanced Features**

#### **Builder.io Pro Features:**

1. **Custom Components**:
   - Create React components
   - Register with Builder.io
   - Use in visual editor

2. **API Integration**:
   - Connect to your property database
   - Dynamic content
   - Real-time updates

3. **Analytics**:
   - Track user interactions
   - A/B test results
   - Performance metrics

### **Step 10: Getting Started Checklist**

- [ ] Create Figma account and design
- [ ] Sign up for Builder.io
- [ ] Install Figma Builder.io plugin
- [ ] Export design to Builder.io
- [ ] Set up visual editor
- [ ] Test real-time editing
- [ ] Deploy to production
- [ ] Set up team collaboration

## 🚀 **Quick Start Commands**

```bash
# 1. Start your React development server
npm run dev

# 2. Open Builder.io in another tab
# 3. Create your first page
# 4. Use the visual editor to recreate your Figma design
# 5. Publish and see changes live
```

## 📱 **Mobile-First Approach**

1. **Design mobile-first in Figma**
2. **Use Builder.io's responsive tools**
3. **Test on real devices**
4. **Optimize for performance**

## 🎯 **Real Estate Specific Features**

- **Property Search**: Builder.io forms + API integration
- **Image Galleries**: Builder.io media library
- **Contact Forms**: Builder.io form builder
- **Maps Integration**: Custom Builder.io components
- **Virtual Tours**: Embedded Builder.io blocks

This approach gives you the best of both worlds: **Figma's design capabilities** with **Builder.io's real-time editing** without the technical complexity of SDK integration!
