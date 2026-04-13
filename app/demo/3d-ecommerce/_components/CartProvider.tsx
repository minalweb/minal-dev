"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { commerceProducts, CommerceProduct } from "@/app/demo/3d-ecommerce/_data";

type CartItem = { id: string; qty: number };

type CartLine = {
  product: CommerceProduct;
  qty: number;
  lineTotal: number;
};

type CartContextValue = {
  items: CartItem[];
  lines: CartLine[];
  total: number;
  addItem: (id: string, qty?: number) => void;
  updateQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

const STORAGE_KEY = "3d-commerce-cart";
const CartContext = createContext<CartContextValue | null>(null);

function readStorage(): CartItem[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(readStorage());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }
  }, [items]);

  const lines = useMemo<CartLine[]>(() => {
    return items
      .map((item) => {
        const product = commerceProducts.find((entry) => entry.id === item.id);
        if (!product) return null;
        return { product, qty: item.qty, lineTotal: product.price * item.qty };
      })
      .filter(Boolean) as CartLine[];
  }, [items]);

  const total = useMemo(() => lines.reduce((sum, line) => sum + line.lineTotal, 0), [lines]);

  const addItem = (id: string, qty: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) => (item.id === id ? { ...item, qty: item.qty + qty } : item));
      }
      return [...prev, { id, qty }];
    });
  };

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) {
      setItems((prev) => prev.filter((item) => item.id !== id));
      return;
    }
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty } : item)));
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clear = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, lines, total, addItem, updateQty, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
