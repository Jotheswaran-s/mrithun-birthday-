@echo off
echo Fixing photos for Mrithun's Birthday Website...
echo.

set SEARCH_DIR=C:\Users\truckrr_app_dev1\.gemini\antigravity\brain\tempmediaStorage

if exist "%SEARCH_DIR%\media__1771138323671.jpg" (
    copy "%SEARCH_DIR%\media__1771138323671.jpg" "memory1.jpg"
    echo Copied Memory 1
) else (
    echo Memory 1 source not found.
)

if exist "%SEARCH_DIR%\media__1771138323672.jpg" (
    copy "%SEARCH_DIR%\media__1771138323672.jpg" "memory2.jpg"
    echo Copied Memory 2
) else (
    echo Memory 2 source not found.
)

if exist "%SEARCH_DIR%\media__1771138323673.jpg" (
    copy "%SEARCH_DIR%\media__1771138323673.jpg" "memory3.jpg"
    echo Copied Memory 3
) else (
    echo Memory 3 source not found.
)

if exist "%SEARCH_DIR%\media__1771138323674.jpg" (
    copy "%SEARCH_DIR%\media__1771138323674.jpg" "memory4.jpg"
    echo Copied Memory 4
) else (
    echo Memory 4 source not found.
)

echo.
echo ===================================================
echo  Photos updated successfully! 
echo  Please refresh the website to see the new photos.
echo ===================================================
pause
