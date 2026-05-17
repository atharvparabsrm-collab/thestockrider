# Stock Rider Academy

## 📚 Project Description

Stock Rider Academy is a professional forex, cryptocurrency, and Indian stock market trading mentorship website. The platform provides educational resources, trading guidance, and mentorship services from industry experts. Built with modern web technologies, the site delivers a responsive, SEO-optimized experience for aspiring traders.

**Website:** [https://stockrider.in](https://stockrider.in)  
**Location:** Kolhapur, Maharashtra, India

---

## 📄 Pages & Purpose

| Page | URL | Purpose |
|------|-----|---------|
| **Homepage** | `index.html` | Main landing page with academy overview |
| **Mentor** | `mentor.html` | Information about mentors and their expertise (Priority: 0.90) |
| **Academy** | `academy.html` | Courses and program details (Priority: 0.90) |
| **About** | `about.html` | Company/academy background and mission (Priority: 0.80) |
| **Contact** | `contact.html` | Contact form and support information (Priority: 0.70) |

---

## 📁 Folder Structure

```
stockriderr/
├── index.html              # Main homepage
├── about.html              # About page
├── academy.html            # Academy programs and courses
├── contact.html            # Contact and inquiry form
├── mentor.html             # Mentor information
├── robots.txt              # Search engine crawling rules
├── sitemap.xml             # XML sitemap for SEO
├── README.md               # This file
├── .gitignore              # Git ignore patterns
└── assets/
    ├── styles.css          # Main stylesheet
    ├── scripts.js          # JavaScript functionality
    └── images/
        ├── favicon.ico     # Website favicon
        ├── logo.jpeg       # Academy logo
        └── [other images]  # Hero images, course icons, etc.
```

---

## 🚀 How to Run Locally

### Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/stockriderr.git
   cd stockriderr
   ```

2. **Open in Browser**
   - **Option A:** Double-click any `.html` file to open in your default browser
   - **Option B:** Use VS Code Live Server extension
     - Install "Live Server" extension in VS Code
     - Right-click on `index.html` → "Open with Live Server"
     - Site opens at `http://127.0.0.1:5500`

3. **With Python (if installed)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```

4. **With Node.js HTTP Server**
   ```bash
   npx http-server
   ```

---

## 💻 Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Responsive styling and animations
- **Vanilla JavaScript** - Interactive functionality
- **Google Fonts** - Custom typography (Playfair Display, Inter)
- **Font Awesome 6.5.0** - Icon library
- **Schema.org Markup** - Structured data for SEO (LD+JSON)
- **Open Graph Meta Tags** - Social media optimization

### Key Libraries & Services
- Google Fonts API
- Font Awesome CDN
- Schema.org LD+JSON for rich snippets

---

## 📊 SEO Features

✅ **Implemented:**
- XML Sitemap (`sitemap.xml`) - All pages indexed with priorities
- Robots.txt (`robots.txt`) - Clear crawling directives
- Meta tags (description, keywords, author)
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical URLs
- Schema.org structured data (EducationalOrganization)
- Mobile-responsive viewport
- Semantic HTML5

---

## 📋 Recommended Improvements Before GitHub

### 1. **Performance & Optimization**
- [ ] Implement image lazy loading for images in assets folder
- [ ] Minify CSS and JavaScript files
- [ ] Add responsive image variants (WebP format)
- [ ] Consider moving Google Fonts locally to reduce external requests
- [ ] Add gzip compression configuration

### 2. **SEO & Accessibility**
- [ ] Add alt text to all images in HTML
- [ ] Validate HTML with W3C validator
- [ ] Test accessibility with ARIA labels
- [ ] Add breadcrumb schema markup
- [ ] Create a terms of service page (if not present)
- [ ] Add privacy policy page

### 3. **Missing Files to Add**
```
├── .editorconfig            # Editor configuration
├── CONTRIBUTING.md          # Contribution guidelines
├── LICENSE                  # License file (MIT/Apache recommended)
├── package.json             # Project metadata (optional, for NPM scripts)
├── .browserslistrc          # Browser compatibility configuration
└── /analytics               # Analytics configuration/tracking
```

### 4. **Development Tools**
- [ ] Set up ESLint configuration for consistent JavaScript
- [ ] Add CSS linting (Stylelint)
- [ ] Configure prettier for code formatting
- [ ] Add pre-commit hooks with Husky

### 5. **Documentation Enhancements**
- [ ] Add setup instructions for different environments
- [ ] Document design system/color palette
- [ ] Create developer guidelines
- [ ] Add deployment instructions

### 6. **Robots.txt Optimization**
**Current status:** ✅ Good - allows all crawlers  
**Suggestion:** Consider adding disallow rules for future admin directories if created:
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /.env

Sitemap: https://stockrider.in/sitemap.xml
```

### 7. **Sitemap Enhancements**
**Current status:** ✅ Good structure with priorities  
**Suggestions:**
- Add `<lastmod>` timestamps for better crawl scheduling
- Add `<changefreq>` tags (e.g., "weekly" for homepage, "monthly" for static pages)

Updated sitemap example:
```xml
<url>
  <loc>https://stockrider.in/</loc>
  <lastmod>2026-05-17</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.00</priority>
</url>
```

### 8. **Security**
- [ ] Add security headers in server configuration
- [ ] Implement HTTPS (should already be done - note the https:// URLs)
- [ ] Add rate limiting for contact form
- [ ] Sanitize form inputs

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Contact & Support

**Academy Contact:**
- Phone: +91-9130134457
- Telegram: @STOCKRIDER9494
- Instagram: @stock_rider_official_
- Address: Ramanand Nagar, Kolhapur, Maharashtra 416007, India

**For Issues & Questions:**
Open an issue on GitHub or contact via the website's contact form.

---

## 📌 Last Updated

May 17, 2026
