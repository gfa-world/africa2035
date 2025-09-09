# Africa 2035 Project Documentation

## Project Overview
Africa 2035 is a static website built with Pelican static site generator for a medical missions organization. The site showcases plans to build hospitals and medical universities across Africa through Christ-centered healthcare initiatives. This is an initiative of GFA World.

## Technical Stack
- **Static Site Generator**: Pelican (Python-based)
- **Package Manager**: uv (Python)
- **Frontend Framework**: Bootstrap 5
- **Template Engine**: Jinja2
- **Fonts**: Sofia Sans Condensed (headings), DM Sans (body), DM Serif Display (quotes)
- **Build Tool**: Custom build.sh for Cloudflare Pages deployment

## Project Structure
```
/home/ubuntu/africa2035/
├── content/
│   ├── images/                     # All static images
│   │   ├── favicon/               # Favicon files
│   │   ├── gfa-world/            # GFA World page images
│   │   ├── bcmch/                # BCMCH page images
│   │   └── advisors/             # Advisors page images
│   ├── pages/                     # Markdown content files
│   │   ├── advisors.md
│   │   ├── bcmch.md
│   │   ├── gfa-world.md
│   │   └── rwanda-hospital.md
│   ├── page-info/                # Reference images and documentation
│   └── theme/                     # Custom theme
│       ├── templates/
│       │   ├── base.html          # Base template with meta tags, favicons
│       │   ├── index.html         # Homepage template
│       │   ├── page_base.html     # Standard page template
│       │   ├── advisors.html      # Advisors page template
│       │   ├── bcmch.html         # BCMCH page template
│       │   ├── gfa-world.html     # GFA World page template
│       │   ├── rwanda-hospital.html # Rwanda Hospital page template
│       │   └── includes/          # Template includes
│       │       ├── menu.html      # Hamburger menu component
│       │       └── footer.html    # Footer component
│       └── static/
│           ├── css/
│           │   ├── global.css     # Global styles and CSS variables
│           │   └── slideshow.css  # Slideshow component styles
│           └── js/
│               ├── menu.js        # Hamburger menu functionality
│               ├── progress-circle.js # Canvas progress circle
│               └── slideshow.js   # Image slideshow functionality
├── output/                        # Generated static site
├── pelicanconf.py                # Main Pelican configuration
├── publishconf.py               # Production Pelican configuration
├── requirements.txt             # Pip dependencies for Cloudflare Pages
├── build.sh                     # Build script for Cloudflare Pages
├── docker-compose.yml          # Docker configuration for nginx deployment
└── pyproject.toml              # uv project configuration
```

## Pages and Functionality

### Homepage (`/`)
- **Template**: `index.html`
- **Features**: Hero banner, hospital section with impact cards, progress circle (25% of $100M goal), BCMCH section, bottom section
- **Key Components**: Custom progress circle canvas element

### Rwanda Hospital (`/rwanda-hospital/`)
- **Template**: `rwanda-hospital.html` 
- **Features**: Medical complex cards, timeline with images, vision cards with equal heights
- **Background**: Uses dotted background pattern

### Advisors (`/advisors/`)
- **Template**: `advisors.html`
- **Features**: Profile cards with equal heights using flexbox
- **Layout**: Responsive grid of advisor profiles

### BCMCH (`/bcmch/`)
- **Template**: `bcmch.html`
- **Features**: Video header background, 4-images-per-slide slideshow (2x2 grid), recognition section
- **Key Components**: Video background, slideshow with navigation

### GFA World (`/gfa-world/`)
- **Template**: `gfa-world.html`
- **Features**: Full-screen hero with K.P. Yohannan quote, impact statistics tiles, action columns (Pray/Read/Watch), links section
- **Styling**: Custom red/blue tile designs matching reference, dark links section background

## Design System

