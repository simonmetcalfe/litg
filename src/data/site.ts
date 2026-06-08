// ── Types ────────────────────────────────────────────────
export interface Act {
  name: string;
  about: string;
  style: string;
  spotify?: string;
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
  ["RIDDIM 'N RUM"],
  ["HOWDO BEAN & THE DINOS", "MR TUMNUS"],
];

export const mainActs: Act[] = [
  {
    name: "The Gulls",
    about:
      "Nomadic UK power trio formed in Camden, known for high-energy rock and DIY outdoor gigs on the road.",
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
  },
  {
    name: "MAII",
    about:
      "Oxford five-piece known for twin drummers and kaleidoscopic live electronica.",
    style: "Electronic / Balearic / Post-rock",
    spotify: "https://open.spotify.com/artist/0mETWhuGnP7a4tLgwNTMAt",
  },
  {
    name: "Moonbird",
    about:
      "Bristol duo building summery psychedelic electronica live with loops and synths. BBC Introducing showcase act.",
    style: "Psychedelic Electronica / Indie Electronic",
    spotify: "https://open.spotify.com/artist/5Xha2kjFXFMfvvaDwZmIuG",
  },
  {
    name: "Riddim 'n Rum",
    about:
      "London funk/soul collective with a rotating cast of veteran session players.",
    style: "Funk / Soul / Latin / Jazz",
    spotify: "https://open.spotify.com/artist/6ipbFS4ZIfSabswGzJiIeR",
  },
  {
    name: "Howdo Bean & The Dinos",
    about: "More info coming soon.",
    style: "",
  },
  {
    name: "Mr Tumnus",
    about: "More info coming soon.",
    style: "",
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
  { name: "Milkman", location: "Surrey" },
  { name: "Grillo", location: "Brighton" },
  { name: "Rogan Josh", location: "London" },
  { name: "Mint", location: "Somerset" },
  { name: "Strike Daddy", location: "Brighton" },
];

// ── Venue photo carousel (curated selection) ─────────────
export const venuePhotos = [
  "photos_venue/main_stage1.jpeg",
  "photos_venue/main_stage2.jpeg",
  "photos_venue/main_stage3.jpeg",
  "photos_venue/main_stage4.jpeg",
  "photos_venue/main_stage5.jpeg",
  "photos_venue/fire_night.jpg",
  "photos_venue/fire_night2.jpg",
  "photos_venue/mals_bar.jpeg",
  "photos_venue/mals_bar2.jpeg",
  "photos_venue/site1.jpg",
  "photos_venue/site2.jpg",
  "photos_venue/site3.jpg",
  "photos_venue/night0.jpg",
  "photos_venue/night2.jpg",
  "photos_venue/sound_bites_cafe.jpeg",
];

// ── Accommodation photo carousel ─────────────────────────
export const accomPhotos = [
  "photos_accom/glamping1.jpg",
  "photos_accom/glamping2.jpg",
  "photos_accom/glamping3.jpg",
  "photos_accom/glamping4_king_pod.jpg",
  "photos_accom/glamping_interior1.jpg",
  "photos_accom/glamping_interior2.jpg",
  "photos_accom/glamping_interior3.jpg",
  "photos_accom/glamping_interior4.jpg",
  "photos_accom/glamping_interior5.jpg",
  "photos_accom/glamping_interior6.jpg",
  "photos_accom/glamping_interior7.jpg",
  "photos_accom/glamping_interior8.jpg",
];

// ── What's On ────────────────────────────────────────────
export const whatsOnGeneral = [
  { icon: "icons_fun/img_stage.png",  label: "Live Music All Weekend" },
  { icon: "icons_fun/imge_bar.png",   label: "Bar" },
  { icon: "icons_fun/img_tent.png",   label: "Camping" },
  { icon: "icons_fun/img_tent2.png",  label: "Glamping" },
  { icon: "icons_fun/img_pool.png",   label: "Woodfired Hot Tub" },
  { icon: "icons_fun/img_piano.png",  label: "Acoustic Fireside Jamming" },
];

export const whatsOnExtra = [
  "Delicious Café & Food",
  "Wellbeing Area — Yoga & Massage",
  "Fire Show & Maze Each Night",
];

export const whatsOnKids = [
  "Cinema & Disco",
  "Bouncy Castle & Ball Pit",
  "Games & Treasure Hunt",
  "Arts & Crafts",
];

// ── Opening times ─────────────────────────────────────────
export const openingTimes = [
  { label: "Site Open",         times: "Fri 12pm – Mon 12pm" },
  { label: "Main Stage",        times: "Fri–Sat 12pm–12am" },
  { label: "Café",              times: "Sat–Sun Daily" },
  { label: "Bar",               times: "Fri–Sat Afternoon–Late" },
  { label: "Kids Events",       times: "Fri–Sun Daily" },
  { label: "Kids Disco",        times: "Fri 5–6pm" },
  { label: "Kids Cinema",       times: "Fri–Sun 6–9pm" },
  { label: "Campfire & Hot Tub",times: "Fri–Sat Eve Till Late" },
];

// ── Good to Know ─────────────────────────────────────────
export const goodToKnow = [
  "Kid friendly & dogs welcome (£5 per dog)",
  "Quiet / family camping available",
  "Card accepted",
  "Car parking only in designated car park",
  "Alcohol allowed in campsite only — no glass",
  "Café serving breakfast, sandwiches, chips, curry & kebab (vegan / kids options)",
  "Baby changing & hot showers included (free)",
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
