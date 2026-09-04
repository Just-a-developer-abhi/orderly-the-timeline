# 📋 ORDERLY — Release Notes & Changelog

All notable changes, new features, universe datasets, and bug fixes for the **ORDERLY** multiverse watch order platform are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [v2.4.0] — 2026-08-31
### 📱 Mobile & Tablet Responsive Architecture
- **Adaptive Fullscreen Hero Layout (`UniverseHeroFullscreen.tsx`)**:
  - Implemented responsive header scaling with safe-area insets (`safe-pt`) for iPhone Dynamic Island / notch.
  - Formatted mobile hero content into an integrated, glassmorphic bottom card overlay with high contrast and glowing action button.
  - Added interactive pagination dots and swipe gesture support for switching character frames on touch devices.
- **Mobile Multiverse Universe Dropdown (`UniversesDropdown.tsx`)**:
  - Adjusted dropdown viewport alignment on mobile (`fixed inset-x-3 top-18`) with 1-column card grid and large 48px touch targets.
- **Responsive Multiverse Directory Modal (`MultiverseDirectoryModal.tsx`)**:
  - Responsive grid: 1 column on phones (< 640px), 2 columns on tablets (640px–1023px), 3 columns on desktop ($\ge 1024px$).
  - Horizontal scrolling category filter pills and responsive header.
- **Adaptive Search Command Palette (`SearchCommandPalette.tsx`)**:
  - Centered mobile dropdown drawer with comfortable tap spacing.
- **Mobile Timeline Tree & Cards (`BranchTimeline.tsx`)**:
  - Proportional timeline spine offset (`left-4 sm:left-6`, `pl-10 sm:pl-14`) on mobile.
  - Responsive card interior with wrapping action buttons (`Mark as Watched`, streaming badge, lore trigger).
- **Safe Area & Touch Utilities (`src/index.css`)**:
  - Added `touch-action: manipulation`, `-webkit-tap-highlight-color: transparent`, and safe-area utilities (`.safe-pt`, `.safe-pb`, `.safe-px`).

---

## [v2.3.2] — 2026-08-31
### 📜 Scrollability & Event Capture Fixes
- **Independent Dropdown & Modal Scrolling**:
  - Fixed the window wheel/touch listener in `UniverseHeroFullscreen.tsx` which was previously executing `e.preventDefault()` globally and blocking mousewheel / trackpad scrolling inside floating menus.
  - Added target inspection (`data-scrollable="true"`, `.overflow-y-auto`, `.custom-scrollbar`) to allow native smooth scrolling inside:
    - **Top-Left Universe Dropdown** (`UniversesDropdown.tsx`)
    - **Fullscreen Multiverse Directory** (`MultiverseDirectoryModal.tsx`)
    - **Search Command Palette & Autocomplete** (`SearchCommandPalette.tsx`)
    - **Node Detail Modal** (`NodeDetailModal.tsx`)
- **Enhanced Custom Scrollbars & Overscroll Containment**:
  - Added `overscroll-contain` and explicit cross-browser scrollbar CSS rules in `src/index.css` for clean dark cinematic scrollbars.

---

## [v2.3.1] — 2026-08-31
### 🐛 Bug Fixes & Top-Left Dropdown Enhancements
- **Top-Left Universes Dropdown (`UniversesDropdown.tsx`)**:
  - Replaced the previous 4-item pill bar with an interactive, compact, scrollable dropdown on the top-left navigation.
  - Houses all **24 universes** in smaller, clickable cards with real-time in-dropdown search and category filtering (`All 24`, `Western 12`, `Anime 12`).
- **Complete 24-Universe Export Registration**:
  - Fixed `server/data/franchises.js` export mapping so all 20 new universe modules are aggregated and loaded by `fetchUniverses()`.
- **Target Selection & True Universe Auto-Detection**:
  - Upgraded `queryParserAgent.js` and `App.tsx` so clicking on any target or movie card in the right search autocomplete palette automatically resolves its true franchise without falling back to the previous/default universe.
  - Synchronized all preset target IDs in `walkingdead.js`, `terminator.js`, and `saw.js` with their canonical node IDs.

---

