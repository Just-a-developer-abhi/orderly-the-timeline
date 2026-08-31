export const SAW_DATA = {
  id: "saw",
  name: "Saw / Jigsaw Franchise",
  tagline:
    "Non-Linear Flashback Chronology, The Jigsaw Apprentices & Simultaneous Games",
  icon: "Activity",
  themeColor: "red",
  presetTargets: [
    {
      id: "saw-x",
      title: "Saw X (Interquel between I & II)",
      year: 2023,
      type: "Movie",
    },
    {
      id: "saw-3d",
      title: "Saw 3D: The Final Chapter (2010)",
      year: 2010,
      type: "Movie",
    },
    {
      id: "saw-4",
      title: "Saw IV (Simultaneous with Saw III)",
      year: 2007,
      type: "Movie",
    },
    {
      id: "saw-1",
      title: "Saw (2004 Original)",
      year: 2004,
      type: "Movie",
    },
    {
      id: "saw-spiral",
      title: "Spiral: From the Book of Saw (2021)",
      year: 2021,
      type: "Movie",
    },
  ],
  nodes: [
    {
      id: "saw-1",
      title: "Saw",
      type: "Movie",
      year: 2004,
      chronoYear: "2004 (Game 1)",
      phase: "The Jigsaw Awakening",
      runtimeMinutes: 103,
      tier: "Essential",
      streamingOn: "Lionsgate Play",
      poster: "https://image.tmdb.org/t/p/w500/dPtLh3q51bL3m0h2q1l9y4A.jpg",
      synopsis:
        "Photographer Adam and oncologist Dr. Lawrence Gordon wake up chained in a dilapidated bathroom with a corpse between them, instructed to kill each other by the Jigsaw Killer (John Kramer).",
      reason:
        "The horror masterpiece that started it all; iconic bathroom trap, Amanda Young reverse bear trap, and the legendary corpse reveal.",
      postCredits:
        "The 'corpse' stands up revealing himself as John Kramer, sliding the bathroom door shut: 'Game over.'",
      charactersIntroduced: [
        "John Kramer (The Jigsaw Killer)",
        "Dr. Lawrence Gordon",
        "Adam Stanheight",
        "Amanda Young",
        "Detective David Tapp",
      ],
      prerequisites: [],
    },
    {
      id: "saw-x",
      title: "Saw X",
      type: "Movie",
      year: 2023,
      chronoYear: "2004 (Weeks after Saw I)",
      phase: "The Jigsaw Awakening",
      runtimeMinutes: 118,
      tier: "Essential",
      streamingOn: "Lionsgate Play",
      poster: "https://image.tmdb.org/t/p/w500/b16q0eg4q2uFw7Qp1GkY2m9q5.jpg",
      synopsis:
        "Set strictly between Saw I and Saw II: A desperate John Kramer travels to Mexico for a risky experimental cancer procedure, only to discover it is a fraudulent scam preying on the dying. Kramer and Amanda test the scammers.",
      reason:
        "Direct chronological bridge between Saw I and II; deepens John and Amanda's mentor/apprentice bond; post-credits features Detective Mark Hoffman.",
      postCredits:
        "John Kramer and Detective Mark Hoffman strap scam organizer Henry Kessler into a disembowelment trap in the classic bathroom: 'Epic bad luck.'",
      charactersIntroduced: [
        "Cecilia Pederson",
        "Mateo",
        "Valentina",
        "Gabriela",
        "Henry Kessler",
      ],
      prerequisites: ["saw-1"],
    },
    {
      id: "saw-2",
      title: "Saw II",
      type: "Movie",
      year: 2005,
      chronoYear: "2005 (Game 2)",
      phase: "The Apprentice Revealed",
      runtimeMinutes: 93,
      tier: "Essential",
      streamingOn: "Lionsgate Play",
      poster: "https://image.tmdb.org/t/p/w500/dPtLh3q51bL3m0h2q1l9y4A.jpg",
      synopsis:
        "Detective Eric Matthews interrogates dying John Kramer, while watching a security feed of his son Daniel trapped in a nerve-gas house alongside seven ex-convicts and Amanda.",
      reason:
        "Reveals Amanda Young is Jigsaw's first fully devoted apprentice; twist reveals the monitor footage was pre-recorded hours earlier.",
      postCredits: "Amanda locks Eric Matthews in the bathroom: 'Game over.'",
      charactersIntroduced: [
        "Detective Eric Matthews",
        "Daniel Matthews",
        "Xavier Chavez",
        "Jonas",
        "Laura",
      ],
      prerequisites: ["saw-x"],
    },
    {
      id: "saw-3",
      title: "Saw III",
      type: "Movie",
      year: 2006,
      chronoYear: "2006 (Simultaneous Timeline)",
      phase: "The Trial of Faith",
      runtimeMinutes: 108,
      tier: "Essential",
      streamingOn: "Lionsgate Play",
      poster: "https://image.tmdb.org/t/p/w500/dPtLh3q51bL3m0h2q1l9y4A.jpg",
      synopsis:
        "A bedridden John Kramer is kept alive via makeshift brain surgery by Dr. Lynn Denlon, while her grieving husband Jeff undergoes a trial of forgiveness. Runs simultaneous with Saw IV.",
      reason:
        "Deaths of John Kramer and Amanda Young; reveals Amanda was making unwinnable traps; Kramer plays an audio tape from his stomach.",
      postCredits:
        "Jeff cuts Kramer's throat with a circular saw, triggering Lynn's shotgun collar; Kramer's heart-rate monitor activates a locked door.",
      charactersIntroduced: [
        "Dr. Lynn Denlon",
        "Jeff Denlon",
        "Detective Allison Kerry (Death)",
        "Jill Tuck (John's Ex-Wife)",
      ],
      prerequisites: ["saw-2"],
    },
    {
      id: "saw-4",
      title: "Saw IV",
      type: "Movie",
      year: 2007,
      chronoYear: "2006 (Simultaneous with Saw III)",
      phase: "The Hoffman Succession",
      runtimeMinutes: 93,
      tier: "Essential",
      streamingOn: "Lionsgate Play",
      poster: "https://image.tmdb.org/t/p/w500/dPtLh3q51bL3m0h2q1l9y4A.jpg",
      synopsis:
        "During Kramer's autopsy, a wax-coated cassette is extracted from his stomach. SWAT Officer Rigg undertakes a 90-minute trial, unaware the events are occurring at the exact same moment as Saw III.",
      reason:
        "Simultaneous timeline twist; reveals Detective Mark Hoffman as Jigsaw's true secret mastermind apprentice.",
      postCredits:
        "Hoffman locks FBI Agent Peter Strahm in the operating room alongside the dead bodies of John, Amanda, and Lynn: 'Game over.'",
      charactersIntroduced: [
        "Detective Mark Hoffman (Secret Apprentice)",
        "Officer Daniel Rigg",
        "FBI Agent Peter Strahm",
        "FBI Agent Lindsey Perez",
        "Art Blank",
      ],
      prerequisites: ["saw-3"],
    },
    {
      id: "saw-5",
      title: "Saw V",
      type: "Movie",
      year: 2008,
      chronoYear: "2007",
      phase: "The Hoffman Succession",
      runtimeMinutes: 92,
      tier: "Supplementary",
      streamingOn: "Lionsgate Play",
      poster: "https://image.tmdb.org/t/p/w500/dPtLh3q51bL3m0h2q1l9y4A.jpg",
      synopsis:
        "Hoffman frames Strahm as Jigsaw's successor while testing five interconnected corrupt citizens in a collective survival trap. Strahm corners Hoffman inside a glass coffin room.",
      reason:
        "Flashbacks reveal how Hoffman killed Seth Baxter with a pendulum trap and was blackmailed into joining Kramer; Strahm is crushed to death by walls.",
      postCredits:
        "Hoffman lowers into the floor safe inside the glass coffin as Strahm is crushed flat.",
      charactersIntroduced: [
        "Seth Baxter",
        "Brit",
        "Mallick",
        "Charles",
        "Luba",
      ],
      prerequisites: ["saw-4"],
    },
    {
      id: "saw-6",
      title: "Saw VI",
      type: "Movie",
      year: 2009,
      chronoYear: "2007",
      phase: "The Final Revenge",
      runtimeMinutes: 90,
      tier: "Essential",
      streamingOn: "Lionsgate Play",
      poster: "https://image.tmdb.org/t/p/w500/dPtLh3q51bL3m0h2q1l9y4A.jpg",
      synopsis:
        "Health insurance executive William Easton is tested through his company's denial algorithms, while Jill Tuck delivers Kramer's final test for Hoffman: the updated Reverse Bear Trap.",
      reason:
        "Reveals Hoffman wrote the blackmail letter that forced Amanda to kill Lynn in Saw III; Jill traps Hoffman; Hoffman tears his cheek open to escape.",
      postCredits:
        "Hoffman screams in agony with a mangled face after prying the Reverse Bear Trap off the door bars.",
      charactersIntroduced: [
        "William Easton (Umbrella Health)",
        "Harold Abbott",
        "Pamela Jenkins",
      ],
      prerequisites: ["saw-5"],
    },
    {
      id: "saw-3d",
      title: "Saw 3D: The Final Chapter",
      type: "Movie",
      year: 2010,
      chronoYear: "2008",
      phase: "The Final Revenge",
      runtimeMinutes: 90,
      tier: "Essential",
      streamingOn: "Lionsgate Play",
      poster: "https://image.tmdb.org/t/p/w500/dPtLh3q51bL3m0h2q1l9y4A.jpg",
      synopsis:
        "As a deadly battle rages over Jigsaw's brutal legacy, a group of Jigsaw survivors seek the support of self-help guru Bobby Dagen, while Hoffman hunts Jill Tuck to the police precinct.",
      reason:
        "Dr. Lawrence Gordon is revealed as Jigsaw's ultimate guardian apprentice since Saw I; Gordon chains Hoffman in the original bathroom to die.",
      postCredits:
        "Dr. Gordon throws the hacksaw out of the bathroom and shuts the door on Hoffman: 'Game over.'",
      charactersIntroduced: [
        "Bobby Dagen (Fraudulent Jigsaw Survivor)",
        "Detective Matt Gibson",
        "Dr. Lawrence Gordon (Final Reveal)",
      ],
      prerequisites: ["saw-6"],
    },
    {
      id: "saw-jigsaw",
      title: "Jigsaw",
      type: "Movie",
      year: 2017,
      chronoYear: "2003 (Game 0) / 2017 (Present Investigation)",
      phase: "The Next Generation",
      runtimeMinutes: 92,
      tier: "Recommended",
      streamingOn: "Lionsgate Play",
      poster: "https://image.tmdb.org/t/p/w500/dPtLh3q51bL3m0h2q1l9y4A.jpg",
      synopsis:
        "Bodies turn up around the city, each having met a gruesome demise. All evidence points to one suspect: John Kramer, a man who has been dead for over a decade. Pathologist Logan Nelson is revealed as Kramer's first forgotten apprentice.",
      reason:
        "Reveals the barn game occurred before Saw 1; introduces Logan Nelson as the apprentice who helped build the original Reverse Bear Trap.",
      postCredits:
        "Logan slices Halloran's neck with laser collars and walks out: 'I speak for the dead.'",
      charactersIntroduced: [
        "Logan Nelson (First Apprentice)",
        "Detective Halloran",
        "Eleanor Bonneville",
      ],
      prerequisites: ["saw-3d"],
    },
    {
      id: "saw-spiral",
      title: "Spiral: From the Book of Saw",
      type: "Movie",
      year: 2021,
      chronoYear: "2021",
      phase: "The Next Generation",
      runtimeMinutes: 93,
      tier: "Recommended",
      streamingOn: "Lionsgate Play",
      poster: "https://image.tmdb.org/t/p/w500/dPtLh3q51bL3m0h2q1l9y4A.jpg",
      synopsis:
        "Working in the shadow of an esteemed police veteran, brash Detective Zeke Banks and his rookie partner William Schenk take charge of a grisly investigation into corrupt police murders that are eerily reminiscent of the city's gruesome past.",
      reason:
        "Copycat Jigsaw copy killer targets corrupt cops in Metro Police Department; introduces William Schenk as the Spiral Killer.",
      postCredits:
        "SWAT team shoots Marcus Banks while the Spiral killer escapes through the elevator.",
      charactersIntroduced: [
        "Detective Zeke Banks",
        "Marcus Banks (Samuel L. Jackson)",
        "William Schenk (The Spiral Copycat)",
      ],
      prerequisites: ["saw-jigsaw"],
    },
  ],
};
