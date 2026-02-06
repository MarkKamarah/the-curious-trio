@echo off
echo Setting up The Curious Trio git repository...
echo.

REM Remove duplicate files (ones without dots)
if exist "env.example" del "env.example"
if exist "gitignore" del "gitignore"
echo Cleaned up duplicate files.
echo.

REM Initialize git if not already done
if not exist ".git" (
    echo Initializing git repository...
    git init
    git branch -m main
) else (
    echo Git already initialized.
)

REM Configure git user
echo Configuring git user...
git config user.name "Mark Kamarah"
git config user.email "marksinclair@hotmail.com"

REM Add all files
echo Adding files to git...
git add .

REM Create initial commit
echo Creating initial commit...
git commit -m "Initial commit: Project setup and documentation

- Add README with project overview
- Add .gitignore for Next.js project
- Add .env.example template
- Add MIT License
- Set up basic repository structure"

REM Add remote (if not already added)
git remote remove origin 2>nul
git remote add origin https://github.com/MarkKamarah/the-curious-trio.git

echo.
echo ========================================
echo Git repository set up successfully!
echo ========================================
echo.
echo Next step: Push to GitHub
echo Run: git push -u origin main
echo.
echo You will be prompted for GitHub credentials.
echo.
pause
