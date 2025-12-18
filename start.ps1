# Script to launch Le-Site project
# This script starts both the backend (Spring Boot) and frontend (React) applications

Write-Host "=== Starting Le-Site Project ===" -ForegroundColor Cyan
Write-Host ""

# Get the script directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# Backend path
$backendPath = Join-Path $scriptDir "backend"
# Frontend path
$frontendPath = Join-Path $scriptDir "frontend"

# Function to check if a command exists
function Test-Command($cmdname) {
    return [bool](Get-Command -Name $cmdname -ErrorAction SilentlyContinue)
}

# Check prerequisites
Write-Host "Checking prerequisites..." -ForegroundColor Yellow

if (-not (Test-Command "java")) {
    Write-Host "ERROR: Java is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Java 21 or higher" -ForegroundColor Red
    exit 1
}

if (-not (Test-Command "mvn")) {
    Write-Host "WARNING: Maven is not installed or not in PATH" -ForegroundColor Yellow
    Write-Host "Using Maven wrapper instead..." -ForegroundColor Yellow
}

if (-not (Test-Command "node")) {
    Write-Host "ERROR: Node.js is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Node.js 18 or higher" -ForegroundColor Red
    exit 1
}

if (-not (Test-Command "npm")) {
    Write-Host "ERROR: npm is not installed or not in PATH" -ForegroundColor Red
    exit 1
}

Write-Host "Prerequisites check completed!" -ForegroundColor Green
Write-Host ""

# Start Backend
Write-Host "=== Starting Backend (Spring Boot) ===" -ForegroundColor Cyan
Write-Host "Location: $backendPath" -ForegroundColor Gray

$backendJob = Start-Job -ScriptBlock {
    param($path)
    Set-Location $path
    
    # Use Maven wrapper if available, otherwise use mvn
    if (Test-Path ".\mvnw.cmd") {
        & .\mvnw.cmd spring-boot:run
    } else {
        mvn spring-boot:run
    }
} -ArgumentList $backendPath

Write-Host "Backend starting in background (Job ID: $($backendJob.Id))..." -ForegroundColor Green
Write-Host "Backend will be available at http://localhost:8080" -ForegroundColor Gray
Write-Host ""

# Wait a bit for backend to start
Write-Host "Waiting 5 seconds before starting frontend..." -ForegroundColor Yellow
Start-Sleep -Seconds 5

# Start Frontend
Write-Host "=== Starting Frontend (React) ===" -ForegroundColor Cyan
Write-Host "Location: $frontendPath" -ForegroundColor Gray

# Check if node_modules exists
$nodeModulesPath = Join-Path $frontendPath "node_modules"
if (-not (Test-Path $nodeModulesPath)) {
    Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
    Set-Location $frontendPath
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR: Failed to install frontend dependencies" -ForegroundColor Red
        Stop-Job $backendJob
        Remove-Job $backendJob
        exit 1
    }
}

$frontendJob = Start-Job -ScriptBlock {
    param($path)
    Set-Location $path
    npm start
} -ArgumentList $frontendPath

Write-Host "Frontend starting in background (Job ID: $($frontendJob.Id))..." -ForegroundColor Green
Write-Host "Frontend will be available at http://localhost:3000" -ForegroundColor Gray
Write-Host ""

# Monitor jobs
Write-Host "=== Both services are starting ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C to stop both services" -ForegroundColor Yellow
Write-Host ""
Write-Host "Job Status:" -ForegroundColor Cyan
Write-Host "  Backend Job ID: $($backendJob.Id)" -ForegroundColor Gray
Write-Host "  Frontend Job ID: $($frontendJob.Id)" -ForegroundColor Gray
Write-Host ""

# Keep script running and display output
try {
    while ($true) {
        # Check if jobs are still running
        $backendState = (Get-Job -Id $backendJob.Id).State
        $frontendState = (Get-Job -Id $frontendJob.Id).State
        
        if ($backendState -eq "Failed") {
            Write-Host "ERROR: Backend job failed!" -ForegroundColor Red
            Receive-Job -Id $backendJob.Id
            break
        }
        
        if ($frontendState -eq "Failed") {
            Write-Host "ERROR: Frontend job failed!" -ForegroundColor Red
            Receive-Job -Id $frontendJob.Id
            break
        }
        
        # Receive and display any output
        Receive-Job -Id $backendJob.Id
        Receive-Job -Id $frontendJob.Id
        
        Start-Sleep -Seconds 2
    }
} finally {
    # Cleanup
    Write-Host ""
    Write-Host "Stopping services..." -ForegroundColor Yellow
    Stop-Job $backendJob -ErrorAction SilentlyContinue
    Stop-Job $frontendJob -ErrorAction SilentlyContinue
    Remove-Job $backendJob -ErrorAction SilentlyContinue
    Remove-Job $frontendJob -ErrorAction SilentlyContinue
    Write-Host "Services stopped." -ForegroundColor Green
}
