// ── Navigation / section headings ────────────────────────
// Single source of truth: heading drives the section h2; label drives the nav tab.
// Keep label short enough to fit the desktop nav bar.
export interface NavLink {
  href: string;
  /** Full heading rendered as the section h2 */
  heading: string;
  /** Nav bar label — may be an abbreviation of heading */
  label: string;
}

export const navLinks: NavLink[] = [
  { href: '#lineup', heading: 'Lineup', label: 'Lineup' },
  { href: '#venue', heading: 'Venue', label: 'Venue' },
  { href: '#whats-on', heading: 'Activities & Food', label: 'Activities & Food' },
  { href: '#accommodation', heading: 'Accommodation', label: 'Accommodation' },
  { href: '#tickets', heading: 'Tickets', label: 'Tickets' },
  { href: '#good-to-know', heading: 'Good to Know', label: 'Good to Know' },
  { href: '#map', heading: 'Map & Getting There', label: 'Map & Getting There' },
  { href: '#contact', heading: 'Get In Touch', label: 'Get In Touch' },
];

/** Keyed by section id (without #) for easy lookup in section components. */
export const sectionHeadings = Object.fromEntries(
  navLinks.map(l => [l.href.slice(1), l.heading])
) as Record<string, string>;

// ── Types ────────────────────────────────────────────────
export interface Act {
  name: string;
  about: string;
  style: string;
  spotify?: string;
  bandcamp?: string;
  photo?: string;
}

export interface DJ {
  name: string;
  location: string;
  style?: string;
  listen?: string;
}

// ── Lineup ───────────────────────────────────────────────
// Poster billing rows — drives the headline display in the Acts section
export const billingRows = [
  ["THE GULLS", "FUKUSHIMA DOLPHIN"],
  ["KIMOSABE", "NEBULA SUN", "LIV SANGSTER"],
  ["MAII", "MOONBIRD"],
  ["HOWDO BEAN & THE DINOS", "MR TUMNUS"],
];

export const mainActs: Act[] = [
  {
    name: "The Gulls",
    about:
      "Nomadic UK power quartet formed in Camden but based in Brighton, known for high-energy rock and DIY outdoor gigs on the road.",
    style: "Rock / Funk / Psychedelia",
    spotify: "https://open.spotify.com/artist/2n0FlGHc3OxI0x2WI39BEc",
    photo: "photos_bands/band_the_gulls.jpeg",
  },
  {
    name: "Fukushima Dolphin",
    about:
      "Brighton duo blending swirling guitars with driving rhythms and psychedelic production.",
    style: "Indie / Rock / Electronic",
    spotify: "https://open.spotify.com/artist/6AdQ6qTDQo6wPcBYJ6zQfj",
    photo: "photos_bands/band_fukushima_dolphin.jpeg",
  },
  {
    name: "Kimosabe",
    about:
      "Female-fronted band rooted in UK sound-system culture — regulars on the local festival circuit.",
    style: "Dub / Funk / Ska / Punk",
    photo: "photos_bands/band_kimosabe.jpeg",
  },
  {
    name: "Nebula Sun",
    about:
      "Norwich quintet with a distinctive double-tenor sax section and the DIY-recorded debut album Breathe Into Form.",
    style: "Progressive Rock / Jazz / Soul",
    spotify: "https://open.spotify.com/artist/3Swhpora4IpX5frCYZ9zaC",
    photo: "photos_bands/band_nebula_sun.jpeg",
  },
  {
    name: "Liv Sangster",
    about:
      "Brighton multi-instrumentalist releasing freestyle-driven material across voice, beatbox, and layered textures.",
    style: "Dream-pop / Hip-hop / Beatbox",
    spotify: "https://open.spotify.com/artist/4FCuIRaeCVFJEwfR9e9INY",
    photo: "photos_bands/band_liv_sangster.jpeg",
  },
  {
    name: "MAII & The Shenanigans",
    about:
      "Biarritz-born Brighton act blending dreamy trip-hop with rock energy and jazz-tinged, poetic songwriting.",
    style: "Trip-hop / Rock / Jazz",
    spotify: "https://open.spotify.com/artist/1HDDMpc2ncTw3eosYutXvs",
    photo: "photos_bands/band_maii_and_the_shenanigans.jpeg",
  },
  {
    name: "Moonbird",
    about:
      "Bristol duo building summery psychedelic electronica live with loops and synths. BBC Introducing showcase act.",
    style: "Psychedelic Electronica / Indie Electronic",
    spotify: "https://open.spotify.com/artist/5Xha2kjFXFMfvvaDwZmIuG",
    photo: "photos_bands/band_moonbird.jpeg",
  },
  {
    name: "Howdo Bean & The Dinos",
    about:
      "Scottish children's entertainment act with catchy dinosaur songs, dancing games, and costumed dinos joining the fun.",
    style: "Children's Music / Acoustic / Family",
    bandcamp: "https://howdobean.bandcamp.com",
    photo: "photos_bands/band_howdo_bean_and_the_dinos.jpeg",
  },
  {
    name: "Mr Tumnus",
    about:
      "St Albans solo project of Alex Thomas — atmospheric folk, prog, and post-rock honed over two decades.",
    style: "Folk / Prog / Post-rock / Ambient",
    bandcamp: "https://mrtumnus23.bandcamp.com",
    photo: "photos_bands/band_mr_tumnus.jpeg",
  },
];

