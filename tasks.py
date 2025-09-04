import os
from invoke import task

@task
def clean(c):
    """Remove generated files"""
    if os.path.isdir('output'):
        c.run('rm -rf output')
        c.run('mkdir output')

@task
def build(c):
    """Build local version of site"""
    c.run('pelican -s pelicanconf.py')

@task
def rebuild(c):
    """Rebuild site from scratch"""
    clean(c)
    build(c)

@task
def regenerate(c):
    """Automatically regenerate site upon file modification"""
    c.run('pelican -r -s pelicanconf.py')

@task
def serve(c, port=8000):
    """Serve site at http://localhost:8000/"""
    c.run(f'pelican --listen -p {port} -s pelicanconf.py')

@task
def reserve(c, port=8000):
    """Regenerate site and serve at http://localhost:PORT/"""
    c.run(f'pelican -r --listen -p {port} -s pelicanconf.py')

@task
def preview(c):
    """Build production version of site"""
    c.run('pelican -s publishconf.py')

@task
def livereload(c, port=9002):
    """Automatically reload browser on file modification."""
    from livereload import Server
    build(c)
    server = Server()
    # Watch the pelicanconf.py file for changes
    server.watch('pelicanconf.py', lambda: build(c))
    # Watch the content directory for changes
    server.watch('content/', lambda: build(c))
    # Watch the theme directory for changes if it exists
    if os.path.exists('theme/'):
        server.watch('theme/', lambda: build(c))
    # Serve the output directory
    server.serve(port=port, root='output')
