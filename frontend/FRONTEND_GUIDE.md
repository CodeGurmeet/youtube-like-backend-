# Frontend Development Guide

## Quick Start

1. Navigate to the frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Install additional packages:
```bash
npm install axios react-router-dom
```

4. Create `.env.local` file:
```bash
REACT_APP_API_URL=http://localhost:8000/api/v1
```

5. Start the development server:
```bash
npm start
```

## Project Structure Overview

### Components (`src/components/`)
- **Header.js** - Main navigation bar with user info and logout button
- **Login.js** - User login form component
- **Register.js** - User registration with avatar/cover image upload
- **ProtectedRoute.js** - Route protection for authenticated users

### Pages (`src/pages/`)
- **Home.js** - Landing page with features and call-to-action
- **Dashboard.js** - User dashboard with stats and uploads

### Services (`src/services/`)
- **api.js** - Axios API client with:
  - Base URL configuration
  - Automatic token injection in headers
  - Token refresh interceptor
  - Error handling

### Context (`src/context/`)
- **AuthContext.js** - Global authentication state management with:
  - User data storage
  - Login/Logout/Register methods
  - Token management
  - useAuth hook

### Styles (`src/styles/`)
- **index.css** - Global styles
- **Header.css** - Header and navigation styling
- **Auth.css** - Login and register page styles
- **Dashboard.css** - Dashboard layout and styling
- **Home.css** - Home page and features styling

## Authentication Flow

1. **Register**: User uploads avatar (required) and cover image (optional)
   - Form is submitted as multipart/form-data
   - Backend uploads images to Cloudinary
   - Tokens returned and stored in localStorage

2. **Login**: User enters username/email and password
   - Credentials validated against backend
   - Tokens received and stored
   - User redirected to dashboard

3. **Token Management**:
   - Access token stored in localStorage
   - Included in all API requests via interceptor
   - Automatically refreshed on 401 response
   - Logout clears localStorage

## API Endpoints Used

```
POST /api/v1/users/register - Register new user
POST /api/v1/users/login - Login user
POST /api/v1/users/logout - Logout user (protected)
POST /api/v1/users/refresh-token - Refresh access token
```

## Key Features Implemented

✅ User Authentication (Register/Login/Logout)
✅ JWT Token Management
✅ Automatic Token Refresh
✅ Protected Routes
✅ User Profile Display
✅ Dashboard with Statistics
✅ Responsive Design
✅ Image Upload Support
✅ Context API for State Management
✅ Axios Interceptors for API Calls

## Configuration Files

### .env.local
```env
REACT_APP_API_URL=http://localhost:8000/api/v1
REACT_APP_APP_NAME=YouTube Clone
```

### package.json
Main dependencies:
- react
- react-dom
- react-router-dom
- axios
- react-scripts

## Running the App

### Development Mode
```bash
npm start
```
Runs on http://localhost:3000

### Production Build
```bash
npm run build
```
Creates optimized build in `build/` folder

### Testing
```bash
npm test
```

## Troubleshooting

### CORS Errors
- Ensure backend has CORS configured with correct origin
- Check API URL in .env.local

### API Connection Issues
- Verify backend is running on http://localhost:8000
- Check browser console for exact error messages
- Clear localStorage and refresh page

### Login/Registration Issues
- Ensure backend database is connected
- Check backend logs for errors
- Verify image upload is working

## Next Steps - Features to Add

1. **Video Management**
   - Upload videos endpoint
   - Video player component
   - Video list/grid view

2. **Interaction Features**
   - Like button component
   - Comment section
   - Share functionality

3. **Subscription System**
   - Subscribe button
   - Subscriber list
   - Subscription management

4. **User Features**
   - Profile editing
   - Channel customization
   - User settings

5. **Content Discovery**
   - Search functionality
   - Video recommendations
   - Trending section

6. **Analytics**
   - View counts
   - Engagement metrics
   - Performance charts

## Code Examples

### Making API Calls
```javascript
import { userService } from '../services/api';

// Register
const form = new FormData();
form.append('fullName', 'John Doe');
form.append('username', 'johndoe');
form.append('email', 'john@example.com');
form.append('password', 'password123');
form.append('avatar', avatarFile);

const response = await userService.register(form);
```

### Using Auth Context
```javascript
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();
  
  return (
    <div>
      {isAuthenticated && <p>Hello {user.fullName}</p>}
    </div>
  );
}
```

### Protected Routes
```javascript
<Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
```

## Useful Resources

- React Docs: https://react.dev
- React Router: https://reactrouter.com
- Axios: https://axios-http.com
- MDN CSS: https://developer.mozilla.org/en-US/docs/Web/CSS

## Notes for Developers

- All API calls are centralized in `api.js` for easy maintenance
- Use the `useAuth` hook to access authentication state anywhere
- CSS uses flexbox and grid for responsive layouts
- Error handling is implemented at the API level with interceptors
- localStorage is used for token persistence

Good luck with development! 🚀
