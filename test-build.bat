@echo off
echo Testing local build before deployment...
echo.

rem Clean any previous build
if exist .next rmdir /s /q .next

rem Run the build
call npm run build

rem Check if build was successful
if %errorlevel% equ 0 (
    echo.
    echo ✅ Build successful! Safe to deploy.
    echo.
) else (
    echo.
    echo ❌ Build failed! DO NOT deploy until fixed.
    echo.
    exit /b 1
)