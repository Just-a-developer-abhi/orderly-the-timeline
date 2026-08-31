# ORDERLY — AI Watch-Order Multiverse Directory

> **Never Watch Out of Order.**  
> An interactive, highly visual web app powered by an autonomous Agentic Engine to navigate complex watch orders for 24 massive cinematic universes and anime sagas (Marvel, Star Wars, Arrowverse, Walking Dead, Matrix, Terminator, Dune, Gundam, Evangelion, JoJo, and more).

See [RELEASE_NOTES.md](./RELEASE_NOTES.md) for the complete version history, changelog, and roadmap.

---

## 🚀 Features

- **24 Cinematic & Anime Universes (325 Canonical Nodes)**: Explore interconnected timelines across Marvel, Star Wars, DC Arrowverse, The Walking Dead, The Matrix, Terminator, Planet of the Apes, Saw, Transformers, Dune, Buffyverse, Battlestar Galactica, Gundam UC, Toaru/Raildex, Evangelion, JoJo, FMA, SAO, Ghost in the Shell, Psycho-Pass, Detective Conan, Danganronpa, Naruto, and Dragon Ball Z.
- **5 Multi-Strategy Watch Modes**: Switch instantly between *Fast-Track (Essential Only)*, *Zero-Filler*, *Full Canon Lore*, *Chronological In-Universe*, and *Complete Universe Catalog*.
- **Infinite Full-Screen Character Canvas**: Immersive, edge-to-edge visuals with smooth 2-scroll step frame and text shifting.
- **Conversational Watch Order Agent**:
  - *"What should I watch after Avengers 2012?"* $\rightarrow$ Generates sequel progression.
  - *"What to watch before Doomsday?"* $\rightarrow$ Prunes essential prerequisite DAG tree.
  - *"Crisis on Infinite Earths"* $\rightarrow$ Assembles multi-show crossover order.
  - *"Railgun Sisters Arc"* $\rightarrow$ Isolates simultaneous timeline sequence.
- **Central Alternating Branch Timeline**: Center glowing timeline with release year dots, leaf branch cards, and dynamic Phase/Saga filters.
- **Direct Streaming Integration**: Instant clickable links directing to Disney+ Hotstar, Netflix, Max, and Crunchyroll.
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

