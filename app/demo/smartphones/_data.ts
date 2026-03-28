export type Smartphone = {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  image: string;
  tag: string;
};

export const smartphoneProducts: Smartphone[] = [
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    brand: "Apple",
    price: 1199,
    description: "Titanium body, cinematic video, and pro-grade performance.",
    image: "/images/mockup-device-1.svg",
    tag: "Best Seller",
  },
  {
    id: "galaxy-s25-ultra",
    name: "Galaxy S25 Ultra",
    brand: "Samsung",
    price: 1099,
    description: "Bright AMOLED display with AI-enhanced photography.",
    image: "/images/mockup-device-2.svg",
    tag: "AI Camera",
  },
  {
    id: "pixel-9-pro",
    name: "Pixel 9 Pro",
    brand: "Google",
    price: 999,
    description: "Pure Android experience with smart assistive features.",
    image: "/images/mockup-device-3.svg",
    tag: "Pure Android",
  },
  {
    id: "oneplus-13",
    name: "OnePlus 13",
    brand: "OnePlus",
    price: 849,
    description: "Speed-focused flagship with ultra-fast charging.",
    image: "/images/mockup-device-1.svg",
    tag: "Fast Charge",
  },
  {
    id: "xiaomi-14-pro",
    name: "Xiaomi 14 Pro",
    brand: "Xiaomi",
    price: 799,
    description: "Premium build with powerful battery and crisp display.",
    image: "/images/mockup-device-2.svg",
    tag: "Value Pick",
  },
];
