# 🎬 YouTube Clone - Complete Setup Guide

## Overview

This is a complete React-based frontend for your YouTube-like backend. It includes user authentication, profile management, and a beautiful responsive UI.

## Directory Structure

```
WEB-DEV COURSE/
└── BACKEND/
    ├── project/                    (Your Backend)
    │   ├── src/
    │   ├── package.json
    │   └── ...
    └── frontend/                   (React Frontend - NEW!)
        ├── src/
        │   ├── components/         (React Components)
        │   ├── pages/              (Page Components)
        │   ├── services/           (API Services)
        │   ├── context/            (State Management)
        │   ├── styles/             (CSS Styling)
        │   ├── App.js              (Main Component)
        │   └── index.js            (Entry Point)
        ├── public/
        ├── package.json
        ├── .env.example
        ├── start.bat               (Windows Startup)
        ├── verify.sh               (Verification Script)
        ├── FRONTEND_GUIDE.md       (This file)
        ├── PROJECT_STRUCTURE.md    (File Details)
        └── README.md               (Auto-generated)
```

## Prerequisites

- Node.js (v14+) - [Download](https://nodejs.org/)
- npm (comes with Node.js)
- Backend API running on `http://localhost:8000`

## Installation & Setup

### Step 1: Verify Node & npm

```bash
# Windows
node --version
npm --version

# Should show v14+ for Node and v6+ for npm
```

### Step 2: Navigate to Frontend Folder

```bash
cd "c:\Users\HP\Documents\WEB-DEV COURSE\BACKEND\frontend"
```

### Step 3: Install Dependencies

```bash
# Install all dependencies including React
npm install

# Install additional required packages
npm install axios react-router-dom
```

**Note:** If you see peer dependency warnings, add `--legacy-peer-deps` flag:
```bash
npm install --legacy-peer-deps
```

### Step 4: Create Environment File

Create `.env.local` file in the frontend folder:

```env
REACT_APP_API_URL=http://localhost:8000/api/v1
REACT_APP_APP_NAME=YouTube Clone
```

Or copy from example:
```bash
copy .env.example .env.local
```

### Step 5: Start the Application

#### Option A: Using npm
```bash
npm start
```

#### Option B: Using Windows Batch File
```bash
start.bat
```

#### Option C: Using PowerShell
```powershell
$env:REACT_APP_API_URL='http://localhost:8000/api/v1'; npm start
```

The app will open at `http://localhost:3000`

## Files Created for Your Frontend

### Core Components

1. **src/components/Header.js**
   - Top navigation bar
   - User profile display
   - Login/Logout buttons

2. **src/components/Login.js**
   - Login form
   - Username/Email input
   - Password input

3. **src/components/Register.js**
   - Registration form
   - Avatar upload (required)
   - Cover image upload (optional)
   - Image preview

4. **src/components/ProtectedRoute.js**
   - Route protection
   - Authentication check
   - Redirect to login if not authenticated

### Pages

1. **src/pages/Home.js**
   - Landing page
   - Feature showcase
   - Hero section

2. **src/pages/Dashboard.js**
   - User dashboard
   - Profile display
   - Statistics cards
   - Content sections

### Services & Context

1. **src/services/api.js**
   - Axios HTTP client
   - API base configuration
   - Auth token interceptors
   - Automatic token refresh

2. **src/context/AuthContext.js**
   - Authentication state
   - User data management
   - Login/Register/Logout functions
   - useAuth custom hook

### Styles

1. **src/styles/index.css** - Global styles
2. **src/styles/Header.css** - Header styling
3. **src/styles/Auth.css** - Login/Register styling
4. **src/styles/Dashboard.css** - Dashboard styling
5. **src/styles/Home.css** - Home page styling

### Main Files

1. **src/App.js** - Main app component with routing
2. **src/index.js** - React DOM entry point

## Authentication Flow

### Registration
```
1. User fills form (name, username, email, password, avatar)
2. Select/upload avatar image (required)
3. Optionally select cover image
4. Submit form
5. Backend validates and uploads to Cloudinary
6. Tokens returned and stored in localStorage
7. User redirected to dashboard
```

### Login
```
1. User enters username/email and password
2. Backend validates credentials
3. Tokens returned and stored
4. User redirected to dashboard
5. Authentication persists via localStorage
```

### Logout
```
1. Click logout button
2. Tokens removed from localStorage
3. User redirected to home page
```

### Token Refresh
```
1. If access token expires (401 response)
2. Automatic refresh using refresh token
3. New tokens stored
4. Original request retried
5. If refresh fails, redirect to login
```

## API Endpoints Connected

Your frontend communicates with these backend endpoints:

```
Backend URL: http://localhost:8000/api/v1

POST /users/register
  - Input: multipart/form-data (name, email, avatar, coverImage)
  - Output: User data + AccessToken + RefreshToken

POST /users/login
  - Input: JSON (username/email, password)
  - Output: User data + AccessToken + RefreshToken

POST /users/logout
  - Requires: Authorization header with token
  - Output: Success message

POST /users/refresh-token
  - Input: Refresh token
  - Output: New AccessToken + RefreshToken
```

## Features Implemented

✅ **User Authentication**
- Register with avatar/cover image
- Login with username or email
- Logout with session clearing

✅ **State Management**
- Context API for global auth state
- Persistent localStorage
- Custom hooks for easy access

✅ **API Integration**
- Axios HTTP client
- Request/response interceptors
- Automatic token injection
- Error handling

✅ **UI/UX**
- Responsive design (mobile, tablet, desktop)
- Modern gradient design
- Smooth animations
- Loading states
- Error messages

✅ **Routing**
- React Router v6
- Protected routes
- Automatic redirects
- Clean URL structure

✅ **Security**
- JWT token management
- CORS handling
- Secure cookie options
- Input validation

## Customization

### Change API URL
Edit `.env.local`:
```env
REACT_APP_API_URL=https://your-api-domain.com/api/v1
```

### Change App Name
Edit `.env.local`:
```env
REACT_APP_APP_NAME=My Video Platform
```

### Change Colors
Edit CSS files in `src/styles/`:
- Primary color: `#065fd4` (blue)
- Gradient: `#667eea` to `#764ba2` (purple)
- Text: `#030303` (dark)
- Background: `#f9f9f9` (light)

### Add New Routes
Edit `src/App.js`:
```javascript
<Route path="/new-page" element={<NewPage />} />
```

## Running Both Backend and Frontend

### Terminal 1: Backend
```bash
cd project
npm run dev
```

### Terminal 2: Frontend
```bash
cd frontend
npm start
```

## Troubleshooting

### Issue: Port 3000 Already in Use
```bash
# Windows - Find and kill process
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
set PORT=3001 && npm start
```

### Issue: Cannot Find Module
```bash
# Clear node_modules and reinstall
rmdir /s /q node_modules
npm install
npm install axios react-router-dom
```

### Issue: CORS Error
- Check backend CORS config includes `http://localhost:3000`
- Verify backend is running
- Check API URL in `.env.local`

### Issue: API Connection Failed
```bash
# Verify backend is running
# Check backend URL is correct
# Look in browser console for errors
# Check Network tab in DevTools
```

### Issue: Login/Register Not Working
- Check browser console for errors
- Verify backend is running on port 8000
- Check MongoDB connection
- Verify environment variables

## Testing Credentials

After registration:
```
Username: testuser
Email: test@example.com
Password: testpass123
Avatar: [Select any image]
```

## Performance Tips

- Use Production build for deployment:
  ```bash
  npm run build
  ```
- Minimize API calls
- Cache user data appropriately
- Lazy load components for large apps
- Optimize images before upload

## Browser DevTools

Open DevTools (F12) to:
- Check console for errors
- View Network requests/responses
- Inspect elements
- Debug JavaScript
- Check localStorage

## Next Steps

1. ✅ Setup frontend (done!)
2. 📹 Add video upload feature
3. 🎥 Create video player
4. 💬 Add comments system
5. 👥 Implement subscriptions
6. ❤️ Add like/dislike system
7. 🔍 Create search feature
8. 📊 Build analytics dashboard

## Getting Help

### Common Issues
1. Check browser console (F12)
2. Verify backend is running
3. Check API URL configuration
4. Look at network requests
5. Review backend logs

### Documentation References
- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)
- [Axios](https://axios-http.com)
- [MDN Web Docs](https://developer.mozilla.org)

## File Checklist

Before starting, verify these files exist:

- [ ] `src/components/Header.js`
- [ ] `src/components/Login.js`
- [ ] `src/components/Register.js`
- [ ] `src/components/ProtectedRoute.js`
- [ ] `src/pages/Home.js`
- [ ] `src/pages/Dashboard.js`
- [ ] `src/services/api.js`
- [ ] `src/context/AuthContext.js`
- [ ] `src/styles/index.css`
- [ ] `src/styles/Header.css`
- [ ] `src/styles/Auth.css`
- [ ] `src/styles/Dashboard.css`
- [ ] `src/styles/Home.css`
- [ ] `src/App.js`
- [ ] `src/index.js`
- [ ] `.env.local` (or `.env.example` to copy from)

## Summary

You now have a complete React frontend for your YouTube clone with:
- ✅ Full authentication system
- ✅ Protected routes
- ✅ Professional UI
- ✅ API integration
- ✅ Token management
- ✅ Responsive design

**Next Step:** Run `npm start` and start building! 🚀

---

Created: January 2026
For: YouTube Clone Web App
Technology: React + Context API + Axios
