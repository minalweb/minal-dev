export type FashionProduct = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  tag: string;
};

export const fashionProducts: FashionProduct[] = [
  {
    id: "aurora-trench",
    name: "Aurora Trench Coat",
    category: "Outerwear",
    price: 320,
    description: "Tailored silhouette with satin lining and statement collar.",
    image: "/images/mockup-fashion-1.svg",
    tag: "Runway Edit",
  },
  {
    id: "noir-silk-set",
    name: "Noir Silk Set",
    category: "Evening",
    price: 260,
    description: "Fluid silk top + wide-leg pants for effortless elegance.",
    image: "/images/mockup-fashion-2.svg",
    tag: "Best Seller",
  },
  {
    id: "luna-knit",
    name: "Luna Knit Dress",
    category: "Essentials",
    price: 180,
    description: "Soft-touch knit with refined rib texture and body-skimming fit.",
    image: "/images/mockup-fashion-3.svg",
    tag: "New Arrival",
  },
  {
    id: "ivory-heel",
    name: "Ivory Sculpt Heel",
    category: "Footwear",
    price: 210,
    description: "Architectural heel with cushioned insole for all-night comfort.",
    image: "/images/mockup-fashion-1.svg",
    tag: "Limited",
  },
  {
    id: "solstice-bag",
    name: "Solstice Leather Bag",
    category: "Accessories",
    price: 240,
    description: "Premium leather with gold hardware and modular strap.",
    image: "/images/mockup-fashion-2.svg",
    tag: "Editor’s Pick",
  },
  {
    id: "atlas-denim",
    name: "Atlas Denim Jacket",
    category: "Outerwear",
    price: 190,
    description: "Structured denim with tonal stitching and modern fit.",
    image: "/images/mockup-fashion-3.svg",
    tag: "Street Luxe",
  },
];
