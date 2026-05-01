export const COMPANY = {
  name: "Chicago Pool Service LLC",
  phoneDisplay: "(602) 694-5821",
  phoneTel: "tel:+16026945821",
  tagline: "Elegant pool remodeling, refinishing, and care across Greater Chicago.",
  area: "Greater Chicago & surrounding communities",
} as const;

/** Badge logo — transparent PNG in `public/` (re-run `npm run logo:knockout-white` after replacing source). */
export const COMPANY_LOGO_SRC = "/logo-chicago-pool-services.png?v=nobg";

export type ServiceSlide = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
};

/** Unsplash photos — swap URLs in /public or replace with your own assets anytime */
export const SERVICE_SLIDES: ServiceSlide[] = [
  {
    id: "wall-maintenance",
    title: "Wall maintenance & cleaning",
    description:
      "Meticulous tile and shell cleaning so your pool sparkles season after season.",
    imageUrl:
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&q=80",
    imageAlt: "Crystal-clear swimming pool water",
  },
  {
    id: "general-maintenance",
    title: "General pool maintenance",
    description:
      "Balanced chemistry, equipment checks, and routine care you can depend on.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    imageAlt: "Luxury backyard pool",
  },
  {
    id: "replaster",
    title: "Replastering & refinishing",
    description:
      "Bring worn interiors back to life with premium plaster and expert craftsmanship.",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
    imageAlt: "Modern pool design",
  },
  {
    id: "tile",
    title: "Tile replacement & new tile",
    description:
      "Refresh waterlines and coping with durable new tile tailored to your style.",
    imageUrl:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    imageAlt: "Pool waterline tile detail",
  },
  {
    id: "mosaic",
    title: "Mosaic tile artistry",
    description:
      "Custom mosaic accents that turn your pool into a one-of-a-kind centerpiece.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    imageAlt: "Upscale poolside lounge",
  },
  {
    id: "pebble",
    title: "Pebble finishes",
    description:
      "Rich, textured pebble interiors that feel as good as they look.",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    imageAlt: "Swimming pool at dusk",
  },
  {
    id: "equipment",
    title: "Equipment & circulation",
    description:
      "Filters, pumps, lights, skimmers, vacuums — service and complete replacements.",
    imageUrl:
      "https://images.unsplash.com/photo-1519316427876-595964330bc7?w=1200&q=80",
    imageAlt: "Pool pump and equipment",
  },
  {
    id: "decks",
    title: "Pool decks",
    description:
      "Travertine, cool deck textures, and color palettes built around your vision.",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    imageAlt: "Stone pool deck",
  },
  {
    id: "custom",
    title: "Custom work",
    description:
      "Whatever you envision for refinishing and resurfacing — we make it real.",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    imageAlt: "Designer swimming pool",
  },
];

export const TIMELINE_OPTIONS = [
  { id: "asap", label: "ASAP — start right away" },
  { id: "two-weeks", label: "Within 2 weeks" },
  { id: "month", label: "Within a month" },
  { id: "flexible", label: "Flexible timing" },
  { id: "quote-only", label: "Just getting a quote" },
] as const;

export type GalleryItem = {
  id: string;
  category: "Residential" | "Commercial" | "Pool decks";
  title: string;
  imageUrl: string;
  imageAlt: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "res-1",
    category: "Residential",
    title: "Residential oasis",
    imageUrl:
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=900&q=80",
    imageAlt: "Residential swimming pool",
  },
  {
    id: "res-2",
    category: "Residential",
    title: "Sunlit backyard pool",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    imageAlt: "Beautiful backyard pool",
  },
  {
    id: "res-3",
    category: "Residential",
    title: "Evening retreat",
    imageUrl:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
    imageAlt: "Pool at sunset",
  },
  {
    id: "com-1",
    category: "Commercial",
    title: "Resort-style commercial",
    imageUrl:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=900&q=80",
    imageAlt: "Commercial pool facility",
  },
  {
    id: "com-2",
    category: "Commercial",
    title: "Community centerpiece",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
    imageAlt: "Large commercial pool",
  },
  {
    id: "deck-1",
    category: "Pool decks",
    title: "Natural stone deck",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
    imageAlt: "Stone pool decking",
  },
  {
    id: "deck-2",
    category: "Pool decks",
    title: "Cool deck palette",
    imageUrl:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80",
    imageAlt: "Textured pool deck",
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Jordan M.",
    location: "Oak Park",
    quote:
      "Our replaster and tile refresh exceeded expectations. The crew was professional and the pool looks brand new.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Priya S.",
    location: "Naperville",
    quote:
      "Clear communication from quote to completion. The pebble finish and new deck transformed our backyard.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Marcus T.",
    location: "Chicago",
    quote:
      "They handled equipment upgrades and lighting fast. Water clarity has never been better.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Elena R.",
    location: "Evanston",
    quote:
      "Commercial property remodel was seamless — minimal downtime and a stunning result for our residents.",
    rating: 5,
  },
] as const;

/** Hero background — synced from `photos/pool bg photo.jpeg` (published as `public/hero-section-pool.jpeg`). */
export const HERO_IMAGE = "/hero-section-pool.jpeg";
