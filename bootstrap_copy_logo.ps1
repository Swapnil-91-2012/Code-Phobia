# This script prepares the initial environment for the Castify project.

# 1. Create necessary directories if they don't exist.
$uploadDir = ".\uploads"
$logsDir = ".\logs"
$assetsDir = ".\frontend\src\assets"

if (-not (Test-Path $uploadDir)) {
    New-Item -ItemType Directory -Path $uploadDir
    Write-Host "Created directory: $uploadDir"
}

if (-not (Test-Path $logsDir)) {
    New-Item -ItemType Directory -Path $logsDir
    Write-Host "Created directory: $logsDir"
}

if (-not (Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Path $assetsDir
    Write-Host "Created directory: $assetsDir"
}

# 2. Copy the logo into the frontend assets folder.
$logoSource = "C:\Users\swapn\OneDrive\Pictures\Castify_logo.jpg"
$logoDestination = ".\frontend\src\assets\logo.jpg"

if (Test-Path $logoSource) {
    Copy-Item -Path $logoSource -Destination $logoDestination -Force
    Write-Host "Successfully copied logo to $logoDestination"
} else {
    Write-Warning "Logo file not found at $logoSource. Please copy it manually."
}
