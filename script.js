/* =====================================================================
   FULL TIME — script.js
   ---------------------------------------------------------------------
   Everything below LEAGUES..LINEUPS is SAMPLE data so the site works
   out of the box. To cover every league/team/player in the world with
   live, always-accurate numbers, swap the data layer for a live sports
   API (e.g. API-Football, football-data.org, Sportradar) — fetch into
   the same shapes used below and the rendering code needs no changes.
   ===================================================================== */

const YT_CHANNEL_URL = "https://www.youtube.com/channel/UCT98sz-MjvRILCEjTSjHM8A";
const YT_CHANNEL_ID = "UCT98sz-MjvRILCEjTSjHM8A";

/* ---------------------------------------------------------------------
   DATA
   ------------------------------------------------------------------ */
const LEAGUES = [
  { id: "PL",  name: "Premier League" },
  { id: "LL",  name: "La Liga" },
  { id: "UCL", name: "Champions League" }
];

const TEAMS = [
  // Premier League
  { id: "ars", name: "Arsenal", short: "ARS", league: "PL", color: "#EF3E42", stadium: "Emirates Stadium", city: "London", country: "England", founded: 1886, manager: "Mikel Arteta",
    players: [
      { num: 1, name: "David Raya", pos: "GK", nat: "ESP", age: 30, apps: 34, goals: 0, assists: 0 },
      { num: 4, name: "Ben White", pos: "DF", nat: "ENG", age: 27, apps: 31, goals: 1, assists: 4 },
      { num: 6, name: "Gabriel Magalhães", pos: "DF", nat: "BRA", age: 27, apps: 33, goals: 5, assists: 1 },
      { num: 8, name: "Martin Ødegaard", pos: "MF", nat: "NOR", age: 26, apps: 32, goals: 8, assists: 10 },
      { num: 7, name: "Bukayo Saka", pos: "FW", nat: "ENG", age: 23, apps: 35, goals: 15, assists: 11 },
      { num: 9, name: "Gabriel Jesus", pos: "FW", nat: "BRA", age: 28, apps: 27, goals: 9, assists: 5 }
    ]},
  { id: "mci", name: "Manchester City", short: "MCI", league: "PL", color: "#6CABDD", stadium: "Etihad Stadium", city: "Manchester", country: "England", founded: 1880, manager: "Pep Guardiola",
    players: [
      { num: 31, name: "Ederson", pos: "GK", nat: "BRA", age: 31, apps: 33, goals: 0, assists: 1 },
      { num: 5, name: "John Stones", pos: "DF", nat: "ENG", age: 31, apps: 24, goals: 1, assists: 1 },
      { num: 3, name: "Rúben Dias", pos: "DF", nat: "POR", age: 27, apps: 34, goals: 2, assists: 0 },
      { num: 17, name: "Kevin De Bruyne", pos: "MF", nat: "BEL", age: 34, apps: 26, goals: 6, assists: 12 },
      { num: 10, name: "Jack Grealish", pos: "FW", nat: "ENG", age: 29, apps: 28, goals: 5, assists: 7 },
      { num: 9, name: "Erling Haaland", pos: "FW", nat: "NOR", age: 25, apps: 33, goals: 27, assists: 5 }
    ]},
  { id: "liv", name: "Liverpool", short: "LIV", league: "PL", color: "#C8102E", stadium: "Anfield", city: "Liverpool", country: "England", founded: 1892, manager: "Arne Slot",
    players: [
      { num: 1, name: "Alisson", pos: "GK", nat: "BRA", age: 32, apps: 30, goals: 0, assists: 0 },
      { num: 4, name: "Virgil van Dijk", pos: "DF", nat: "NED", age: 34, apps: 34, goals: 3, assists: 1 },
      { num: 66, name: "Trent Alexander-Arnold", pos: "DF", nat: "ENG", age: 27, apps: 29, goals: 2, assists: 9 },
      { num: 3, name: "Dominik Szoboszlai", pos: "MF", nat: "HUN", age: 25, apps: 31, goals: 6, assists: 6 },
      { num: 11, name: "Mohamed Salah", pos: "FW", nat: "EGY", age: 32, apps: 35, goals: 22, assists: 13 },
      { num: 9, name: "Darwin Núñez", pos: "FW", nat: "URU", age: 26, apps: 29, goals: 11, assists: 4 }
    ]},
  { id: "che", name: "Chelsea", short: "CHE", league: "PL", color: "#034694", stadium: "Stamford Bridge", city: "London", country: "England", founded: 1905, manager: "Enzo Maresca",
    players: [
      { num: 1, name: "Robert Sánchez", pos: "GK", nat: "ESP", age: 27, apps: 28, goals: 0, assists: 0 },
      { num: 2, name: "Reece James", pos: "DF", nat: "ENG", age: 25, apps: 20, goals: 1, assists: 3 },
      { num: 6, name: "Levi Colwill", pos: "DF", nat: "ENG", age: 22, apps: 27, goals: 0, assists: 1 },
      { num: 8, name: "Enzo Fernández", pos: "MF", nat: "ARG", age: 24, apps: 33, goals: 4, assists: 6 },
      { num: 20, name: "Cole Palmer", pos: "FW", nat: "ENG", age: 22, apps: 34, goals: 20, assists: 11 },
      { num: 15, name: "Nicolas Jackson", pos: "FW", nat: "SEN", age: 23, apps: 31, goals: 14, assists: 5 }
    ]},
  { id: "mun", name: "Manchester United", short: "MUN", league: "PL", color: "#DA291C", stadium: "Old Trafford", city: "Manchester", country: "England", founded: 1878, manager: "Ruben Amorim",
    players: [
      { num: 24, name: "André Onana", pos: "GK", nat: "CMR", age: 29, apps: 32, goals: 0, assists: 0 },
      { num: 5, name: "Harry Maguire", pos: "DF", nat: "ENG", age: 32, apps: 26, goals: 3, assists: 0 },
      { num: 6, name: "Lisandro Martínez", pos: "DF", nat: "ARG", age: 27, apps: 18, goals: 1, assists: 0 },
      { num: 8, name: "Bruno Fernandes", pos: "MF", nat: "POR", age: 30, apps: 36, goals: 10, assists: 9 },
      { num: 10, name: "Marcus Rashford", pos: "FW", nat: "ENG", age: 27, apps: 29, goals: 8, assists: 5 },
      { num: 9, name: "Rasmus Højlund", pos: "FW", nat: "DEN", age: 22, apps: 25, goals: 9, assists: 3 }
    ]},
  { id: "tot", name: "Tottenham Hotspur", short: "TOT", league: "PL", color: "#132257", stadium: "Tottenham Hotspur Stadium", city: "London", country: "England", founded: 1882, manager: "Ange Postecoglou",
    players: [
      { num: 1, name: "Guglielmo Vicario", pos: "GK", nat: "ITA", age: 28, apps: 33, goals: 0, assists: 0 },
      { num: 4, name: "Cristian Romero", pos: "DF", nat: "ARG", age: 27, apps: 29, goals: 2, assists: 1 },
      { num: 3, name: "Destiny Udogie", pos: "DF", nat: "ITA", age: 22, apps: 27, goals: 1, assists: 4 },
      { num: 27, name: "Yves Bissouma", pos: "MF", nat: "MLI", age: 28, apps: 24, goals: 1, assists: 1 },
      { num: 10, name: "James Maddison", pos: "MF", nat: "ENG", age: 28, apps: 26, goals: 6, assists: 8 },
      { num: 9, name: "Son Heung-min", pos: "FW", nat: "KOR", age: 33, apps: 34, goals: 17, assists: 9 }
    ]},

  // La Liga
  { id: "rma", name: "Real Madrid", short: "RMA", league: "LL", color: "#FEBE10", stadium: "Santiago Bernabéu", city: "Madrid", country: "Spain", founded: 1902, manager: "Carlo Ancelotti",
    players: [
      { num: 1, name: "Thibaut Courtois", pos: "GK", nat: "BEL", age: 32, apps: 30, goals: 0, assists: 0 },
      { num: 4, name: "Éder Militão", pos: "DF", nat: "BRA", age: 27, apps: 22, goals: 1, assists: 0 },
      { num: 6, name: "Antonio Rüdiger", pos: "DF", nat: "GER", age: 32, apps: 32, goals: 2, assists: 1 },
      { num: 5, name: "Jude Bellingham", pos: "MF", nat: "ENG", age: 21, apps: 33, goals: 19, assists: 8 },
      { num: 11, name: "Rodrygo", pos: "FW", nat: "BRA", age: 24, apps: 34, goals: 12, assists: 9 },
      { num: 9, name: "Kylian Mbappé", pos: "FW", nat: "FRA", age: 26, apps: 32, goals: 26, assists: 6 }
    ]},
  { id: "fcb", name: "Barcelona", short: "BAR", league: "LL", color: "#A50044", stadium: "Estadi Olímpic Lluís Companys", city: "Barcelona", country: "Spain", founded: 1899, manager: "Hansi Flick",
    players: [
      { num: 1, name: "Marc-André ter Stegen", pos: "GK", nat: "GER", age: 32, apps: 27, goals: 0, assists: 0 },
      { num: 23, name: "Jules Koundé", pos: "DF", nat: "FRA", age: 26, apps: 33, goals: 1, assists: 3 },
      { num: 3, name: "Alejandro Balde", pos: "DF", nat: "ESP", age: 21, apps: 26, goals: 1, assists: 6 },
      { num: 21, name: "Frenkie de Jong", pos: "MF", nat: "NED", age: 27, apps: 25, goals: 2, assists: 4 },
      { num: 8, name: "Pedri", pos: "MF", nat: "ESP", age: 22, apps: 28, goals: 4, assists: 5 },
      { num: 9, name: "Robert Lewandowski", pos: "FW", nat: "POL", age: 36, apps: 32, goals: 23, assists: 6 }
    ]},
  { id: "atm", name: "Atlético Madrid", short: "ATM", league: "LL", color: "#CB3524", stadium: "Cívitas Metropolitano", city: "Madrid", country: "Spain", founded: 1903, manager: "Diego Simeone",
    players: [
      { num: 13, name: "Jan Oblak", pos: "GK", nat: "SVN", age: 31, apps: 34, goals: 0, assists: 0 },
      { num: 2, name: "José María Giménez", pos: "DF", nat: "URU", age: 29, apps: 26, goals: 2, assists: 0 },
      { num: 3, name: "César Azpilicueta", pos: "DF", nat: "ESP", age: 35, apps: 28, goals: 0, assists: 2 },
      { num: 8, name: "Saúl Ñíguez", pos: "MF", nat: "ESP", age: 30, apps: 20, goals: 1, assists: 1 },
      { num: 7, name: "Antoine Griezmann", pos: "FW", nat: "FRA", age: 33, apps: 35, goals: 18, assists: 10 },
      { num: 19, name: "Álvaro Morata", pos: "FW", nat: "ESP", age: 31, apps: 30, goals: 13, assists: 4 }
    ]},
  { id: "sev", name: "Sevilla", short: "SEV", league: "LL", color: "#D8232A", stadium: "Ramón Sánchez-Pizjuán", city: "Seville", country: "Spain", founded: 1890, manager: "García Pimienta",
    players: [
      { num: 13, name: "Ørjan Nyland", pos: "GK", nat: "NOR", age: 34, apps: 22, goals: 0, assists: 0 },
      { num: 24, name: "Loïc Badé", pos: "DF", nat: "FRA", age: 24, apps: 29, goals: 1, assists: 0 },
      { num: 3, name: "Marcão", pos: "DF", nat: "BRA", age: 27, apps: 25, goals: 1, assists: 0 },
      { num: 8, name: "Saúl", pos: "MF", nat: "ESP", age: 30, apps: 27, goals: 2, assists: 3 },
      { num: 10, name: "Isaac Romero", pos: "FW", nat: "ESP", age: 24, apps: 28, goals: 9, assists: 2 },
      { num: 19, name: "Dodi Lukébakio", pos: "FW", nat: "BEL", age: 27, apps: 30, goals: 8, assists: 5 }
    ]},
  { id: "rso", name: "Real Sociedad", short: "RSO", league: "LL", color: "#0067B1", stadium: "Reale Arena", city: "San Sebastián", country: "Spain", founded: 1909, manager: "Imanol Alguacil",
    players: [
      { num: 1, name: "Álex Remiro", pos: "GK", nat: "ESP", age: 30, apps: 33, goals: 0, assists: 0 },
      { num: 24, name: "Robin Le Normand", pos: "DF", nat: "ESP", age: 28, apps: 31, goals: 2, assists: 0 },
      { num: 3, name: "Igor Zubeldia", pos: "DF", nat: "ESP", age: 27, apps: 29, goals: 1, assists: 1 },
      { num: 8, name: "Mikel Merino", pos: "MF", nat: "ESP", age: 28, apps: 26, goals: 6, assists: 3 },
      { num: 7, name: "Takefusa Kubo", pos: "FW", nat: "JPN", age: 23, apps: 32, goals: 8, assists: 7 },
      { num: 9, name: "Mikel Oyarzabal", pos: "FW", nat: "ESP", age: 27, apps: 27, goals: 12, assists: 6 }
    ]},
  { id: "ath", name: "Athletic Bilbao", short: "ATH", league: "LL", color: "#EE2523", stadium: "San Mamés", city: "Bilbao", country: "Spain", founded: 1898, manager: "Ernesto Valverde",
    players: [
      { num: 1, name: "Unai Simón", pos: "GK", nat: "ESP", age: 27, apps: 33, goals: 0, assists: 0 },
      { num: 4, name: "Aitor Paredes", pos: "DF", nat: "ESP", age: 25, apps: 24, goals: 1, assists: 0 },
      { num: 24, name: "Dani Vivian", pos: "DF", nat: "ESP", age: 25, apps: 30, goals: 2, assists: 1 },
      { num: 10, name: "Óscar de Marcos", pos: "MF", nat: "ESP", age: 34, apps: 25, goals: 3, assists: 2 },
      { num: 7, name: "Nico Williams", pos: "FW", nat: "ESP", age: 22, apps: 33, goals: 11, assists: 12 },
      { num: 9, name: "Gorka Guruzeta", pos: "FW", nat: "ESP", age: 27, apps: 29, goals: 13, assists: 3 }
    ]},

  // Extra Champions League sides
  { id: "bay", name: "Bayern Munich", short: "BAY", league: "UCL", color: "#DC052D", stadium: "Allianz Arena", city: "Munich", country: "Germany", founded: 1900, manager: "Vincent Kompany",
    players: [
      { num: 1, name: "Manuel Neuer", pos: "GK", nat: "GER", age: 39, apps: 26, goals: 0, assists: 0 },
      { num: 2, name: "Dayot Upamecano", pos: "DF", nat: "FRA", age: 26, apps: 28, goals: 1, assists: 0 },
      { num: 4, name: "Min-jae Kim", pos: "DF", nat: "KOR", age: 28, apps: 25, goals: 1, assists: 0 },
      { num: 6, name: "Joshua Kimmich", pos: "MF", nat: "GER", age: 29, apps: 30, goals: 3, assists: 8 },
      { num: 10, name: "Leroy Sané", pos: "FW", nat: "GER", age: 29, apps: 29, goals: 12, assists: 9 },
      { num: 9, name: "Harry Kane", pos: "FW", nat: "ENG", age: 31, apps: 31, goals: 28, assists: 6 }
    ]},
  { id: "psg", name: "Paris Saint-Germain", short: "PSG", league: "UCL", color: "#004170", stadium: "Parc des Princes", city: "Paris", country: "France", founded: 1970, manager: "Luis Enrique",
    players: [
      { num: 1, name: "Gianluigi Donnarumma", pos: "GK", nat: "ITA", age: 25, apps: 29, goals: 0, assists: 0 },
      { num: 2, name: "Achraf Hakimi", pos: "DF", nat: "MAR", age: 26, apps: 30, goals: 4, assists: 8 },
      { num: 4, name: "Marquinhos", pos: "DF", nat: "BRA", age: 30, apps: 27, goals: 2, assists: 0 },
      { num: 17, name: "Vitinha", pos: "MF", nat: "POR", age: 24, apps: 32, goals: 5, assists: 7 },
      { num: 7, name: "Ousmane Dembélé", pos: "FW", nat: "FRA", age: 27, apps: 28, goals: 15, assists: 9 },
      { num: 9, name: "Randal Kolo Muani", pos: "FW", nat: "FRA", age: 25, apps: 26, goals: 10, assists: 4 }
    ]}
];

