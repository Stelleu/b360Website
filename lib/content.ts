export const navItems = [
  { label: "Who We Are", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Vision", href: "#vision" },
  { label: "Team", href: "#team" },
  { label: "Talents", href: "#talents" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  kicker: "Talent Agency · DRC × USA",
  title: "B360 — African Talent, Built for the Global Stage",
  titleLines: ["B360", "African Talent,", "Built for the", "Global Stage"],
  subtitle: "From African roots to the global stage",
  primaryCta: "Discover Our Talents",
  secondaryCta: "Contact Us",
};

export const about = {
  index: "01",
  title: "Who We Are",
  lead: "B360 is a talent agency specializing in African markets, with deep roots in the Democratic Republic of Congo.",
  paragraphs: [
    "Founded by Yacine Fylla and Anthony Myers, two former basketball players who first met and played together at Charis Prep, the agency was born from a shared conviction: African talent deserves world-class infrastructure, representation and opportunity.",
    "What started as a friendship on the court became a transatlantic platform — connecting athletes and artists from Kinshasa to the NBA, from African stages to global audiences.",
    "Today B360 operates as a complete ecosystem. We do not simply place talent. We build the conditions around it — development, brand, business, and the quiet work that lets excellence travel.",
  ],
  quote:
    "Two players. One court. A belief that African talent belongs on the global stage.",
  stats: [
    { value: "DRC", label: "Home base" },
    { value: "USA", label: "Global corridor" },
    { value: "360°", label: "Ecosystem" },
  ],
};

export const services = {
  index: "02",
  title: "Beyond Representation",
  intro:
    "Our role is to build the ecosystem around the talent — not simply represent the talent.",
  items: [
    {
      title: "Talent Representation",
      copy: "End-to-end representation for athletes and artists, built for the long game — not the highlight reel.",
    },
    {
      title: "Sports Management",
      copy: "Contracts, careers and competitive pathways across continents, with the discipline of former players.",
    },
    {
      title: "Marketing & Brand Development",
      copy: "Identity, narrative and partnerships that turn a name into a brand the world can feel.",
    },
    {
      title: "Investment & Business Opportunities",
      copy: "Structures that create durable value around the athlete, the brand and the business.",
    },
    {
      title: "Concierge Services",
      copy: "Travel, logistics and life off the court — so focus stays where it belongs.",
    },
    {
      title: "Player Development — On & Off the Court",
      copy: "Performance, education and character. The full human, not just the stat line.",
    },
    {
      title: "International Career Management",
      copy: "From African leagues to global stages — the right doors, at the right time.",
    },
  ],
};

export const vision = {
  index: "03",
  title: "Our Vision",
  lines: [
    "We believe Africa is home to some of the world's most extraordinary talent.",
    "Our mission is to create the infrastructure, relationships and opportunities that allow that talent to reach its full potential — while building sustainable value around the athlete, the brand and the business.",
  ],
  slogan: [
    "Discover.",
    "Develop.",
    "Connect.",
    "Represent.",
    "Invest.",
  ],
};

export const team = {
  index: "04",
  title: "The Team",
  intro: "Players first. Builders always. A transatlantic bench with one standard.",
  members: [
    {
      name: "Yacine Fylla",
      title: "Founder",
      bio: "Former player and architect of B360. He builds the African infrastructure, the culture, and the long view.",
    },
    {
      name: "Afi Kolokey",
      title: "CEO DRC",
      bio: "Leads operations on the ground in the Democratic Republic of Congo — where talent is discovered and developed.",
    },
    {
      name: "Anthony Myers",
      title: "Co-Founder & CEO USA / NBA Agent",
      bio: "Opens the American corridor. NBA agent, co-founder, and the other half of a partnership that began at Charis Prep.",
    },
    {
      name: "Yves",
      title: "Co-CEO DRC & FIBA Agent",
      bio: "International basketball representation across FIBA markets — contracts, clubs, and competitive pathways.",
    },
    {
      name: "Madinda Angelo",
      title: "Co-Founder & President Ballers Academy",
      bio: "The development engine. He turns potential into craft at Ballers Academy — on the floor and beyond it.",
    },
    {
      name: "Estelle Kusota",
      title: "Project Manager",
      bio: "Orchestrates programs, partnerships and delivery. The quiet precision behind every move.",
    },
  ],
};

export const talents = {
  index: "05",
  title: "Our Talents",
  intro: "Athletes and artists. One standard. Global ambition.",
  items: [
    {
      name: "Hiro",
      discipline: "Artist",
      tag: "Music",
      copy: "A voice built for the stage — Congolese energy, global frequency.",
    },
    {
      name: "Paul Mbiya",
      discipline: "Basketball",
      tag: "Guard / Forward",
      copy: "Explosive, composed, and built for the next level of the game.",
    },
    {
      name: "Parby Kabamba",
      discipline: "Basketball",
      tag: "Forward",
      copy: "Power, presence, and a game that travels across borders.",
    },
    {
      name: "Ephraim Masala",
      discipline: "Basketball",
      tag: "Forward / Center",
      copy: "Size, instinct, and the hunger of a player still writing his chapter.",
    },
  ],
};

export const contact = {
  index: "06",
  title: "Get In Touch",
  intro:
    "Whether you are talent, a partner, or a brand ready to build with Africa — start here.",
  email: "hello@b360.agency",
  phone: "+243 000 000 000",
  locations: ["Kinshasa, DRC", "United States"],
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "X", href: "https://x.com/" },
  ],
  subjects: [
    "Talent Representation",
    "Partnership",
    "Investment",
    "Media / Press",
    "Other",
  ],
};

export const footer = {
  tagline: "African Talent, Built for the Global Stage",
  rights: `© ${new Date().getFullYear()} B360 Agency. All rights reserved.`,
};
