#!/bin/bash
# Build script for Vercel deployment
echo "Building VictoryPipsFX for production..."

# Install dependencies
npm install

# Clean previous build
rm -rf dist/public

# Build the client-side application only (static site)
echo "Building client application..."
npx vite build --outDir dist/public

echo "Build completed successfully!"
echo "Static files are in dist/public/"
ls -la dist/public/