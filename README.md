# 🎯 Favicon & App Icon Setup Guide

## 📁 Folder Structure for Your GitHub Website

Place files in your repository exactly like this:

```
your-github-repo/
│
├── favicon.ico                          ← browsers look here by default
│
├── manifest.json                        ← PWA install support
│
├── icons/
│   ├── favicon-16x16.png               ← small browser tab icon
│   ├── favicon-32x32.png               ← standard browser tab icon
│   ├── favicon-48x48.png               ← Windows site icon
│   ├── apple-touch-icon.png            ← iPhone/iPad home screen (180×180)
│   ├── android-chrome-192x192.png      ← Android home screen
│   └── android-chrome-512x512.png      ← PWA splash screen
│
└── index.html                           ← your website
```

---

## 🧩 Step 1 — Copy files

1. Put `favicon.ico` and `manifest.json` in your **root folder** (same level as `index.html`)
2. Create a folder called `icons/` and put all the `.png` files inside it

---

## 🧩 Step 2 — Add tags to your HTML

Open your `index.html` and paste this inside the `<head>` section:

```html
<!-- Standard browser favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">

<!-- PNG favicons for modern browsers -->
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="48x48" href="/icons/favicon-48x48.png">

<!-- Apple devices (iOS "Add to Home Screen") -->
<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">

<!-- PWA manifest -->
<link rel="manifest" href="/manifest.json">

<!-- Browser theme color -->
<meta name="theme-color" content="#1a3a8f">

<!-- Windows tile -->
<meta name="msapplication-TileColor" content="#1a3a8f">
<meta name="msapplication-TileImage" content="/icons/android-chrome-192x192.png">
```

---

## 🧩 Step 3 — Edit manifest.json

Open `manifest.json` and update these two fields:

```json
"name": "Your App Name",       ← full name shown on install prompt
"short_name": "App",           ← short name shown under icon
"description": "...",          ← what your app does
```

---

## 🧩 Step 4 — Push to GitHub

```bash
git add .
git commit -m "Add favicon and app icons"
git push
```

---

## ✅ What each file does

| File | Where it shows up |
|------|-------------------|
| `favicon.ico` | Browser tab, bookmarks bar, default fallback |
| `favicon-16x16.png` | Small browser tabs |
| `favicon-32x32.png` | Standard browser tabs |
| `favicon-48x48.png` | Windows taskbar pinned sites |
| `apple-touch-icon.png` | iPhone/iPad home screen shortcut |
| `android-chrome-192x192.png` | Android home screen shortcut |
| `android-chrome-512x512.png` | PWA install screen & splash |
| `manifest.json` | Enables "Add to Home Screen" on Android/Chrome |

---

## 🔄 Regenerating icons (if you change your logo)

1. Replace `logo.png` with your new logo
2. Run: `node generate-icons.js`
3. All icons will be regenerated automatically

> **Requirements:** `npm install sharp`
