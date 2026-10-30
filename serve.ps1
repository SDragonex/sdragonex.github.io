# Local development preview server for sdragonex.github.io
# Uses pinned portable Zola v0.21.0 matching GitHub Actions

$toolsDir = Join-Path $PSScriptRoot "tools"
$zolaExe = Join-Path $toolsDir "zola.exe"

if (-not (Test-Path $zolaExe)) {
    Write-Host "Zola binary not found. Downloading Zola v0.21.0 for Windows..." -ForegroundColor Cyan
    New-Item -ItemType Directory -Force -Path $toolsDir | Out-Null
    $zipPath = Join-Path $toolsDir "zola.zip"
    Invoke-WebRequest -Uri "https://github.com/getzola/zola/releases/download/v0.21.0/zola-v0.21.0-x86_64-pc-windows-msvc.zip" -OutFile $zipPath
    Expand-Archive -Path $zipPath -DestinationPath $toolsDir -Force
    Remove-Item $zipPath
}

Write-Host "==========================================================" -ForegroundColor Green
Write-Host " Spoustim Zola dev server (v0.21.0)..." -ForegroundColor Green
Write-Host " Web bude dostupny na: http://127.0.0.1:1111/" -ForegroundColor Yellow
Write-Host " Ukoncit muzete stiskem Ctrl+C" -ForegroundColor Gray
Write-Host "==========================================================" -ForegroundColor Green

& $zolaExe serve --open