// Results (already-played matches) — used for Highlights, Scores, and Lineups
const RESULTS = [
  { id: "r1", league: "PL", date: "2026-07-28", home: "ars", away: "mci", hs: 2, as: 1, comp: "Matchweek 34" },
  { id: "r2", league: "PL", date: "2026-07-27", home: "liv", away: "che", hs: 3, as: 1, comp: "Matchweek 34" },
  { id: "r3", league: "PL", date: "2026-07-26", home: "tot", away: "mun", hs: 1, as: 1, comp: "Matchweek 34" },
  { id: "r4", league: "LL", date: "2026-07-28", home: "rma", away: "fcb", hs: 3, as: 2, comp: "Matchweek 32" },
  { id: "r5", league: "LL", date: "2026-07-27", home: "atm", away: "sev", hs: 2, as: 0, comp: "Matchweek 32" },
  { id: "r6", league: "LL", date: "2026-07-26", home: "ath", away: "rso", hs: 1, as: 1, comp: "Matchweek 32" },
  { id: "r7", league: "UCL", date: "2026-07-29", home: "rma", away: "bay", hs: 2, as: 2, comp: "Semi-final, 1st leg" },
  { id: "r8", league: "UCL", date: "2026-07-29", home: "mci", away: "psg", hs: 1, as: 0, comp: "Semi-final, 1st leg" }
];

