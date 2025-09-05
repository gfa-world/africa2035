#!/bin/bash

# Install dependencies
pip install -r requirements.txt

# Generate the static site for production
pelican content -s publishconf.py

# Output directory is already 'output' which Cloudflare Pages expects