export const MCU_DATA = {
  "id": "mcu",
  "name": "Marvel Cinematic Universe",
  "tagline": "The Complete Sacred Timeline, Defenders Saga, Marvel Television, X-Men & Multiverse",
  "icon": "Shield",
  "themeColor": "red",
  "presetTargets": [
    {
      "id": "mcu-doomsday",
      "title": "Avengers: Doomsday",
      "year": 2026,
      "type": "Movie"
    },
    {
      "id": "mcu-daredevil-born-again",
      "title": "Daredevil: Born Again",
      "year": 2025,
      "type": "Series"
    },
    {
      "id": "mcu-secret-wars",
      "title": "Avengers: Secret Wars",
      "year": 2027,
      "type": "Movie"
    },
    {
      "id": "mcu-fantastic-four",
      "title": "The Fantastic Four: First Steps",
      "year": 2025,
      "type": "Movie"
    },
    {
      "id": "mcu-deadpool-wolverine",
      "title": "Deadpool & Wolverine",
      "year": 2024,
      "type": "Movie"
    },
    {
      "id": "mcu-captain-america-bnw",
      "title": "Captain America: Brave New World",
      "year": 2025,
      "type": "Movie"
    },
    {
      "id": "mcu-thunderbolts",
      "title": "Thunderbolts*",
      "year": 2025,
      "type": "Movie"
    },
    {
      "id": "mcu-spiderman-nwh",
      "title": "Spider-Man: No Way Home",
      "year": 2021,
      "type": "Movie"
    },
    {
      "id": "mcu-endgame",
      "title": "Avengers: Endgame",
      "year": 2019,
      "type": "Movie"
    },
    {
      "id": "fox-xmen97",
      "title": "X-Men '97 (Season 1)",
      "year": 2024,
      "type": "Series"
    }
  ],
  "nodes": [
    {
      "id": "fox-xmen-2000",
      "title": "X-Men",
      "type": "Movie",
      "year": 2000,
      "chronoYear": "2000 (Earth-10005)",
      "phase": "X-Men Legacy",
      "runtimeMinutes": 104,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/x-men/1770000854",
      "poster": "https://image.tmdb.org/t/p/w500/bRDAc4GogS9GtUd0pLg3e6900iU.jpg",
      "synopsis": "Wolverine and Rogue join Professor Charles Xavier's school for mutants, while Magneto plots to mutate world leaders.",
      "reason": "Foundational live-action debut of Hugh Jackman's Wolverine, Patrick Stewart's Professor X, and Ian McKellen's Magneto.",
      "postCredits": "Xavier visits Magneto in his plastic prison cell; Magneto warns of the coming war.",
      "charactersIntroduced": [
        "Logan (Wolverine)",
        "Professor Charles Xavier",
        "Erik Lehnsherr (Magneto)",
        "Jean Grey",
        "Cyclops",
        "Storm",
        "Rogue"
      ],
      "prerequisites": []
    },
    {
      "id": "fox-x2",
      "title": "X2: X-Men United",
      "type": "Movie",
      "year": 2003,
      "chronoYear": "2003 (Earth-10005)",
      "phase": "X-Men Legacy",
      "runtimeMinutes": 134,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/x2/1770000855",
      "poster": "https://image.tmdb.org/t/p/w500/gAOkR9c4887Gf52k9L5fF5b5m5A.jpg",
      "synopsis": "The X-Men band together with Magneto to stop military scientist William Stryker from eradicating all mutants.",
      "reason": "Weapon X origin at Alkali Lake; Nightcrawler debut; Jean Grey's sacrificial death.",
      "postCredits": "A glowing Phoenix silhouette emerges beneath the waters of Alkali Lake.",
      "charactersIntroduced": [
        "Kurt Wagner (Nightcrawler)",
        "William Stryker",
        "Lady Deathstrike"
      ],
      "prerequisites": [
        "fox-xmen-2000"
      ]
    },
    {
      "id": "mcu-ironman",
      "title": "Iron Man",
      "type": "Movie",
      "year": 2008,
      "chronoYear": "2010",
      "phase": "Phase 1",
      "runtimeMinutes": 126,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/iron-man/1660000038",
      "poster": "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
      "synopsis": "Billionaire industrialist Tony Stark is captured in Afghanistan and builds a high-tech suit of armor to escape, becoming the armored hero Iron Man.",
      "reason": "Origin of Tony Stark, the foundational bedrock of the MCU, and the debut of the Avengers Initiative.",
      "postCredits": "Nick Fury steps out of the shadows: 'Mr. Stark, you've become part of a bigger universe.'",
      "charactersIntroduced": [
        "Tony Stark",
        "Pepper Potts",
        "James Rhodes",
        "Nick Fury",
        "J.A.R.V.I.S."
      ],
      "prerequisites": []
    },
    {
      "id": "mcu-hulk",
      "title": "The Incredible Hulk",
      "type": "Movie",
      "year": 2008,
      "chronoYear": "2011",
      "phase": "Phase 1",
      "runtimeMinutes": 112,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/the-incredible-hulk/1260086820",
      "poster": "https://image.tmdb.org/t/p/w500/gKzYx79y0AQTL4UAiY0Z7ukxbgd.jpg",
      "synopsis": "Scientist Bruce Banner scours the planet for an antidote to the gamma radiation that turns him into the rampaging green monster known as the Hulk.",
      "reason": "Introduces Bruce Banner, General Thaddeus 'Thunderbolt' Ross, Abomination (Emil Blonsky), and Samuel Sterns (The Leader).",
      "postCredits": "Tony Stark approaches General Ross in a bar: 'We're putting a team together.'",
      "charactersIntroduced": [
        "Bruce Banner",
        "Thaddeus Ross",
        "Betty Ross",
        "Abomination",
        "Samuel Sterns (Leader)"
      ],
      "prerequisites": [
        "mcu-ironman"
      ]
    },
    {
      "id": "mcu-ironman2",
      "title": "Iron Man 2",
      "type": "Movie",
      "year": 2010,
      "chronoYear": "2011",
      "phase": "Phase 1",
      "runtimeMinutes": 124,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/iron-man-2/1660000039",
      "poster": "https://image.tmdb.org/t/p/w500/6WBeq4jjq0esap75qWo6rMi0qko.jpg",
      "synopsis": "With the world now aware of his identity, Tony Stark must contend with declining health from his palladium core, government pressure, and vengeful rogue scientist Ivan Vanko.",
      "reason": "First appearance of Natasha Romanoff (Black Widow), James Rhodes suiting up as War Machine, and Howard Stark's legacy clues.",
      "postCredits": "Agent Phil Coulson arrives in New Mexico and finds Mjolnir in a crater.",
      "charactersIntroduced": [
        "Natasha Romanoff (Black Widow)",
        "Justin Hammer",
        "Ivan Vanko (Whiplash)",
        "Howard Stark (Recordings)"
      ],
      "prerequisites": [
        "mcu-ironman"
      ]
    },
    {
      "id": "mcu-cap1",
      "title": "Captain America: The First Avenger",
      "type": "Movie",
      "year": 2011,
      "chronoYear": "1942",
      "phase": "Phase 1",
      "runtimeMinutes": 124,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/captain-america-the-first-avenger/1660000034",
      "poster": "https://image.tmdb.org/t/p/w500/vSNxAJTl00cuun09ZkWbg99umGQ.jpg",
      "synopsis": "Steve Rogers volunteers for a top-secret super-soldier program during WWII, taking the fight to Red Skull and the sinister HYDRA faction.",
      "reason": "Origin of Steve Rogers, Bucky Barnes, the Tesseract (Space Stone), and the genesis of HYDRA and S.H.I.E.L.D.",
      "postCredits": "Steve wakes up in modern Times Square; Nick Fury recruits him for a mission.",
      "charactersIntroduced": [
        "Steve Rogers",
        "Bucky Barnes",
        "Peggy Carter",
        "Red Skull (Johann Schmidt)",
        "Arnim Zola",
        "Howard Stark"
      ],
      "prerequisites": []
    },
    {
      "id": "mcu-thor1",
      "title": "Thor",
      "type": "Movie",
      "year": 2011,
      "chronoYear": "2011",
      "phase": "Phase 1",
      "runtimeMinutes": 115,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/thor/1660000044",
      "poster": "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qx.jpg",
      "synopsis": "The arrogant god of thunder Thor is cast out of Asgard to Earth without his powers, learning humility while Loki plots in the shadows.",
      "reason": "Introduces Asgard, Thor, Loki, Odin, Clint Barton (Hawkeye cameo), and the Bifrost.",
      "postCredits": "Dr. Erik Selvig is recruited to study the Tesseract with Loki invisibly influencing him.",
      "charactersIntroduced": [
        "Thor Odinson",
        "Loki",
        "Odin",
        "Jane Foster",
        "Clint Barton (Hawkeye)",
        "Heimdall",
        "Erik Selvig"
      ],
      "prerequisites": [
        "mcu-ironman2"
      ]
    },
    {
      "id": "fox-xmen-first-class",
      "title": "X-Men: First Class",
      "type": "Movie",
      "year": 2011,
      "chronoYear": "1962 (Earth-10005)",
      "phase": "X-Men Legacy",
      "runtimeMinutes": 132,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/x-men-first-class/1770000858",
      "poster": "https://image.tmdb.org/t/p/w500/vU0x0W3k9sF7W8yF8b1L4k3j5.jpg",
      "synopsis": "In 1962 during the Cuban Missile Crisis, young Charles Xavier and Erik Lehnsherr unite mutant recruits to stop Sebastian Shaw from triggering WWIII.",
      "reason": "Origin of Xavier and Magneto's friendship, Beast's transformation, Cerebro, and the crippling of Xavier.",
      "postCredits": "Magneto breaks Emma Frost out of CIA custody, founding the Brotherhood of Mutants.",
      "charactersIntroduced": [
        "Young Charles Xavier (James McAvoy)",
        "Young Erik Lehnsherr (Michael Fassbender)",
        "Mystique (Jennifer Lawrence)",
        "Hank McCoy (Beast)",
        "Sebastian Shaw"
      ],
      "prerequisites": []
    },
    {
      "id": "mcu-avengers1",
      "title": "The Avengers",
      "type": "Movie",
      "year": 2012,
      "chronoYear": "2012",
      "phase": "Phase 1",
      "runtimeMinutes": 143,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/marvels-the-avengers/1660000015",
      "poster": "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      "synopsis": "Earth's mightiest heroes assemble to stop Thor's adoptive brother Loki and his Chitauri alien army from subjugating humanity.",
      "reason": "Culmination of Phase 1; original 6 Avengers, Battle of New York, Loki's Scepter (Mind Stone), and Thanos.",
      "postCredits": "The Other warns Thanos that challenging Earth is to 'court death'; Thanos turns and smirks.",
      "charactersIntroduced": [
        "Thanos",
        "Maria Hill",
        "Mark Ruffalo Bruce Banner"
      ],
      "prerequisites": [
        "mcu-ironman",
        "mcu-ironman2",
        "mcu-thor1",
        "mcu-cap1"
      ]
    },
    {
      "id": "mcu-ironman3",
      "title": "Iron Man 3",
      "type": "Movie",
      "year": 2013,
      "chronoYear": "2012",
      "phase": "Phase 2",
      "runtimeMinutes": 130,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/iron-man-3/1660000040",
      "poster": "https://image.tmdb.org/t/p/w500/7HQ6Z6mN2hJ8K3x9Gv6Z5sNq8Z6.jpg",
      "synopsis": "Suffering from severe PTSD after the Battle of New York, Tony Stark faces the enigmatic Mandarin and the dangerous bio-weapon Extremis.",
      "reason": "Tony's psychological trauma from the cosmic wormhole, destruction of his armors, and debut of Aldrich Killian / AIM.",
      "postCredits": "Tony finishes telling his entire story to a sleeping Bruce Banner.",
      "charactersIntroduced": [
        "Aldrich Killian",
        "Harley Keener",
        "Trevor Slattery"
      ],
      "prerequisites": [
        "mcu-avengers1"
      ]
    },
    {
      "id": "mcu-thor2",
      "title": "Thor: The Dark World",
      "type": "Movie",
      "year": 2013,
      "chronoYear": "2013",
      "phase": "Phase 2",
      "runtimeMinutes": 112,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/thor-the-dark-world/1660000045",
      "poster": "https://image.tmdb.org/t/p/w500/wp6Ox97g11uY32o7mOqjK1oWJ8M.jpg",
      "synopsis": "Thor reunites with Jane Foster as ancient Dark Elf Malekith seeks to plunge the Nine Realms into eternal darkness using the fluid Aether.",
      "reason": "Introduces the Reality Stone (Aether) and The Collector; key setting for Avengers: Endgame Time Heist.",
      "postCredits": "Volstagg and Sif deliver the Reality Stone to The Collector: 'One down, five to go.'",
      "charactersIntroduced": [
        "Malekith",
        "The Collector (Taneleer Tivan)"
      ],
      "prerequisites": [
        "mcu-thor1",
        "mcu-avengers1"
      ]
    },
    {
      "id": "mcu-shield-s1",
      "title": "Agents of S.H.I.E.L.D. (Season 1: HYDRA Uprising)",
      "type": "Series",
      "year": 2013,
      "chronoYear": "2013",
      "phase": "Marvel Television",
      "runtimeMinutes": 924,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/agents-of-shield/1260005392",
      "poster": "https://image.tmdb.org/t/p/w500/gsqv6gR3A31vW3k04uK9f7K3g8M.jpg",
      "synopsis": "Agent Phil Coulson leads an elite team of agents investigating superhuman anomalies, until HYDRA's uprising inside S.H.I.E.L.D. shatters their world.",
      "reason": "Direct crossover with The Winter Soldier; reveals Project T.A.H.I.T.I., Kree blood regeneration, and origin of Daisy Johnson (Quake).",
      "postCredits": "Nick Fury passes the Director's toolbox to Coulson to rebuild S.H.I.E.L.D. in secret.",
      "charactersIntroduced": [
        "Daisy Johnson (Quake / Skye)",
        "Melinda May",
        "Leo Fitz",
        "Jemma Simmons",
        "Grant Ward"
      ],
      "prerequisites": [
        "mcu-avengers1",
        "mcu-winter-soldier"
      ]
    },
    {
      "id": "mcu-winter-soldier",
      "title": "Captain America: The Winter Soldier",
      "type": "Movie",
      "year": 2014,
      "chronoYear": "2014",
      "phase": "Phase 2",
      "runtimeMinutes": 136,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/captain-america-the-winter-soldier/1660000035",
      "poster": "https://image.tmdb.org/t/p/w500/5v6w6V0f7GfG3e9C3x7D8Wq9K7.jpg",
      "synopsis": "Steve Rogers teams up with Black Widow and Falcon to expose a deep conspiracy within S.H.I.E.L.D. orchestrated by the deadly Winter Soldier.",
      "reason": "Fall of S.H.I.E.L.D., revelation of HYDRA's secret survival, Bucky's brainwashing, and debut of Sam Wilson (Falcon).",
      "postCredits": "Baron Strucker inspects the Scepter and tests the 'miracles': Pietro and Wanda Maximoff.",
      "charactersIntroduced": [
        "Sam Wilson (Falcon)",
        "Alexander Pierce",
        "Brock Rumlow (Crossbones)",
        "Sharon Carter (Agent 13)",
        "Wanda & Pietro Maximoff (Tease)"
      ],
      "prerequisites": [
        "mcu-cap1",
        "mcu-avengers1"
      ]
    },
    {
      "id": "mcu-guardians1",
      "title": "Guardians of the Galaxy",
      "type": "Movie",
      "year": 2014,
      "chronoYear": "2014",
      "phase": "Phase 2",
      "runtimeMinutes": 121,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/guardians-of-the-galaxy/1660000036",
      "poster": "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
      "synopsis": "A group of intergalactic criminals are forced to work together to stop fanatical warlord Ronan the Accuser from destroying the planet Xandar.",
      "reason": "Introduces Peter Quill, Gamora, Rocket, Groot, Drax, the Power Stone (Orb), and full Thanos scene.",
      "postCredits": "The Collector drinks in his ruined museum while Howard the Duck sips a cocktail.",
      "charactersIntroduced": [
        "Peter Quill (Star-Lord)",
        "Gamora",
        "Rocket Raccoon",
        "Groot",
        "Drax the Destroyer",
        "Nebula",
        "Yondu Udonta",
        "Ronan the Accuser"
      ],
      "prerequisites": [
        "mcu-thor2"
      ]
    },
    {
      "id": "fox-days-of-future-past",
      "title": "X-Men: Days of Future Past",
      "type": "Movie",
      "year": 2014,
      "chronoYear": "2023 / 1973",
      "phase": "X-Men Legacy",
      "runtimeMinutes": 132,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/x-men-days-of-future-past/1770000860",
      "poster": "https://image.tmdb.org/t/p/w500/AJSvW5iWb8r0zCeqk6gqX76M96e.jpg",
      "synopsis": "In a dystopian Sentinel future, Wolverine's mind is sent back to 1973 to prevent Mystique from assassinating Bolivar Trask.",
      "reason": "Unites original cast with First Class cast; erases dark Sentinel future; introduces Quicksilver (Evan Peters); foundation for multiverse mutant mechanics.",
      "postCredits": "In ancient Egypt, En Sabah Nur (Apocalypse) telekinetically builds pyramids while Four Horsemen watch.",
      "charactersIntroduced": [
        "Peter Maximoff (Quicksilver - Evan Peters)",
        "Bolivar Trask",
        "Bishop",
        "Blink",
        "Warpath",
        "Sunspot"
      ],
      "prerequisites": [
        "fox-x2",
        "fox-xmen-first-class"
      ]
    },
    {
      "id": "mcu-agent-carter-s1",
      "title": "Agent Carter (Season 1)",
      "type": "Series",
      "year": 2015,
      "chronoYear": "1946",
      "phase": "Marvel Television",
      "runtimeMinutes": 340,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/agent-carter/1260005391",
      "poster": "https://image.tmdb.org/t/p/w500/1X67gZ3L5wU8fO4lW14K2G5m13H.jpg",
      "synopsis": "In 1946, Peggy Carter balances administrative work at the SSR while carrying out secret covert missions for Howard Stark with butler Edwin Jarvis.",
      "reason": "Foundational chapter of S.H.I.E.L.D. history; introduces Edwin Jarvis (who inspired Tony Stark's J.A.R.V.I.S.) and the Soviet Black Widow Leviathan program.",
      "postCredits": "Arnim Zola recruits Dr. Johann Fennhoff in prison to begin HYDRA infiltration of SSR.",
      "charactersIntroduced": [
        "Edwin Jarvis",
        "Daniel Sousa",
        "Dottie Underwood"
      ],
      "prerequisites": [
        "mcu-cap1"
      ]
    },
    {
      "id": "mcu-daredevil-s1",
      "title": "Daredevil (Season 1)",
      "type": "Series",
      "year": 2015,
      "chronoYear": "2014",
      "phase": "The Defenders Saga",
      "runtimeMinutes": 650,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/marvels-daredevil/1260086821",
      "poster": "https://image.tmdb.org/t/p/w500/QWbPaDxiB6LW2Ki47AcBZX8ye2.jpg",
      "synopsis": "Blinded as a boy, Matt Murdock fights crime by day as a lawyer and by night as the vigilante Daredevil in Hell's Kitchen, New York.",
      "reason": "Foundational chapter of street-level Marvel canon; introduces Matt Murdock, Foggy Nelson, Karen Page, Claire Temple, and Wilson Fisk (Kingpin).",
      "postCredits": "Wilson Fisk is locked away in federal prison, staring intently at the white wall.",
      "charactersIntroduced": [
        "Matt Murdock (Daredevil)",
        "Wilson Fisk (Kingpin)",
        "Foggy Nelson",
        "Karen Page",
        "Claire Temple",
        "Stick",
        "Madame Gao"
      ],
      "prerequisites": [
        "mcu-avengers1"
      ]
    },
    {
      "id": "mcu-jessica-jones-s1",
      "title": "Jessica Jones (Season 1)",
      "type": "Series",
      "year": 2015,
      "chronoYear": "2015",
      "phase": "The Defenders Saga",
      "runtimeMinutes": 650,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/marvels-jessica-jones/1260086822",
      "poster": "https://image.tmdb.org/t/p/w500/lwPFyhpJn5i87iGvW7f6L4k9sL2.jpg",
      "synopsis": "Haunted by a traumatic past, private investigator Jessica Jones uses her super strength to hunt down mind-controlling tormentor Kilgrave.",
      "reason": "Introduces Jessica Jones, Trish Walker, and the live-action debut of Luke Cage.",
      "postCredits": "Jessica snaps Kilgrave's neck, freeing herself and establishing Alias Investigations as a recognized agency.",
      "charactersIntroduced": [
        "Jessica Jones",
        "Kilgrave (Purple Man)",
        "Trish Walker (Hellcat)",
        "Luke Cage",
        "Jeri Hogarth"
      ],
      "prerequisites": [
        "mcu-daredevil-s1"
      ]
    },
    {
      "id": "mcu-age-of-ultron",
      "title": "Avengers: Age of Ultron",
      "type": "Movie",
      "year": 2015,
      "chronoYear": "2015",
      "phase": "Phase 2",
      "runtimeMinutes": 141,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/avengers-age-of-ultron/1660000014",
      "poster": "https://image.tmdb.org/t/p/w500/4ssDuvEDkS9ur1otk29tMoHIceR.jpg",
      "synopsis": "Tony Stark inadvertently creates Ultron, an artificial intelligence bent on human extinction, forcing the Avengers to reunite in a battle for Sokovia.",
      "reason": "Birth of Vision (Mind Stone), Wanda Maximoff, Sokovia fallout leading to Civil War, and Thanos donning the Infinity Gauntlet.",
      "postCredits": "Thanos retrieves the Infinity Gauntlet from his vault: 'Fine, I'll do it myself.'",
      "charactersIntroduced": [
        "Vision",
        "Wanda Maximoff (Scarlet Witch)",
        "Pietro Maximoff (Quicksilver)",
        "Ultron",
        "Ulysses Klaue",
        "Laura Barton"
      ],
      "prerequisites": [
        "mcu-winter-soldier",
        "mcu-guardians1"
      ]
    },
    {
      "id": "mcu-antman1",
      "title": "Ant-Man",
      "type": "Movie",
      "year": 2015,
      "chronoYear": "2015",
      "phase": "Phase 2",
      "runtimeMinutes": 117,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/ant-man/1660000030",
      "poster": "https://image.tmdb.org/t/p/w500/7Dsb5i7m5t90mC9P3V2m9C8B5G5.jpg",
      "synopsis": "Cat burglar Scott Lang is recruited by Dr. Hank Pym to don a shrinking suit and pull off a heist to prevent technology falling into HYDRA hands.",
      "reason": "Introduces Scott Lang, Hank Pym, Hope van Dyne, Pym Particles, and the Quantum Realm.",
      "postCredits": "Cap and Falcon hold Bucky in a vise: 'I know a guy.'",
      "charactersIntroduced": [
        "Scott Lang (Ant-Man)",
        "Hank Pym",
        "Hope van Dyne",
        "Luis",
        "Cassie Lang",
        "Yellowjacket (Darren Cross)"
      ],
      "prerequisites": [
        "mcu-age-of-ultron"
      ]
    },
    {
      "id": "mcu-agent-carter-s2",
      "title": "Agent Carter (Season 2)",
      "type": "Series",
      "year": 2016,
      "chronoYear": "1947",
      "phase": "Marvel Television",
      "runtimeMinutes": 420,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/agent-carter/1260005391",
      "poster": "https://image.tmdb.org/t/p/w500/1X67gZ3L5wU8fO4lW14K2G5m13H.jpg",
      "synopsis": "Peggy Carter travels to Los Angeles to investigate a murder involving the mysterious extraterrestrial anomaly known as Zero Matter (Darkforce).",
      "reason": "Introduces Zero Matter / Darkforce dimension mechanics (critical for Cloak & Dagger and Doctor Strange dark dimensions).",
      "postCredits": "Chief Daniel Sousa and Peggy kiss as Chief Jack Thompson is shot in his hotel room.",
      "charactersIntroduced": [
        "Whitney Frost (Madame Masque)",
        "Joseph Manfredi",
        "Jason Wilkes"
      ],
      "prerequisites": [
        "mcu-agent-carter-s1"
      ]
    },
    {
      "id": "mcu-daredevil-s2",
      "title": "Daredevil (Season 2)",
      "type": "Series",
      "year": 2016,
      "chronoYear": "2015",
      "phase": "The Defenders Saga",
      "runtimeMinutes": 700,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/marvels-daredevil/1260086821",
      "poster": "https://image.tmdb.org/t/p/w500/vE8K7oY15fJ6lW2qU9x8rB9w0v4.jpg",
      "synopsis": "Just when Matt Murdock thinks he's bringing peace to Hell's Kitchen, lethal vigilante Frank Castle (The Punisher) and former lover Elektra arrive.",
      "reason": "Debut of Jon Bernthal's Frank Castle (The Punisher), Elektra Natchios, and the ancient resurrection cult The Hand.",
      "postCredits": "The Hand places Elektra's corpse into an ancient sarcophagus to resurrect her as the Black Sky.",
      "charactersIntroduced": [
        "Frank Castle (The Punisher)",
        "Elektra Natchios",
        "Nobu Yoshioka"
      ],
      "prerequisites": [
        "mcu-daredevil-s1"
      ]
    },
    {
      "id": "mcu-luke-cage-s1",
      "title": "Luke Cage (Season 1)",
      "type": "Series",
      "year": 2016,
      "chronoYear": "2015",
      "phase": "The Defenders Saga",
      "runtimeMinutes": 650,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/marvels-luke-cage/1260086823",
      "poster": "https://image.tmdb.org/t/p/w500/3U9G6x8qN4yW8k1lW5f1Q2m9p6L.jpg",
      "synopsis": "After a sabotaged experiment leaves him with super strength and unbreakable skin, Luke Cage becomes a fugitive trying to rebuild his life in Harlem.",
      "reason": "Introduces Misty Knight, Cottonmouth, and Mariah Dillard; expands street-level Defenders lore.",
      "postCredits": "Luke is sent back to Seagate Prison while Claire Temple grabs a martial arts flyer for Colleen Wing's dojo.",
      "charactersIntroduced": [
        "Misty Knight",
        "Cornell 'Cottonmouth' Stokes",
        "Mariah Dillard",
        "Hernan 'Shades' Alvarez",
        "Diamondback"
      ],
      "prerequisites": [
        "mcu-jessica-jones-s1"
      ]
    },
    {
      "id": "mcu-civil-war",
      "title": "Captain America: Civil War",
      "type": "Movie",
      "year": 2016,
      "chronoYear": "2016",
      "phase": "Phase 3",
      "runtimeMinutes": 147,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/captain-america-civil-war/1660000033",
      "poster": "https://image.tmdb.org/t/p/w500/rAG1jGnwY7uA5f1wz9n9eW4y9r5.jpg",
      "synopsis": "Political pressure over collateral damage splinters the Avengers into opposing factions led by Captain America and Iron Man.",
      "reason": "Introduces T'Challa (Black Panther) and Peter Parker (Spider-Man) to the MCU; Avengers fracture leaving Earth undefended against Thanos.",
      "postCredits": "Steve brings Bucky to Wakanda; Peter tests his new Stark web-shooters displaying the Spider-Signal.",
      "charactersIntroduced": [
        "T'Challa (Black Panther)",
        "Peter Parker (Spider-Man)",
        "Helmut Zemo",
        "Everett K. Ross",
        "Aunt May"
      ],
      "prerequisites": [
        "mcu-winter-soldier",
        "mcu-age-of-ultron",
        "mcu-antman1"
      ]
    },
    {
      "id": "mcu-doctor-strange",
      "title": "Doctor Strange",
      "type": "Movie",
      "year": 2016,
      "chronoYear": "2016",
      "phase": "Phase 3",
      "runtimeMinutes": 115,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/doctor-strange/1660000037",
      "poster": "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9w1LNdqP4z.jpg",
      "synopsis": "Arrogant neurosurgeon Stephen Strange discovers the mystic arts and alternate dimensions at Kamar-Taj after a career-ending car crash.",
      "reason": "Introduces the Mystic Arts, Doctor Strange, Wong, the Time Stone (Eye of Agamotto), Dormammu, and the Multiverse.",
      "postCredits": "Mordo strips Jonathan Pangborn of magic: 'Too many sorcerers.'",
      "charactersIntroduced": [
        "Stephen Strange",
        "Wong",
        "Ancient One",
        "Baron Mordo",
        "Christine Palmer",
        "Dormammu"
      ],
      "prerequisites": [
        "mcu-civil-war"
      ]
    },
    {
      "id": "fox-deadpool1",
      "title": "Deadpool",
      "type": "Movie",
      "year": 2016,
      "chronoYear": "2016 (Earth-10005)",
      "phase": "X-Men Legacy",
      "runtimeMinutes": 108,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/deadpool/1770000861",
      "poster": "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I4uhm9jG8mGq.jpg",
      "synopsis": "Wisecracking mercenary Wade Wilson undergoes a rogue experimental treatment that leaves him with accelerated healing powers and a dark sense of humor.",
      "reason": "Ryan Reynolds' definitive Deadpool debut; introduces Colossus, Negasonic Teenage Warhead, and Blind Al.",
      "postCredits": "Deadpool in a bathrobe parodies Ferris Bueller, teasing Cable.",
      "charactersIntroduced": [
        "Wade Wilson (Deadpool)",
        "Vanessa Carlysle",
        "Weasel",
        "Blind Al",
        "Colossus",
        "Negasonic Teenage Warhead",
        "Ajax"
      ],
      "prerequisites": []
    },
    {
      "id": "mcu-guardians2",
      "title": "Guardians of the Galaxy Vol. 2",
      "type": "Movie",
      "year": 2017,
      "chronoYear": "2014",
      "phase": "Phase 3",
      "runtimeMinutes": 136,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/guardians-of-the-galaxy-vol-2/1660000037",
      "poster": "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9MFHDb1BGIOo.jpg",
      "synopsis": "The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill's true celestial parentage.",
      "reason": "Introduces Mantis, Ego the Living Planet (Celestials lore), Yondu's sacrifice, and Nebula's alliance.",
      "postCredits": "Ayesha reveals the birth cocoon of Adam Warlock; the Watchers listen to Stan Lee.",
      "charactersIntroduced": [
        "Mantis",
        "Ego",
        "Ayesha",
        "Stakar Ogord",
        "Adam Warlock (Tease)"
      ],
      "prerequisites": [
        "mcu-guardians1"
      ]
    },
    {
      "id": "mcu-iron-fist-s1",
      "title": "Iron Fist (Season 1)",
      "type": "Series",
      "year": 2017,
      "chronoYear": "2016",
      "phase": "The Defenders Saga",
      "runtimeMinutes": 650,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/marvels-iron-fist/1260086824",
      "poster": "https://image.tmdb.org/t/p/w500/9kF1W5kO5lW9f8qK3m1jX9L2y3A.jpg",
      "synopsis": "Danny Rand returns to New York City after being missing for 15 years, wielding the power of the Iron Fist to fight corporate greed and The Hand.",
      "reason": "Introduces K'un-Lun, Colleen Wing, and sets up The Hand's ultimate plot for The Defenders.",
      "postCredits": "Danny and Colleen travel to K'un-Lun only to find the mystic city vanished.",
      "charactersIntroduced": [
        "Danny Rand (Iron Fist)",
        "Colleen Wing",
        "Ward Meachum",
        "Joy Meachum",
        "Bakuto"
      ],
      "prerequisites": [
        "mcu-daredevil-s2"
      ]
    },
    {
      "id": "mcu-defenders",
      "title": "The Defenders",
      "type": "Series",
      "year": 2017,
      "chronoYear": "2016",
      "phase": "The Defenders Saga",
      "runtimeMinutes": 400,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/marvels-the-defenders/1260086825",
      "poster": "https://image.tmdb.org/t/p/w500/5v6W1x5L2G5m1y8k3W9j7k3L4g5.jpg",
      "synopsis": "Daredevil, Jessica Jones, Luke Cage, and Iron Fist join forces to save New York City from the apocalyptic conspiracy of The Hand and resurrected Elektra.",
      "reason": "Culmination of the Netflix street-level saga; destruction of Midland Circle, apparent death of Matt Murdock, and disbandment of The Hand.",
      "postCredits": "A badly wounded Matt Murdock wakes up in a convent cared for by Sister Maggie: 'Get Maggie. Tell her he's awake.'",
      "charactersIntroduced": [
        "Alexandra Reid (Sigourney Weaver)",
        "Sister Maggie"
      ],
      "prerequisites": [
        "mcu-daredevil-s2",
        "mcu-jessica-jones-s1",
        "mcu-luke-cage-s1",
        "mcu-iron-fist-s1"
      ]
    },
    {
      "id": "mcu-punisher-s1",
      "title": "The Punisher (Season 1)",
      "type": "Series",
      "year": 2017,
      "chronoYear": "2016",
      "phase": "The Defenders Saga",
      "runtimeMinutes": 650,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/marvels-the-punisher/1260086826",
      "poster": "https://image.tmdb.org/t/p/w500/9kF1W5kO5lW9f8qK3m1jX9L2y3A.jpg",
      "synopsis": "After exacting revenge on those responsible for the death of his family, Frank Castle uncovers a deep military conspiracy involving former comrade Billy Russo.",
      "reason": "Definitive Punisher solo arc; introduces Micro, Dinah Madani, and the creation of Jigsaw.",
      "postCredits": "Frank brutally grinds Billy Russo's face into carousel glass, disfiguring him for life.",
      "charactersIntroduced": [
        "David Lieberman (Micro)",
        "Billy Russo (Jigsaw)",
        "Dinah Madani",
        "Curtis Hoyle"
      ],
      "prerequisites": [
        "mcu-daredevil-s2"
      ]
    },
    {
      "id": "mcu-spiderman-homecoming",
      "title": "Spider-Man: Homecoming",
      "type": "Movie",
      "year": 2017,
      "chronoYear": "2016",
      "phase": "Phase 3",
      "runtimeMinutes": 133,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/spider-man-homecoming/1260005552",
      "poster": "https://image.tmdb.org/t/p/w500/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
      "synopsis": "Peter Parker balances his high school life with his superhero alter-ego under Tony Stark's mentorship, confronting Adrian Toomes (The Vulture).",
      "reason": "Peter's first solo MCU adventure; introduces Ned Leeds, MJ, and Vulture.",
      "postCredits": "Mac Gargan approaches Toomes in prison asking for Spider-Man's identity.",
      "charactersIntroduced": [
        "Adrian Toomes (Vulture)",
        "Ned Leeds",
        "Michelle 'MJ' Jones",
        "Mac Gargan (Scorpion)"
      ],
      "prerequisites": [
        "mcu-civil-war"
      ]
    },
    {
      "id": "mcu-ragnarok",
      "title": "Thor: Ragnarok",
      "type": "Movie",
      "year": 2017,
      "chronoYear": "2017",
      "phase": "Phase 3",
      "runtimeMinutes": 130,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/thor-ragnarok/1660000046",
      "poster": "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4jvoY0ND.jpg",
      "synopsis": "Imprisoned on the garbage planet Sakaar, Thor must race against time to return to Asgard and stop his murderous sister Hela from triggering Ragnarok.",
      "reason": "Destruction of Asgard, loss of Mjolnir, Thor's lightning awakening, Hulk's intelligence evolution, and direct prelude to Infinity War.",
      "postCredits": "Thanos' massive flagship, Sanctuary II, looms over the Asgardian refugee vessel.",
      "charactersIntroduced": [
        "Hela",
        "Valkyrie (Brunnhilde)",
        "Grandmaster",
        "Korg",
        "Miek",
        "Surtr"
      ],
      "prerequisites": [
        "mcu-age-of-ultron",
        "mcu-doctor-strange"
      ]
    },
    {
      "id": "fox-logan",
      "title": "Logan",
      "type": "Movie",
      "year": 2017,
      "chronoYear": "2029 (Earth-10005)",
      "phase": "X-Men Legacy",
      "runtimeMinutes": 137,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/logan/1770000863",
      "poster": "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg",
      "synopsis": "In a bleak 2029, an aging Logan cares for an ailing Professor X near the Mexican border, protecting a young mutant girl, Laura (X-23).",
      "reason": "Death of Professor Charles Xavier; death of Wolverine protecting Laura (X-23); direct inciting emotional catalyst for Deadpool & Wolverine.",
      "postCredits": "Laura turns the wooden cross on Logan's grave into an 'X'.",
      "charactersIntroduced": [
        "Laura Kinney (X-23)",
        "Caliban",
        "Donald Pierce (Reavers)",
        "Dr. Zander Rice",
        "X-24"
      ],
      "prerequisites": [
        "fox-days-of-future-past"
      ]
    },
    {
      "id": "mcu-black-panther",
      "title": "Black Panther",
      "type": "Movie",
      "year": 2018,
      "chronoYear": "2016",
      "phase": "Phase 3",
      "runtimeMinutes": 134,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/black-panther/1660000032",
      "poster": "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8vlKA.jpg",
      "synopsis": "T'Challa returns home to the hidden African nation of Wakanda to take the throne, challenged by vengeful outsider Erik Killmonger.",
      "reason": "World-building of Wakanda, Shuri, Okoye, Dora Milaje, and vibranium technology; setting for Infinity War's final stand.",
      "postCredits": "Shuri visits a recovering Bucky Barnes (the White Wolf) in Wakanda.",
      "charactersIntroduced": [
        "Erik Killmonger (N'Jadaka)",
        "Shuri",
        "Okoye",
        "Nakia",
        "M'Baku",
        "Ramonda"
      ],
      "prerequisites": [
        "mcu-civil-war"
      ]
    },
    {
      "id": "mcu-daredevil-s3",
      "title": "Daredevil (Season 3)",
      "type": "Series",
      "year": 2018,
      "chronoYear": "2017",
      "phase": "The Defenders Saga",
      "runtimeMinutes": 650,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/marvels-daredevil/1260086821",
      "poster": "https://image.tmdb.org/t/p/w500/QWbPaDxiB6LW2Ki47AcBZX8ye2.jpg",
      "synopsis": "Missing for months, Matt Murdock re-emerges a broken man. But when Wilson Fisk is released from prison, Matt must choose between living in shadows or embracing his calling.",
      "reason": "Definitive Born Again storyline; introduces FBI marksman Benjamin Poindexter (Bullseye) and concludes Fisk's initial reign.",
      "postCredits": "Dr. Oyama operates on Poindexter's shattered spine, reinforcing it with cogcolium steel (Adamantium teaser).",
      "charactersIntroduced": [
        "Benjamin Poindexter (Bullseye)",
        "Rahul 'Ray' Nadeem",
        "Sister Maggie Grace"
      ],
      "prerequisites": [
        "mcu-defenders"
      ]
    },
    {
      "id": "mcu-infinity-war",
      "title": "Avengers: Infinity War",
      "type": "Movie",
      "year": 2018,
      "chronoYear": "2018",
      "phase": "Phase 3",
      "runtimeMinutes": 149,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/avengers-infinity-war/1660000016",
      "poster": "https://image.tmdb.org/t/p/w500/7WsyChvgAno3Dy925vLpL299mPk.jpg",
      "synopsis": "The Avengers and their allies must sacrifice all to defeat powerful warlord Thanos before his blitz of ruin puts an end to the universe.",
      "reason": "Thanos collects all 6 Infinity Stones; The Snap / Decimation wipes out 50% of all life in the universe.",
      "postCredits": "Nick Fury pages Captain Marvel right before turning into dust.",
      "charactersIntroduced": [
        "Black Order (Cull Obsidian, Proxima Midnight, Corvus Glaive, Ebony Maw)",
        "Eitri the Dwarf"
      ],
      "prerequisites": [
        "mcu-avengers1",
        "mcu-civil-war",
        "mcu-doctor-strange",
        "mcu-ragnarok",
        "mcu-black-panther"
      ]
    },
    {
      "id": "mcu-antman-wasp",
      "title": "Ant-Man and the Wasp",
      "type": "Movie",
      "year": 2018,
      "chronoYear": "2018",
      "phase": "Phase 3",
      "runtimeMinutes": 118,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/ant-man-and-the-wasp/1660000031",
      "poster": "https://image.tmdb.org/t/p/w500/eivQmDb2Jtlfl278PP6980D8rPM.jpg",
      "synopsis": "Scott Lang joins forces with Hope van Dyne (The Wasp) and Hank Pym to rescue Janet van Dyne from the Quantum Realm while evading Ghost.",
      "reason": "Rescue of Janet van Dyne; quantum time vortex explanation; post-credits snap leaves Scott trapped in the Quantum Realm.",
      "postCredits": "Hank, Janet, and Hope dust from Thanos' snap while Scott is trapped in the Quantum Realm.",
      "charactersIntroduced": [
        "Janet van Dyne",
        "Ava Starr (Ghost)",
        "Bill Foster",
        "Jimmy Woo"
      ],
      "prerequisites": [
        "mcu-antman1",
        "mcu-civil-war"
      ]
    },
    {
      "id": "fox-deadpool2",
      "title": "Deadpool 2",
      "type": "Movie",
      "year": 2018,
      "chronoYear": "2018 (Earth-10005)",
      "phase": "X-Men Legacy",
      "runtimeMinutes": 119,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/deadpool-2/1770000864",
      "poster": "https://image.tmdb.org/t/p/w500/to0spRl1CMDvyUbvdq8ioAVBp07.jpg",
      "synopsis": "Foul-mouthed mercenary Wade Wilson forms X-Force to protect a young mutant boy from time-traveling cybernetic soldier Cable.",
      "reason": "Introduces Cable, Domino, Yukio; Deadpool repairs Cable's time-travel device, setting up entry into the TVA in Deadpool & Wolverine.",
      "postCredits": "Deadpool uses time slider to save Vanessa, Peter, and shoot X-Men Origins Deadpool.",
      "charactersIntroduced": [
        "Nathan Summers (Cable - Josh Brolin)",
        "Domino",
        "Russell Collins (Firefist)",
        "Yukio",
        "Peter"
      ],
      "prerequisites": [
        "fox-deadpool1"
      ]
    },
    {
      "id": "mcu-captain-marvel",
      "title": "Captain Marvel",
      "type": "Movie",
      "year": 2019,
      "chronoYear": "1995",
      "phase": "Phase 3",
      "runtimeMinutes": 124,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/captain-marvel/1660000035",
      "poster": "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7Tgp.jpg",
      "synopsis": "In 1995, extraterrestrial Kree warrior Vers discovers secrets about her past on Earth as Carol Danvers with the help of young S.H.I.E.L.D. agent Nick Fury.",
      "reason": "Origin of Captain Marvel, the Tesseract's history on Earth, young Nick Fury losing his eye to Goose, Talos, and the Skrulls.",
      "postCredits": "Carol Danvers arrives at the Avengers compound answering Fury's pager: 'Where's Fury?'",
      "charactersIntroduced": [
        "Carol Danvers (Captain Marvel)",
        "Talos",
        "Young Nick Fury",
        "Goose the Flerken",
        "Supreme Intelligence",
        "Monica Rambeau (Child)"
      ],
      "prerequisites": [
        "mcu-cap1"
      ]
    },
    {
      "id": "mcu-endgame",
      "title": "Avengers: Endgame",
      "type": "Movie",
      "year": 2019,
      "chronoYear": "2018-2023",
      "phase": "Phase 3",
      "runtimeMinutes": 181,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/avengers-endgame/1260005558",
      "poster": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      "synopsis": "After the devastating events of Infinity War, the surviving Avengers execute a temporal Time Heist across previous timeline points to resurrect the fallen.",
      "reason": "Climax of the Infinity Saga (22-movie culmination); Tony Stark's sacrifice, Captain America's retirement passing shield to Sam Wilson, and creation of the Multiverse branches.",
      "postCredits": "No post-credit scene; resonant sound of Tony forging the Mark I armor.",
      "charactersIntroduced": [
        "Morgan Stark",
        "Old Steve Rogers"
      ],
      "prerequisites": [
        "mcu-infinity-war",
        "mcu-antman-wasp",
        "mcu-captain-marvel"
      ]
    },
    {
      "id": "mcu-spiderman-ffh",
      "title": "Spider-Man: Far From Home",
      "type": "Movie",
      "year": 2019,
      "chronoYear": "2024",
      "phase": "Phase 3",
      "runtimeMinutes": 129,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/spider-man-far-from-home/1260005553",
      "poster": "https://image.tmdb.org/t/p/w500/4q2DbAnuqvF5Cpg6j9x8kC3p4A6.jpg",
      "synopsis": "Following Endgame, Spider-Man must step up on a European school trip to face Mysterio, an illusionist posing as an interdimensional hero.",
      "reason": "Deals with Tony Stark's global loss; introduces Quentin Beck (Mysterio); mid-credits exposes Peter Parker's identity to the world.",
      "postCredits": "J. Jonah Jameson leaks Mysterio's doctored footage framing Spider-Man.",
      "charactersIntroduced": [
        "Quentin Beck (Mysterio)",
        "J. Jonah Jameson (J.K. Simmons)"
      ],
      "prerequisites": [
        "mcu-endgame"
      ]
    },
    {
      "id": "mcu-black-widow",
      "title": "Black Widow",
      "type": "Movie",
      "year": 2021,
      "chronoYear": "2016",
      "phase": "Phase 4",
      "runtimeMinutes": 134,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/black-widow/1260067484",
      "poster": "https://image.tmdb.org/t/p/w500/qAZ0whBCtiuhoIRrODxNXrr1P0G.jpg",
      "synopsis": "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past Red Room training arises.",
      "reason": "Introduces Yelena Belova, Red Guardian, Taskmaster, and sets up Yelena's recruitment by Val for Thunderbolts.",
      "postCredits": "Val approaches Yelena at Natasha's grave, assigning her Hawkeye as her next target.",
      "charactersIntroduced": [
        "Yelena Belova",
        "Alexei Shostakov (Red Guardian)",
        "Melina Vostokoff",
        "Antonia Dreykov (Taskmaster)"
      ],
      "prerequisites": [
        "mcu-civil-war"
      ]
    },
    {
      "id": "mcu-wandavision",
      "title": "WandaVision",
      "type": "Series",
      "year": 2021,
      "chronoYear": "2023",
      "phase": "Phase 4",
      "runtimeMinutes": 350,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/wandavision/1260051344",
      "poster": "https://image.tmdb.org/t/p/w500/glKDHgsq000GqJzS56pgh47D68m.jpg",
      "synopsis": "Living idealized suburban lives in Westview, Wanda Maximoff and Vision begin to suspect that everything is not as it seems.",
      "reason": "Wanda unlocks her destiny as the Scarlet Witch, creates twin sons Billy and Tommy, acquires the Darkhold, and awakens Monica Rambeau's photon powers.",
      "postCredits": "Wanda astrally projects using the Darkhold, hearing the multiversal cries of Billy and Tommy.",
      "charactersIntroduced": [
        "Agatha Harkness",
        "Monica Rambeau (Adult / Spectrum)",
        "Billy & Tommy Maximoff",
        "White Vision"
      ],
      "prerequisites": [
        "mcu-endgame"
      ]
    },
    {
      "id": "mcu-falcon-winter-soldier",
      "title": "The Falcon and the Winter Soldier",
      "type": "Series",
      "year": 2021,
      "chronoYear": "2024",
      "phase": "Phase 4",
      "runtimeMinutes": 300,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/the-falcon-and-the-winter-soldier/1260055670",
      "poster": "https://image.tmdb.org/t/p/w500/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
      "synopsis": "Sam Wilson and Bucky Barnes team up on a global mission against the anti-nationalist Flag Smashers while wrestling with the mantle of Captain America.",
      "reason": "Sam Wilson officially embraces the shield as Captain America; introduces John Walker (U.S. Agent), Contessa Valentina Allegra de Fontaine, and Sharon Carter as Power Broker.",
      "postCredits": "Val recruits John Walker, renaming him U.S. Agent in a black suit.",
      "charactersIntroduced": [
        "John Walker (U.S. Agent)",
        "Contessa Valentina Allegra de Fontaine",
        "Joaquin Torres (New Falcon)",
        "Isaiah Bradley"
      ],
      "prerequisites": [
        "mcu-endgame"
      ]
    },
    {
      "id": "mcu-loki-s1",
      "title": "Loki (Season 1)",
      "type": "Series",
      "year": 2021,
      "chronoYear": "End of Time",
      "phase": "Phase 4",
      "runtimeMinutes": 280,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/loki/1260063451",
      "poster": "https://image.tmdb.org/t/p/w500/kEl2t3OhXc379g18IvgBh0bpncP.jpg",
      "synopsis": "After escaping with the Tesseract in Endgame, the variant Loki is arrested by the TVA to investigate a dangerous multiversal variant.",
      "reason": "Introduces the TVA, Mobius, Sylvie, the Sacred Timeline, and He Who Remains; Sylvie kills He Who Remains, fracturing the timeline into infinite Multiverses.",
      "postCredits": "Loki finds himself in an alternate TVA where a giant statue of Kang looms.",
      "charactersIntroduced": [
        "Mobius M. Mobius",
        "Sylvie",
        "Hunter B-15",
        "He Who Remains (Kang Variant)",
        "Ravonna Renslayer",
        "Miss Minutes"
      ],
      "prerequisites": [
        "mcu-endgame"
      ]
    },
    {
      "id": "mcu-whatif-s1",
      "title": "What If...? (Season 1)",
      "type": "Series",
      "year": 2021,
      "chronoYear": "Multiverse",
      "phase": "Phase 4",
      "runtimeMinutes": 270,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/what-if/1260067485",
      "poster": "https://image.tmdb.org/t/p/w500/lzt2ILFsip4j7aINZJ46A5r8t9W.jpg",
      "synopsis": "The Watcher observes alternate pivotal moments from the MCU, exploring what happens when alternate choices are made.",
      "reason": "Introduces Uatu the Watcher, Captain Carter, Strange Supreme, Infinity Ultron, and establishes the reality of the animated multiverse.",
      "postCredits": "Captain Carter discovers the Steve Rogers Hydra Stomper armor with someone still alive inside.",
      "charactersIntroduced": [
        "The Watcher (Uatu)",
        "Captain Carter",
        "Doctor Strange Supreme",
        "Infinity Ultron"
      ],
      "prerequisites": [
        "mcu-loki-s1"
      ]
    },
    {
      "id": "mcu-shangchi",
      "title": "Shang-Chi and the Legend of the Ten Rings",
      "type": "Movie",
      "year": 2021,
      "chronoYear": "2024",
      "phase": "Phase 4",
      "runtimeMinutes": 132,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/shang-chi-and-the-legend-of-the-ten-rings/1260072682",
      "poster": "https://image.tmdb.org/t/p/w500/1BIg0bocqE08mH1L0T9tP0F4Z1P.jpg",
      "synopsis": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the Ten Rings organization led by his father Wenwu.",
      "reason": "Introduces the mystic Ten Rings artifacts, Ta Lo, and establishes Shang-Chi with Wong, Carol Danvers, and Bruce Banner.",
      "postCredits": "Wong, Banner, and Danvers inspect the Ten Rings acting as a deep space beacon.",
      "charactersIntroduced": [
        "Shang-Chi",
        "Xu Wenwu (The Real Mandarin)",
        "Katy Chen",
        "Xu Xialing",
        "The Great Protector"
      ],
      "prerequisites": [
        "mcu-endgame",
        "mcu-ironman3"
      ]
    },
    {
      "id": "mcu-eternals",
      "title": "Eternals",
      "type": "Movie",
      "year": 2021,
      "chronoYear": "2024",
      "phase": "Phase 4",
      "runtimeMinutes": 156,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/eternals/1260077949",
      "poster": "https://image.tmdb.org/t/p/w500/b6q0eg4q2uFw7Qp1GkY2m9q5.jpg",
      "synopsis": "The Eternals, a race of immortal beings who secretly lived on Earth for thousands of years, reunite to battle the Deviants.",
      "reason": "Introduces Celestials (Arishem), the frozen Celestial Tiamut (source of Adamantium in Brave New World), Starfox, and Dane Whitman.",
      "postCredits": "Eros (Starfox) teleports aboard the Domo; Dane Whitman inspects the Ebony Blade as Blade's voice warns him.",
      "charactersIntroduced": [
        "Sersi",
        "Ikaris",
        "Thena",
        "Kingk",
        "Druig",
        "Makkari",
        "Phastos",
        "Arishem the Judge",
        "Eros (Starfox)",
        "Dane Whitman"
      ],
      "prerequisites": [
        "mcu-endgame"
      ]
    },
    {
      "id": "mcu-spiderman-nwh",
      "title": "Spider-Man: No Way Home",
      "type": "Movie",
      "year": 2021,
      "chronoYear": "2024",
      "phase": "Phase 4",
      "runtimeMinutes": 148,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/spider-man-no-way-home/1260005554",
      "poster": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4IRKS.jpg",
      "synopsis": "With Spider-Man's identity revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other universes appear.",
      "reason": "Unites Tom Holland, Tobey Maguire, Andrew Garfield; Charlie Cox's Matt Murdock cameo; memory wipe spell; Venom symbiote piece left in MCU.",
      "postCredits": "Eddie Brock & Venom return to their universe, leaving a living droplet of black symbiote on the bar counter.",
      "charactersIntroduced": [
        "Tobey Maguire Peter Parker",
        "Andrew Garfield Peter Parker",
        "Green Goblin (Willem Dafoe)",
        "Doc Ock (Alfred Molina)",
        "Electro (Jamie Foxx)",
        "Matt Murdock (MCU Cameo)"
      ],
      "prerequisites": [
        "mcu-spiderman-ffh",
        "mcu-wandavision",
        "mcu-loki-s1"
      ]
    },
    {
      "id": "mcu-hawkeye",
      "title": "Hawkeye",
      "type": "Series",
      "year": 2021,
      "chronoYear": "2024",
      "phase": "Phase 4",
      "runtimeMinutes": 280,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/hawkeye/1260073400",
      "poster": "https://image.tmdb.org/t/p/w500/pqzjVPm25enLNTN4f5f5P7K7r9W.jpg",
      "synopsis": "Former Avenger Clint Barton teams up with young archery prodigy Kate Bishop during the holidays in NYC to unravel a criminal conspiracy linked to his Ronin past.",
      "reason": "Introduces Kate Bishop as the new Hawkeye, brings Vincent D'Onofrio's Wilson Fisk (Kingpin) officially back into the main MCU, and introduces Maya Lopez (Echo).",
      "postCredits": "Maya Lopez shoots Wilson Fisk off-screen in the alleyway.",
      "charactersIntroduced": [
        "Kate Bishop",
        "Maya Lopez (Echo)",
        "Wilson Fisk (Kingpin Return)",
        "Jack Duquesne (Swordsman)",
        "Pizza Dog"
      ],
      "prerequisites": [
        "mcu-endgame",
        "mcu-black-widow",
        "mcu-daredevil-s3"
      ]
    },
    {
      "id": "mcu-multiverse-madness",
      "title": "Doctor Strange in the Multiverse of Madness",
      "type": "Movie",
      "year": 2022,
      "chronoYear": "2024",
      "phase": "Phase 4",
      "runtimeMinutes": 126,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/doctor-strange-in-the-multiverse-of-madness/1260103756",
      "poster": "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
      "synopsis": "Doctor Strange teams up with teenager America Chavez to traverse alternate realities while pursued by the corrupted Scarlet Witch.",
      "reason": "Introduces America Chavez, Earth-838 Illuminati (Professor X, Reed Richards), explains Multiversal Incursions, and introduces Clea.",
      "postCredits": "Clea appears in New York and opens a portal to the Dark Dimension to fix an incursion.",
      "charactersIntroduced": [
        "America Chavez",
        "Professor Charles Xavier (Patrick Stewart)",
        "Reed Richards (John Krasinski)",
        "Black Bolt",
        "Clea (Charlize Theron)"
      ],
      "prerequisites": [
        "mcu-wandavision",
        "mcu-spiderman-nwh"
      ]
    },
    {
      "id": "mcu-moonknight",
      "title": "Moon Knight",
      "type": "Series",
      "year": 2022,
      "chronoYear": "2025",
      "phase": "Phase 4",
      "runtimeMinutes": 280,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/moon-knight/1260088820",
      "poster": "https://image.tmdb.org/t/p/w500/x6FsYvt33846Gk9L4m1y7j8K5V1.jpg",
      "synopsis": "Mild-mannered museum gift-shop employee Steven Grant discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector, conduit of moon god Khonshu.",
      "reason": "Introduces Egyptian Ennead gods, Marc Spector, Steven Grant, Jake Lockley, and Scarlet Scarab.",
      "postCredits": "Jake Lockley executes Arthur Harrow in the back of a limousine on Khonshu's orders.",
      "charactersIntroduced": [
        "Marc Spector / Steven Grant / Jake Lockley (Moon Knight)",
        "Khonshu",
        "Arthur Harrow",
        "Layla El-Faouly (Scarlet Scarab)"
      ],
      "prerequisites": [
        "mcu-endgame"
      ]
    },
    {
      "id": "mcu-msmarvel",
      "title": "Ms. Marvel",
      "type": "Series",
      "year": 2022,
      "chronoYear": "2025",
      "phase": "Phase 4",
      "runtimeMinutes": 270,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/ms-marvel/1260103757",
      "poster": "https://image.tmdb.org/t/p/w500/cdkyMYdu8ao2657fbmsWhOd973p.jpg",
      "synopsis": "Kamala Khan, a superhero mega-fan from Jersey City, acquires cosmic hard-light powers from a family heirloom bangle, uncovering her lineage.",
      "reason": "Introduces Kamala Khan (Ms. Marvel), first explicit mention of a 'mutation' in human DNA, and sets up The Marvels.",
      "postCredits": "Kamala's bangle glows and swaps her through spacetime with Carol Danvers in her bedroom.",
      "charactersIntroduced": [
        "Kamala Khan (Ms. Marvel)",
        "Bruno Carrelli",
        "Nakia Bahadir",
        "Kamran",
        "Red Dagger (Kareem)"
      ],
      "prerequisites": [
        "mcu-endgame"
      ]
    },
    {
      "id": "mcu-thor-love-thunder",
      "title": "Thor: Love and Thunder",
      "type": "Movie",
      "year": 2022,
      "chronoYear": "2025",
      "phase": "Phase 4",
      "runtimeMinutes": 119,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/thor-love-and-thunder/1260110008",
      "poster": "https://image.tmdb.org/t/p/w500/pIkRyD18kl4F0b6NX9AtDrNkTe6.jpg",
      "synopsis": "Thor enlists the help of Valkyrie, Korg, and ex-girlfriend Jane Foster (who now wields reformed Mjolnir as the Mighty Thor) to stop Gorr the God Butcher.",
      "reason": "Jane Foster ascends to Valhalla; Gorr's daughter Love is adopted by Thor; introduces Zeus, Eternity, and Hercules.",
      "postCredits": "Zeus commands his son Hercules to make humanity fear gods again; Jane arrives at Valhalla welcomed by Heimdall.",
      "charactersIntroduced": [
        "Gorr the God Butcher",
        "Mighty Thor (Jane Foster)",
        "Zeus",
        "Hercules",
        "Love",
        "Eternity"
      ],
      "prerequisites": [
        "mcu-ragnarok",
        "mcu-endgame"
      ]
    },
    {
      "id": "mcu-shehulk",
      "title": "She-Hulk: Attorney at Law",
      "type": "Series",
      "year": 2022,
      "chronoYear": "2025",
      "phase": "Phase 4",
      "runtimeMinutes": 280,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/she-hulk-attorney-at-law/1260110009",
      "poster": "https://image.tmdb.org/t/p/w500/hJfI6ikgqwqwL0g3z9m9W3b4J5K.jpg",
      "synopsis": "Jennifer Walters navigates the complicated life of a single, 30-something attorney who also happens to be a green 6-foot-7-inch superpowered hulk.",
      "reason": "Introduces Jennifer Walters, Emil Blonsky's rehabilitation, Matt Murdock's yellow-and-red Daredevil suit romance, and Hulk's son Skaar.",
      "postCredits": "Wong breaks Emil Blonsky out of maximum-security prison to live at Kamar-Taj.",
      "charactersIntroduced": [
        "Jennifer Walters (She-Hulk)",
        "Titania",
        "Skaar (Hulk's Son)",
        "Pug",
        "Nikki Ramos"
      ],
      "prerequisites": [
        "mcu-hulk",
        "mcu-shangchi",
        "mcu-daredevil-s3"
      ]
    },
    {
      "id": "mcu-werewolf-by-night",
      "title": "Werewolf by Night",
      "type": "Special",
      "year": 2022,
      "chronoYear": "2025",
      "phase": "Phase 4",
      "runtimeMinutes": 53,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/werewolf-by-night/1260113888",
      "poster": "https://image.tmdb.org/t/p/w500/mvIvNKQI2Ha6ipVdp4Xz3NXrmCU.jpg",
      "synopsis": "A secret cabal of monster hunters emerge from the shadows to compete for a powerful relic upon the death of their leader.",
      "reason": "Introduces the supernatural monster wing of the MCU; debuts Jack Russell, Elsa Bloodstone, Man-Thing, and the Bloodstone artifact.",
      "postCredits": "Jack Russell and Man-Thing enjoy coffee in the woods at sunrise.",
      "charactersIntroduced": [
        "Jack Russell (Werewolf by Night)",
        "Elsa Bloodstone",
        "Man-Thing (Ted Sallis)",
        "Verussa Bloodstone"
      ],
      "prerequisites": [
        "mcu-endgame"
      ]
    },
    {
      "id": "mcu-quantumania",
      "title": "Ant-Man and the Wasp: Quantumania",
      "type": "Movie",
      "year": 2023,
      "chronoYear": "2026",
      "phase": "Phase 5",
      "runtimeMinutes": 125,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/ant-man-and-the-wasp-quantumania/1260128704",
      "poster": "https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
      "synopsis": "Scott Lang and Hope van Dyne explore the Quantum Realm, interacting with strange creatures and Kang the Conqueror.",
      "reason": "Establishes Kang the Conqueror's exile in the Quantum Realm, his Multiversal War lore, and the Council of Kangs assembly.",
      "postCredits": "Immortus, Rama-Tut, and Centinel summon thousands of Kang variants across the multiverse.",
      "charactersIntroduced": [
        "Kang the Conqueror",
        "MODOK (Darren Cross)",
        "Cassie Lang (Stature)",
        "Council of Kangs",
        "Victor Timely"
      ],
      "prerequisites": [
        "mcu-antman-wasp",
        "mcu-loki-s1"
      ]
    },
    {
      "id": "mcu-guardians3",
      "title": "Guardians of the Galaxy Vol. 3",
      "type": "Movie",
      "year": 2023,
      "chronoYear": "2026",
      "phase": "Phase 5",
      "runtimeMinutes": 150,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/guardians-of-the-galaxy-vol-3/1260142988",
      "poster": "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN2Ydg3mA102.jpg",
      "synopsis": "Peter Quill rallies his band of misfits on a dangerous mission to save Rocket Raccoon's life, confronting the High Evolutionary.",
      "reason": "Emotional conclusion to original Guardians lineup; Rocket's origin; Adam Warlock; Star-Lord returns to Earth.",
      "postCredits": "New Guardians team led by Captain Rocket protects refugees; Peter eats breakfast with grandfather on Earth.",
      "charactersIntroduced": [
        "High Evolutionary",
        "Adam Warlock",
        "Lylla",
        "Floor",
        "Teeths",
        "Phyla-Vell"
      ],
      "prerequisites": [
        "mcu-guardians2",
        "mcu-infinity-war",
        "mcu-endgame"
      ]
    },
    {
      "id": "mcu-secret-invasion",
      "title": "Secret Invasion",
      "type": "Series",
      "year": 2023,
      "chronoYear": "2026",
      "phase": "Phase 5",
      "runtimeMinutes": 240,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/secret-invasion/1260143899",
      "poster": "https://image.tmdb.org/t/p/w500/a7bZt0lB4e6hW14g9m1j4K8P1w3.jpg",
      "synopsis": "Nick Fury learns of a covert invasion of Earth by a faction of shapeshifting Skrulls led by Gravik, racing against time to save humanity.",
      "reason": "Maria Hill and Talos are killed; G'iah becomes a Super Skrull; reveals James Rhodes was a Skrull clone.",
      "postCredits": "President Ritson declares war on off-world species on Earth; Sonya Falsworth recruits G'iah.",
      "charactersIntroduced": [
        "Gravik",
        "G'iah (Super Skrull)",
        "Sonya Falsworth (Olivia Colman)",
        "President Ritson"
      ],
      "prerequisites": [
        "mcu-captain-marvel",
        "mcu-spiderman-ffh"
      ]
    },
    {
      "id": "mcu-loki-s2",
      "title": "Loki (Season 2)",
      "type": "Series",
      "year": 2023,
      "chronoYear": "End of Time",
      "phase": "Phase 5",
      "runtimeMinutes": 300,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/loki/1260063451",
      "poster": "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFk253VTMe0ENTr.jpg",
      "synopsis": "Loki navigates an ever-expanding multiverse alongside Mobius and O.B. to prevent the collapse of the Temporal Loom.",
      "reason": "Loki destroys the Temporal Loom and ascends as God of Stories, holding the Multiversal Yggdrasil Tree at the End of Time.",
      "postCredits": "Loki sits eternally on his throne, guarding infinite timelines in peace.",
      "charactersIntroduced": [
        "Ouroboros 'O.B.' (Ke Huy Quan)",
        "Victor Timely",
        "General Dox"
      ],
      "prerequisites": [
        "mcu-loki-s1",
        "mcu-quantumania"
      ]
    },
    {
      "id": "mcu-the-marvels",
      "title": "The Marvels",
      "type": "Movie",
      "year": 2023,
      "chronoYear": "2026",
      "phase": "Phase 5",
      "runtimeMinutes": 105,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/the-marvels/1260156930",
      "poster": "https://image.tmdb.org/t/p/w500/9GBhzXMFjgcZ3FdR9w0bBp27IR4.jpg",
      "synopsis": "Carol Danvers, Kamala Khan, and Monica Rambeau find their powers entangled, swapping places whenever they use them while facing Dar-Benn.",
      "reason": "Monica Rambeau seals a tear in spacetime from the outside, waking up in an alternate universe with Beast (Kelsey Grammer) and Binary (Maria Rambeau); Kamala recruits Young Avengers.",
      "postCredits": "Monica awakens in the X-Men medical bay where Beast informs her Charles Xavier wants an update; Kamala recruits Kate Bishop in NYC.",
      "charactersIntroduced": [
        "Dar-Benn",
        "Dr. Hank McCoy (Beast - Kelsey Grammer)",
        "Binary (Maria Rambeau Variant)"
      ],
      "prerequisites": [
        "mcu-captain-marvel",
        "mcu-wandavision",
        "mcu-msmarvel"
      ]
    },
    {
      "id": "mcu-echo",
      "title": "Echo",
      "type": "Series",
      "year": 2024,
      "chronoYear": "2026",
      "phase": "Phase 5",
      "runtimeMinutes": 200,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/echo/1260156931",
      "poster": "https://image.tmdb.org/t/p/w500/b4kP0hG04n2g7i7f6w3L5m1Q8g.jpg",
      "synopsis": "Pursued by Wilson Fisk's empire, Maya Lopez returns to Oklahoma to reconnect with her Choctaw roots and ancestral power.",
      "reason": "Daredevil cameo fight; Kingpin is healed of childhood trauma and decides to run for Mayor of New York City.",
      "postCredits": "Wilson Fisk watches a news broadcast on his private jet about the NYC mayoral race.",
      "charactersIntroduced": [
        "Chaske",
        "Skully",
        "Bonnie",
        "Henry Black Crow Lopez"
      ],
      "prerequisites": [
        "mcu-hawkeye",
        "mcu-daredevil-s3"
      ]
    },
    {
      "id": "mcu-deadpool-wolverine",
      "title": "Deadpool & Wolverine",
      "type": "Movie",
      "year": 2024,
      "chronoYear": "2024 / Void",
      "phase": "Phase 5",
      "runtimeMinutes": 128,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/deadpool-and-wolverine/1260170001",
      "poster": "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
      "synopsis": "Wade Wilson is pulled into the TVA by Mr. Paradox and teams up with a traumatized Wolverine variant to save his timeline from dying.",
      "reason": "Integrates the Fox X-Men universe into the MCU; introduces Anchor Beings, Cassandra Nova, and brings Blade, Elektra, Gambit, and X-23 into the Void.",
      "postCredits": "Deadpool plays TVA security footage proving Johnny Storm insulted Cassandra Nova.",
      "charactersIntroduced": [
        "Wolverine (Hugh Jackman Variant)",
        "Cassandra Nova",
        "Mr. Paradox",
        "Gambit (Channing Tatum)",
        "Blade (Wesley Snipes)",
        "Elektra (Jennifer Garner)",
        "X-23 / Laura (Dafne Keen)",
        "Nicepool & Dogpool",
        "Lady Deadpool"
      ],
      "prerequisites": [
        "mcu-loki-s2",
        "fox-logan",
        "fox-deadpool2"
      ]
    },
    {
      "id": "mcu-agatha",
      "title": "Agatha All Along",
      "type": "Series",
      "year": 2024,
      "chronoYear": "2026",
      "phase": "Phase 5",
      "runtimeMinutes": 320,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/agatha-all-along/1260170002",
      "poster": "https://image.tmdb.org/t/p/w500/9kF1W5kO5lW9f8qK3m1jX9L2y3A.jpg",
      "synopsis": "Stripped of powers by Wanda, Agatha Harkness breaks free from the Westview spell with a goth teen and forms a coven to walk the Witches' Road.",
      "reason": "Reveals Teen is Billy Maximoff (Wiccan); introduces Rio Vidal as Lady Death; Wiccan sets off to find his twin Tommy.",
      "postCredits": "Ghost Agatha and Billy Maximoff set out to locate Tommy Maximoff's soul.",
      "charactersIntroduced": [
        "Billy Maximoff (Wiccan)",
        "Rio Vidal (Lady Death)",
        "Lilia Calderu",
        "Jennifer Kale",
        "Alice Wu-Gulliver"
      ],
      "prerequisites": [
        "mcu-wandavision"
      ]
    },
    {
      "id": "fox-xmen97",
      "title": "X-Men '97 (Season 1)",
      "type": "Series",
      "year": 2024,
      "chronoYear": "1997 (Earth-92131)",
      "phase": "X-Men Legacy",
      "runtimeMinutes": 320,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/x-men-97/1260170005",
      "poster": "https://image.tmdb.org/t/p/w500/7I6VUdPj6tQECNHdviJkUHD2f89.jpg",
      "synopsis": "Following Professor X's assassination, Cyclops and the X-Men are stunned when Magneto is named Xavier's sole heir, facing the Genosha massacre and Bastion's Prime Sentinels.",
      "reason": "Genosha genocide, Magneto's electromagnetic pulse, Wolverine's adamantium stripped, and time displacement of the X-Men across Ancient Egypt and the 39th Century.",
      "postCredits": "In Genosha, Apocalypse picks up Gambit's burned playing card: 'So much pain... so much death.'",
      "charactersIntroduced": [
        "Bastion",
        "Madelyne Pryor (Goblin Queen)",
        "Forge",
        "Sunspot",
        "Valerie Cooper",
        "Apocalypse"
      ],
      "prerequisites": []
    },
    {
      "id": "mcu-captain-america-bnw",
      "title": "Captain America: Brave New World",
      "type": "Movie",
      "year": 2025,
      "chronoYear": "2026",
      "phase": "Phase 5",
      "runtimeMinutes": 120,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/captain-america-brave-new-world/1260180001",
      "poster": "https://image.tmdb.org/t/p/w500/vSNxAJTl00cuun09ZkWbg99umGQ.jpg",
      "synopsis": "Sam Wilson finds himself in an international crisis after meeting US President Thaddeus Ross, discovering a conspiracy involving Adamantium and Red Hulk.",
      "reason": "Sam Wilson's theatrical lead as Captain America; Harrison Ford's Red Hulk; Adamantium mined from Tiamut's corpse; return of The Leader.",
      "postCredits": "Sam Wilson establishes an independent sovereign Avengers protocol.",
      "charactersIntroduced": [
        "President Thaddeus Ross (Red Hulk - Harrison Ford)",
        "Samuel Sterns (The Leader)",
        "Sabra (Ruth Bat-Seraph)",
        "Seth Voelker (Sidewinder)"
      ],
      "prerequisites": [
        "mcu-falcon-winter-soldier",
        "mcu-eternals",
        "mcu-hulk"
      ]
    },
    {
      "id": "mcu-daredevil-born-again",
      "title": "Daredevil: Born Again",
      "type": "Series",
      "year": 2025,
      "chronoYear": "2026",
      "phase": "The Defenders Saga",
      "runtimeMinutes": 450,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/daredevil-born-again/1260180002",
      "poster": "https://image.tmdb.org/t/p/w500/QWbPaDxiB6LW2Ki47AcBZX8ye2.jpg",
      "synopsis": "Mayor Wilson Fisk outlaws costumed vigilantes in NYC. Matt Murdock and Frank Castle must put aside moral differences to save Hell's Kitchen from corruption and serial killer Muse.",
      "reason": "Direct sequel to Netflix Daredevil S3 and Echo; Mayor Fisk anti-vigilante regime; returns of Foggy, Karen, Frank Castle (Punisher), Bullseye, and debuts White Tiger and Muse.",
      "postCredits": "Fisk establishes the Anti-Vigilante Task Force while Matt Murdock calls upon Spider-Man and street allies for NYC resistance.",
      "charactersIntroduced": [
        "Hector Ayala (White Tiger)",
        "Muse",
        "BB Urich",
        "Mayor Wilson Fisk Regime"
      ],
      "prerequisites": [
        "mcu-daredevil-s3",
        "mcu-echo",
        "mcu-shehulk"
      ]
    },
    {
      "id": "mcu-thunderbolts",
      "title": "Thunderbolts*",
      "type": "Movie",
      "year": 2025,
      "chronoYear": "2026",
      "phase": "Phase 5",
      "runtimeMinutes": 125,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/thunderbolts/1260180003",
      "poster": "https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
      "synopsis": "An irreverent team of reformed villains and anti-heroes are deployed on government black-ops missions by Valentina Allegra de Fontaine, encountering the omnipotent Bob Reynolds (The Sentry).",
      "reason": "Brings together Yelena Belova, Bucky Barnes, Red Guardian, U.S. Agent, Ghost, Taskmaster, and introduces The Sentry / Void.",
      "postCredits": "The team learns Val bought former Avengers Tower for Sentry; Void persona awakens.",
      "charactersIntroduced": [
        "Robert Reynolds (The Sentry / The Void)",
        "Mel (Geraldine Viswanathan)"
      ],
      "prerequisites": [
        "mcu-black-widow",
        "mcu-falcon-winter-soldier",
        "mcu-antman-wasp"
      ]
    },
    {
      "id": "mcu-ironheart",
      "title": "Ironheart",
      "type": "Series",
      "year": 2025,
      "chronoYear": "2026",
      "phase": "Phase 5",
      "runtimeMinutes": 280,
      "tier": "Supplementary",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/shows/ironheart/1260180004",
      "poster": "https://image.tmdb.org/t/p/w500/6WBeq4jjq0esap75qWo6rMi0qko.jpg",
      "synopsis": "MIT genius Riri Williams returns to Chicago building advanced armor suits, clashing with Parker Robbins (The Hood) in a battle of tech versus dark magic.",
      "reason": "Explores Tony Stark's engineering legacy through Riri Williams; introduces The Hood.",
      "postCredits": "Riri's armor upgrades with mystic runes.",
      "charactersIntroduced": [
        "Riri Williams (Ironheart)",
        "Parker Robbins (The Hood)",
        "Zelma Stanton"
      ],
      "prerequisites": [
        "mcu-black-panther",
        "mcu-ironman"
      ]
    },
    {
      "id": "mcu-fantastic-four",
      "title": "The Fantastic Four: First Steps",
      "type": "Movie",
      "year": 2025,
      "chronoYear": "1960s Alternate Earth",
      "phase": "Phase 5",
      "runtimeMinutes": 135,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/the-fantastic-four-first-steps/1260180005",
      "poster": "https://image.tmdb.org/t/p/w500/b6q0eg4q2uFw7Qp1GkY2m9q5.jpg",
      "synopsis": "Set in a retro-futuristic 1960s alternate Earth, Marvel's First Family must defend their world from planet-devouring Galactus and Silver Surfer.",
      "reason": "Introduces Pedro Pascal's Reed Richards, Vanessa Kirby's Sue Storm, Joseph Quinn's Johnny Storm, Ebon Moss-Bachrach's Ben Grimm, Galactus, and Silver Surfer; bridge into Doomsday.",
      "postCredits": "The Fantastic Four detect their Earth collapsing in an incursion, preparing an interdimensional ark for Earth-616.",
      "charactersIntroduced": [
        "Reed Richards (Mister Fantastic)",
        "Sue Storm (Invisible Woman)",
        "Johnny Storm (Human Torch)",
        "Ben Grimm (The Thing)",
        "Galactus (Ralph Ineson)",
        "Silver Surfer (Shalla-Bal - Julia Garner)",
        "H.E.R.B.I.E."
      ],
      "prerequisites": [
        "mcu-multiverse-madness",
        "mcu-loki-s2"
      ]
    },
    {
      "id": "mcu-spiderman4",
      "title": "Spider-Man 4",
      "type": "Movie",
      "year": 2026,
      "chronoYear": "2027",
      "phase": "Phase 6",
      "runtimeMinutes": 135,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/spider-man-4/1260190002",
      "poster": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4IRKS.jpg",
      "synopsis": "Peter Parker operates as a grounded vigilante in NYC alongside Daredevil against Mayor Fisk's police state, while the alien symbiote bonds with him.",
      "reason": "Black suit Spider-Man symbiote arc, street-level alliance with Daredevil against Kingpin, and lead-in to Secret Wars.",
      "postCredits": "The sky turns crimson as an incursion rip opens above Manhattan.",
      "charactersIntroduced": [
        "Black Suit Spider-Man (MCU)",
        "Felicia Hardy (Black Cat)"
      ],
      "prerequisites": [
        "mcu-spiderman-nwh",
        "mcu-daredevil-born-again"
      ]
    },
    {
      "id": "mcu-doomsday",
      "title": "Avengers: Doomsday",
      "type": "Movie",
      "year": 2026,
      "chronoYear": "2027",
      "phase": "Phase 6",
      "runtimeMinutes": 165,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/avengers-doomsday/1260190001",
      "poster": "https://image.tmdb.org/t/p/w500/7WsyChvgAno3Dy925vLpL299mPk.jpg",
      "synopsis": "Robert Downey Jr. returns as Victor Von Doom. As multiversal incursions threaten annihilation of all realities, Earth's heroes, Fantastic Four, and X-Men must unite.",
      "reason": "Introduction of Doctor Doom; multiversal incursions destroy Earth-616 and alternate realities, forming Battleworld.",
      "postCredits": "Doctor Doom stands atop the ruins of collapsing universes, forging Battleworld.",
      "charactersIntroduced": [
        "Victor Von Doom (Doctor Doom - Robert Downey Jr.)"
      ],
      "prerequisites": [
        "mcu-fantastic-four",
        "mcu-deadpool-wolverine",
        "mcu-captain-america-bnw",
        "mcu-thunderbolts",
        "mcu-loki-s2",
        "mcu-daredevil-born-again"
      ]
    },
    {
      "id": "mcu-secret-wars",
      "title": "Avengers: Secret Wars",
      "type": "Movie",
      "year": 2027,
      "chronoYear": "Battleworld",
      "phase": "Phase 6",
      "runtimeMinutes": 180,
      "tier": "Essential",
      "streamingOn": "Disney+ Hotstar",
      "streamUrl": "https://www.hotstar.com/in/movies/avengers-secret-wars/1260190003",
      "poster": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      "synopsis": "On the patchwork planet Battleworld, surviving heroes from MCU, Fox X-Men, and Sony Spider-Verse fight God Emperor Doom for existence, creating a single unified universe.",
      "reason": "Ultimate climax of the Multiverse Saga; soft reboot merging Mutants, Fantastic Four, and Avengers into one unified Sacred Timeline.",
      "postCredits": "The birth of the new unified Marvel Earth; a young mutant's eyes glow in Xavier's School.",
      "charactersIntroduced": [
        "God Emperor Doom",
        "The Beyonder",
        "Unified MCU Mutants"
      ],
      "prerequisites": [
        "mcu-doomsday",
        "mcu-spiderman4",
        "mcu-deadpool-wolverine"
      ]
    }
  ]
};
