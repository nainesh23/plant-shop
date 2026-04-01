export interface Plant {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  badge?: string;
  difficulty: "Easy" | "Medium" | "Hard";
  light: "Low" | "Medium" | "Bright" | "Full Sun";
  water: "Low" | "Moderate" | "High";
  description: string;
  careInfo: {
    sunlight: string;
    watering: string;
    humidity: string;
    temperature: string;
    fertilizer: string;
  };
  tags: string[];
  inStock: boolean;
}

export const plants: Plant[] = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 34.99,
    originalPrice: 44.99,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80",
      "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=600&q=80",
      "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=600&q=80",
    ],
    rating: 4.8,
    reviews: 238,
    badge: "Best Seller",
    difficulty: "Easy",
    light: "Medium",
    water: "Moderate",
    description:
      "The iconic Swiss Cheese Plant with its dramatic split leaves brings bold tropical vibes to any space. One of the most popular houseplants for a reason — it's gorgeous, fast-growing, and surprisingly easy to care for.",
    careInfo: {
      sunlight: "Bright indirect light. Avoid direct sun.",
      watering: "Water when top 2 inches of soil are dry (every 1–2 weeks).",
      humidity: "Prefers 60%+ humidity. Mist occasionally.",
      temperature: "18–27°C (65–80°F). Avoid drafts.",
      fertilizer: "Monthly in spring/summer with balanced liquid fertilizer.",
    },
    tags: ["tropical", "statement", "air-purifying"],
    inStock: true,
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    price: 59.99,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?w=600&q=80",
      "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&q=80",
    ],
    rating: 4.5,
    reviews: 182,
    badge: "Popular",
    difficulty: "Medium",
    light: "Bright",
    water: "Moderate",
    description:
      "The Fiddle Leaf Fig is the interior designer's go-to plant. With its large, violin-shaped leaves and elegant trunk, it adds architectural beauty and a touch of drama to any bright room.",
    careInfo: {
      sunlight: "Bright indirect light, avoid direct hot sun.",
      watering: "Water thoroughly, let soil dry 50% between waterings.",
      humidity: "Moderate humidity (40–60%). Mist leaves occasionally.",
      temperature: "16–24°C (60–75°F). Sensitive to cold drafts.",
      fertilizer: "Every 2 weeks in spring/summer.",
    },
    tags: ["statement", "designer", "tall"],
    inStock: true,
  },
  {
    id: 3,
    name: "Snake Plant",
    price: 22.99,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1599598425947-5202edd56fde?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1599598425947-5202edd56fde?w=600&q=80",
      "https://images.unsplash.com/photo-1567334040-2b2ef1f0e20f?w=600&q=80",
    ],
    rating: 4.9,
    reviews: 412,
    badge: "Beginner Friendly",
    difficulty: "Easy",
    light: "Low",
    water: "Low",
    description:
      "The virtually indestructible Snake Plant is the perfect starter plant. It thrives on neglect, tolerates low light, and purifies air like a champ. The modern vertical foliage looks stunning in minimalist spaces.",
    careInfo: {
      sunlight: "Tolerates low to bright indirect light.",
      watering: "Every 2–6 weeks. Less in winter. Let soil dry completely.",
      humidity: "Low humidity is fine. Very adaptable.",
      temperature: "15–29°C (60–85°F).",
      fertilizer: "2–3 times per year in spring/summer.",
    },
    tags: ["beginner", "air-purifying", "low-maintenance"],
    inStock: true,
  },
  {
    id: 4,
    name: "Echeveria Collection",
    price: 14.99,
    originalPrice: 19.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600&q=80",
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&q=80",
    ],
    rating: 4.7,
    reviews: 95,
    badge: "Sale",
    difficulty: "Easy",
    light: "Bright",
    water: "Low",
    description:
      "A curated set of jewel-toned Echeveria rosettes in delightful shades of pink, purple, and green. These drought-tolerant beauties are perfect for sunny windowsills, desks, or as gift plants.",
    careInfo: {
      sunlight: "Bright indirect or direct morning sun.",
      watering: "Every 1–2 weeks. Allow to dry completely.",
      humidity: "Low humidity preferred.",
      temperature: "18–26°C (65–80°F).",
      fertilizer: "Monthly in growing season with succulent fertilizer.",
    },
    tags: ["succulent", "gift", "colorful"],
    inStock: true,
  },
  {
    id: 5,
    name: "Peace Lily",
    price: 27.99,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1593691512429-cf7bc300da82?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1593691512429-cf7bc300da82?w=600&q=80",
    ],
    rating: 4.6,
    reviews: 167,
    difficulty: "Easy",
    light: "Low",
    water: "Moderate",
    description:
      "The Peace Lily is nature's air purifier. Its glossy dark leaves and elegant white blooms make it one of the most beautiful low-light plants available. Perfect for offices and bedrooms.",
    careInfo: {
      sunlight: "Low to medium indirect light.",
      watering: "Keep soil moist. Water when leaves droop slightly.",
      humidity: "High humidity. Mist frequently.",
      temperature: "18–26°C (65–80°F).",
      fertilizer: "Every 6 weeks during growing season.",
    },
    tags: ["flowering", "air-purifying", "low-light"],
    inStock: true,
  },
  {
    id: 6,
    name: "Lavender Bundle",
    price: 18.99,
    category: "Herbs",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=600&q=80",
    ],
    rating: 4.8,
    reviews: 203,
    badge: "Aromatic",
    difficulty: "Easy",
    light: "Full Sun",
    water: "Low",
    description:
      "Bring the calming scent of Provence to your home or garden. This fragrant lavender bundle is perfect for sunny patios, windowsills, or as a natural air freshener. Also great for cooking and crafts!",
    careInfo: {
      sunlight: "Full sun — at least 6 hours of direct sun daily.",
      watering: "Every 1–2 weeks. Very drought tolerant once established.",
      humidity: "Low to moderate. Good air circulation needed.",
      temperature: "15–21°C (60–70°F).",
      fertilizer: "Light feeding in early spring.",
    },
    tags: ["aromatic", "herb", "outdoor"],
    inStock: true,
  },
  {
    id: 7,
    name: "Bird of Paradise",
    price: 79.99,
    category: "Outdoor",
    image: "https://images.unsplash.com/photo-1620127807580-990c3eceClub?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1597305877032-0668b3c6413a?w=600&q=80",
    ],
    rating: 4.7,
    reviews: 88,
    badge: "Premium",
    difficulty: "Medium",
    light: "Bright",
    water: "Moderate",
    description:
      "The Bird of Paradise is the ultimate statement plant. Its giant paddle-shaped leaves and striking orange-blue flowers make it a showstopper indoors and in warm gardens alike.",
    careInfo: {
      sunlight: "Bright indirect to direct sun for 4+ hours.",
      watering: "Every 1–2 weeks. Let top soil dry out.",
      humidity: "Moderate to high.",
      temperature: "18–30°C (65–86°F). Frost sensitive.",
      fertilizer: "Every 2 weeks in spring/summer.",
    },
    tags: ["statement", "tropical", "large"],
    inStock: true,
  },
  {
    id: 8,
    name: "Aloe Vera",
    price: 16.99,
    category: "Succulents",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80",
    ],
    rating: 4.9,
    reviews: 531,
    badge: "Healing",
    difficulty: "Easy",
    light: "Bright",
    water: "Low",
    description:
      "The medicinal miracle plant! Aloe vera's soothing gel is your natural remedy for sunburns, skin irritation, and more. A must-have for every household, and incredibly easy to grow.",
    careInfo: {
      sunlight: "Bright indirect to direct sun.",
      watering: "Every 2–3 weeks. More in summer. Let soil dry fully.",
      humidity: "Low humidity is fine.",
      temperature: "13–27°C (55–80°F).",
      fertilizer: "Once per year in spring.",
    },
    tags: ["medicinal", "succulent", "beginner"],
    inStock: true,
  },
  {
    id: 9,
    name: "Pothos Golden",
    price: 12.99,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=600&q=80",
    ],
    rating: 4.8,
    reviews: 356,
    difficulty: "Easy",
    light: "Low",
    water: "Low",
    description:
      "The Golden Pothos is the quintessential trailing houseplant. Its heart-shaped golden-green leaves cascade beautifully from hanging baskets or climb up a moss pole. Virtually impossible to kill.",
    careInfo: {
      sunlight: "Low to bright indirect light.",
      watering: "Every 1–2 weeks. Tolerates neglect well.",
      humidity: "Average household humidity is fine.",
      temperature: "15–29°C (60–85°F).",
      fertilizer: "Monthly in spring/summer.",
    },
    tags: ["trailing", "beginner", "low-light"],
    inStock: true,
  },
  {
    id: 10,
    name: "Rosemary Herb",
    price: 11.99,
    category: "Herbs",
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=600&q=80",
    ],
    rating: 4.6,
    reviews: 144,
    difficulty: "Easy",
    light: "Full Sun",
    water: "Low",
    description:
      "Fresh rosemary from your own windowsill! This aromatic Mediterranean herb is perfect for cooking, herbal teas, and fragrant decorating. Drought-tolerant and long-lived.",
    careInfo: {
      sunlight: "At least 6–8 hours of direct sunlight.",
      watering: "Every 1–2 weeks. Let soil dry between watering.",
      humidity: "Low to medium.",
      temperature: "16–24°C (60–75°F).",
      fertilizer: "Light feeding in spring.",
    },
    tags: ["herb", "culinary", "aromatic"],
    inStock: true,
  },
  {
    id: 11,
    name: "ZZ Plant",
    price: 29.99,
    category: "Indoor",
    image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=600&q=80",
    ],
    rating: 4.7,
    reviews: 219,
    badge: "Office Fav",
    difficulty: "Easy",
    light: "Low",
    water: "Low",
    description:
      "The ZZ Plant is a modern classic. Its waxy, dark-green leaves maintain a glossy shine even in low-light offices. It survives drought, neglect, and poor light — and still looks impeccable.",
    careInfo: {
      sunlight: "Low to bright indirect light. Keep out of direct sun.",
      watering: "Every 2–3 weeks. Extremely drought tolerant.",
      humidity: "Any level. Very adaptable.",
      temperature: "15–24°C (59–75°F).",
      fertilizer: "2–4 times per year.",
    },
    tags: ["low-maintenance", "office", "drought-tolerant"],
    inStock: true,
  },
  {
    id: 12,
    name: "Basil Plant",
    price: 9.99,
    category: "Herbs",
    image: "https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?w=600&q=80",
    ],
    rating: 4.5,
    reviews: 87,
    difficulty: "Easy",
    light: "Bright",
    water: "High",
    description:
      "Elevate your cooking with fresh basil straight from the pot! This sweet basil thrives on sunny kitchen windowsills and is endlessly useful in pasta, salads, pesto, and more.",
    careInfo: {
      sunlight: "6+ hours of bright or direct sunlight.",
      watering: "Keep soil moist. Water every 1–2 days in summer.",
      humidity: "Moderate.",
      temperature: "21–29°C (70–85°F).",
      fertilizer: "Light feeding every 4 weeks.",
    },
    tags: ["culinary", "herb", "kitchen"],
    inStock: true,
  },
];

export const categories = ["All", "Indoor", "Outdoor", "Succulents", "Herbs"];
