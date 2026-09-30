# Department Timetable Viewer - Computer Engineering

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-10b981?style=flat-square&logo=pwa)](./manifest.json)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](./index.html)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](./assets/css/style.css)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](./assets/js/app.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

A lightning-fast, offline-capable, and mobile-first timetable web app for **Computer Engineering** students across all classes: **SE-1, SE-2, TE-1, TE-2, and BE**.

---

## ✨ Features

- **100% Verified Schedule**: Complete schedules with classroom numbers (`E201`, `E202`, `E203`, `E204`), lab rooms, and faculty details.
- **Single-Page Application (SPA)**: Instant navigation between classes and weekdays with zero reloads.
- **1-Tap Batch Filter**: Toggle between `ALL` or your specific batch (`A1`–`C3`). Saved automatically to `localStorage`.
- **Live Status Badges**: Real-time indicators for "Live Now" active lectures and "Up Next" classes.
- **Offline & PWA Support**: Installable as a standalone app on iOS/Android; works offline via Service Worker caching.
- **Print & PDF Ready**: Dedicated `@media print` layout for exporting crisp timetable handouts or PDFs.
- **Accessible & Responsive**: Full keyboard navigation (`Tab`, `Enter`, `Space`), ARIA roles, and high-contrast typography.

---

## 🚀 Project Structure

```
TimeTable GSMV/
├── assets/
│   ├── css/
│   │   └── style.css         # Modern typography, tokens, animations, print & a11y styles
│   ├── icons/
│   │   └── favicon.svg       # Vector app & tab icon
│   └── js/
│       ├── data.js           # Verified timetable database (slots, classes, batches, rooms, faculty)
│       └── app.js            # SPA controller, hash routing, batch filter, clock & SW register
├── index.html                # Semantic HTML skeleton & SPA view containers
├── manifest.json             # PWA Web App Manifest for mobile installation
├── sw.js                     # Service Worker for offline asset caching
└── README.md                 # Project documentation
```

---

## 📱 How to Use & Install

### Web Browser
1. Open `index.html` in any browser on your phone, tablet, or PC.
2. Select your class (`SE-1`, `SE-2`, `TE-1`, `TE-2`, or `BE`).
3. Tap your batch pill (`A1` to `C3`, or `ALL`) to highlight your schedule.

### Install as App (PWA)
- **On Android (Chrome)**: Tap the browser menu (`⋮`) → **Add to Home screen** / **Install app**.
- **On iOS (Safari)**: Tap the Share button → **Add to Home Screen**.

---

## 👨‍💻 Developer & Connect

Built with ❤️ by **Swaraj Shelke** (Computer Engineering).

- 🐙 [GitHub](https://github.com/swarajshelke12)
- 💼 [LinkedIn](https://www.linkedin.com/in/swaraj-shelke-0a3a752b8)
- 📸 [Instagram](https://www.instagram.com/swarajshelke12)
- 📺 [YouTube](https://youtube.com/@swarajshelke12)
