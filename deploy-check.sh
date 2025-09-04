#!/bin/bash

# Deployment verification script for todo-agent-experiment

echo "🚀 Todo Agent Experiment - Deployment Verification"
echo "=================================================="

# Check if build directory exists
if [ ! -d "build" ]; then
    echo "❌ Build directory not found. Running 'npm run build'..."
    npm run build
fi

# Check build directory contents
echo ""
echo "📁 Build directory contents:"
ls -la build/

# Check for essential files
echo ""
echo "🔍 Checking essential deployment files..."

check_file() {
    if [ -f "$1" ]; then
        echo "✅ $1 exists"
    else
        echo "❌ $1 missing"
    fi
}

check_file "vercel.json"
check_file "netlify.toml"
check_file "public/_redirects"
check_file "build/_redirects"
check_file ".github/workflows/deploy.yml"

# Check package.json scripts
echo ""
echo "📋 Available deployment scripts:"
npm run | grep "deploy\|preview"

echo ""
echo "🎉 Deployment verification complete!"
echo ""
echo "Next steps:"
echo "1. Choose a deployment platform (Vercel, Netlify, GitHub Pages, etc.)"
echo "2. Follow the instructions in README.md"
echo "3. Run the appropriate deployment command"