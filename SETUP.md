# Portfolio Setup & Customization Guide

## 🚀 Quick Start

1. **Open `index.html`** in any modern web browser
2. The portfolio will load with a cyberpunk terminal animation
3. Navigate through sections using the top navigation or scroll naturally

## 🎨 Customization

### Personal Information
Update these sections in `index.html`:

1. **GitHub Profile Image** (Line ~140):
   ```html
   <img src="https://avatars.githubusercontent.com/u/YOUR-GITHUB-USERNAME?v=4" alt="Gaurav Bhatia" class="avatar-img">
   ```

2. **GitHub Links** (Lines ~666, 730):
   ```html
   <a href="https://github.com/YOUR-USERNAME" target="_blank" class="contact-link">
   ```

3. **Project GitHub URLs** (Lines ~431, 451, 471):
   ```html
   <a href="https://github.com/YOUR-USERNAME/PROJECT-NAME" target="_blank">
   ```

### Color Scheme (styles.css)
Modify CSS custom properties to change colors:
```css
:root {
  --primary: #00e6a8;    /* Main green */
  --primary-2: #00d4ff;  /* Secondary blue */
  --accent: #ff2d6b;     /* Accent pink */
}
```

### Personal Content
- **Skills**: Update skill percentages in HTML `data-level` attributes
- **Experience**: Modify timeline content and dates
- **Projects**: Replace with your actual projects
- **CVEs**: Update with your published vulnerabilities
- **Blog Posts**: Add your own writeups

## 🎮 Hidden Features & Easter Eggs

### 1. Konami Code
- Press: ↑↑↓↓←→←→BA
- Activates "Hacker Mode" with enhanced effects

### 2. Interactive Terminal
- Press: `Ctrl + ~` (backtick)
- Opens floating terminal with commands:
  - `help` - Show available commands
  - `whoami` - Display identity
  - `skills` - List technical skills
  - `projects` - Show project names
  - `contact` - Display contact info
  - `hack` - Fun easter egg
  - `clear` - Clear terminal
  - `exit` - Close terminal

### 3. Security Alerts
- Random security scan simulations appear
- Click CVE cards for interactive details
- Data streams flow across screen

### 4. Interactive Elements
- Hover effects on all cards
- Animated skill bars on scroll
- Counter animations when in view
- Matrix rain background effect
- Particle system with mouse interaction

## 🌐 Deployment Options

### GitHub Pages
1. Create new repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Choose source: `main branch`

### Netlify
1. Drag & drop folder to Netlify
2. Instant deployment with custom domain support

### Vercel
1. Import repository or upload files
2. Zero-config deployment

### Traditional Web Hosting
1. Upload all files to your web host
2. Ensure `index.html` is in root directory

## 🛠️ Technical Details

### File Structure
```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # Core styles and layout
├── animations.css      # Advanced animations
├── script.js           # Core JavaScript functionality
├── extras.js           # Additional features & easter eggs
├── README.md           # Project documentation
├── SETUP.md            # This file
└── Gaurav Bhatia.docx  # Original resume (can be removed)
```

### Browser Compatibility
- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅

### Performance Features
- Optimized animations with CSS transforms
- Intersection Observer for efficient scroll animations
- Lazy loading for performance
- Reduced motion support for accessibility

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Touch-friendly interactions
- Optimized animations for mobile
- Readable typography scaling
- Hamburger menu for small screens

## 🎯 SEO Ready

- Semantic HTML structure
- Meta descriptions and keywords
- Open Graph tags (add social media previews)
- Proper heading hierarchy
- Alt text for images

## 🔧 Advanced Customization

### Adding New Sections
1. Add HTML structure following existing patterns
2. Style with CSS using existing design tokens
3. Add JavaScript animations if needed
4. Update navigation menu

### Modifying Animations
- Edit `animations.css` for visual effects
- Adjust timing and easing functions
- Add new keyframe animations
- Control animation triggers in JavaScript

### Theme Variations
Create alternative color schemes:
```css
/* Dark Blue Theme */
:root {
  --primary: #00d4ff;
  --primary-2: #0af;
  --accent: #ff6b35;
}

/* Purple Theme */
:root {
  --primary: #a855f7;
  --primary-2: #8b5cf6;
  --accent: #06ffa5;
}
```

## 🚀 Going Live

1. **Test thoroughly** in multiple browsers
2. **Optimize images** for web performance
3. **Add analytics** (Google Analytics, etc.)
4. **Set up monitoring** for uptime
5. **Submit to search engines**

## 💡 Tips for Success

- Keep content updated regularly
- Add new blog posts and projects
- Update CVE information
- Engage with visitors through contact form
- Monitor performance and user experience

---

**Your cyberpunk portfolio is ready to impress! 🔥**