// Fixtures (upcoming matches)
const FIXTURES = [
  { league: "PL", date: "2026-08-09", time: "15:00", home: "mci", away: "liv", comp: "Matchweek 35" },
  { league: "PL", date: "2026-08-09", time: "17:30", home: "che", away: "ars", comp: "Matchweek 35" },
  { league: "PL", date: "2026-08-10", time: "14:00", home: "mun", away: "tot", comp: "Matchweek 35" },
  { league: "LL", date: "2026-08-08", time: "21:00", home: "fcb", away: "atm", comp: "Matchweek 33" },
  { league: "LL", date: "2026-08-09", time: "19:00", home: "sev", away: "rma", comp: "Matchweek 33" },
  { league: "LL", date: "2026-08-09", time: "16:15", home: "rso", away: "ath", comp: "Matchweek 33" },
  { league: "UCL", date: "2026-08-05", time: "21:00", home: "bay", away: "rma", comp: "Semi-final, 2nd leg" },
  { league: "UCL", date: "2026-08-06", time: "21:00", home: "psg", away: "mci", comp: "Semi-final, 2nd leg" }
];

// Standings — precomputed sample table per league
const STANDINGS = {
  PL: [
    { team: "mci", p: 34, w: 24, d: 6, l: 4, gf: 78, ga: 30, form: ["W","W","D","W","W"] },
    { team: "ars", p: 34, w: 23, d: 7, l: 4, gf: 71, ga: 28, form: ["W","W","W","D","W"] },
    { team: "liv", p: 34, w: 22, d: 8, l: 4, gf: 74, ga: 33, form: ["W","D","W","W","L"] },
    { team: "che", p: 34, w: 19, d: 8, l: 7, gf: 65, ga: 40, form: ["L","W","W","D","W"] },
    { team: "tot", p: 34, w: 17, d: 9, l: 8, gf: 60, ga: 42, form: ["D","W","L","W","D"] },
    { team: "mun", p: 34, w: 15, d: 10, l: 9, gf: 52, ga: 45, form: ["D","L","W","D","W"] }
  ],
  LL: [
    { team: "rma", p: 32, w: 24, d: 5, l: 3, gf: 80, ga: 27, form: ["W","W","D","W","W"] },
    { team: "fcb", p: 32, w: 22, d: 6, l: 4, gf: 76, ga: 30, form: ["W","L","W","W","D"] },
    { team: "atm", p: 32, w: 19, d: 8, l: 5, gf: 61, ga: 32, form: ["W","W","D","L","W"] },
    { team: "ath", p: 32, w: 16, d: 9, l: 7, gf: 50, ga: 35, form: ["D","D","W","W","L"] },
    { team: "rso", p: 32, w: 14, d: 10, l: 8, gf: 47, ga: 38, form: ["L","D","W","D","W"] },
    { team: "sev", p: 32, w: 12, d: 9, l: 11, gf: 42, ga: 44, form: ["L","W","L","D","L"] }
  ],
  UCL: [
    { team: "rma", p: 12, w: 9, d: 2, l: 1, gf: 30, ga: 12, form: ["W","D","W","W","W"] },
    { team: "mci", p: 12, w: 8, d: 3, l: 1, gf: 27, ga: 11, form: ["W","W","W","D","W"] },
    { team: "bay", p: 12, w: 8, d: 2, l: 2, gf: 26, ga: 14, form: ["D","W","W","L","W"] },
    { team: "psg", p: 12, w: 7, d: 3, l: 2, gf: 24, ga: 15, form: ["W","L","W","W","D"] },
    { team: "ars", p: 12, w: 6, d: 4, l: 2, gf: 20, ga: 13, form: ["D","W","L","W","W"] },
    { team: "fcb", p: 12, w: 6, d: 3, l: 3, gf: 22, ga: 17, form: ["L","W","D","W","L"] }
  ]
};

