# CodeSense AI

CodeSense AI is a lightweight, browser-based code review and UI/UX analysis tool built with React and Monaco Editor.

The idea behind this project was to explore how far real-time code analysis can go on the frontend alone, without depending on a backend service. It uses a custom rule-based engine to analyze code as you type, highlighting accessibility issues, UI/UX inconsistencies, and outdated JavaScript patterns.

---

## Features

- **Real-time Code Analysis**  
  Evaluates code instantly and provides structured feedback with severity levels.

- **Live Scoring System**  
  Generates dynamic scores across code quality, UI/UX, and accessibility.

- **Automatic Improvements**  
  Suggests and applies fixes to produce a cleaner, improved version of the input code.

- **Preview Sandbox**  
  Safely renders HTML and Tailwind updates in an isolated environment.

- **Editor Experience**  
  Integrated Monaco Editor for a familiar, VS Code-like interface.

- **Dark Mode Support**  
  Built-in dark theme using Tailwind CSS.

---

## Tech Stack

- **Frontend:** React 18 (Vite)
- **Styling:** Tailwind CSS
- **Editor:** Monaco Editor (`@monaco-editor/react`)
- **Icons:** Lucide React
- **Core Logic:** Custom rule-based analysis (regex-driven)

---

## Getting Started

Make sure you have Node.js installed.

1. Clone the repository:
```bash
git clone https://github.com/YourUsername/codesense-ai.git
