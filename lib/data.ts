export type Item = {
  id: string;
  title: string;
  emoji: string;
  from: string;
  to: string;
  price: number;
  category: "Animals" | "Cyber" | "Fantasy" | "Vehicles";
  artist: string;
  collection: string;
  likes: number;
  endsIn: number; // seconds
  description: string;
};

export const items: Item[] = [
  { id: "dayco-serpentine-belt", title: "Dayco serpentine belt", emoji: "🐺", from: "#3a4a5c", to: "#e9825a", price: 0.34, category: "Vehicles", artist: "Mira Volkov", collection: "Moto Tribes", likes: 214, endsIn: 7472, description: "A lone wolf rider crossing the dusty badlands on a hand-built café racer. Part of the Moto Tribes genesis drop." },
  { id: "owl-courier", title: "Owl courier", emoji: "🦉", from: "#2b3a55", to: "#b97a56", price: 0.52, category: "Animals", artist: "Leo Hartmann", collection: "Moto Tribes", likes: 189, endsIn: 11890, description: "Night deliveries, silent wings. The owl courier never misses a drop-off." },
  { id: "panda-cruiser", title: "Panda cruiser", emoji: "🐼", from: "#1f4d4a", to: "#c8445a", price: 0.41, category: "Vehicles", artist: "Ayo Bankole", collection: "Moto Tribes", likes: 302, endsIn: 3620, description: "Bamboo-powered, chrome-plated. A relaxed ride through neon rain." },
  { id: "polar-vespa", title: "Polar vespa", emoji: "🐻‍❄️", from: "#6c8ea4", to: "#e8b27a", price: 0.29, category: "Animals", artist: "Mira Volkov", collection: "Frozen Streets", likes: 98, endsIn: 21400, description: "A polar bear taking a vintage scooter out for its morning errands." },
  { id: "corgi-sidecar", title: "Corgi sidecar", emoji: "🐕", from: "#355c4f", to: "#f0a35e", price: 0.65, category: "Animals", artist: "Sana Ito", collection: "Frozen Streets", likes: 421, endsIn: 5210, description: "Small legs, big engine. The corgi sidecar is a community favourite." },
  { id: "shark-rider", title: "Shark rider", emoji: "🦈", from: "#2a5470", to: "#d9728f", price: 0.88, category: "Fantasy", artist: "Leo Hartmann", collection: "Deep Wheels", likes: 276, endsIn: 14300, description: "From the deep trench straight onto the asphalt. Rare mint, only 20 minted." },
  { id: "elephant-tourer", title: "Elephant tourer", emoji: "🐘", from: "#5a4a63", to: "#d96b6b", price: 1.2, category: "Vehicles", artist: "Ayo Bankole", collection: "Deep Wheels", likes: 512, endsIn: 9020, description: "Heavy-duty touring with room for everything. A grail piece of the series." },
  { id: "cyber-fox", title: "Cyber fox", emoji: "🦊", from: "#2d2a5e", to: "#33d6c5", price: 0.47, category: "Cyber", artist: "Sana Ito", collection: "Neon Fauna", likes: 167, endsIn: 17800, description: "Circuits under the fur, light trails behind the wheel." },
  { id: "robo-tiger", title: "Robo tiger", emoji: "🐯", from: "#3d2a4a", to: "#ffb347", price: 0.73, category: "Cyber", artist: "Kenji Mori", collection: "Neon Fauna", likes: 233, endsIn: 6400, description: "Forged in the neon district. Stripes that glow at 2 a.m." },
  { id: "dragon-flight", title: "Dragon flight", emoji: "🐉", from: "#4a2438", to: "#7ee08a", price: 1.55, category: "Fantasy", artist: "Kenji Mori", collection: "Ember Realm", likes: 640, endsIn: 2800, description: "An ember-scaled dragon, caught mid-flight over the realm." },
  { id: "unicorn-drift", title: "Unicorn drift", emoji: "🦄", from: "#4b3a7a", to: "#ff9ad5", price: 0.96, category: "Fantasy", artist: "Mira Volkov", collection: "Ember Realm", likes: 355, endsIn: 12600, description: "Pastel smoke and perfect drifts. The unicorn rewrites the rules of the track." },
  { id: "frog-hopper", title: "Frog hopper", emoji: "🐸", from: "#1f5a3a", to: "#e6e05c", price: 0.22, category: "Animals", artist: "Sana Ito", collection: "Neon Fauna", likes: 74, endsIn: 25100, description: "Hop-on, hop-off. A friendly entry-level piece for new collectors." },
];

export const heroItems = items.slice(0, 7);

export const artists = [
  { name: "Mira Volkov", handle: "@mira", emoji: "🧑‍🎨", sales: 128, followers: "12.4K", color: "#c6f432" },
  { name: "Leo Hartmann", handle: "@leoh", emoji: "👨‍🎤", sales: 96, followers: "9.8K", color: "#7c83ff" },
  { name: "Ayo Bankole", handle: "@ayob", emoji: "🧑‍🚀", sales: 87, followers: "8.1K", color: "#ff8a5c" },
  { name: "Sana Ito", handle: "@sanaito", emoji: "👩‍💻", sales: 143, followers: "15.2K", color: "#33d6c5" },
  { name: "Kenji Mori", handle: "@kmori", emoji: "🥷", sales: 71, followers: "6.7K", color: "#ff9ad5" },
  { name: "Ines Duarte", handle: "@inesd", emoji: "🧙‍♀️", sales: 55, followers: "5.3K", color: "#ffd166" },
];

