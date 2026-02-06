@echo off
echo Pushing to GitHub...
echo.
echo Make sure you have your GitHub credentials ready!
echo.
echo If you haven't already, create a Personal Access Token at:
echo https://github.com/settings/tokens
echo.
pause

git push -u origin main

echo.
if %errorlevel% equ 0 (
    echo ========================================
    echo Successfully pushed to GitHub!
    echo ========================================
    echo.
    echo View your repository at:
    echo https://github.com/MarkKamarah/the-curious-trio
) else (
    echo ========================================
    echo Push failed. Common issues:
    echo ========================================
    echo.
    echo 1. Authentication failed - Check your credentials
    echo 2. Need Personal Access Token - Go to GitHub Settings ^> Developer Settings
    echo 3. Repository doesn't exist - Make sure you created it on GitHub
    echo.
)
echo.
pause
