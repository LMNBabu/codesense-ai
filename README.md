# CodeSense AI

CodeSense AI is a lightweight, browser-based code review and UI/UX analysis tool built with React and Monaco Editor.

The goal of this project is to explore real-time code analysis entirely on the frontend, without relying on any backend services. It uses a custom rule-based engine to evaluate code as you type, helping identify accessibility issues, UI/UX inconsistencies, and outdated JavaScript patterns.

---

## Features

- Real-time code analysis with structured feedback and severity levels  
- Dynamic scoring across code quality, UI/UX, and accessibility  
- Automatic code improvements based on detected issues  
- Live preview sandbox for HTML and Tailwind changes  
- Monaco Editor integration for a VS Code-like editing experience  
- Built-in dark mode using Tailwind CSS  

---

## Tech Stack

- Frontend: React 18 (Vite)  
- Styling: Tailwind CSS  
- Editor: Monaco Editor (@monaco-editor/react)  
- Icons: Lucide React  
- Core Logic: Custom rule-based analysis (regex-driven)  

---

## Getting Started

Make sure Node.js is installed on your system.

Clone the repository:
git clone https://github.com/YourUsername/codesense-ai.git

Navigate to the project folder:
cd codesense-ai

Install dependencies:
npm install

Start the development server:
npm run dev

---

## Notes

This project is fully frontend-driven and does not depend on external APIs or backend services. The focus is on keeping the system fast, simple, and self-contained while still providing meaningful code analysis.

---

## Future Improvements

- Improve analysis beyond regex-based rules  
- Add support for additional programming languages  
- Introduce a plugin-based rule system  
- Enable exportable reports for analysis results  