export const djs: DJ[] = [
  {
    name: "Virgin Vinyls",
    location: "Brighton",
    style: "Funk / Disco / Rare Grooves",
    listen: "https://totallywiredradio.com/the-virgin-vinyls/",
  },
  { name: "Lanx", location: "Somerset", style: "Mod / Funk / Soul / Jazz" },
  { name: "Jamma Gold", location: "Somerset" },
  { name: "Dommo", location: "Bristol" },
  { name: "Steve Perrett", location: "Wiltshire" },
  { name: "AD:Verse", location: "Malvern" },
  { name: "Boson", location: "Coventry" },
  { name: "Riddim 'n Rum", location: "Brighton" },
  { name: "Milkman", location: "Surrey" },
  { name: "Grillo", location: "Brighton" },
  { name: "Rogan Josh", location: "London" },
  { name: "Mint", location: "Somerset" },
  { name: "Strike Daddy", location: "Brighton" },
];

// ── Venue photo carousel sections ────────────────────────
export const venuePhotoSections = [
  {
    label: 'Day',
    images: [
      "photos_venue/day_1.jpeg",
      "photos_venue/day_2.jpeg",
      "photos_venue/day_3.jpeg",
      "photos_venue/day_4.jpeg",
      "photos_venue/day_5.jpg",
      "photos_venue/day_6.jpeg",
    ],
  },
  {
    label: 'Night',
    images: [
      "photos_venue/night_1.jpg",
      "photos_venue/night_2.jpg",
      "photos_venue/night_3.jpeg",
      "photos_venue/night_4.jpeg",
      "photos_venue/night_5.jpeg",
      "photos_venue/night_6.jpeg",
      "photos_venue/night_7.jpg",
      "photos_venue/night_8.jpg",
      "photos_venue/night_9.jpg",
    ],
  },
  {
    label: 'Main Stage',
    images: [
      "photos_venue/main_stage_1.jpeg",
      "photos_venue/main_stage_2.jpeg",
      "photos_venue/main_stage_3.jpeg",
      "photos_venue/main_stage_4.jpeg",
    ],
  },
  {
    label: 'Bar',
    images: [
      "photos_venue/bar_1.jpeg",
      "photos_venue/bar_2.jpeg",
    ],
  },
  {
    label: 'Cafe',
    images: [
      "photos_venue/cafe_1.jpeg",
    ],
  },
  {
    label: 'Aerial',
    images: [
      "photos_venue/aerial_1.jpg",
      "photos_venue/aerial_2.jpeg",
    ],
  },
];