// Lineups for selected results
const LINEUPS = [
  {
    matchId: "r1", label: "Arsenal 2–1 Man City",
    home: { team: "ars", formation: "4-3-3",
      starters: [
        { num: 1, name: "Raya", x: 50, y: 92 },
        { num: 4, name: "White", x: 84, y: 74 },
        { num: 6, name: "Gabriel", x: 62, y: 78 },
        { num: 12, name: "Saliba", x: 38, y: 78 },
        { num: 3, name: "Zinchenko", x: 16, y: 74 },
        { num: 5, name: "Rice", x: 50, y: 58 },
        { num: 8, name: "Ødegaard", x: 70, y: 44 },
        { num: 29, name: "Havertz", x: 30, y: 44 },
        { num: 7, name: "Saka", x: 84, y: 22 },
        { num: 9, name: "Jesus", x: 50, y: 14 },
        { num: 35, name: "Martinelli", x: 16, y: 22 }
      ],
      bench: [{ num: 21, name: "Neto" }, { num: 18, name: "Tomiyasu" }, { num: 41, name: "Nwaneri" }, { num: 15, name: "Jorginho" }]
    },
    away: { team: "mci", formation: "4-2-3-1",
      starters: [
        { num: 31, name: "Ederson", x: 50, y: 92 },
        { num: 2, name: "Walker", x: 84, y: 74 },
        { num: 3, name: "Dias", x: 62, y: 78 },
        { num: 5, name: "Stones", x: 38, y: 78 },
        { num: 27, name: "Akanji", x: 16, y: 74 },
        { num: 16, name: "Rodri", x: 62, y: 58 },
        { num: 8, name: "Gündoğan", x: 38, y: 58 },
        { num: 17, name: "De Bruyne", x: 78, y: 36 },
        { num: 47, name: "Foden", x: 50, y: 30 },
        { num: 10, name: "Grealish", x: 22, y: 36 },
        { num: 9, name: "Haaland", x: 50, y: 12 }
      ],
      bench: [{ num: 18, name: "Ortega" }, { num: 25, name: "Kovačić" }, { num: 20, name: "Álvarez" }, { num: 11, name: "Doku" }]
    }
  },
  {
    matchId: "r7", label: "Real Madrid 2–2 Bayern Munich",
    home: { team: "rma", formation: "4-3-3",
      starters: [
        { num: 1, name: "Courtois", x: 50, y: 92 },
        { num: 2, name: "Carvajal", x: 84, y: 74 },
        { num: 4, name: "Militão", x: 62, y: 78 },
        { num: 6, name: "Rüdiger", x: 38, y: 78 },
        { num: 23, name: "Mendy", x: 16, y: 74 },
        { num: 15, name: "Valverde", x: 50, y: 58 },
        { num: 5, name: "Bellingham", x: 70, y: 42 },
        { num: 8, name: "Camavinga", x: 30, y: 42 },
        { num: 11, name: "Rodrygo", x: 84, y: 20 },
        { num: 9, name: "Mbappé", x: 50, y: 12 },
        { num: 20, name: "Vinícius Jr.", x: 16, y: 20 }
      ],
      bench: [{ num: 26, name: "Lunin" }, { num: 10, name: "Modrić" }, { num: 19, name: "Ceballos" }, { num: 21, name: "Brahim" }]
    },
    away: { team: "bay", formation: "4-2-3-1",
      starters: [
        { num: 1, name: "Neuer", x: 50, y: 92 },
        { num: 22, name: "Laimer", x: 84, y: 74 },
        { num: 4, name: "Kim", x: 62, y: 78 },
        { num: 2, name: "Upamecano", x: 38, y: 78 },
        { num: 19, name: "Davies", x: 16, y: 74 },
        { num: 6, name: "Kimmich", x: 62, y: 58 },
        { num: 24, name: "Goretzka", x: 38, y: 58 },
        { num: 10, name: "Sané", x: 78, y: 36 },
        { num: 42, name: "Musiala", x: 50, y: 30 },
        { num: 7, name: "Coman", x: 22, y: 36 },
        { num: 9, name: "Kane", x: 50, y: 12 }
      ],
      bench: [{ num: 26, name: "Ulreich" }, { num: 8, name: "Pavlović" }, { num: 25, name: "Müller" }, { num: 14, name: "Olise" }]
    }
  }
];

