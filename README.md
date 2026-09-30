# Department Timetable Viewer - Computer Engineering

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-10b981?style=flat-square&logo=pwa)](./manifest.json)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](./index.html)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](./assets/css/style.css)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](./assets/js/app.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

A lightweight, offline-capable timetable web application for Computer Engineering students across classes: **SE-1, SE-2, TE-1, TE-2, and BE**.

---

## Features

- **Accurate Schedule**: Classroom numbers (`E201`, `E202`, `E203`, `E204`), lab rooms, and faculty details.
- **Single-Page Application (SPA)**: Fast navigation between classes and weekdays with zero reloads.
- **Batch Filter**: Toggle between `ALL` or specific batches (`A1`–`C3`), saved to `localStorage`.
- **Live Status Badges**: Indicators for "Live Now" active lectures and "Up Next" classes.
- **Offline & PWA Support**: Installable as a standalone app; works offline via Service Worker caching.
- **Print & PDF Ready**: Dedicated `@media print` layout for exporting clean timetable handouts or PDFs.
- **Accessible & Responsive**: Keyboard navigation (`Tab`, `Enter`, `Space`), ARIA roles, and high-contrast typography.

---

## Project Structure

```
TimeTable GSMV/
├── assets/
│   ├── css/
│   │   └── style.css         # Modern typography, tokens, animations, print & a11y styles
│   ├── icons/
│   │   └── favicon.svg       # Vector app & tab icon
│   └── js/
│       ├── data.js           # Timetable database (slots, classes, batches, rooms, faculty)
│       └── app.js            # SPA controller, hash routing, batch filter, clock & SW register
├── index.html                # Semantic HTML skeleton & SPA view containers
├── manifest.json             # PWA Web App Manifest for mobile installation
├── sw.js                     # Service Worker for offline asset caching
└── README.md                 # Project documentation
```

---

## How to Use & Install

### Web Browser
1. Open `index.html` in any modern web browser.
2. Select a class (`SE-1`, `SE-2`, `TE-1`, `TE-2`, or `BE`).
3. Select a batch (`A1` to `C3`, or `ALL`) to view practical sessions.

### Install as App (PWA)
- **Android (Chrome)**: Tap the browser menu (`...`) -> **Add to Home screen** / **Install app**.
- **iOS (Safari)**: Tap Share -> **Add to Home Screen**.

---

## Author & Links

Built by **Swaraj Shelke** (Computer Engineering).

- [GitHub](https://github.com/swarajshelke12)
- [LinkedIn](https://www.linkedin.com/in/swaraj-shelke-0a3a752b8)
- [Instagram](https://www.instagram.com/swarajshelke12)
- [YouTube](https://youtube.com/@swarajshelke12)
