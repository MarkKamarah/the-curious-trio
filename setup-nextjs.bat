@echo off
echo ========================================
echo The Curious Trio - Next.js Setup
echo ========================================
echo.
echo This will initialize a Next.js 14 project with:
echo - TypeScript
echo - Tailwind CSS
echo - App Router
echo - ESLint
echo.
echo The project will be created in the current directory.
echo.
pause

echo.
echo Creating Next.js project...
echo.

npx create-next-app@latest . --typescript --tailwind --app --eslint --no-src-dir --import-alias "@/*"

if %errorlevel% neq 0 (
    echo.
    echo ========================================
    echo ERROR: Next.js setup failed!
    echo ========================================
    echo.
    echo Make sure you have Node.js installed:
    echo https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo Installing additional dependencies...
echo ========================================
echo.

call npm install lottie-react zustand @anthropic-ai/sdk

echo.
echo ========================================
echo Next.js project initialized successfully!
echo ========================================
echo.
echo Next steps:
echo 1. Copy .env.example to .env.local
echo 2. Add your API keys to .env.local
echo 3. Run: npm run dev
echo 4. Open: http://localhost:3000
echo.
pause