// ── Accommodation photo carousel sections ────────────────
export const accommodationPhotoSections = [
  {
    label: 'Glamping',
    images: [
      "photos_accom/glamping_1.jpeg",
      "photos_accom/glamping_2.jpeg",
      "photos_accom/glamping_3.jpeg",
      "photos_accom/glamping_4.jpeg",
      "photos_accom/glamping_5.jpeg",
      "photos_accom/glamping_6.jpeg",
      "photos_accom/glamping_7.jpg",
      "photos_accom/glamping_8.jpeg",
    ],
  },
  {
    label: 'Lunar tents',
    images: [
      "photos_accom/lunar_tent_1.jpeg",
      "photos_accom/lunar_tent_2.jpeg",
    ],
  },
  {
    label: 'Camping',
    images: [
      "photos_accom/camping_1.jpg",
      "photos_accom/camping_2.jpeg",
    ],
  },
];

// ── Activities & Food ─────────────────────────────────────
export interface ActivityCategory {
  id: string;
  emoji: string;
  title: string;
  accent: "green" | "yellow";
  items: string[];
}

export const activityCategories: ActivityCategory[] = [
  {
    id: "entertainment",
    emoji: "🎸",
    title: "Entertainment",
    accent: "green",
    items: [
      "Live music and DJS all weekend",
      "Acoustic Fireside Jamming",
      "Fire dancing performance",
      "Fire maze",
    ],
  },
  {
    id: "kids",
    emoji: "🦕",
    title: "Kids",
    accent: "yellow",
    items: [
      "Kids Cinema",
      "Kids Disco",
      "Bouncy Castle & Ball Pit",
      "Games & Treasure Hunt",
      "Arts & Crafts",
    ],
  },
  {
    id: "food",
    emoji: "🍽️",
    title: "Food",
    accent: "green",
    items: [
      "Tea & Coffee",
      "Fresh Smoothies",
      "Breakfast",
      "Delicious hot and cold food",
      "More details to follow...",
    ],
  },
  {
    id: "wellbeing",
    emoji: "🧘",
    title: "Health & Wellbeing",
    accent: "yellow",
    items: [
      "Woodfired Hot Tub",
      "Morning Yoga",
      "Sound bath",
      "Massage",
      "Woodland walks",
      "Chillout spaces",
    ],
  },
];

// ── Opening times ─────────────────────────────────────────
export const openingTimes = [
  { label: "Site Open", times: "Fri 12pm – Mon 12pm" },
  { label: "Main Stage", times: "Fri–Sun" },
  { label: "Café", times: "Sat–Sun Daily" },
  { label: "Bar", times: "Fri–Sat Afternoon–Late" },
  { label: "Kids Disco", times: "Fri" },
  { label: "Kids Cinema", times: "Fri–Sun" },
  { label: "Campfire & Hot Tub", times: "Fri–Sat Eve Till Late" },
];

// ── Directions ────────────────────────────────────────────
export const directions = [
  {
    from: "From M5",
    steps:
      "Junction 7 (Worcester South). Head towards Worcester. Left at first roundabout (signposted to Hereford). Left at fifth roundabout (A4103 signposted to Hereford). Continue along A4103 through Bransford, Leigh Sinton, Storridge. At the top of the steep hill turn right onto the B4220 for Bromyard. OTG is 1.4 miles on the left.",
  },
  {
    from: "From A49",
    steps:
      "At Leominster take A44 to Bromyard. Continue along A44 through Bromyard towards Worcester. 1 mile out of Bromyard turn right onto the B4220 for Malvern. Continue along B4220 for 4 miles, over the crossroads, up the hill and round the 90° left bend. OTG is on the right.",
  },
  {
    from: "From Hereford",
    steps:
      "Take the A4103 towards Worcester. Continue along A4103 for 15 miles through Fromes Hill. 2 miles out of Fromes Hill turn left onto the B4220 for Bromyard. OTG is 1.4 miles on the left.",
  },
];
