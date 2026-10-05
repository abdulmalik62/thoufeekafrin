export const wedding = {
  groom: "Thoufeek Jailane M",
  bride: "Aafrin O.S",
  displayGroom: "Thoufeek",
  displayBride: "Aafrin",
  groomParents: "S/o Mohideen Pillai & Firthouse",
  brideParents: "D/o Syed Ahmed Sahib & Jahanara",
  date: "2026-10-21",
  displayDate: "21 October 2026",
  numericDate: "21 • 10 • 2026",
  venue: "Middle Ayyapuram Street, Naina Mohamed Jumma Masjid, Kadayanallur",
  weddingDate: "21.10.2026",
  nikahTime: "10:00 AM - 12:00 PM",
  hijriDate: "10 Jumadal-Awwal 1448 AH",
  valimaVenue: "Groom's House",
  credit: "Er. Abdul Malik B.E.MBA",
  family: [
    { role: "Brother - Sister in Law", members: ["Shahul Hameed - Rizwana"] },
    { role: "Sisters - Brothers-in-law", members: ["Muneera - Mohamed Ali", "Kathija - Jamal Mohideen"] },
    { role: "Brother", members: ["Abdul Malik"] },
    { role: "Sister", members: ["Ajeeba Mumtaj"] },
    { role: "Children", members: ["Riza, Mufeed, Afsheen, Rifqa, Bahiya"] },
  ],
  /**
   * Paste a Google Maps URL when it is ready.
   * Leave this empty — the site will not invent a location.
   */
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Middle%20Ayyapuram%20Street%2C%20Naina%20Mohamed%20Jumma%20Masjid%2C%20Kadayanallur",
  /**
   * Optional POST endpoint. While empty, RSVP choices stay in the page only.
   */
  rsvpEndpoint: "",
  /**
   * Song played when the invitation opens.
   * Put the file at public/music.mp3 — the address below is /music.mp3.
   * If that file is missing, a soft tone plays instead.
   * Set audioEnabled to false to remove music entirely.
   */
  audioSrc: "/music.mp3",
  audioEnabled: true,
  copy: {
    families: "Together with their families",
    invite: "invite you to celebrate their Nikkah",
    storyTitle: "Our Beginning",
    story: "Two journeys, one beautiful beginning.",
    nikahTitle: "The Nikkah",
    nikah:
      "With the blessings of our families and loved ones, we invite you to share in the joy of our Nikkah.",
    countdownReached: "Today, the journey begins.",
    closing: "Your presence and duas are the greatest gifts.",
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    bismillahEn: "In the name of Allah, the Most Gracious, the Most Merciful",
    closingDua:"بَارَكَ اللَّهُ لَكَ، وَبَارَكَ عَلَيْكَ، وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
    closingDuaEn:"May Allah bless you, and shower His blessings upon you, and join you together in goodness",
    verseArabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
    verseEnglish: "And We created you in pairs.",
    verseCitation: "Qur'an 78:8",
    closingduaCitation: "Abu Dawood 2130",
    rsvpTitle: "Will You Join Us?",
    mapsPending: "Directions will be shared personally.",
    locationNote: "The Nikkah will be held at the address above.",
  },
  nav: [
    { id: "home", label: "Home" },
    { id: "story", label: "Our Story" },
    { id: "nikah", label: "Nikkah" },
    { id: "details", label: "Details" },
    { id: "location", label: "Location" },
  ],
} as const;

export type RsvpChoice = "accept" | "maybe" | "decline";
