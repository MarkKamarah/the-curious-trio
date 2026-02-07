@echo off
echo Current Git Configuration:
echo ========================
echo.
echo Global Configuration:
git config --global user.name
git config --global user.email
echo.
echo Local Configuration (this repo):
git config user.name
git config user.email
echo.
echo GitHub Credential Status:
git credential-manager-core --version 2>nul || echo Git Credential Manager not found
echo.
pause
