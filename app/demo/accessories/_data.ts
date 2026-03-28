export type AccessoryProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  badge: string;
  image: string;
  description: string;
  features: string[];
  stock: number;
};

export const accessories: AccessoryProduct[] = [
  {
    id: "wireless-earbuds",
    name: "EchoPulse Wireless Earbuds",
    category: "Audio",
    price: 59,
    oldPrice: 89,
    badge: "Hot Deal",
    image: "/images/accessory-earbuds.svg",
    description: "Deep bass drivers, low-latency gaming mode, and all-day comfort.",
    features: ["ENC noise reduction", "24-hour battery case", "Ultra-low latency"],
    stock: 5,
  },
  {
    id: "fast-charger",
    name: "VoltMax 45W Fast Charger",
    category: "Charging",
    price: 29,
    oldPrice: 45,
    badge: "Hot Deal",
    image: "/images/accessory-charger.svg",
    description: "USB-C PD fast charging with intelligent temperature control.",
    features: ["PD 3.0 support", "Dual device output", "Compact GaN design"],
    stock: 8,
  },
  {
    id: "power-bank",
    name: "NovaCharge 20,000mAh Power Bank",
    category: "Power",
    price: 49,
    oldPrice: 69,
    badge: "Hot Deal",
    image: "/images/accessory-powerbank.svg",
    description: "Travel-ready backup power with quick charge and LED status.",
    features: ["20,000mAh capacity", "Quick Charge 4+", "Dual USB-C"],
    stock: 6,
  },
  {
    id: "mobile-cover",
    name: "AuraShield Matte Case",
    category: "Protection",
    price: 19,
    oldPrice: 32,
    badge: "Hot Deal",
    image: "/images/accessory-cover.svg",
    description: "Soft-touch matte finish with drop-safe corner cushioning.",
    features: ["Shock absorb corners", "Anti-fingerprint", "Slim fit"],
    stock: 7,
  },
  {
    id: "screen-protector",
    name: "CrystalGuard Screen Protector",
    category: "Protection",
    price: 12,
    oldPrice: 20,
    badge: "Hot Deal",
    image: "/images/accessory-protector.svg",
    description: "9H tempered glass with ultra-clear, smudge-free coating.",
    features: ["9H hardness", "Bubble-free install", "HD clarity"],
    stock: 12,
  },
  {
    id: "mag-safe",
    name: "MagRing Wireless Charger",
    category: "Charging",
    price: 39,
    oldPrice: 55,
    badge: "Hot Deal",
    image: "/images/accessory-charger.svg",
    description: "Snap-on magnetic wireless charging with 15W output.",
    features: ["15W fast wireless", "Magnetic alignment", "LED status ring"],
    stock: 4,
  },
  {
    id: "braided-cable",
    name: "FlexWeave USB-C Cable",
    category: "Cables",
    price: 14,
    oldPrice: 22,
    badge: "Hot Deal",
    image: "/images/accessory-charger.svg",
    description: "Tangle-free braided cable rated for 60W fast charge.",
    features: ["60W fast charge", "Braided durability", "1.8m length"],
    stock: 10,
  },
  {
    id: "car-mount",
    name: "DriveGrip Magnetic Car Mount",
    category: "Auto",
    price: 24,
    oldPrice: 35,
    badge: "Hot Deal",
    image: "/images/accessory-cover.svg",
    description: "Secure one-hand mounting with 360-degree rotation.",
    features: ["360 rotation", "Strong magnetic hold", "Dashboard + vent clips"],
    stock: 9,
  },
];
