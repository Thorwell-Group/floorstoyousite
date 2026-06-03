@echo off
cd /d "D:\Dev\Web\floorstoyou"
del /f /q ".git\index.lock" 2>nul
git -c user.email="billgourgon@thorwellgroup.com" -c user.name="Bill Gourgon" add -A
git -c user.email="billgourgon@thorwellgroup.com" -c user.name="Bill Gourgon" commit -m "Format: normalize indentation across components and pages"
git push origin main
pause
