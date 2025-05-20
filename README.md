<p align="center"><img align="center" width="180" src="https://skillicons.dev/icons?i=react" /></p>

<div align="center"><b>Cheatsheet Hub</b> — Lightning-fast web app for browsing, searching, and managing programming cheatsheets.</div>
<br/>

<div align="center">
  <img src="https://skillicons.dev/icons?i=javascript,react,css,html" />
</div>

---

## 📖 Overview

**Cheatsheet Hub** is a React-based web application designed for developers who want quick access to well-organized, searchable programming cheatsheets. It features a clean UI, responsive design, keyboard navigation, and theming support.

---

## 🗂️ Project Structure

```
.
├── src/
│   ├── components/        # Core UI components (Sidebar, Header, CommandMenu, ThemeProvider, etc.)
│   │   └── ui/            # UI primitives and subcomponents
│   ├── data/              # Cheatsheet content, data helpers
│   ├── assets/            # Static assets (images, icons)
│   ├── lib/               # Utility libraries and helpers
│   ├── App.jsx            # Main app container
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles (Tailwind, dark mode, etc.)
└── README.md
```

---

## ⚙️ Tech Stack

- **React** (SPA architecture)
- **JavaScript** (ES6+)
- **CSS** (with possible Tailwind, see index.css)
- **HTML**
- [Optional/likely, based on common practices:]
  - **Keyboard navigation** (CommandMenu)
  - **Dark mode/theming** (ThemeProvider)
  - **Component-based UI** (Sidebar, Header, CheatsheetContent)
  - **Custom hooks/helpers** (in lib/)

---

## 🚀 Features

- 🔍 **Instant search and filter:** Quickly find cheatsheets using the CommandMenu or search box.
- 🗂️ **Categories and navigation:** Sidebar for easy browsing of different topics.
- 💡 **Rich content rendering:** Syntax highlighting, code blocks, and formatted text.
- 🌙 **Light/Dark mode:** Toggle themes for comfortable viewing.
- ⚡ **Keyboard shortcuts:** Fast navigation for power users.
- 📱 **Responsive design:** Works great on desktop and mobile.

---

## 📦 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm, yarn, or pnpm

### Install & Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

App will run at: [http://localhost:5173](http://localhost:5173)

---

## 📝 Main Components

- **CheatSheetContent:** Displays the contents of a selected cheatsheet.
- **Sidebar:** Topic/category navigation.
- **Header:** App branding, theme toggle, and possibly search.
- **CommandMenu:** Fast command/search palette (Ctrl+K).
- **ThemeProvider:** Handles dark/light mode and theme switching.

---

## ✨ Highlights

- **Minimal, intuitive UI:** Focus on fast access and readability.
- **Easily extensible:** Add new cheatsheets or categories in the `data/` directory.
- **Fast load times:** SPA with client-side routing and efficient rendering.
- **Open-source and hackable:** Contributions welcome!

---

<div align="center">
  <sub>Made with 💙 by mirzaatifbaig — pull requests welcome!</sub>
</div>
