export type CommerceProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice: number;
  description: string;
  image: string;
  accent: string;
  specs: string[];
};

export const commerceProducts: CommerceProduct[] = [
  {
    id: "nova-x1",
    name: "Nova X1 Smartphone",
    category: "Flagship",
    price: 999,
    oldPrice: 1149,
    description: "Neon glass chassis with cinematic camera system and ultra-smooth 120Hz display.",
    image: "/images/mockup-device-1.svg",
    accent: "#7C5CFF",
    specs: ["120Hz AMOLED", "ProVision Camera", "5,000mAh"],
  },
  {
    id: "pulse-pro",
    name: "Pulse Pro Earbuds",
    category: "Audio",
    price: 189,
    oldPrice: 249,
    description: "Spatial audio earbuds with adaptive noise control and all-day battery.",
    image: "/images/accessory-earbuds.svg",
    accent: "#3BD3FF",
    specs: ["Spatial Audio", "Adaptive ANC", "28h Battery"],
  },
  {
    id: "lumen-stand",
    name: "Lumen Magnetic Stand",
    category: "Accessories",
    price: 79,
    oldPrice: 109,
    description: "Floating desk stand with magnetic snap and wireless fast charge.",
    image: "/images/accessory-cover.svg",
    accent: "#5B7CFF",
    specs: ["15W Wireless", "MagSafe Ready", "Aluminum Body"],
  },
  {
    id: "drift-max",
    name: "Drift Max Power Core",
    category: "Power",
    price: 129,
    oldPrice: 169,
    description: "Ultra-slim power bank engineered for long sessions and rapid recharge.",
    image: "/images/accessory-powerbank.svg",
    accent: "#6A5CFF",
    specs: ["20,000mAh", "Dual USB-C", "Pass-through"],
  },
  {
    id: "halo-case",
    name: "Halo Armor Case",
    category: "Protection",
    price: 59,
    oldPrice: 79,
    description: "Impact-safe matte case with neon edge lighting and soft-touch finish.",
    image: "/images/accessory-cover.svg",
    accent: "#3BD3FF",
    specs: ["Shock absorb", "Anti-scratch", "Featherweight"],
  },
  {
    id: "flux-charger",
    name: "Flux 65W Charger",
    category: "Charging",
    price: 69,
    oldPrice: 89,
    description: "GaN fast charger with triple outputs and smart thermal control.",
    image: "/images/accessory-charger.svg",
    accent: "#7C5CFF",
    specs: ["65W GaN", "3 Ports", "Travel Ready"],
  },
];
