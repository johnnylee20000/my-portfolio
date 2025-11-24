# Development Platforms Setup Guide

## ✅ Currently Installed

1. **Git** (v2.43.0) - ✅ Ready to clone repositories
2. **Node.js** (v24.11.1) - ✅ Installed and ready
3. **npm** - ⚠️ Installed but PowerShell execution policy needs adjustment

## 🔧 Fix PowerShell Execution Policy (for npm)

To enable npm commands in PowerShell, run this command as Administrator:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Or if you prefer to use Command Prompt (cmd) instead, npm will work there without any changes.

## 📦 Essential Platforms for Cloning Apps

### Already Installed ✅
- **Git** - For cloning repositories from GitHub, GitLab, etc.
- **Node.js & npm** - For JavaScript/TypeScript projects (like your Next.js portfolio)

### Additional Platforms You Might Need

Depending on what apps you want to clone, you may also need:

1. **Python** (if cloning Python projects)
   - Download: https://www.python.org/downloads/
   - Includes pip (package manager)

2. **Docker** (for containerized applications)
   - Download: https://www.docker.com/products/docker-desktop/

3. **Java JDK** (for Java/Android projects)
   - Download: https://adoptium.net/ or https://www.oracle.com/java/technologies/downloads/

4. **.NET SDK** (for C#/.NET projects)
   - Download: https://dotnet.microsoft.com/download

## 🚀 Quick Start: Cloning a Repository

```bash
# Clone a repository
git clone <repository-url>

# Navigate to the project
cd <project-name>

# For Node.js projects, install dependencies
npm install

# Run the project
npm run dev
```

## 📝 Notes

- Your current project (my-portfolio) is a Next.js project
- Node.js v24.11.1 is excellent and supports all modern features
- You can clone most JavaScript/TypeScript projects with what you have now

