"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { accessories, AccessoryProduct } from "@/app/demo/accessories/_data";

type CartItem = {
  id: string;
  qty: number;
};

type CartLine = {
  product: AccessoryProduct;
  qty: number;
  lineTotal: number;
};

type CartContextValue = {
  items: CartItem[];
  lines: CartLine[];
  total: number;
  addItem: (id: string, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "accessories-cart";

function readStorage(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }
  try {
    const parsed = JSON.parse(raw) as CartItem[];
    if (Array.isArray(parsed)) {
      return parsed;
    }
  } catch {
    return [];
  }
  return [];
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
        const product = accessories.find((entry) => entry.id === item.id);
        if (!product) {
          return null;
        }
        return {
          product,
          qty: item.qty,
          lineTotal: product.price * item.qty,
        };
      })
      .filter(Boolean) as CartLine[];
  }, [items]);

  const total = useMemo(() => {
    return lines.reduce((sum, line) => sum + line.lineTotal, 0);
  }, [lines]);

  const addItem = (id: string, qty: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { id, qty }];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) {
      removeItem(id);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  const clear = () => {
    setItems([]);
  };

  const value: CartContextValue = {
    items,
    lines,
    total,
    addItem,
    removeItem,
    updateQty,
    clear,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
