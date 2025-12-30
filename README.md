# Mahi Beauty & Head Spa - Premium Multi-Page Website

A premium, editorial-style multi-page website for Mahi Beauty & Head Spa, featuring a Vogue-inspired aesthetic with minimalist luxury design.

## Project Overview

This is a 5-page website built with **Tailwind CSS** and **HTML5**, designed to showcase Mahi's 20+ years of mastery in Korean Scalp Detox and Advanced Skincare in Houston, Texas.

## Design Philosophy

- **Aesthetic**: Minimalist Luxury, Zen, High-End Wellness
- **Style**: Editorial magazine layout (Vogue-inspired)
- **Layout**: Asymmetrical grids with large white space
- **Mobile-First**: Fully responsive design optimized for all devices

## Color Palette

- **Background**: Ivory / Soft Cream (#F9F8F5)
- **Accents**: Champagne Gold (#D4AF37) for borders and highlights
- **Text**: Deep Charcoal (#2D2D2D)

## Typography

- **Headings**: Cormorant Garamond (Elegant Serif)
- **Body**: Inter (Clean Sans-Serif)

## Site Structure

### Page 1: Home (`index.html`)
- **Hero Section**: Large vertical image with headline "20 Years of Mastery. Houston's Destination for Korean Scalp & Skin Transformation."
- **Philosophy Section**: Minimalist quote layout for "Inside-Out Beauty" mission
- **Featured Services**: 3 large cards linking to specific service pages
- **Social Proof**: Instagram grid placeholder (6 posts)

### Page 2: Treatment Menu (`treatments.html`)
- **Structure**: Clean, categorized list from GlossGenius
- **Categories**:
  1. Scalp & Hair
  2. Face & Skin
  3. Body & Wellness
- **Elements**: Service name, brief description, "Starting at $X" price, and "Book Now" button
- **Mobile**: Sticky booking button at bottom

### Page 3: Signature Experience (`korean-head-spa.html`)
- **Focus**: Detailed educational page for "Korean Scalp Detox"
- **Sections**:
  - The Benefits (hair growth, stress relief)
  - The 5-Step Ritual (Analysis, Steam, Massage, etc.)
  - FAQ section
- **Layout**: Asymmetrical with large vertical image (60% width) and overlapping text card

### Page 4: Advanced Skincare (`advanced-skincare.html`)
- **Focus**: Specialized treatments (Buccal Facial, Lymphatic Drainage, Dermaplaning)
- **Design**: Large imagery of textures (creams, serums) and treatment process
- **Layout**: Alternating image/text sections

### Page 5: About & Contact (`about.html`)
- **Bio**: Highlights Mahi's 20+ years of industry experience
- **Contact Details**:
  - Address: 118 Vintage Park Blvd Salon Boutique Suite #50, Houston, Texas 77070
  - Map: Minimalist light-themed Google Maps integration

## Features

### Navigation
- Transparent navbar on home page (turns ivory on scroll)
- Ivory background on all other pages
- Mobile hamburger menu with smooth animations
- Active page highlighting

### Booking Integration
- All "Book Now" buttons link to `https://mahimalik.glossgenius.com/services`
- Sticky booking button on mobile for service pages
- Prominent call-to-action buttons throughout

### Responsive Design
- Mobile-first approach
- Optimized for iPhone and all mobile devices
- Tablet and desktop breakpoints
- Touch-friendly interactions

### Animations & Interactions
- Fade-in-up animations on scroll
- Image zoom-on-hover effects
- Smooth scrolling
- Parallax effects on hero images
- Micro-interactions on buttons

## Technical Stack

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: No dependencies
- **Google Fonts**: Cormorant Garamond & Inter
- **Google Maps**: Embedded map for location

## File Structure

```
mahi landing/
├── index.html              # Home page
├── treatments.html           # Full treatment menu
├── korean-head-spa.html      # Signature experience page
├── advanced-skincare.html    # Expertise page
├── about.html                # About & Contact page
├── script.js                 # JavaScript functionality
└── README.md                 # Documentation
```

## Getting Started

1. **Open in Browser**: Simply open `index.html` in any modern browser
2. **Local Server** (Recommended):
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve
   ```
3. **View**: Navigate to `http://localhost:8000`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Key Links

- **Instagram**: [@mahibeautyandheadspaa](https://www.instagram.com/mahibeautyandheadspaa/?hl=en)
- **Booking**: [GlossGenius Services](https://mahimalik.glossgenius.com/services)

## Customization

### Adding Real Images
Replace `.image-placeholder` divs with actual `<img>` tags:
```html
<img src="path/to/image.jpg" alt="Description" class="w-full h-full object-cover">
```

### Updating Colors
Modify Tailwind config in each HTML file's `<script>` tag:
```javascript
colors: {
    'ivory': '#F9F8F5',
    'champagne-gold': '#D4AF37',
    'deep-charcoal': '#2D2D2D',
}
```

### Google Maps
Update the iframe `src` in `about.html` with your actual location coordinates.

## Performance

- Lightweight (no heavy frameworks)
- Fast loading times
- Optimized animations
- Lazy loading ready (for images)

## Future Enhancements

- Add real Instagram feed integration
- Implement actual image galleries
- Add blog section
- Client testimonials section
- Online booking widget integration

## License

© 2024 Mahi Beauty & Head Spa. All rights reserved.