export const collections = [
  { slug: "moto-tribes", name: "Moto Tribes", items: 4, floor: 0.29, volume: "1,240", emojis: ["🐺", "🦉", "🐼"], from: "#2b3a55", to: "#e9825a" },
  { slug: "frozen-streets", name: "Frozen Streets", items: 2, floor: 0.29, volume: "860", emojis: ["🐻‍❄️", "🐕"], from: "#355c6f", to: "#9bd1e5" },
  { slug: "deep-wheels", name: "Deep Wheels", items: 2, floor: 0.88, volume: "2,010", emojis: ["🦈", "🐘"], from: "#2a4470", to: "#d9728f" },
  { slug: "neon-fauna", name: "Neon Fauna", items: 3, floor: 0.22, volume: "970", emojis: ["🦊", "🐯", "🐸"], from: "#2d2a5e", to: "#33d6c5" },
  { slug: "ember-realm", name: "Ember Realm", items: 2, floor: 0.96, volume: "3,420", emojis: ["🐉", "🦄"], from: "#4a2438", to: "#ffb347" },
  { slug: "pixel-orbit", name: "Pixel Orbit", items: 0, floor: 0.15, volume: "310", emojis: ["🚀", "👾", "🪐"], from: "#1b2a4a", to: "#7c83ff" },
];

export const posts = [
  { slug: "how-to-buy-your-first-digital-art", title: "How to buy your first piece of digital art", date: "Oct 12, 2026", read: "6 min", tag: "Guide", emoji: "🎨", from: "#4b3a7a", to: "#ff9ad5", excerpt: "Wallets, gas fees, listings and bids — everything a newcomer needs to know before placing a first bid.", body: ["Buying digital art is easier than it looks. You need three things: a wallet, a little crypto, and a piece you actually love.", "Start by connecting a wallet from the top-right button. Once connected, browse the Explore page and filter by category or price. Every card shows the live countdown to the end of the auction.", "When you find something you like, open the item page and place a bid. If you are outbid, you get your funds back automatically — nothing is locked up.", "Our advice: start small, follow the artists you like, and never spend more than you are comfortable losing."] },
  { slug: "artist-spotlight-mira-volkov", title: "Artist spotlight: Mira Volkov", date: "Oct 3, 2026", read: "4 min", tag: "Interview", emoji: "🧑‍🎨", from: "#2b3a55", to: "#e9825a", excerpt: "We sat down with the creator of the Moto Tribes series to talk process, inspiration and what comes next.", body: ["Mira started the Moto Tribes series as a sketchbook joke: what if every animal had a motorbike?", "Two years and 128 sales later, the series is one of the most collected on the platform.", "“I paint on a tablet but I think in clay,” she says. “Every character starts as a small sculpture in my head.”", "Next up: a collaboration with two other artists from the platform, dropping in winter."] },
  { slug: "understanding-royalties", title: "Understanding royalties on secondary sales", date: "Sep 24, 2026", read: "5 min", tag: "Education", emoji: "📈", from: "#1f4d4a", to: "#c6f432", excerpt: "Why creators earn on every resale and how the percentage is set at mint time.", body: ["Royalties let artists keep earning when their work changes hands.", "The percentage is set when the piece is minted and enforced by the marketplace contract.", "Typical values range from 2.5% to 10%. Higher royalties are not always better — they can slow down trading.", "As a collector, check the royalty on the item page before bidding."] },
  { slug: "new-drop-neon-fauna", title: "New drop: Neon Fauna is live", date: "Sep 10, 2026", read: "3 min", tag: "News", emoji: "🦊", from: "#2d2a5e", to: "#33d6c5", excerpt: "Three artists, eleven pieces, one neon-soaked jungle. Here is what you can collect today.", body: ["Neon Fauna is a collective series by Sana Ito, Kenji Mori and Leo Hartmann.", "Each piece blends hand-drawn fur textures with glowing circuitry.", "The drop runs for seven days and all auctions start at 0.20."] },
  { slug: "safety-tips-for-collectors", title: "10 safety tips for collectors", date: "Aug 29, 2026", read: "7 min", tag: "Guide", emoji: "🛡️", from: "#3d2a4a", to: "#ffb347", excerpt: "Phishing, fake listings and wallet hygiene: keep your collection safe.", body: ["Never share your seed phrase — with anyone, ever.", "Double-check the URL before connecting your wallet.", "Use a separate wallet for minting and for long-term storage.", "If an offer looks too good to be true, it is."] },
  { slug: "the-future-of-digital-ownership", title: "The future of digital ownership", date: "Aug 15, 2026", read: "8 min", tag: "Opinion", emoji: "🔮", from: "#4a2438", to: "#7ee08a", excerpt: "From collectibles to credentials: where verifiable ownership goes next.", body: ["Digital ownership is moving beyond art.", "Tickets, memberships and credentials are all candidates for on-chain proof.", "The common thread: portability. Your items follow you, not the platform."] },
];

export const faqs = [
  { q: "How do I start collecting?", a: "Connect a wallet with the button in the header, add some funds, then open any item and place a bid or buy it instantly." },
  { q: "What fees do you charge?", a: "A flat 2% marketplace fee on each sale, plus network fees. Creators set their own royalty from 0 to 10%." },
  { q: "Can I list my own artwork?", a: "Yes. Create a profile, upload your piece and choose between fixed price or timed auction. Review takes under 24 hours." },
  { q: "Which wallets are supported?", a: "All the major browser and mobile wallets. You can pick one from the connect dialog." },
];

export const fmtTime = (s: number) => {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  return `${h}h ${m}m ${sec}s`;
};
