# Full Stack Application

A monorepo containing both frontend and backend applications.

## Project Structure

```
FULL_STACK/
├── backend/          - Node.js/Express backend server
├── frontend/         - React frontend application
└── README.md         - This file
```

## Branch Strategy

- **main** - Production-ready code
- **backend/develop** - Backend development branch
  - `backend/feature/*` - Feature branches for backend
- **frontend/develop** - Frontend development branch
  - `frontend/feature/*` - Feature branches for frontend

## Getting Started

### Backend
```bash
cd backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Workflow

1. Always create a new branch for features
2. Keep frontend and backend work on separate branches
3. Test before committing
4. Push to appropriate develop branch
5. Create PRs to merge into main

