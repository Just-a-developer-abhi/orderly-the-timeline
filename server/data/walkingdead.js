export const WALKINGDEAD_DATA = {
  id: "walkingdead",
  name: "The Walking Dead Universe",
  tagline:
    "The Complete Apocalypse, Rick Grimes Saga, Commonwealth & Global Spin-Offs",
  icon: "Skull",
  themeColor: "amber",
  presetTargets: [
    {
      id: "twd-the-ones-who-live",
      title: "The Ones Who Live (Rick & Michonne Finale)",
      year: 2024,
      type: "Series",
    },
    {
      id: "twd-daryl-dixon-s2",
      title: "Daryl Dixon (Season 2: The Book of Carol)",
      year: 2024,
      type: "Series",
    },
    {
      id: "twd-dead-city-s2",
      title: "Dead City (Season 2: Manhattan)",
      year: 2025,
      type: "Series",
    },
    {
      id: "twd-s11-finale",
      title: "The Walking Dead (Series Finale: Rest in Peace)",
      year: 2022,
      type: "Series",
    },
    {
      id: "twd-s9-rick-departure",
      title: "The Walking Dead (Season 9: Rick's Bridge Sacrifice)",
      year: 2018,
      type: "Series",
    },
  ],
  nodes: [
    {
      id: "twd-fear-s1-3",
      title: "Fear the Walking Dead (Seasons 1–3: The Outbreak & Dam)",
      type: "Series",
      year: 2015,
      chronoYear: "Day 0 - Month 2",
      phase: "The Initial Outbreak",
      runtimeMinutes: 1320,
      tier: "Supplementary",
      streamingOn: "AMC+",
      poster: "https://image.tmdb.org/t/p/w500/eTN9iApmgL2L9y0oZk8W7q6k.jpg",
      synopsis:
        "High school counselor Madison Clark and her blended family witness the rapid collapse of Los Angeles as the dead reanimate, fleeing south toward Mexico.",
      reason:
        "Shows the earliest days of societal collapse (Day 0 to Month 2) before Rick Grimes awakens in Atlanta.",
      postCredits:
        "The Gonzales Dam is detonated, scattering the Clark family across the border.",
      charactersIntroduced: [
        "Madison Clark",
        "Nick Clark",
        "Alicia Clark",
        "Victor Strand",
        "Daniel Salazar",
      ],
      prerequisites: [],
    },
    {
      id: "twd-s1-4",
      title: "The Walking Dead (Seasons 1–4: Atlanta & The Prison)",
      type: "Series",
      year: 2010,
      chronoYear: "Month 2 - Year 2",
      phase: "Survival Genesis",
      runtimeMinutes: 2250,
      tier: "Essential",
      streamingOn: "Netflix",
      poster: "https://image.tmdb.org/t/p/w500/n7PVu0hSz2sAsVekSSz4kW9nA.jpg",
      synopsis:
        "Sheriff's Deputy Rick Grimes awakens from a coma to find the world overrun by flesh-eating walkers, leading a band of survivors from Atlanta to Hershel's Farm and the West Georgia Prison.",
      reason:
        "The bedrock origin of the apocalypse; introduces Rick, Shane, Lori, Carl, Glenn, Daryl Dixon, Carol, Michonne, and The Governor.",
      postCredits:
        "The Prison falls to the Governor's tank assault; the scattered group heads toward Terminus.",
      charactersIntroduced: [
        "Rick Grimes",
        "Daryl Dixon",
        "Glenn Rhee",
        "Carol Peletier",
        "Michonne",
        "Maggie Greene",
        "Carl Grimes",
        "The Governor (Philip Blake)",
      ],
      prerequisites: [],
    },
    {
      id: "twd-s5-6",
      title: "The Walking Dead (Seasons 5–6: Terminus & Alexandria)",
      type: "Series",
      year: 2014,
      chronoYear: "Year 2",
      phase: "Community Building",
      runtimeMinutes: 1440,
      tier: "Essential",
      streamingOn: "Netflix",
      poster: "https://image.tmdb.org/t/p/w500/n7PVu0hSz2sAsVekSSz4kW9nA.jpg",
      synopsis:
        "Escaping the cannibals of Terminus, Rick's hardened family is brought to the walled utopia of Alexandria by Aaron, clashing with the ruthless Wolves and Saviors.",
      reason:
        "Transformation of the group into lethal survivors; introduces Alexandria Safe-Zone, Jesus, and sets up Negan's brutal arrival.",
      postCredits:
        "Negan traps Rick's entire group in the woods with Lucille: 'Eeny, meeny, miny, moe.'",
      charactersIntroduced: [
        "Aaron",
        "Deanna Monroe",
        "Paul 'Jesus' Rovia",
        "Father Gabriel Stokes",
        "Enid",
      ],
      prerequisites: ["twd-s1-4"],
    },
    {
      id: "twd-s7-8",
      title: "The Walking Dead (Seasons 7–8: All Out War with Negan)",
      type: "Series",
      year: 2016,
      chronoYear: "Year 2 - Year 3",
      phase: "All Out War",
      runtimeMinutes: 1440,
      tier: "Essential",
      streamingOn: "Netflix",
      poster: "https://image.tmdb.org/t/p/w500/n7PVu0hSz2sAsVekSSz4kW9nA.jpg",
      synopsis:
        "Crushed by Negan's brutal execution of Glenn and Abraham, Rick unites Alexandria, the Hilltop, and the Kingdom in an all-out military war against the Saviors.",
      reason:
        "Iconic confrontation between Rick Grimes and Negan; death of Carl Grimes; Rick chooses mercy over vengeance by imprisoning Negan.",
      postCredits:
        "Rick sits under the stained-glass tree: 'My mercy prevails over my wrath.'",
      charactersIntroduced: [
        "Negan Smith",
        "King Ezekiel & Shiva",
        "Dwight",
        "Simon",
        "Jadis / Anne (Scavengers)",
      ],
      prerequisites: ["twd-s5-6"],
    },
    {
      id: "twd-s9-rick-departure",
      title: "The Walking Dead (Season 9A: Rick's Bridge Sacrifice)",
      type: "Series",
      year: 2018,
      chronoYear: "Year 3.5",
      phase: "The Bridge & CRM Abduction",
      runtimeMinutes: 225,
      tier: "Essential",
      streamingOn: "Netflix",
      poster: "https://image.tmdb.org/t/p/w500/n7PVu0hSz2sAsVekSSz4kW9nA.jpg",
      synopsis:
        "While building a bridge to unify the communities, a mortally wounded Rick Grimes blows up the bridge to save his family, and is secretly rescued by Jadis via CRM helicopter.",
      reason:
        "Direct inciting event for 'The Ones Who Live'; Rick's departure from the main series; introduction of the mysterious Civic Republic Military (CRM).",
      postCredits:
        "Jadis radios the CRM helicopter: 'I have a 'B'. Not an 'A'. He's hurt, but he's strong.' Rick is flown away.",
      charactersIntroduced: [
        "Civic Republic Military (CRM Helicopter Pilots)",
        "Judith Grimes (Age 10)",
      ],
      prerequisites: ["twd-s7-8"],
    },
    {
      id: "twd-s9-10-whisperers",
      title: "The Walking Dead (Seasons 9B–10: The Whisperer War)",
      type: "Series",
      year: 2019,
      chronoYear: "Year 10",
      phase: "The Whisperer War",
      runtimeMinutes: 1620,
      tier: "Essential",
      streamingOn: "Netflix",
      poster: "https://image.tmdb.org/t/p/w500/n7PVu0hSz2sAsVekSSz4kW9nA.jpg",
      synopsis:
        "Following a six-year timeskip, the communities face Alpha and Beta's terrifying Whisperers, who wear dried walker skins and control massive herds.",
      reason:
        "Pike boundary massacre; Negan infiltrates and decapitates Alpha; Michonne discovers Rick's boots on Bloodsworth Island and leaves to find him.",
      postCredits:
        "Michonne helps two stragglers catch up to a massive migrating human caravan heading north.",
      charactersIntroduced: [
        "Alpha",
        "Beta",
        "Lydia",
        "Princess (Juanita Sanchez)",
        "Connie & Kelly",
      ],
      prerequisites: ["twd-s9-rick-departure"],
    },
    {
      id: "twd-world-beyond",
      title: "The Walking Dead: World Beyond (Seasons 1–2)",
      type: "Series",
      year: 2020,
      chronoYear: "Year 10",
      phase: "Civic Republic Secrets",
      runtimeMinutes: 880,
      tier: "Supplementary",
      streamingOn: "AMC+",
      poster: "https://image.tmdb.org/t/p/w500/4KAATuzRtk8bC1VAkLqSVs9k0nC.jpg",
      synopsis:
        "Four teenagers raised behind the walls of the Nebraska Campus Colony venture into the wasteland, uncovering the genocidal experiments of the CRM.",
      reason:
        "Explains CRM hierarchy, Project Vytal chlorine gas genocide, and post-credits reveals French lab origin of the walker virus and fast runner variants.",
      postCredits:
        "In a French biomedical lab, a scientist is shot, reanimates in seconds as an aggressive fast-sprinting variant walker.",
      charactersIntroduced: [
        "Major General Beale",
        "Lt. Col. Elizabeth Kublek",
        "Iris & Hope Bennett",
        "Silas",
        "Jadis (Warrant Officer Stokes)",
      ],
      prerequisites: ["twd-s9-rick-departure"],
    },
    {
      id: "twd-s11-finale",
      title: "The Walking Dead (Season 11: The Commonwealth Finale)",
      type: "Series",
      year: 2021,
      chronoYear: "Year 12",
      phase: "Commonwealth Finale",
      runtimeMinutes: 1080,
      tier: "Essential",
      streamingOn: "Netflix",
      poster: "https://image.tmdb.org/t/p/w500/n7PVu0hSz2sAsVekSSz4kW9nA.jpg",
      synopsis:
        "The survivors encounter the 50,000-strong Commonwealth governed by Pamela Milton, sparking a revolution for equality while Rosita makes the ultimate sacrifice.",
      reason:
        "Series finale of the 177-episode flagship show; sets up Daryl traveling to Europe, Negan & Maggie going to Manhattan, and Rick/Michonne search.",
      postCredits:
        "Rick Grimes writes a message in a bottle on the muddy banks of the CRM facility; Michonne rides on horseback.",
      charactersIntroduced: [
        "Governor Pamela Milton",
        "Lance Hornsby",
        "Mercer (Commonwealth General)",
        "Maxxine Mercer",
      ],
      prerequisites: ["twd-s9-10-whisperers"],
    },
    {
      id: "twd-the-ones-who-live",
      title: "The Walking Dead: The Ones Who Live",
      type: "Series",
      year: 2024,
      chronoYear: "Year 12",
      phase: "CRM Climax & Rick Reunion",
      runtimeMinutes: 300,
      tier: "Essential",
      streamingOn: "AMC+",
      poster: "https://image.tmdb.org/t/p/w500/n7PVu0hSz2sAsVekSSz4kW9nA.jpg",
      synopsis:
        "Kept in military servitude by the CRM in Philadelphia, Rick Grimes attempts escape repeatedly until Michonne tracks him down, uniting to dismantle General Beale's army.",
      reason:
        "Climax of Rick and Michonne's entire arc; destruction of the CRM military command; Rick and Michonne return home to reunite with Judith and RJ.",
      postCredits:
        "Rick and Michonne land a helicopter in Alexandria and embrace Judith and RJ in tears.",
      charactersIntroduced: [
        "Major General Beale (Terry O'Quinn)",
        "Pearl Thorne",
        "Nat",
        "Okafor",
        "RJ Grimes",
      ],
      prerequisites: [
        "twd-s9-rick-departure",
        "twd-world-beyond",
        "twd-s11-finale",
      ],
    },
    {
      id: "twd-daryl-dixon-s1-2",
      title: "The Walking Dead: Daryl Dixon (Seasons 1–2)",
      type: "Series",
      year: 2023,
      chronoYear: "Year 12.5",
      phase: "European Continental Expansion",
      runtimeMinutes: 600,
      tier: "Essential",
      streamingOn: "AMC+",
      poster: "https://image.tmdb.org/t/p/w500/n7PVu0hSz2sAsVekSSz4kW9nA.jpg",
      synopsis:
        "Daryl Dixon washes ashore in France, navigating a fractured country while protecting young Laurent (believed to be immune) before Carol crosses the Atlantic to find him.",
      reason:
        "Explores the apocalypse in Europe; showcases acidic/burner walkers and super-strong variant walkers developed by Madame Genet; Carol and Daryl reunion.",
      postCredits:
        "Daryl and Carol enter the Channel Tunnel preparing for their journey to England and Spain.",
      charactersIntroduced: [
        "Isabelle Carriere",
        "Laurent",
        "Madame Genet (Pouvoir)",
        "Stéphane Codron",
        "Ash (Airplane Pilot)",
      ],
      prerequisites: ["twd-s11-finale"],
    },
    {
      id: "twd-dead-city-s1-2",
      title: "The Walking Dead: Dead City (Seasons 1–2)",
      type: "Series",
      year: 2023,
      chronoYear: "Year 14",
      phase: "Manhattan Island Dominion",
      runtimeMinutes: 600,
      tier: "Supplementary",
      streamingOn: "AMC+",
      poster: "https://image.tmdb.org/t/p/w500/n7PVu0hSz2sAsVekSSz4kW9nA.jpg",
      synopsis:
        "Years after the Commonwealth, Maggie seeks out Negan to help rescue her kidnapped son Hershel from 'The Croat' in post-apocalyptic, isolated Manhattan.",
      reason:
        "Explores Manhattan cut off from mainland using zip lines and methane gas from decomposing walkers; Negan is coerced into leading Manhattan under The Dama.",
      postCredits:
        "The Dama hands Negan the key to unifying Manhattan's factions under his brutal rule.",
      charactersIntroduced: [
        "The Croat (Zeljko Ivanek)",
        "The Dama (Lisa Emery)",
        "Perlie Armstrong (New Babylon Marshal)",
        "Hershel Rhee (Teen)",
      ],
      prerequisites: ["twd-s11-finale"],
    },
  ],
};
