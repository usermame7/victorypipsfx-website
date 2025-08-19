#!/bin/bash
# Build script for Vercel deployment
echo "Building VictoryPipsFX for production..."

# Install dependencies
npm install

# Build the client-side application only (static site)
echo "Building client application..."
npx vite build

echo "Build completed successfully!"
echo "Static files are in dist/public/"