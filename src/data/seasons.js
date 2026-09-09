import teamsData from './teams.json';

const seasons = [
  {
    id: "2026",
    year: 2026,
    title: "KPL 2026 - Season 2",
    description:
      "The second season of Kundalgarh Premier League — KPL Season 2 — raised the bar even higher with thrilling matches, outstanding individual performances, and a new champion crowned. Krishna Travels emerged victorious in a memorable final against MS DJ Sound, delivering unforgettable cricket moments for the entire village of Kundalgarh.",
    winner: "Krishna Travels",
    runnerUp: "MS DJ Sound",
    venue: "Kundalgarh Cricket Ground",
    teams: 8,
    teamsList: teamsData["2026"] || [],
    matches: 15,
    winnerImage: "/images/gallery/signal-2026-09-08-14-57-16-873_006.jpg",
    runnerUpImage: "/images/gallery/signal-2026-09-08-14-57-16-873.jpg",
    awards: {
      playerOfSeries: {
        name: "Dinesh Nath",
        team: "Krishna Travels",
        image: "/images/POTM-2026.jpg",
        description:
          "Dinesh Nath was the standout performer of KPL Season 2, consistently delivering match-winning performances with both bat and ball throughout the tournament. A well-deserved Player of the Tournament award.",
      },
      bestBatsman: {
        name: "Yuvraj Singh Rathore",
        team: "Krishna Travels",
        image: "/images/BEST-BETSMAN-2026.jpg",
        description:
          "Yuvraj Singh Rathore dominated the batting charts in KPL Season 2, playing some breathtaking innings that left spectators in awe. His elegant stroke play and consistency made him the undisputed Best Batsman of the tournament.",
      },
      bestBowler: {
        name: "Sunil Kalbeliya",
        team: "MS DJ Sound",
        image: "/images/best-bowler-2026.jpg",
        description:
          "Sunil Kalbeliya was a nightmare for batsmen throughout KPL Season 2, with his lethal deliveries and ability to pick up wickets at crucial moments earning him the Best Bowler award.",
      },
    },
    liveStreams: [
      {
        day: "Day 1",
        title: "KPL Season 2 — Day 1 Live Stream",
        url: "https://www.youtube.com/live/cZ6scaZdIRM?si=clcjQB6A-nGxgtd5",
        videoId: "cZ6scaZdIRM",
      },
      {
        day: "Day 2",
        title: "KPL Season 2 — Day 2 Live Stream",
        url: "https://www.youtube.com/live/KNMGcSMa6-0?si=Mv3KkHG2bews52N7",
        videoId: "KNMGcSMa6-0",
      },
      {
        day: "Day 3 (Finals)",
        title: "KPL Season 2 — Day 3 & Grand Finale Live Stream",
        url: "https://www.youtube.com/live/DMid4-imFfM?si=zTSpVRpnlPp7XIvl",
        videoId: "DMid4-imFfM",
      },
    ],
    gallery: [
      "/images/winner-2026-gallery.jpg",
      "/images/POTM-2026.jpg",
      "/images/BEST-BETSMAN-2026.jpg",
      "/images/best-bowler-2026.jpg",
      "/images/signal-2026-09-08-18-03-05-978_008.jpg",
      "/images/signal-2026-09-08-18-03-05-978_002.jpg",
      "/images/gallery/signal-2026-09-08-14-57-16-873_006.jpg",
      "/images/gallery/signal-2026-09-08-14-57-16-873_003.jpg",
      "/images/gallery/signal-2026-09-08-14-57-16-873_007.jpg",
      "/images/gallery/signal-2026-09-08-14-57-16-873_008.jpg",
      "/images/gallery/signal-2026-09-08-14-57-16-873_002.jpg",
      "/images/gallery/signal-2026-09-08-14-57-16-873.jpg",
      "/images/signal-2026-09-08-18-03-05-978_004.jpg",
      "/images/signal-2026-09-08-18-03-05-978_005.jpg",
      "/images/signal-2026-09-08-18-03-05-978_006.jpg",
      "/images/signal-2026-09-08-18-03-05-978_009.jpg",
    ],
  },
  {
    id: "2025",
    year: 2025,
    title: "KPL 2025 - Season 1",
    description:
      "The inaugural season of Kundalgarh Premier League — KPL Season 1 — marked the beginning of a grand cricketing tradition in Kundalgarh. Teams from the village and nearby areas came together for the first time to compete in an unforgettable tournament that will be remembered for years to come.",
    winner: "Kanak Building Materials",
    runnerUp: "Shree Janta Travels",
    venue: "Kundalgarh Cricket Ground",
    teams: 8,
    teamsList: teamsData["2025"] || [],
    matches: 15,
    winnerImage: "/images/2025-winner.jpg",
    runnerUpImage: "/images/signal-2026-09-08-16-31-46-835_003.jpg",
    awards: {
      playerOfSeries: {
        name: "To Be Updated",
        team: "Kanak Building Materials",
        image: "",
        description:
          "Player of the Series for KPL Season 1 (2025). Details will be updated soon.",
      },
      bestBatsman: {
        name: "To Be Updated",
        team: "To Be Updated",
        image: "",
        description:
          "Best Batsman of KPL Season 1 (2025). Details will be updated soon.",
      },
      bestBowler: {
        name: "To Be Updated",
        team: "To Be Updated",
        image: "/images/venue/cricket-ground.jpg",
        description:
          "Best Bowler of KPL Season 1 (2025). Details will be updated soon.",
      },
    },
    gallery: [
      "/images/2025-winner.jpg",
      "/images/signal-2026-09-08-16-31-46-835_002.jpg",
      "/images/signal-2026-09-08-16-31-46-835_003.jpg",
      "/images/venue/cricket-ground.jpg",
      "/images/hero/hero-bg.jpg",
    ],
  },
];

export default seasons;
