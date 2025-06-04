# Bg-Changer

A simple React app to change the background color using Tailwind CSS.

---

## 🌀 Tailwind CSS Setup Guide

### 1. Install Tailwind CSS

Open your terminal in the project folder and run:

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

### 2. Configure Tailwind

Edit `tailwind.config.js` and set the `content` array:

```js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

### 3. Add Tailwind to Your CSS

In `src/styles.css`, add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 4. Import Tailwind CSS

Make sure `src/main.jsx` imports your CSS:

```js
import './styles.css'
```

---

## 🚀 How to Run This Project

### 1. Install Dependencies

```sh
npm install
```

### 2. Start the Development Server

```sh
npm run dev
```

- Open the URL shown in your terminal (usually [http://localhost:5173](http://localhost:5173)).

---

## 🖱️ How to Use

- Click any color button at the bottom of the page.
- The background color will change instantly.

---

## 📦 Build for Production

```sh
npm run build
```

---

## 🛠️ Tech Stack

- React
- Vite
- Tailwind CSS

---
