AUTHOR = 'Your Name'
SITENAME = 'Africa 2035'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'UTC'
DEFAULT_LANG = 'en'

# Disable all feeds since we're not blogging
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Disable pagination since we're only using pages
DEFAULT_PAGINATION = False

# Use relative URLs for static site
RELATIVE_URLS = True

# Development server configuration
BIND = '0.0.0.0'

# Only process pages, ignore articles
ARTICLE_PATHS = []
PAGE_PATHS = ['pages']

# Set index page to use custom template
INDEX_SAVE_AS = 'index.html'
DIRECT_TEMPLATES = ['index']
PAGINATED_TEMPLATES = {}

# Remove the index page from pages processing
ARTICLE_EXCLUDES = ['pages/index.md']

# Custom index page
DISPLAY_PAGES_ON_MENU = True

# Remove /pages/ prefix from page URLs and .html extension
PAGE_URL = '{slug}/'
PAGE_SAVE_AS = '{slug}/index.html'

# Theme configuration
THEME = 'content/theme'
STATIC_PATHS = ['images', 'theme/static']
EXTRA_PATH_METADATA = {
    'theme/static/css/global.css': {'path': 'theme/css/global.css'},
    'theme/static/css/slideshow.css': {'path': 'theme/css/slideshow.css'},
    'theme/static/js/menu.js': {'path': 'theme/js/menu.js'},
    'theme/static/js/progress-circle.js': {'path': 'theme/js/progress-circle.js'},
    'theme/static/js/slideshow.js': {'path': 'theme/js/slideshow.js'},
}