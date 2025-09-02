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

Happy experimenting!
