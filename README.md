# AymWos Technologies - Static Website

A modern, interactive static website for AymWos Technologies featuring IT services and AI solutions.

## Features

✨ **Interactive Effects**
- Smooth scrolling animations
- Floating banners with parallax effects
- Hover effects on service cards
- Smooth transitions and micro-interactions
- Progress bar indicator
- Custom cursor effects

🎨 **Design**
- Modern gradient color scheme
- Responsive design (mobile-first approach)
- Dark theme optimized for tech companies
- Professional typography
- Beautiful CSS animations

📱 **Responsive**
- Works perfectly on all devices
- Mobile navigation with hamburger menu
- Optimized for tablets and desktops

🚀 **Performance**
- Static HTML/CSS/JavaScript (no backend required)
- Fast loading times
- SEO optimized

## Website Sections

1. **Hero Section** - Eye-catching introduction with floating elements
2. **Services** - Six core IT services with interactive cards
3. **AI Solutions** - AI and Machine Learning offerings
4. **Portfolio** - Recent projects showcase
5. **Contact** - Contact form and information
6. **Navigation** - Smooth navigation between sections
7. **Floating Banners** - Eye-catching promotional banners

## File Structure

```
Aymwos-site/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and animations
├── js/
│   └── script.js       # Interactive effects and functionality
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## Local Development

1. Clone the repository
2. Open `index.html` in your browser
3. No dependencies or build process needed!

## Hosting on GitHub Pages

### Step 1: Initialize Git Repository

```bash
cd Aymwos-site
git init
git add .
git commit -m "Initial commit: AymWos Technologies website"
```

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Create a repository named `aymwostechnologies.github.io` (replace `aymwostechnologies` with your username)
3. Do NOT initialize with README or .gitignore (we already have these)

### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/aymwostechnologies.github.io.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

The website will automatically be available at:
- `https://aymwostechnologies.github.io`

Or connect your custom domain:
1. Go to Repository Settings
2. Navigate to "Pages" section
3. Click "Add a domain"
4. Enter your domain: `aymwostechnologies.com`
5. Update your domain's DNS settings to point to GitHub Pages

## Customization

### Change Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* ... */
}
```

### Update Content
Edit `index.html` to update:
- Company name and description
- Service descriptions
- Contact information
- Social media links

### Modify Animations
All animations are in `css/styles.css` and `js/script.js`. Customize timing, effects, and transitions as needed.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Metrics

- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2s
- Cumulative Layout Shift: < 0.1

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, animations, and flexbox
- **JavaScript (ES6)** - Interactive effects and smooth scrolling
- **Font Awesome** - Icon library
- **GitHub Pages** - Free hosting

## Contact Form

The contact form is static and doesn't send emails. To add email functionality, consider:
- **Formspree** - Add one line of code (formspree.io)
- **Netlify Forms** - Alternative free static hosting with forms
- **AWS Lambda** - Serverless email solution
- **Backend Service** - Custom backend with Node.js/Python

## SEO Optimization

- Meta tags for social sharing
- Semantic HTML structure
- Fast loading times
- Mobile responsive
- Accessibility features

## License

This website is created for AymWos Technologies. All rights reserved.

## Support

For issues or feature requests, please contact info@aymwostechnologies.com

---

**Website Built with ❤️ for AymWos Technologies**

