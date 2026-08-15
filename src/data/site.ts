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
  { href: '#activities-and-food', heading: 'Activities & Food', label: 'Activities & Food' },
  { href: '#accommodation', heading: 'Accommodation', label: 'Accommodation' },
  { href: '#tickets', heading: 'Tickets', label: 'Tickets' },
  { href: '#good-to-know', heading: 'Good to Know', label: 'Good to Know' },
  { href: '#map-and-getting-there', heading: 'Map & Getting There', label: 'Directions' },
  { href: '#contact', heading: 'Contact', label: 'Contact' },
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
// Day-by-day schedule — drives the headline display at the top of the Acts section.
// size: sm = base, md = slightly bigger, lg = bigger again (poster billing hierarchy)
export type BillingSize = "sm" | "md" | "lg";

export interface BillingRow {
  acts: string[];
  size?: BillingSize;
}

export interface LineupDay {
  day: string;
  /** Optional intro line (e.g. Friday DJ-only evening) */
  intro?: string;
  live?: BillingRow[];
  djs?: BillingRow[];
}

export const lineupByDay: LineupDay[] = [
  {
    day: "Friday 21st August",
    intro: "An evening of DJ sets from:",
    djs: [
      { acts: ["GREGG", "MINT", "GRILLO"], size: "sm" },
      { acts: ["LANX", "DOMMO", "THE MILKMAN"], size: "md" },
    ],
  },
  {
    day: "Saturday 22nd August",
    live: [
      { acts: ["MAII", "MOONBIRD", "KIMOSABE"], size: "sm" },
      { acts: ["LIV SANGSTER", "FUKUSHIMA DOLPHIN"], size: "md" },
      { acts: ["NEBULA SUN", "THE GULLS"], size: "lg" },
    ],
    djs: [{ acts: ["JAMMA GOLD", "ROGAN JOSH", "AD:VERSE"], size: "sm" }],
  },
  {
    day: "Sunday 23rd August",
    live: [
      {
        acts: ["FREESPIRITS", "DARK HABIT", "MR TUMNUS", "HOWDO BEAN & THE DINOS"],
        size: "md",
      },
    ],
    djs: [
      { acts: ["STEVE PERRETT", "BOSON", "RIDDIM 'N RUM", "VIK", "PARTY MACHINE"], size: "sm" },
      { acts: ["VIRGIN VINYLS"], size: "lg" },
    ],
  },
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
    name: "Dark Habit",
    about:
      "Brighton-based duo playing keys, acoustic guitar, and singing upbeat sad songs.",
    style: "Acoustic / Indie Folk",
    photo: "photos_bands/band_dark_habit.jpeg",
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
  {
    name: "Freespirits",
    about:
      "London alternative band formed in 2013 by brothers GianCarlo and Lucas Mariani — heavy guitars, strong melodies, and stadium-sized choruses in the vein of Nirvana and Foo Fighters.",
    style: "Alternative / Rock / Grunge",
    spotify: "https://open.spotify.com/artist/0nPrFoUuwcB27aaf1qEOak",
    photo: "photos_bands/band_freespirits.jpeg",
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
export interface ActivityItem {
  text: string;
  /** One schedule line per day — rendered in muted grey under the title */
  times?: string[];
  /** Optional external link shown after the item text */
  link?: { href: string; label: string };
}

export interface ActivityCategory {
  id: string;
  emoji: string;
  title: string;
  accent: "green" | "yellow";
  items: ActivityItem[];
}

// Activity photo carousel — flat list (add more as photos land).
export const activityPhotos = [
  "photos_activities/kids_cinema.jpeg",
];

export const activityCategories: ActivityCategory[] = [
  {
    id: "entertainment",
    emoji: "🎸",
    title: "Entertainment",
    accent: "green",
    items: [
      { text: "Live music and DJS all weekend" },
      { text: "Acoustic Fireside Jamming" },
      { text: "Fire dancing performance" },
      { text: "Fire maze" },
    ],
  },
  {
    id: "kids",
    emoji: "🦕",
    title: "Kids",
    accent: "yellow",
    items: [
      { text: "Kids Cinema" },
      { text: "Kids Disco" },
      { text: "Bouncy Castle & Ball Pit" },
      { text: "Games & Treasure Hunt" },
      { text: "Arts & Crafts" },
    ],
  },
  {
    id: "wellbeing",
    emoji: "🧘",
    title: "Health & Wellbeing",
    accent: "yellow",
    items: [
      {
        text: "Yoga (Jenny) (free — please bring your own mat)",
        times: ["Sat 9am–10am", "Sun 9am–10am"],
        link: { href: "https://www.instagram.com/jennielive", label: "@jennielive" },
      },
      {
        text: "Meditation & sound bath (Jenny + Maggie)",
        times: ["Sat 10.30am–11.30am"],
      },
      {
        text: "Myofascial + movement (Maggie)",
        times: ["Sat 4pm–5pm"],
      },
      {
        text: "Stretching + breathwork (Maggie)",
        times: ["Sun 11am–12pm"],
      },
      {
        text: "Massage (Annabelle, on request) — £20 for 20 minutes, £40 for 40 minutes, please bring cash",
        times: [
          "Sat 12pm–3.45pm, 5.15pm–8pm",
          "Sun 12.15pm–4pm, 5pm–8pm",
        ],
      },
    ],
  },
  {
    id: "more",
    emoji: "🌿",
    title: "More Activities",
    accent: "green",
    items: [
      { text: "Woodfired Hot Tub" },
      { text: "Woodland walks" },
      { text: "Chillout spaces" },
    ],
  },
];

export interface CafeMenuSection {
  title: string;
  items: { emoji: string; text: string }[];
}

export const cafeBarMenu = {
  intro: "Fuel up at the on-site cafe and bar.",
  snacksNote: "Please bring a few snacks for out-of-hours eating.",
  cafeMenu: [
    {
      title: "Breakfast",
      items: [
        { emoji: "☕", text: "Tea & coffee" },
        { emoji: "🥓", text: "Bacon baps" },
        { emoji: "🌭", text: "Sausages…" },
      ],
    },
    {
      title: "Lunch / Dinner",
      items: [
        { emoji: "🌶️", text: "Chilli con carne" },
        { emoji: "🍔", text: "Burgers" },
        { emoji: "🍢", text: "Chicken kebabs" },
      ],
    },
    {
      title: "Vegetarian & vegan",
      items: [
        { emoji: "🧀", text: "Halloumi kebabs" },
        { emoji: "🌱", text: "Vegan sausages" },
        { emoji: "🍓", text: "Fresh strawberry & honey kefir" },
      ],
    },
  ] satisfies CafeMenuSection[],
  barMenuImage: "poster/bar_menu.jpeg",
};

// ── Good to Know ──────────────────────────────────────────
export interface GoodToKnowItem {
  emoji: string;
  text: string;
}

export interface GoodToKnowGroup {
  title: string;
  /** Plain text under the heading (not in an item box) */
  intro?: string;
  items: GoodToKnowItem[];
}

export const goodToKnowGroups: GoodToKnowGroup[] = [
  {
    title: 'Fire Safety',
    intro: 'Due to the current weather conditions, we ask for the following:',
    items: [
      { emoji: '🚫', text: 'No BBQs' },
      { emoji: '🚫', text: 'No camp fires' },
      { emoji: '✅', text: 'Camping stoves are allowed' },
    ],
  },
  {
    title: 'Camping & Parking',
    items: [
      { emoji: '👶', text: 'This is a family-friendly event — kids are very welcome.' },
      { emoji: '🐕', text: 'Dogs are welcome, but please keep them on a lead in the event spaces. £5 per dog.' },
      { emoji: '🚗', text: 'Parking is available on site, but not next to your tent.' },
      { emoji: '🚰', text: 'Drinking water is available across the site.' },
      { emoji: '🚿', text: 'Hot showers and baby changing facilities are free for all guests.' },
      { emoji: '🧼', text: 'Washing-up stations are available.' },
      { emoji: '⚡', text: 'Electric hookups (IEC 60309 blue plug) are available across the site for £30 for the weekend. You\'ll need a 3-pin mains adaptor — tokens available at the bar.' },
      { emoji: '🚘', text: 'Electric car charging can be arranged, but please don\'t use the campsite hookups as it will cause a power outage across the site.' },
    ],
  },
  {
    title: 'Bar & Food',
    items: [
      { emoji: '🍺', text: 'There\'s a great on-site bar — please support it. You\'re welcome to bring your own drinks for the campsite only.' },
      { emoji: '💵', text: 'Cards are accepted but cash is preferred. If you\'re attending massage, please bring cash to cover this.' },
    ],
  },
  {
    title: 'Wellness & Activities',
    items: [
      { emoji: '🧖', text: 'The wood-fired hot tub if free.  Children must be accompanied by an adult at all times.' },
      { emoji: '🧘', text: 'Yoga sessions are free (please bring your own mat if you\'d like to join in).' },
      { emoji: '💆', text: 'Massage — £20 for 20 minutes, £40 for 40 minutes, please bring cash.' },
    ],
  },
  {
    title: 'Recycling & Waste',
    items: [

      { emoji: '🚫', text: 'No glass anywhere on site — if you bring it, please take it home.' },
      { emoji: '♻️', text: 'Recycling facilities are available for tins, plastic, cardboard, and food waste. Where possible, please take waste from your own camping home with you.' },
    ],
  },
  {
    title: 'What to Pack',
    items: [
      { emoji: '🧥', text: 'Temperatures drop in the evenings - pack warm layers, extra blankets, and base layers for sleeping.' },
      { emoji: '🩱', text: 'Don\t forget your swimwear for the hot tub!' },
    ],
  },
];

// ── Opening times ─────────────────────────────────────────
export interface OpeningTime {
  label: string;
  /** One entry per line / day */
  times: string[];
  note?: string;
}

export const openingTimes: OpeningTime[] = [
  { label: "Site Open", times: ["Fri 12pm – Mon 12pm"] },
  {
    label: "Gate",
    times: [
      "Fri 12pm–6pm",
      "Sat 10am–6pm",
      "Sun closed",
    ],
    note: "If you're arriving outside these times, please let us know so we can make arrangements.",
  },
  { label: "Main Stage", times: ["Fri–Sun"] },
  {
    label: "Cafe",
    times: [
      "Fri 5pm–7pm",
      "Sat 9am–11am, 1pm–3pm, 5pm–7pm",
      "Sun 9am–11am, 1pm–3pm, 5pm–7pm",
    ],
  },
  { label: "Bar", times: ["Fri–Sun"] },
  { label: "Kids Disco", times: ["Fri 5pm–6pm"] },
  {
    label: "Kids Cinema",
    times: [
      "Fri 6pm–9pm",
      "Sat 6pm–9pm",
      "Sun 6pm–9pm",
    ],
  },
  { label: "Campfire & Hot Tub", times: ["Fri–Sun"] },
];

// ── Contact & newsletter ─────────────────────────────────
export const contactEmail = 'hello@lostinthegrass.org.uk';

export const newsletterSignupUrl =
  'https://1opxr.mjt.lu/wgt/1opxr/07us/form?c=1f5a6de2';

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
