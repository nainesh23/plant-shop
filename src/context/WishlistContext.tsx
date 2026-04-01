"use client";

import React, { createContext, useContext, useReducer, ReactNode, useEffect } from "react";
import { Plant } from "@/data/products";

interface WishlistState {
  items: Plant[];
}

type WishlistAction =
  | { type: "ADD_TO_WISHLIST"; plant: Plant }
  | { type: "REMOVE_FROM_WISHLIST"; id: number }
  | { type: "TOGGLE_WISHLIST"; plant: Plant }
  | { type: "LOAD_WISHLIST"; items: Plant[] };

const WishlistContext = createContext<{
  state: WishlistState;
  dispatch: React.Dispatch<WishlistAction>;
  wishlistCount: number;
} | null>(null);

function wishlistReducer(state: WishlistState, action: WishlistAction): WishlistState {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      if (state.items.find((i) => i.id === action.plant.id)) return state;
      return { items: [...state.items, action.plant] };
    case "REMOVE_FROM_WISHLIST":
      return { items: state.items.filter((i) => i.id !== action.id) };
    case "TOGGLE_WISHLIST":
      if (state.items.find((i) => i.id === action.plant.id)) {
        return { items: state.items.filter((i) => i.id !== action.plant.id) };
      }
      return { items: [...state.items, action.plant] };
    case "LOAD_WISHLIST":
      return { items: action.items };
    default:
      return state;
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(wishlistReducer, { items: [] });

  // Persist to local storage
  useEffect(() => {
    const saved = localStorage.getItem("leafly_wishlist");
    if (saved) {
      try {
        dispatch({ type: "LOAD_WISHLIST", items: JSON.parse(saved) });
      } catch (e) {
        console.error("Failed to load wishlist", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("leafly_wishlist", JSON.stringify(state.items));
  }, [state.items]);

  const wishlistCount = state.items.length;

  return (
    <WishlistContext.Provider value={{ state, dispatch, wishlistCount }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
