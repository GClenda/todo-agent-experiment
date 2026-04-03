> ⚠️ **TEST PROJECT** – This repository is a test used to benchmark AI coding agents. It is not intended for production use.

# Todo List App

A simple, modern Todo List web application built with React. This project was also used as an experiment to benchmark AI coding agents (GitHub Copilot Coding Agent, Claude Code, and Codex) by having each build the app from scratch.

## What the App Does

This application lets you manage a list of tasks directly in your browser:

- **Add tasks** – Type a task into the input field and click "Add Task" (or press Enter) to add it to your list.
- **Complete tasks** – Click the checkbox next to a task to mark it as done. Completed tasks are shown with strikethrough text.
- **Delete tasks** – Click the trash icon button next to any task to remove it from the list.
- **Input validation** – If you try to submit an empty task, the app shows an inline error message.
- **Empty state** – When there are no tasks, the app displays a friendly placeholder message.

All state is held in memory; refreshing the page resets the list.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | React 18 (with hooks) |
| Language | JavaScript (ES6+, JSX) |
| Styling | Vanilla CSS (GitHub Primer-inspired design) |
| Icons | `@primer/octicons-react` |
| Build Tooling | Create React App (`react-scripts` 5) |

## Project Structure

```plaintext
todo-agent-experiment/
├── public/
│   └── index.html        # HTML entry point with the React root div
├── src/
│   ├── index.js          # Mounts the React app into the DOM
│   ├── App.js            # Root component: holds task state and callback handlers
│   ├── App.css           # Application-wide styles
│   ├── TaskInput.js      # Controlled input form for adding new tasks
│   └── TaskList.js       # Renders the list of tasks with complete/delete actions
├── package.json
└── .gitignore
```

### Component Overview

| File | Responsibility |
|------|---------------|
| `App.js` | Maintains the `tasks` array in state; provides `addTask`, `toggleTask`, and `deleteTask` handlers to child components. |
| `TaskInput.js` | Controlled input with local validation state. Calls `onAddTask` prop on valid submission and shows an error for empty input. |
| `TaskList.js` | Renders each task as a row with a checkbox, label, and delete button. Uses `React.memo` to avoid unnecessary re-renders. |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- npm (bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/GClenda/todo-agent-experiment.git
cd todo-agent-experiment

# 2. Install dependencies
npm install
```

### Running the App

```bash
npm start
```

The development server starts on [http://localhost:3000](http://localhost:3000) and hot-reloads on file changes.

### Building for Production

```bash
npm run build
```

Produces an optimized production build in the `/build` directory.

### Running Tests

```bash
npm test
```

---

## About the Experiment

This codebase was also used as a benchmark to compare AI coding agents. The same feature prompts were given to GitHub Copilot Coding Agent, Claude Code, and Codex, and the results were evaluated against the following questions:

1. How quickly did the agent scaffold the basic app structure?
2. Was the code idiomatic and readable?
3. How well did the agent respond to feature prompts?
4. Did the agent introduce bugs or require manual fixes?
5. How well did the agent handle refactoring requests?
6. Was the agent able to automate pull requests and code reviews?
7. Did the agent provide helpful explanations or documentation?
8. Overall developer experience: friction, learning, surprises.
