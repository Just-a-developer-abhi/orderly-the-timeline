# ORDERLY — AI Watch-Order Multiverse Directory

> **Never Watch Out of Order.**  
> An interactive, highly visual web app powered by an autonomous Agentic Engine to navigate complex watch orders for massive cinematic universes and anime sagas (Marvel, Star Wars, Naruto, Dragon Ball Z).

---

## 🚀 Features

- **Infinite Full-Screen Character Canvas**: Immersive, edge-to-edge visuals across Marvel, Star Wars, Naruto, and Dragon Ball Z with smooth scroll frame shifting.
- **Conversational Watch Order Agent**:
  - *"What should I watch after Avengers 2012?"* $\rightarrow$ Generates Phase 2 sequel progression.
  - *"What to watch before Doomsday?"* $\rightarrow$ Prunes essential prerequisite DAG tree.
  - *"All Spider-Man movies in order"* $\rightarrow$ Isolates complete character arcs.
  - *"Phase 2 Marvel"* $\rightarrow$ Bounds releases to specific phases.
- **Central Alternating Branch Timeline**: Center glowing timeline with release year dots and leaf branch cards.
- **Direct Streaming Integration**: Instant clickable links directing to Disney+ Hotstar, Netflix, and Crunchyroll.
- **Isomorphic Architecture**: Runs both via Express Node.js backend and 100% offline client-side fallback.

---

## 📂 Project Structure

```
MCU/
├── public/
│   ├── MCU.mp4                          # Marvel Studio intro video
│   └── assets/
│       └── Images/
│           ├── Spiderman/               # Spider-Man / Marvel image sequence
│           ├── Starwars/                # Star Wars image sequence
│           ├── Naruto/                  # Naruto image sequence
│           ├── DBZ/                     # Dragon Ball Z image sequence
│           └── posters/                 # Dedicated Master Posters for fallbacks
│
├── server/                              # Node.js Agentic Backend
│   ├── agents/
│   │   ├── queryParserAgent.js          # NLP intent & multi-franchise keyword scoring
│   │   ├── knowledgeGraphAgent.js       # Forward/Backward DAG traversal engine
│   │   └── pathOptimizerAgent.js        # Filler pruning & conversational response synthesis
│   ├── data/
│   │   └── franchises.js                # Canonical franchise knowledge graphs
│   └── index.js                         # Express API server (Port 3001)
│
├── src/                                 # React Frontend (Vite + TypeScript)
│   ├── components/
│   │   ├── CinematicVideoIntro.tsx      # Intro video player with subtle Enter CTA
│   │   ├── UniverseHeroFullscreen.tsx   # Fullscreen Hero with scroll frame shifts
│   │   ├── TimelinePage.tsx             # Dedicated timeline view with navigation
│   │   ├── BranchTimeline.tsx           # Alternating branch cards & streaming links
│   │   └── NodeDetailModal.tsx          # Lore dossier & watched progress tracker
│   ├── services/
│   │   └── api.ts                       # API client with isomorphic fallback
│   ├── types/
│   │   └── index.ts                     # Shared TypeScript interfaces
│   ├── utils/
│   │   └── soundEffects.ts              # Web Audio API synthesizers
│   ├── App.tsx                          # Core application router
│   ├── main.tsx                         # React root entrypoint
│   └── index.css                        # Tailwind CSS styles
│
├── .gitignore
├── vercel.json                          # Zero-config Vercel deployment
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Dev Server
```bash
npm run dev
```
- **Frontend**: `http://localhost:5173`
- **Backend API**: `http://localhost:3001`

### 3. Build for Production
```bash
npm run build
```

---

## 🚢 How to Deploy

### Option A: Vercel (Recommended - 1 Click)
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Click **"Deploy"** (Vercel automatically detects `vercel.json` and builds Vite).

### Option B: Netlify
1. Connect your repository on [netlify.com](https://netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`
4. Click **"Deploy Site"**.

### Option C: Render / Railway (Full-stack API)
1. Connect your repository on [render.com](https://render.com) or [railway.app](https://railway.app).
2. Set Build Command: `npm install && npm run build`
3. Set Start Command: `npm start`
