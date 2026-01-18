@echo off
echo.
echo ========================================
echo YouTube Clone - Frontend Startup
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    echo.
    echo Installing axios and react-router-dom...
    call npm install axios react-router-dom
    echo.
)

REM Check if .env.local exists
if not exist ".env.local" (
    echo Creating .env.local file...
    (
        echo REACT_APP_API_URL=http://localhost:8000/api/v1
        echo REACT_APP_APP_NAME=YouTube Clone
    ) > .env.local
    echo.
)

echo Starting React development server...
echo.
echo The app will open at: http://localhost:3000
echo.
echo Make sure your backend is running on: http://localhost:8000
echo.
call npm start
