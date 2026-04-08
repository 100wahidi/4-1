@echo off
setlocal enabledelayedexpansion

REM ==========================================================
REM 4-1 Robust Launcher (Windows Task Scheduler friendly)
REM ==========================================================

REM ---------- CONFIG (EDIT THESE) ----------
set "PROJECT_ROOT=C:\apps\4-1"

REM Backend: the FastAPI code lives in the src\ sub-folder of the repo.
REM   src\main.py  contains  app = FastAPI(...)
set "BACKEND_DIR=%PROJECT_ROOT%\src"

REM Uvicorn app import path.
REM When uvicorn starts from BACKEND_DIR (pushd into src\), main:app is correct.
set "UVICORN_APP=main:app"

set "BACK_HOST=127.0.0.1"
set "BACK_PORT=8000"

REM Frontend (Vite) - package.json is in the repo root
set "FRONTEND_DIR=%PROJECT_ROOT%"
set "FRONT_PORT=5173"

REM Run mode:
REM   dev      -> npm run dev   (Vite dev server, hot-reload)
REM   preview  -> npm run build + npm run preview (production-like)
set "MODE=dev"

REM If Task Scheduler cannot find node/python in PATH, set full paths here:
REM set "NODE_EXE=C:\Program Files\nodejs\node.exe"
REM set "NPM_CMD=C:\Program Files\nodejs\npm.cmd"
REM set "PY_EXE=C:\Users\YOURUSER\AppData\Local\Programs\Python\Python312\python.exe"
REM Otherwise leave these blank to use the system PATH.
set "NODE_EXE="
set "NPM_CMD="
set "PY_EXE="

REM Kill existing processes before starting (1=yes, 0=no)
set "KILL_OLD=1"

REM ---------- LOGGING ----------
set "LOG_DIR=%PROJECT_ROOT%\task-logs"
if not exist "%LOG_DIR%" mkdir "%LOG_DIR%"

REM Build a locale-independent timestamp using PowerShell
for /f "delims=" %%I in ('powershell -NoProfile -Command "Get-Date -Format 'yyyy-MM-dd_HH-mm-ss'"') do set "TS=%%I"

set "MASTER_LOG=%LOG_DIR%\run_%TS%.log"
set "BACK_LOG=%LOG_DIR%\backend_%TS%.log"
set "FRONT_LOG=%LOG_DIR%\frontend_%TS%.log"

echo ========================================================== > "%MASTER_LOG%"
echo Start: %DATE% %TIME% >> "%MASTER_LOG%"
echo PROJECT_ROOT=%PROJECT_ROOT% >> "%MASTER_LOG%"
echo BACKEND_DIR=%BACKEND_DIR% >> "%MASTER_LOG%"
echo UVICORN_APP=%UVICORN_APP% >> "%MASTER_LOG%"
echo MODE=%MODE% >> "%MASTER_LOG%"
echo ========================================================== >> "%MASTER_LOG%"

REM ---------- Resolve commands ----------
if not "%NPM_CMD%"=="" (
  set "NPM=%NPM_CMD%"
) else (
  set "NPM=npm"
)

if not "%PY_EXE%"=="" (
  set "PY=%PY_EXE%"
) else (
  set "PY=python"
)

REM ---------- Sanity checks ----------
if not exist "%FRONTEND_DIR%\package.json" (
  echo ERROR: package.json not found in FRONTEND_DIR=%FRONTEND_DIR% >> "%MASTER_LOG%"
  exit /b 1
)

if not exist "%BACKEND_DIR%\main.py" (
  echo ERROR: main.py not found in BACKEND_DIR=%BACKEND_DIR% >> "%MASTER_LOG%"
  exit /b 1
)

where "%NPM%" >nul 2>&1
if errorlevel 1 (
  echo ERROR: npm not found. Set NPM_CMD to full path ^(npm.cmd^). >> "%MASTER_LOG%"
  exit /b 1
)

where "%PY%" >nul 2>&1
if errorlevel 1 (
  echo ERROR: python not found. Set PY_EXE to full path. >> "%MASTER_LOG%"
  exit /b 1
)

REM ---------- Kill old instances ----------
if "%KILL_OLD%"=="1" (
  echo Stopping old processes on ports %BACK_PORT% and %FRONT_PORT%... >> "%MASTER_LOG%"

  REM Kill process listening on the backend port (best-effort)
  for /f "tokens=5" %%P in ('netstat -ano 2^>nul ^| findstr "LISTENING" ^| findstr ":%BACK_PORT% "') do (
    taskkill /PID %%P /F /T >> "%MASTER_LOG%" 2>&1
  )

  REM Kill process listening on the frontend port (best-effort)
  for /f "tokens=5" %%P in ('netstat -ano 2^>nul ^| findstr "LISTENING" ^| findstr ":%FRONT_PORT% "') do (
    taskkill /PID %%P /F /T >> "%MASTER_LOG%" 2>&1
  )
)

REM ---------- Backend deps install ----------
echo Installing backend requirements from %PROJECT_ROOT%\requirements.txt >> "%MASTER_LOG%"
"%PY%" -m pip install -r "%PROJECT_ROOT%\requirements.txt" >> "%MASTER_LOG%" 2>&1
if errorlevel 1 (
  echo ERROR: pip install failed. >> "%MASTER_LOG%"
  exit /b 1
)

echo Starting backend (uvicorn %UVICORN_APP% on %BACK_HOST%:%BACK_PORT%)... >> "%MASTER_LOG%"
pushd "%BACKEND_DIR%"
start "4-1-backend" /MIN cmd /c "%PY% -m uvicorn %UVICORN_APP% --host %BACK_HOST% --port %BACK_PORT% >> ""%BACK_LOG%"" 2>&1"
popd

REM ---------- Frontend deps install ----------
echo Installing frontend dependencies... >> "%MASTER_LOG%"
pushd "%FRONTEND_DIR%"

if exist package-lock.json (
  "%NPM%" ci >> "%MASTER_LOG%" 2>&1
) else (
  "%NPM%" install >> "%MASTER_LOG%" 2>&1
)
if errorlevel 1 (
  echo ERROR: npm install failed. >> "%MASTER_LOG%"
  popd
  exit /b 1
)

if /I "%MODE%"=="preview" (
  echo Building frontend... >> "%MASTER_LOG%"
  "%NPM%" run build >> "%MASTER_LOG%" 2>&1
  if errorlevel 1 (
    echo ERROR: npm run build failed. >> "%MASTER_LOG%"
    popd
    exit /b 1
  )

  echo Starting frontend ^(preview on 0.0.0.0:%FRONT_PORT%^)... >> "%MASTER_LOG%"
  start "4-1-frontend" /MIN cmd /c "%NPM% run preview -- --host 0.0.0.0 --port %FRONT_PORT% >> ""%FRONT_LOG%"" 2>&1"
) else (
  echo Starting frontend ^(dev on 0.0.0.0:%FRONT_PORT%^)... >> "%MASTER_LOG%"
  start "4-1-frontend" /MIN cmd /c "%NPM% run dev -- --host 0.0.0.0 --port %FRONT_PORT% >> ""%FRONT_LOG%"" 2>&1"
)

popd

echo Done: %DATE% %TIME% >> "%MASTER_LOG%"
exit /b 0