/* ---------------------------------------------------------------------
   HELPERS
   ------------------------------------------------------------------ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const teamById = id => TEAMS.find(t => t.id === id);
const leagueName = id => (LEAGUES.find(l => l.id === id) || {}).name || id;

function fmtDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
}

function crest(team, size = "md") {
  if (!team) return "";
  return `<div class="crest crest-${size}" style="background:${team.color}">${team.short}</div>`;
}

function ytSearchUrl(query) {
  return `${YT_CHANNEL_URL}/search?query=${encodeURIComponent(query)}`;
}

/* ---------------------------------------------------------------------
   TICKER
   ------------------------------------------------------------------ */
function renderTicker() {
  const track = $("#tickerTrack");
  const items = [...RESULTS, ...RESULTS].map(r => {
    const home = teamById(r.home), away = teamById(r.away);
    return `<span class="tick-item">
      <span class="tick-live">FT</span>
      ${home.short} <span class="tick-score">${r.hs}-${r.as}</span> ${away.short}
      <span class="tick-dot"></span>
    </span>`;
  }).join("");
  track.innerHTML = items;
}

/* ---------------------------------------------------------------------
   HERO STATS
   ------------------------------------------------------------------ */
function renderHeroStats() {
  const totalPlayers = TEAMS.reduce((sum, t) => sum + t.players.length, 0);
  $("#heroStats").innerHTML = `
    <div class="stat-block"><span class="stat-num">${LEAGUES.length}</span><span class="stat-label">Leagues covered</span></div>
    <div class="stat-block"><span class="stat-num">${TEAMS.length}</span><span class="stat-label">Teams tracked</span></div>
    <div class="stat-block"><span class="stat-num">${totalPlayers}+</span><span class="stat-label">Players profiled</span></div>
  `;
}

