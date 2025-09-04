# Agent Coding Experiment: Todo List App

## Overview
This project benchmarks AI coding agents—GitHub Copilot Coding Agent, Claude Code, and Codex—by having each build a simple Todo List web app from scratch.  
The goal: Explore agent-driven development, compare code quality, and document developer experience.

## Experiment Steps

1. Build the app using each agent exclusively, following the same feature prompts.
2. Document interactions, code changes, and agent responses.
3. Compare outcomes using benchmark questions (see below).

## Project Features (MVP)
- Add new tasks
- View all tasks
- Mark tasks as completed
- Delete tasks
- (Optional) Persist tasks to browser storage

## Tech Stack
- React (preferred, but re-do in another stack if desired)
- JavaScript/TypeScript
- CSS

## Benchmark Questions

1. How quickly did the agent scaffold the basic app structure?
2. Was the code idiomatic and readable?
3. How well did the agent respond to feature prompts?
4. Did the agent introduce bugs or require manual fixes?
5. How well did the agent handle refactoring requests?
6. Was the agent able to automate pull requests and code reviews?
7. Did the agent provide helpful explanations or documentation?
8. Overall developer experience: friction, learning, surprises.

## Getting Started

1. Clone this repository for each agent’s implementation.
2. Use the example file structure below.
3. Use the “Benchmark Questions” above after each agent run.

---

## File Structure

```plaintext
todo-agent-experiment/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── TaskInput.js
│   ├── TaskList.js
│   └── index.js
├── package.json
├── README.md
└── .gitignore
```

---

## Suggested Feature Prompts
- "Create a React app for a todo list."
- "Add a component to input tasks."
- "Display a list of tasks."
- "Add a button to mark tasks as completed."
- "Add a delete button for each task."
- "Style the app with a modern UI."
- "Persist tasks using localStorage."

---

## Notes
- Document the process (screenshots, transcripts, code comments).
- Try expanding the scope if MVP is too easy.

---

## Deployment

This React application can be deployed to various platforms. Below are the supported deployment options:

### 🚀 Quick Deploy Options

#### 1. Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/GClenda/todo-agent-experiment)

**Command Line Deployment:**
```bash
npm install -g vercel
npm run build
npm run deploy:vercel
```

#### 2. Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/GClenda/todo-agent-experiment)

**Command Line Deployment:**
```bash
npm install -g netlify-cli
npm run build
npm run deploy:netlify
```

#### 3. GitHub Pages
GitHub Pages deployment is automated via GitHub Actions. Simply push to the `main` branch and the app will be deployed automatically.

**Manual GitHub Pages Setup:**
1. Go to repository Settings → Pages
2. Set source to "GitHub Actions"
3. Push changes to trigger deployment

#### 4. Surge.sh
```bash
npm install -g surge
npm run deploy:surge
```

### 🔧 Local Preview
To preview the production build locally:
```bash
npm run preview
```

### 📁 Manual Deployment
For any static hosting service:
1. Run `npm run build`
2. Upload the contents of the `build/` folder to your hosting provider
3. Configure your server to serve `index.html` for all routes (SPA routing)

### 🌐 Environment Variables
No environment variables are required for basic functionality. The app works entirely client-side.

### 📋 Deployment Checklist
- [x] Vercel configuration (`vercel.json`)
- [x] Netlify configuration (`netlify.toml`, `public/_redirects`)
- [x] GitHub Pages workflow (`.github/workflows/deploy.yml`)
- [x] Package.json deployment scripts
- [x] SPA routing configuration for all platforms

---

Happy experimenting!