## [v2.2.1] — 2026-08-31
### 🎨 Polish & UX Enhancements
- **Audio Enabled by Default**: Video intro audio is now set to **ON by default** (`muted: false`, `volume: 0.90`) with an automatic instant-unmute listener on the first user interaction if browser autoplay security policies initially restrict sound.
- **Cinematic Intro Branding**: Removed `"MARVEL STUDIOS"` label from the top-left corner of the video intro screen.
- **Dynamic Title Overlay Fadeout**: Implemented a 2.5-second automatic graceful fadeout with `AnimatePresence` for the central HTML `"ORDERLY"` title overlay, allowing the video's built-in animated typography to seamlessly take over while preserving the initial overlay as a failsafe on slow networks/devices.

---

## [v2.2.0] — 2026-08-31
### 🚀 Added (20 New Universes • 325 Total Canonical Nodes)
- **Massive 24-Universe Expansion**: Added 20 new cinematic and anime universes complete with DAG dependency trees, chronological metadata, and preset targets:
  - **Western TV & Cinematic Universes**:
    - *The Arrowverse (DC TV)*: Interleaved multi-show viewing order with annual mega-crossovers (*Invasion!*, *Crisis on Earth-X*, *Elseworlds*, *Crisis on Infinite Earths*).
    - *The Walking Dead Universe*: Flagship series (S1–11), *Fear TWD*, *World Beyond*, CRM lore, *The Ones Who Live*, *Daryl Dixon*, and *Dead City*.
    - *The Matrix Universe*: Canon films, *The Animatrix* (9 canon shorts), *Enter the Matrix* lore, and *The Matrix Resurrections*.
    - *Terminator Franchise*: Multi-timeline branching (*Cameron Canon*, *Future War*, *Sarah Connor Chronicles*, *Genisys*, and *Terminator Zero* anime).
    - *Planet of the Apes Universe*: 1968–1973 time-loop pentalogy, Caesar reboot trilogy, and *Kingdom of the Planet of the Apes*.
    - *Saw / Jigsaw Franchise*: Non-linear flashback chronology (*Saw I* -> *Saw X* -> *Saw II* -> *Saw III/IV simultaneous* -> *Saw 3D* -> *Jigsaw* -> *Spiral*).
    - *Transformers Universe*: Cybertron origin *Transformers One*, Knightverse reboot (*Bumblebee*, *Rise of the Beasts*), and Bayverse 1–5.
    - *Dune Universe*: HBO's 10,000-year prequel *Dune: Prophecy*, Denis Villeneuve's *Part One*, *Part Two*, and *Dune: Messiah*.
    - *The Buffyverse*: *Buffy the Vampire Slayer* (S1–7) and *Angel* (S1–5) simultaneous broadcast and crossover order.
    - *Battlestar Galactica*: 2003 Miniseries -> Seasons 1–4, webisodes (*The Resistance*, *Face of the Enemy*), TV films (*Razor*, *The Plan*), and *Caprica*.
  - **Anime & Japanese Franchises**:
    - *Mobile Suit Gundam (Universal Century)*: 45-year UC chronology (*Gundam 0079*, *08th MS Team*, *0080*, *0083*, *Zeta*, *ZZ*, *Char's Counterattack*, *Unicorn*, *Hathaway*).
    - *Toaru / Raildex Universe*: Academy City Science vs Magic (*Railgun S1*, *Index S1*, *Railgun S Sisters Arc*, *Accelerator*, *Index II*, *Railgun T*, *Index III*).
    - *Neon Genesis Evangelion*: Original TV Episodes 1–24, *The End of Evangelion*, and the 4-part *Rebuild of Evangelion* tetralogy (*1.11, 2.22, 3.33, 3.0+1.01*).
    - *JoJo’s Bizarre Adventure*: Generational Joestar bloodline (*Phantom Blood* to *Stone Ocean* universe reset).
    - *Fullmetal Alchemist*: Dual adaptation continuities (*FMA 2003 + Conqueror of Shamballa* vs *Brotherhood 2009 Manga Canon*).
    - *Sword Art Online (SAO)*: *Aincrad*, *Progressive* floor-by-floor reboot, *Phantom Bullet*, *Ordinal Scale* canon bridge, *Alicization*, and *War of Underworld*.
    - *Ghost in the Shell*: Mamoru Oshii films (1995, *Innocence*), and Kenji Kamiyama's *Stand Alone Complex* TV universe (*SAC S1-2 & Solid State Society*).
    - *Psycho-Pass*: Seasons 1–3, 2015 Movie, *Sinners of the System* trilogy, *Providence* bridge, and *First Inspector*.
    - *Detective Conan (Case Closed)*: APTX 4869 lore, Black Organization vs FBI, Clash of Red and Black, Bourbon, and *The Black Iron Submarine*.
    - *Danganronpa*: *Trigger Happy Havoc*, *DR2/Ultra Despair Girls* lore, *Danganronpa 3* interleaved alternate episode viewing (*Future 1 -> Despair 1 -> Future 2 -> Despair 2*), and *Side: Hope*.
- **Enhanced NLP Search Engine**: Expanded query parser agent with keyword & character recognition for 50+ iconic characters across all 24 universes.
- **Dynamic Hero Fallbacks & Switcher**: Added responsive horizontal scrolling universe selector pills in both the Fullscreen Hero and Timeline views.
- **Master Fallback Posters**: Added high-resolution poster mappings for all 24 universes in `BranchTimeline.tsx`.

### 🧪 Validation
- 100% DAG validation across all 325 nodes: 0 duplicate IDs, 0 broken prerequisite links, 0 cycles.
- All 5 watch modes (*Fast-Track*, *Zero-Filler*, *Full Canon Lore*, *Chronological*, *Complete Catalog*) validated across all 24 universes.

---

## [v2.1.0] — 2026-08-30
### 🐛 Fixed
- **Prerequisite Culmination Invariant**: Fixed bug where Fox X-Men releases (*Days of Future Past*, *Logan*, *Deadpool 2*) appeared *after* the target node (*Avengers: Doomsday*) in backward DAG watch orders. The Target node is now strictly guaranteed to be the final destination (`#N (TARGET)`).
- **Chronological Sequence of Fox X-Men**: Corrected release year order in `mcu.js` so Fox X-Men entries precede Phase 5/6 films.
- **Poster Artwork**: Fixed broken poster URL for *X-Men: Days of Future Past* and updated to verified high-definition TMDB artwork.

---

## [v2.0.0] — 2026-08-29
### 🚀 Added
- **Massive MCU & Anime Expansion (174 Nodes)**:
  - Expanded MCU dataset from 22 to 73 nodes, incorporating all 26 Marvel Television / Netflix Defenders series and Fox X-Men legacy films.
  - Expanded Star Wars dataset to 38 nodes.
  - Expanded Naruto dataset to 34 nodes.
  - Expanded Dragon Ball dataset to 29 nodes.
- **5 Multi-Strategy Watch Modes**:
  1. *Fast-Track (Essential Only)*: Critical core path to reach the target with minimum runtime.
  2. *Zero Filler*: Strips non-canonical and supplementary filler episodes.
  3. *Full Canon Lore*: Comprehensive canon including world-building spin-offs and multiverse ties.
  4. *Chronological In-Universe*: Re-sequences releases by in-universe timeline date (e.g. 1942 Captain America -> Present Day).
  5. *Complete Universe Catalog*: Full chronological directory of all franchise media.
- **Dynamic Phase Filters & In-Timeline Search**: Interactive filter chips to isolate specific Phases/Sagas and real-time title searching within the timeline.
- **Client-Side Module Graph Integration**: Direct isomorphic execution of the 3-agent pipeline within Vite to eliminate stale server caching.

---

## [v1.1.0] — 2026-08-28
### 🎨 Added & Changed
- **Dynamic Scroll Lore Rolling Texts**: Added scrolling theories, hype points, and lore background in the Marvel hero section.
- **Hero Image Carousel**: Updated Spider-Man image assets.

### 🐛 Fixed
- **Bidirectional Scroll Sticking Bug**: Fixed issue where the scroll frame counter got stuck when reversing wheel scroll direction between top and bottom boundaries.
- **Asset Case Sensitivity in Vercel Deployments**: Fixed image path casing discrepancies between macOS local filesystem and Linux cloud deployments.

---

## [v1.0.0] — 2026-08-27
### 🚀 Initial Platform Launch
- **3-Agent AI Architecture**:
  - *Query Parser Agent*: Comprehends natural language requests, character arcs, and target destinations.
  - *Knowledge Graph Agent*: Intelligently traverses bidirectional directed acyclic graphs (DAGs).
  - *Path Optimizer Agent*: Prunes filler, computes runtime metrics, and generates natural advice.
- **Visual Branch Timeline**: Central glowing timeline spine with alternating left/right leaf branch cards.
- **Cinematic Video Intro**: Fullscreen Marvel intro video with custom Web Audio sound effects.
- **Node Detail Dossiers**: Lore dossiers with character debut lists, synopsis, and post-credits scene breakdowns.
- **Watch Tracker**: Local progress tracking allowing users to mark nodes as completed.
