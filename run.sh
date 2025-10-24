#!/bin/bash

# Africa 2035 Development Server Script
# Runs Pelican with auto-reload and serves on localhost:9001

echo "Starting Africa 2035 development server..."
echo "Server will be available at http://localhost:9001"
echo "Press Ctrl+C to stop the server"
echo ""

# Generate and serve with auto-reload
uv run pelican --listen --port 9001 --autoreload content
