# Script to fix npm PowerShell execution policy
# Run this script as Administrator, or run the command below manually

Write-Host "Fixing PowerShell execution policy for npm..." -ForegroundColor Yellow
Write-Host ""
Write-Host "Option 1: Set execution policy for current user (Recommended)" -ForegroundColor Cyan
Write-Host "Command: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser" -ForegroundColor Green
Write-Host ""
Write-Host "Option 2: Use Command Prompt (cmd) instead of PowerShell" -ForegroundColor Cyan
Write-Host "npm will work in cmd without any changes" -ForegroundColor Green
Write-Host ""

# Uncomment the line below if you want to run it automatically (requires admin rights)
# Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

Write-Host "To run the fix manually, open PowerShell as Administrator and run:" -ForegroundColor Yellow
Write-Host "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser" -ForegroundColor White

