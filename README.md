# Africa 2035 Website

Static website for the Africa 2035 project, built with Pelican.

## Local Development

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Generate and serve the site:
   ```bash
   # Development (with live reload)
   pelican content -s pelicanconf.py -l -r

   # Production build
   pelican content -s publishconf.py
   ```

## Deployment

This site is configured for deployment on Cloudflare Pages.

### Cloudflare Pages Settings:
- **Build command**: `./build.sh`
- **Build output directory**: `output`
- **Root directory**: `/`

## Project Structure

- `content/` - Source content and templates
- `content/pages/` - Static pages (Markdown)
- `content/theme/` - Custom Pelican theme
- `content/images/` - Static images
- `output/` - Generated static site (ignored in git)
- `pelicanconf.py` - Development configuration
- `publishconf.py` - Production configuration