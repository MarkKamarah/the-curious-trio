@echo off
if exist "node_modules\" (
    echo Dependencies are installed!
    echo.
    echo You're ready to start development!
    echo Run: npm run dev
) else (
    echo Dependencies NOT installed yet.
    echo.
    echo Running: npm install
    echo.
    call npm install
    
    if %errorlevel% equ 0 (
        echo.
        echo ========================================
        echo Setup complete! Ready to code!
        echo ========================================
        echo.
        echo Run: npm run dev
    )
)
echo.
pause