### CSS Variables (defined in global.css)
```css
:root {
  --primary-color: #333;
  --secondary-color: #00B894;
  --primary-blue: #0099CC;
  --text-dark: #333333;
  --text-light: #666666;
  --bg-light: linear-gradient(180deg, rgba(0, 153, 204, 0.3) 0%, rgba(101, 212, 248, 0.3) 100%);
  --heading-font: 'Sofia Sans Condensed', sans-serif;
  --body-font: 'DM Sans', sans-serif;
}
```

### Key Components

#### Hamburger Menu
- **Files**: `includes/menu.html`, `theme/js/menu.js`, styles in `global.css`
- **Features**: Animated hamburger to X, slide-out drawer, backdrop blur
- **Responsive**: Text hidden on mobile, shows "CLOSE" when open

#### Progress Circle  
- **Files**: `theme/js/progress-circle.js`, HTML in `includes/progress-circle.html`
- **Technology**: HTML5 Canvas with JavaScript animation
- **Configuration**: 25% progress (PROGRESS_PERCENTAGE variable)

#### Impact Cards
- **Styling**: Defined in `global.css` as `.impact-card`
- **Features**: Equal height with flexbox, hover effects, responsive

#### GFA World Tiles
- **Design**: Red horizontal card for National Missionaries, blue vertical cards for other stats
- **Features**: Overlay labels, specific color schemes matching reference design

## Configuration

### Pelican Settings (`pelicanconf.py`)
- **Pages Only**: No blog functionality (`ARTICLE_PATHS = []`)
- **Clean URLs**: Removes `.html` extensions and `/pages/` prefix
- **Custom Templates**: Direct template mapping for special pages
- **Asset Handling**: Static files properly configured

### Deployment Configurations

#### Cloudflare Pages
- **File**: `requirements.txt` (pip format for compatibility)
- **Build Script**: `build.sh`
- **Dependencies**: pelican[markdown]==4.9.1, markdown==3.5.2

#### Docker (nginx)
- **File**: `docker-compose.yml`
- **Setup**: nginx serving from `/output` directory

## Meta Tags and SEO
- **OpenGraph**: Complete implementation across all pages
- **Twitter Cards**: Summary large image format
- **Favicons**: Multiple formats (ICO, PNG 16x16, 32x32, Apple Touch Icon, Android Chrome 192x192, 512x512)
- **Share Image**: `share-image.jpg` used for all social media previews

## Fonts
- **Sofia Sans Condensed**: Headings (Google Fonts)
- **DM Sans**: Body text (Google Fonts) 
- **DM Serif Display**: Quotes and special text (imported in specific templates)

## Development Commands

### Local Development
```bash
# Install dependencies
uv install

# Generate site
uv run pelican content

# Serve locally  
uv run pelican --listen --bind 0.0.0.0:9001

# Production build
uv run pelican content -s publishconf.py
```

### Docker Deployment
```bash
# Build and serve with nginx
docker-compose up -d
```

## Key Features Implemented

1. **Responsive Design**: Bootstrap 5 with custom responsive breakpoints
2. **Interactive Elements**: Canvas progress circle, slideshow navigation
3. **Consistent Navigation**: Shared hamburger menu across all pages
4. **Social Media Ready**: Complete meta tag implementation
5. **Performance Optimized**: Static site generation, optimized images
6. **Accessibility**: Proper alt tags, semantic HTML structure
7. **Cross-browser Compatibility**: Modern CSS with fallbacks

## Template Inheritance Structure
- `base.html` - Core template (meta tags, Bootstrap, global CSS)
  - `index.html` - Homepage (extends base.html)
  - `page_base.html` - Standard pages (extends base.html) 
  - Custom pages (extends base.html): advisors, bcmch, gfa-world, rwanda-hospital

## Notes for Future Development
- Progress circle percentage can be updated in `progress-circle.js`
- New pages should extend `base.html` or `page_base.html` as appropriate
- Image optimization: WebP format used throughout for performance
- Menu items can be updated in `includes/menu.html`
- Color scheme changes should be made in CSS variables in `global.css`
- All external links open in new tabs (`target="_blank"`)
- Site uses relative URLs for static deployment flexibility