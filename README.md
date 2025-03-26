
# Cali – Calendar Assistant MVP

## 🔧 Stack
- React + Tailwind (Vite)
- Node.js + Express API

## 🛠️ Setup

### Backend
```bash
cd backend
npm install
node index.js
```

### Frontend
```bash
cd frontend
npm create vite@latest
# Choose "React"
cd frontend
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
# Add Tailwind to `src/index.css`
# Paste provided React code into `src/App.jsx`
npm run dev
```

> Update fetch URLs to match your deployed API when hosting.

---

This scaffolds a local MVP for your assistant/calendar system. Next steps:
- Add calendar UI (e.g. FullCalendar.io)
- Add metrics logic
- Add persistent database (PostgreSQL via Supabase or Railway)
- Deploy backend to Render or Fly.io, frontend to Cloudflare Pages
