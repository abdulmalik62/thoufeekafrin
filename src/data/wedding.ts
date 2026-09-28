export const wedding = {
  groom: "Thoufeek",
  bride: "Afrin",
  date: "2026-10-21",
  displayDate: "21 October 2026",
  numericDate: "21 • 10 • 2026",
  venue: "Bride's House",
  receptionDate: "20.10.2026",
  weddingDate: "21.10.2026",
  credit: "Er. Abdul Malik B.E. MBA",
  family: [
    { role: "Big Brother", name: "Shahul Hameed" },
    { role: "Sister in Law", name: "Riswana" },
    { role: "Elder Sisters", name: "Muneera, Kathija" },
    { role: "Younger Brother", name: "Abdul Malik" },
    { role: "Younger Sister", name: "Ajeeba" },
  ],
  /**
   * Paste a Google Maps URL when it is ready.
   * Leave this empty — the site will not invent a location.
   */
  mapsUrl: "",
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
    invite: "invite you to celebrate their Nikah",
    storyTitle: "Our Beginning",
    story: "Two journeys, one beautiful beginning.",
    nikahTitle: "The Nikah",
    nikah:
      "With the blessings of our families and loved ones, we invite you to share in the joy of our Nikah.",
    countdownReached: "Today, the journey begins.",
    closing: "Your presence and duas are the greatest gifts.",
    bismillah: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    bismillahEn: "In the name of Allah, the Most Gracious, the Most Merciful",
    closingDua: "بَارَكَ اللَّهُ لَنَا وَبَارَكَ عَلَيْنَا",
    verseArabic: "وَخَلَقْنَاكُمْ أَزْوَاجًا",
    verseEnglish: "And We created you in pairs.",
    verseCitation: "Qur'an 78:8",
    rsvpTitle: "Will You Join Us?",
    mapsPending: "Directions will be shared personally.",
    locationNote: "Both gatherings will be held at the Bride's House.",
  },
  nav: [
    { id: "home", label: "Home" },
    { id: "story", label: "Our Story" },
    { id: "nikah", label: "Nikah" },
    { id: "details", label: "Details" },
    { id: "location", label: "Location" },
  ],
} as const;

export type RsvpChoice = "accept" | "maybe" | "decline";
