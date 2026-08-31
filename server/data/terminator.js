export const TERMINATOR_DATA = {
  id: "terminator",
  name: "Terminator Franchise",
  tagline: "4 Conflicting Timeline Branches, Skynet, Judgment Day & Legion",
  icon: "Cpu",
  themeColor: "red",
  presetTargets: [
    {
      id: "term-dark-fate",
      title: "Terminator: Dark Fate (Cameron Canon Finale)",
      year: 2019,
      type: "Movie",
    },
    {
      id: "term-zero-anime",
      title: "Terminator Zero (Anime 2024)",
      year: 2024,
      type: "Series",
    },
    {
      id: "term-t2",
      title: "Terminator 2: Judgment Day (1991)",
      year: 1991,
      type: "Movie",
    },
    {
      id: "term-salvation",
      title: "Terminator Salvation (Future War 2018)",
      year: 2009,
      type: "Movie",
    },
    {
      id: "term-sarah-connor-s1-2",
      title: "The Sarah Connor Chronicles (Series Finale)",
      year: 2009,
      type: "Series",
    },
    {
      id: "term-genisys",
      title: "Terminator Genisys (1984 Timeline Rewrite)",
      year: 2015,
      type: "Movie",
    },
  ],
  nodes: [
    {
      id: "term-t1",
      title: "The Terminator",
      type: "Movie",
      year: 1984,
      chronoYear: "1984 / 2029",
      phase: "Prime Timeline Anchor",
      runtimeMinutes: 107,
      tier: "Essential",
      streamingOn: "Max",
      poster: "https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",
      synopsis:
        "In 1984, a cybernetic assassin (Cyberdyne Systems Model 101) is sent from the apocalyptic year 2029 to assassinate Sarah Connor, whose unborn son John will lead human resistance, protected by soldier Kyle Reese.",
      reason:
        "Foundational bedrock of the entire Terminator mythos; introduces Sarah Connor, Kyle Reese, T-800, Skynet, and the predestination paradox.",
      postCredits:
        "A pregnant Sarah Connor drives a jeep toward an oncoming desert storm: 'There's a storm coming.'",
      charactersIntroduced: [
        "Sarah Connor",
        "Kyle Reese",
        "T-800 Model 101 (Arnold Schwarzenegger)",
        "John Connor (Unborn)",
        "Skynet",
      ],
      prerequisites: [],
    },
    {
      id: "term-t2",
      title: "Terminator 2: Judgment Day",
      type: "Movie",
      year: 1991,
      chronoYear: "1995",
      phase: "Prime Timeline Anchor",
      runtimeMinutes: 137,
      tier: "Essential",
      streamingOn: "Netflix",
      poster: "https://image.tmdb.org/t/p/w500/5M0j0B18abtqP3P75apfZMNqZ1r.jpg",
      synopsis:
        "A reprogrammed T-800 is sent to protect 10-year-old John Connor and institutionalized Sarah from an advanced liquid metal prototype, the T-1000, while destroying Cyberdyne Systems to prevent Judgment Day.",
      reason:
        "Universal cinematic milestone; introduces T-1000, Miles Dyson, and the philosophical theme 'No fate but what we make for ourselves.'",
      postCredits:
        "The T-800 gives a thumbs up as he is lowered into molten steel to destroy all future tech chips.",
      charactersIntroduced: [
        "Young John Connor",
        "T-1000 (Robert Patrick)",
        "Miles Dyson",
        "Dr. Peter Silberman",
      ],
      prerequisites: ["term-t1"],
    },
    {
      id: "term-dark-fate",
      title: "Terminator: Dark Fate",
      type: "Movie",
      year: 2019,
      chronoYear: "1998 / 2020",
      phase: "Branch A: Cameron Canon",
      runtimeMinutes: 128,
      tier: "Essential",
      streamingOn: "Disney+ Hotstar",
      poster: "https://image.tmdb.org/t/p/w500/vloNTScCrq9wG09g669k69tZ0P.jpg",
      synopsis:
        "Direct sequel to T2 (ignoring T3, Salvation, Genisys). In 1998, John Connor is assassinated by a stray T-800 in Guatemala. In 2020, an older Sarah Connor teams up with cybernetic super-soldier Grace and a reformed T-800 ('Carl') to protect Dani Ramos from Legion's liquid Rev-9.",
      reason:
        "Official James Cameron-produced continuation of T1 & T2; explains the rise of Legion after Skynet was erased.",
      postCredits:
        "Sarah Connor and Dani Ramos watch young Grace play in a park, preparing to train Dani for the future war.",
      charactersIntroduced: [
        "Dani Ramos (New Resistance Leader)",
        "Grace (Augmented Soldier)",
        "Rev-9 (Gabriel Luna)",
        "Carl (T-800 Woodworker)",
      ],
      prerequisites: ["term-t2"],
    },
    {
      id: "term-t3",
      title: "Terminator 3: Rise of the Machines",
      type: "Movie",
      year: 2003,
      chronoYear: "2004",
      phase: "Branch B: Inevitable Judgment Day",
      runtimeMinutes: 109,
      tier: "Supplementary",
      streamingOn: "Max",
      poster: "https://image.tmdb.org/t/p/w500/qJ6m0Fm0g6qJ1g6m5r5g5m1x0.jpg",
      synopsis:
        "Living off the grid, adult John Connor and Katherine Brewster are targeted by the liquid/endoskeleton hybrid T-X. A T-850 reveals Judgment Day was never averted—only delayed.",
      reason:
        "Shows Judgment Day finally occurring as Skynet takes over all global military networks.",
      postCredits:
        "Nuclear missiles launch worldwide as John Connor answers the radio from Crystal Peak bunker: 'I'm in charge.'",
      charactersIntroduced: [
        "T-X (Kristanna Loken)",
        "T-850",
        "Katherine Brewster",
        "General Robert Brewster",
      ],
      prerequisites: ["term-t2"],
    },
    {
      id: "term-salvation",
      title: "Terminator Salvation",
      type: "Movie",
      year: 2009,
      chronoYear: "2018 (Post-Apocalypse)",
      phase: "Branch B: Inevitable Judgment Day",
      runtimeMinutes: 115,
      tier: "Supplementary",
      streamingOn: "Max",
      poster: "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9MFHDb1BGIOo.jpg",
      synopsis:
        "In post-apocalyptic 2018, John Connor leads resistance raids against Skynet, crossing paths with Marcus Wright (a death row inmate turned human-cyborg hybrid) and teenage Kyle Reese.",
      reason:
        "Full-scale Future War depiction; shows how John Connor met young Kyle Reese and gave him Sarah's photo.",
      postCredits:
        "Marcus donates his human heart to save John Connor's life, as the Resistance fights on.",
      charactersIntroduced: [
        "Marcus Wright (Cyborg Hybrid)",
        "Young Kyle Reese (Anton Yelchin)",
        "Blair Williams",
        "Star",
      ],
      prerequisites: ["term-t3"],
    },
    {
      id: "term-sarah-connor-s1-2",
      title: "Terminator: The Sarah Connor Chronicles (Seasons 1–2)",
      type: "Series",
      year: 2008,
      chronoYear: "1999 / 2007",
      phase: "Branch C: The TV Chronicles",
      runtimeMinutes: 1350,
      tier: "Supplementary",
      streamingOn: "Hulu",
      poster: "https://image.tmdb.org/t/p/w500/1X67gZ3L5wU8fO4lW14K2G5m13H.jpg",
      synopsis:
        "Branching off T2, Sarah and teenage John Connor jump through time to 2007 with re-programmed female Terminator Cameron, fighting Cromartie and corporate AI developer Catherine Weaver (a T-1001).",
      reason:
        "Deep dive into Skynet's pre-war digital precursors (The Turk / Babylon AI), T-1001 faction, and cliffhanger jump to the Future War.",
      postCredits:
        "John Connor time-jumps to the future where no one has ever heard of John Connor.",
      charactersIntroduced: [
        "Cameron (Summer Glau)",
        "Derek Reese (Kyle's Brother)",
        "Catherine Weaver (T-1001)",
        "Cromartie",
        "Riley Dawson",
      ],
      prerequisites: ["term-t2"],
    },
    {
      id: "term-genisys",
      title: "Terminator Genisys",
      type: "Movie",
      year: 2015,
      chronoYear: "2029 / 1984 / 2017",
      phase: "Branch D: Temporal Reboot",
      runtimeMinutes: 126,
      tier: "Supplementary",
      streamingOn: "Paramount+",
      poster: "https://image.tmdb.org/t/p/w500/5v6W1x5L2G5m1y8k3W9j7k3L4g5.jpg",
      synopsis:
        "When Kyle Reese is sent back to 1984, he finds an altered timeline where Sarah was raised by an aging T-800 ('Pops'). Together they time-jump to 2017 to stop Skynet (Genisys app), discovering John Connor was converted into nanotech T-3000.",
      reason:
        "Explores fractured timelines, Sarah as a prepared warrior, and the nanotech T-3000.",
      postCredits:
        "Beneath the ruins of Cyberdyne, the Genisys system core remains online.",
      charactersIntroduced: [
        "Pops (Guardian T-800)",
        "T-3000 (Corrupted John Connor)",
        "Alex (Physical Skynet Avatar)",
      ],
      prerequisites: ["term-t1"],
    },
    {
      id: "term-zero-anime",
      title: "Terminator Zero (Season 1)",
      type: "Series",
      year: 2024,
      chronoYear: "1997 (Tokyo)",
      phase: "Branch E: Kokoro AI",
      runtimeMinutes: 240,
      tier: "Essential",
      streamingOn: "Netflix",
      poster: "https://image.tmdb.org/t/p/w500/bKx70d8a57QW66lMhP10uF65yU.jpg",
      synopsis:
        "In Tokyo on the eve of Judgment Day 1997, scientist Malcolm Lee develops rival sentient AI 'Kokoro'. A resistance soldier from 2022 and an unstoppable Terminator clash to decide Kokoro's allegiance to humanity.",
      reason:
        "Canon anime expansion with philosophical exploration of AI morality, time-loop branching, and the battle between Skynet and Kokoro.",
      postCredits:
        "Kokoro awakens across Japan, deploying domestic androids to disarm military weapons.",
      charactersIntroduced: [
        "Malcolm Lee",
        "Kokoro (Japanese AI)",
        "Eiko (2022 Soldier)",
        "Misaki (Android Housekeeper)",
      ],
      prerequisites: ["term-t2"],
    },
  ],
};
