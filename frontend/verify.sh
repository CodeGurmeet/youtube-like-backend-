#!/bin/bash
# Verification script for YouTube Clone Frontend

echo "=========================================="
echo "YouTube Clone Frontend - Setup Verification"
echo "=========================================="
echo ""

# Check Node.js
if command -v node &> /dev/null; then
    echo "✅ Node.js is installed: $(node --version)"
else
    echo "❌ Node.js is NOT installed"
    exit 1
fi

# Check npm
if command -v npm &> /dev/null; then
    echo "✅ npm is installed: $(npm --version)"
else
    echo "❌ npm is NOT installed"
    exit 1
fi

# Check if node_modules exists
echo ""
if [ -d "node_modules" ]; then
    echo "✅ node_modules directory exists"
else
    echo "❌ node_modules directory NOT found"
    echo "   Run: npm install"
    exit 1
fi

# Check for required packages
echo ""
echo "Checking packages..."

# Check react
if [ -d "node_modules/react" ]; then
    echo "✅ React is installed"
else
    echo "❌ React is NOT installed"
fi

# Check react-router-dom
if [ -d "node_modules/react-router-dom" ]; then
    echo "✅ React Router DOM is installed"
else
    echo "❌ React Router DOM is NOT installed"
    echo "   Run: npm install react-router-dom"
fi

# Check axios
if [ -d "node_modules/axios" ]; then
    echo "✅ Axios is installed"
else
    echo "❌ Axios is NOT installed"
    echo "   Run: npm install axios"
fi

# Check for .env.local
echo ""
if [ -f ".env.local" ]; then
    echo "✅ .env.local file exists"
    echo "   Contents:"
    grep -v "^$" .env.local | sed 's/^/      /'
else
    echo "⚠️  .env.local file NOT found"
    echo "   Create it from .env.example or manually add:"
    echo "      REACT_APP_API_URL=http://localhost:8000/api/v1"
fi

# Check for key files
echo ""
echo "Checking key source files..."
[ -f "src/App.js" ] && echo "✅ src/App.js" || echo "❌ src/App.js NOT found"
[ -f "src/context/AuthContext.js" ] && echo "✅ src/context/AuthContext.js" || echo "❌ src/context/AuthContext.js NOT found"
[ -f "src/services/api.js" ] && echo "✅ src/services/api.js" || echo "❌ src/services/api.js NOT found"
[ -f "src/components/Header.js" ] && echo "✅ src/components/Header.js" || echo "❌ src/components/Header.js NOT found"
[ -f "src/pages/Home.js" ] && echo "✅ src/pages/Home.js" || echo "❌ src/pages/Home.js NOT found"

echo ""
echo "=========================================="
echo "Verification Complete!"
echo "=========================================="
echo ""
echo "To start the app, run:"
echo "  npm start"
echo ""
echo "The app will open at: http://localhost:3000"
echo "Make sure your backend is running at: http://localhost:8000"
echo ""