/* ---------------------------------------------------------------------
   HIGHLIGHTS
   ------------------------------------------------------------------ */
function renderHighlights() {
  const grid = $("#highlightsGrid");
  grid.innerHTML = RESULTS.slice().reverse().map(r => {
    const home = teamById(r.home), away = teamById(r.away);
    const query = `${home.name} vs ${away.name} highlights`;
    return `
      <article class="hl-card">
        <a href="${ytSearchUrl(query)}" target="_blank" rel="noopener" class="hl-thumb" style="background:linear-gradient(135deg, ${home.color}33, ${away.color}33)">
          <span class="comp-badge">${leagueName(r.league)}</span>
          <span class="score-big">${home.short} ${r.hs}-${r.as} ${away.short}</span>
          <span class="play-btn">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </span>
        </a>
        <div class="hl-body">
          <p class="hl-teams">${home.name} vs ${away.name}</p>
          <p class="hl-meta">${r.comp} · ${fmtDate(r.date)}</p>
          <a class="hl-link" href="${ytSearchUrl(query)}" target="_blank" rel="noopener">Watch highlights →</a>
        </div>
      </article>`;
  }).join("");
}

/* ---------------------------------------------------------------------
   SCORES & FIXTURES
   ------------------------------------------------------------------ */
let currentScoresLeague = "PL";

function renderLeagueTabs() {
  const wrap = $("#leagueTabs");
  wrap.innerHTML = LEAGUES.map(l =>
    `<button class="tab-btn ${l.id === currentScoresLeague ? "active" : ""}" data-league="${l.id}" role="tab">${l.name}</button>`
  ).join("");
  wrap.addEventListener("click", e => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    currentScoresLeague = btn.dataset.league;
    $$(".tab-btn", wrap).forEach(b => b.classList.toggle("active", b === btn));
    renderResultsAndFixtures();
  });
}

function matchRow(item, isResult) {
  const home = teamById(item.home), away = teamById(item.away);
  const query = `${home.name} vs ${away.name} highlights`;
  return `
    <div class="match-row">
      <span class="m-date">${fmtDate(item.date)}</span>
      <div class="m-teams">
        <div class="m-team-line"><span>${home.name}</span>${isResult ? `<span class="m-score">${item.hs}</span>` : `<span class="m-time">${item.time}</span>`}</div>
        <div class="m-team-line"><span>${away.name}</span>${isResult ? `<span class="m-score">${item.as}</span>` : ""}</div>
      </div>
      ${isResult
        ? `<a class="m-watch" href="${ytSearchUrl(query)}" target="_blank" rel="noopener" aria-label="Watch highlights"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></a>`
        : `<span class="m-watch" style="color:var(--muted-dim)" aria-hidden="true">${item.comp.split(" ")[0]}</span>`}
    </div>`;
}

function renderResultsAndFixtures() {
  const results = RESULTS.filter(r => r.league === currentScoresLeague).slice().reverse();
  const fixtures = FIXTURES.filter(f => f.league === currentScoresLeague);
  $("#resultsList").innerHTML = results.length ? results.map(r => matchRow(r, true)).join("") : `<p class="section-sub">No recent results.</p>`;
  $("#fixturesList").innerHTML = fixtures.length ? fixtures.map(f => matchRow(f, false)).join("") : `<p class="section-sub">No fixtures scheduled.</p>`;
}

/* ---------------------------------------------------------------------
   STANDINGS
   ------------------------------------------------------------------ */
let currentStandingsLeague = "PL";

function renderStandingsTabs() {
  const wrap = $("#standingsTabs");
  wrap.innerHTML = LEAGUES.map(l =>
    `<button class="tab-btn ${l.id === currentStandingsLeague ? "active" : ""}" data-league="${l.id}" role="tab">${l.name}</button>`
  ).join("");
  wrap.addEventListener("click", e => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    currentStandingsLeague = btn.dataset.league;
    $$(".tab-btn", wrap).forEach(b => b.classList.toggle("active", b === btn));
    renderStandingsTable();
  });
}

