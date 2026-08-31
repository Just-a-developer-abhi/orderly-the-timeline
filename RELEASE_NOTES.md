# 📋 ORDERLY — Release Notes & Changelog

All notable changes, new features, universe datasets, and bug fixes for the **ORDERLY** multiverse watch order platform are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]
- High-resolution hero image collections for the 20 newly added universes.
- User custom list export & cross-device progress sync.

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
