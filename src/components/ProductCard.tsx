"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Heart, Sun, Droplets, Eye, Check } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Plant } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const difficultyConfig = {
  Easy: { color: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-500" },
  Medium: { color: "bg-green-100 text-green-800", dot: "bg-green-600" },
  Hard: { color: "bg-[#f1ebe5] text-[#5e503f]", dot: "bg-[#5e503f]" },
};

const badgeConfig: Record<string, { bg: string; text: string }> = {
  "Best Seller": { bg: "bg-gradient-to-r from-[#2d6a4f] to-[#1b4332]", text: "text-white" },
  Popular: { bg: "bg-gradient-to-r from-[#52b788] to-[#2d6a4f]", text: "text-white" },
  "Beginner Friendly": { bg: "bg-gradient-to-r from-[#95d5ab] to-[#52b788]", text: "text-black/80" },
  Sale: { bg: "bg-gradient-to-r from-[#74c69d] to-[#4f772d]", text: "text-white" },
  Premium: { bg: "bg-gradient-to-r from-[#1b4332] to-[#0d1f17]", text: "text-white" },
  Aromatic: { bg: "bg-gradient-to-r from-[#b7e4c7] to-[#74c69d]", text: "text-black/80" },
  Healing: { bg: "bg-gradient-to-r from-[#4f772d] to-[#1b4332]", text: "text-white" },
  "Office Fav": { bg: "bg-gradient-to-r from-[#2d6a4f] to-[#084c61]", text: "text-white" },
};

interface ProductCardProps {
  plant: Plant;
  index?: number;
}

export default function ProductCard({ plant, index = 0 }: ProductCardProps) {
  const { dispatch: cartDispatch } = useCart();
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
  const [added, setAdded] = useState(false);

  const isWishlisted = wishlistState.items.some((i) => i.id === plant.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    cartDispatch({ type: "ADD_ITEM", plant });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    wishlistDispatch({ type: "TOGGLE_WISHLIST", plant });
  };

  const diff = difficultyConfig[plant.difficulty as keyof typeof difficultyConfig];
  const badge = plant.badge ? badgeConfig[plant.badge] : null;
  const discount = plant.originalPrice
    ? Math.round(((plant.originalPrice - plant.price) / plant.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group h-full"
    >
      <Link href={`/shop/${plant.id}`} className="block h-full">
        <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#e8f5e9] h-full flex flex-col">

          {/* Image Section */}
          <div className="relative h-72 overflow-hidden bg-[#f7faf7] flex-shrink-0">
            <Image
              src={plant.image}
              alt={plant.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[1500ms] ease-out"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <div className="absolute inset-0 bg-[#1b4332]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Badges */}
            <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
              <div className="flex flex-col gap-2">
                {badge && (
                  <span className={`${badge.bg} ${badge.text} text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-2xl border border-white/20 backdrop-blur-sm`}>
                    {plant.badge}
                  </span>
                )}
                {discount > 0 && (
                  <span className="bg-[#4f772d] text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-xl">
                    -{discount}%
                  </span>
                )}
              </div>

              {/* Wishlist Toggle */}
              <button
                onClick={handleToggleWishlist}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-300 ${
                  isWishlisted 
                    ? "bg-[#74c69d] text-white scale-110 rotate-[360deg]" 
                    : "bg-white/90 text-gray-400 hover:text-[#2d6a4f] hover:scale-110"
                }`}
              >
                <Heart className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Hover Actions */}
            <div className="absolute bottom-5 left-5 right-5 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl ${
                  added
                    ? "bg-[#74c69d] text-[#1b4332] scale-95"
                    : "bg-[#1b4332] text-white hover:bg-[#2d6a4f]"
                }`}
              >
                {added ? <><Check className="w-4 h-4" /> Added!</> : <><ShoppingCart className="w-4 h-4" /> Add to Cart</>}
              </button>
              <Link
                href={`/shop/${plant.id}`}
                onClick={e => e.stopPropagation()}
                className="w-12 h-12 rounded-2xl bg-white/90 text-[#1b4332] flex items-center justify-center hover:bg-[#1b4332] hover:text-white transition-all shadow-xl flex-shrink-0"
              >
                <Eye className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col flex-1 p-6 gap-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black text-[#2d6a4f] bg-[#e8f5e9] px-3 py-1.5 rounded-full uppercase tracking-widest">
                {plant.category}
              </span>
              <span className={`flex items-center gap-1.5 text-[10px] font-black uppercase px-3 py-1.5 rounded-full shadow-sm ${diff.color}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${diff.dot} animate-pulse`} />
                {plant.difficulty}
              </span>
            </div>

            <h3 className="font-black text-[#1a2e1a] text-xl leading-tight group-hover:text-[#2d6a4f] transition-colors line-clamp-1">
              {plant.name}
            </h3>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(plant.rating) ? "text-[#74c69d] fill-[#74c69d]" : "text-gray-200 fill-gray-200"}`}
                  />
                ))}
              </div>
              <span className="text-xs font-black text-[#4a5e4a]">{plant.rating}</span>
              <span className="text-xs text-[#6b7c6b] font-medium">({plant.reviews})</span>
            </div>

            <div className="flex items-center gap-4 py-4 border-y border-[#e8f5e9]">
              <div className="flex items-center gap-2 text-xs text-[#6b7c6b] font-bold">
                <Sun className="w-4 h-4 text-[#2d6a4f]" />
                <span>{plant.light}</span>
              </div>
              <div className="w-px h-3 bg-gray-200" />
              <div className="flex items-center gap-2 text-xs text-[#6b7c6b] font-bold">
                <Droplets className="w-4 h-4 text-blue-400" />
                <span>{plant.water}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-auto pt-2">
              <div className="flex flex-col">
                {plant.originalPrice && (
                  <span className="text-xs text-gray-400 line-through font-bold">
                    ${plant.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-3xl font-black text-[#1b4332]">
                  ${plant.price.toFixed(2)}
                </span>
              </div>
              <button
                onClick={handleAddToCart}
                className={`w-14 h-14 rounded-[1.5rem] flex items-center justify-center transition-all shadow-xl ${
                  added
                    ? "bg-[#74c69d] text-[#1b4332]"
                    : "bg-[#1b4332] text-white hover:bg-[#2d6a4f] hover:scale-105 active:scale-95"
                }`}
              >
                {added ? <Check className="w-6 h-6" /> : <ShoppingCart className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