function renderStandingsTable() {
  const rows = STANDINGS[currentStandingsLeague] || [];
  const qualifyCount = currentStandingsLeague === "UCL" ? 4 : 4;
  $("#standingsBody").innerHTML = rows.map((row, i) => {
    const team = teamById(row.team);
    const gd = row.gf - row.ga;
    const pts = row.w * 3 + row.d;
    const formDots = row.form.map(f => `<span class="form-dot ${f}"></span>`).join("");
    return `
      <tr class="${i < qualifyCount ? "qualify" : ""}">
        <td class="pos">${i + 1}</td>
        <td class="team-col"><div class="team-cell">${crest(team, "sm")}${team.name}</div></td>
        <td>${row.p}</td><td>${row.w}</td><td>${row.d}</td><td>${row.l}</td>
        <td>${row.gf}</td><td>${row.ga}</td><td>${gd > 0 ? "+" + gd : gd}</td>
        <td class="pts-col">${pts}</td>
        <td class="form-cell"><span class="form-dots">${formDots}</span></td>
      </tr>`;
  }).join("");
}

/* ---------------------------------------------------------------------
   TEAMS
   ------------------------------------------------------------------ */
let teamLeagueFilter = "all";
let teamSearchTerm = "";

function renderTeamLeagueTabs() {
  const wrap = $("#teamLeagueTabs");
  const opts = [{ id: "all", name: "All" }, ...LEAGUES];
  wrap.innerHTML = opts.map(l =>
    `<button class="tab-btn ${l.id === teamLeagueFilter ? "active" : ""}" data-league="${l.id}" role="tab">${l.name}</button>`
  ).join("");
  wrap.addEventListener("click", e => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    teamLeagueFilter = btn.dataset.league;
    $$(".tab-btn", wrap).forEach(b => b.classList.toggle("active", b === btn));
    renderTeamGrid();
  });
}

function renderTeamGrid() {
  const list = TEAMS.filter(t =>
    (teamLeagueFilter === "all" || t.league === teamLeagueFilter) &&
    t.name.toLowerCase().includes(teamSearchTerm.toLowerCase())
  );
  $("#teamGrid").innerHTML = list.map(t => `
    <button class="team-card" data-team="${t.id}">
      ${crest(t, "md")}
      <div>
        <p class="t-name">${t.name}</p>
        <p class="t-meta">${t.city}, ${t.country}</p>
      </div>
    </button>`).join("") || `<p class="section-sub">No teams match your search.</p>`;
}

