@echo off
cd /d "%~dp0"
echo === PINK BLOOMING DREAM - LOCAL SERVER ===
echo Mo trinh duyet tai: http://localhost:8000
start "" "http://localhost:8000"
py -m http.server 8000
if errorlevel 1 python -m http.server 8000
pause