function openTeamModal(teamId) {
  const t = teamById(teamId);
  if (!t) return;
  $("#modalBody").innerHTML = `
    <div class="modal-head">
      ${crest(t, "lg")}
      <div>
        <h3>${t.name}</h3>
        <p>${t.stadium} · ${t.city}, ${t.country}</p>
      </div>
    </div>
    <div class="modal-stats">
      <div class="modal-stat"><span class="num">${t.founded}</span><span class="lbl">Founded</span></div>
      <div class="modal-stat"><span class="num">${leagueName(t.league)}</span><span class="lbl">Competition</span></div>
      <div class="modal-stat"><span class="num">${t.manager.split(" ").pop()}</span><span class="lbl">Manager</span></div>
    </div>
    <p class="subs-title">Squad</p>
    <ul class="modal-list">
      ${t.players.map(p => `<li><span>#${p.num} ${p.name} <span class="pos-pill">${p.pos}</span></span><span>${p.nat}</span></li>`).join("")}
    </ul>
  `;
  openModal();
}

/* ---------------------------------------------------------------------
   PLAYERS
   ------------------------------------------------------------------ */
let playerSearchTerm = "";
let playerTeamFilter = "all";
let playerPosFilter = "all";

function allPlayers() {
  return TEAMS.flatMap(t => t.players.map(p => ({ ...p, teamId: t.id })));
}

function renderPlayerFilters() {
  const select = $("#playerTeamFilter");
  TEAMS.forEach(t => {
    const opt = document.createElement("option");
    opt.value = t.id;
    opt.textContent = t.name;
    select.appendChild(opt);
  });
}

function renderPlayerGrid() {
  const players = allPlayers().filter(p =>
    p.name.toLowerCase().includes(playerSearchTerm.toLowerCase()) &&
    (playerTeamFilter === "all" || p.teamId === playerTeamFilter) &&
    (playerPosFilter === "all" || p.pos === playerPosFilter)
  );
  $("#playerGrid").innerHTML = players.map(p => {
    const team = teamById(p.teamId);
    return `
      <button class="player-card" data-player="${p.teamId}|${p.num}">
        <span class="p-num">${p.num}</span>
        ${crest(team, "sm")}
        <div>
          <p class="p-name">${p.name}<span class="pos-pill">${p.pos}</span></p>
          <p class="p-meta">${team.name} · ${p.nat}</p>
        </div>
      </button>`;
  }).join("") || `<p class="section-sub">No players match your filters.</p>`;
}

function openPlayerModal(teamId, num) {
  const team = teamById(teamId);
  const p = team.players.find(pl => pl.num == num);
  if (!p) return;
  $("#modalBody").innerHTML = `
    <div class="modal-head">
      ${crest(team, "lg")}
      <div>
        <h3>${p.name}</h3>
        <p>${team.name} · #${p.num} · ${p.pos}</p>
      </div>
    </div>
    <div class="modal-stats">
      <div class="modal-stat"><span class="num">${p.apps}</span><span class="lbl">Appearances</span></div>
      <div class="modal-stat"><span class="num">${p.goals}</span><span class="lbl">Goals</span></div>
      <div class="modal-stat"><span class="num">${p.assists}</span><span class="lbl">Assists</span></div>
    </div>
    <ul class="modal-list">
      <li><span>Nationality</span><span>${p.nat}</span></li>
      <li><span>Age</span><span>${p.age}</span></li>
      <li><span>Club</span><span>${team.name}</span></li>
      <li><span>Position</span><span>${p.pos}</span></li>
    </ul>
  `;
  openModal();
}

/* ---------------------------------------------------------------------
   LINEUPS
   ------------------------------------------------------------------ */
let currentLineupIndex = 0;

function renderLineupTabs() {
  const wrap = $("#lineupMatchTabs");
  wrap.innerHTML = LINEUPS.map((l, i) =>
    `<button class="tab-btn ${i === currentLineupIndex ? "active" : ""}" data-idx="${i}" role="tab">${l.label}</button>`
  ).join("");
  wrap.addEventListener("click", e => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    currentLineupIndex = Number(btn.dataset.idx);
    $$(".tab-btn", wrap).forEach(b => b.classList.toggle("active", b === btn));
    renderLineup();
  });
}

function pitchPlayers(side, flip) {
  return side.starters.map(pl => {
    const y = flip ? 100 - pl.y : pl.y;
    return `
      <div class="pitch-player" style="left:${pl.x}%; top:${y}%" data-tooltip="${pl.name}">
        <span class="pitch-dot">${pl.num}</span>
        <span class="pitch-label">${pl.name}</span>
      </div>`;
  }).join("");
}

function renderLineup() {
  const match = LINEUPS[currentLineupIndex];
  const homeTeam = teamById(match.home.team);
  const awayTeam = teamById(match.away.team);

  $("#lineupWrap").innerHTML = `
    <div>
      <div class="pitch">
        ${pitchPlayers(match.home, false)}
        ${pitchPlayers(match.away, true)}
      </div>
    </div>
    <div class="lineup-side">
      <h3>${homeTeam.name} <span style="color:var(--muted)">(${match.home.formation})</span></h3>
      <p class="lineup-meta">${homeTeam.manager}</p>
      <p class="subs-title">Substitutes</p>
      <ul class="bench-list">
        ${match.home.bench.map(b => `<li><span class="b-num">${b.num}</span>${b.name}</li>`).join("")}
      </ul>

      <h3 style="margin-top:2rem">${awayTeam.name} <span style="color:var(--muted)">(${match.away.formation})</span></h3>
      <p class="lineup-meta">${awayTeam.manager}</p>
      <p class="subs-title">Substitutes</p>
      <ul class="bench-list">
        ${match.away.bench.map(b => `<li><span class="b-num">${b.num}</span>${b.name}</li>`).join("")}
      </ul>
    </div>
  `;
}

/* ---------------------------------------------------------------------
   MODAL
   ------------------------------------------------------------------ */
function openModal() { $("#modalBackdrop").classList.add("open"); }
function closeModal() { $("#modalBackdrop").classList.remove("open"); }

/* ---------------------------------------------------------------------
   NAV
   ------------------------------------------------------------------ */
function setupNav() {
  const toggle = $("#navToggle");
  const nav = $("#mainNav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });

  $$(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = $$("main > section, main");
  const links = $$(".nav-link");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${id}`));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id], main#home").forEach(sec => observer.observe(sec));
}

/* ---------------------------------------------------------------------
   EVENT DELEGATION
   ------------------------------------------------------------------ */
function setupDelegatedEvents() {
  $("#teamGrid").addEventListener("click", e => {
    const card = e.target.closest("[data-team]");
    if (card) openTeamModal(card.dataset.team);
  });

  $("#playerGrid").addEventListener("click", e => {
    const card = e.target.closest("[data-player]");
    if (card) {
      const [teamId, num] = card.dataset.player.split("|");
      openPlayerModal(teamId, num);
    }
  });

  $("#modalClose").addEventListener("click", closeModal);
  $("#modalBackdrop").addEventListener("click", e => {
    if (e.target.id === "modalBackdrop") closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });

  $("#teamSearch").addEventListener("input", e => {
    teamSearchTerm = e.target.value;
    renderTeamGrid();
  });

  $("#playerSearch").addEventListener("input", e => {
    playerSearchTerm = e.target.value;
    renderPlayerGrid();
  });
  $("#playerTeamFilter").addEventListener("change", e => {
    playerTeamFilter = e.target.value;
    renderPlayerGrid();
  });
  $("#playerPosFilter").addEventListener("change", e => {
    playerPosFilter = e.target.value;
    renderPlayerGrid();
  });
}

/* ---------------------------------------------------------------------
   INIT
   ------------------------------------------------------------------ */
function init() {
  $("#footerYear").textContent = new Date().getFullYear();

  renderTicker();
  renderHeroStats();
  renderHighlights();

  renderLeagueTabs();
  renderResultsAndFixtures();

  renderStandingsTabs();
  renderStandingsTable();

  renderTeamLeagueTabs();
  renderTeamGrid();

  renderPlayerFilters();
  renderPlayerGrid();

  renderLineupTabs();
  renderLineup();

  setupNav();
  setupDelegatedEvents();
}

document.addEventListener("DOMContentLoaded", init);
