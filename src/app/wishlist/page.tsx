"use client";

import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, ArrowRight, Trash2, ShoppingCart, Sparkles, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WishlistPage() {
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();

  const handleMoveToCart = (plant: any) => {
    cartDispatch({ type: "ADD_ITEM", plant });
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", id: plant.id });
  };

  if (wishlistState.items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-[#f7faf7]">
        <div className="text-center max-w-md">
          <div className="relative w-24 h-24 bg-white text-gray-200 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-inner border border-[#e8f5e9]">
             <Heart className="w-12 h-12" />
             <div className="absolute top-0 right-0 w-8 h-8 bg-[#e8f5e9] text-[#2d6a4f] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Plus className="w-4 h-4" />
             </div>
          </div>
          <h1 className="text-4xl font-black text-[#1b4332] mb-4">Your Wishlist is Empty</h1>
          <p className="text-[#6b7c6b] mb-10 text-lg leading-relaxed">
            Discover our collection of rare and beautiful botanicals and save your favorites here.
          </p>
          <Link href="/shop" className="btn-primary px-10 py-5 text-lg font-black shadow-xl flex items-center gap-3 mx-auto w-fit">
            Explore Nursery <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#f7faf7] px-6 page-enter">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-4">
            <div className="h-10 w-2 bg-[#2d6a4f] rounded-full" />
            <div>
              <h1 className="text-5xl font-black text-[#1b4332]">My Wishlist</h1>
              <p className="text-[#6b7c6b] font-black text-xs uppercase tracking-widest mt-1">
                {wishlistState.items.length} Saved Favorites
              </p>
            </div>
          </div>
          <button 
             onClick={() => wishlistState.items.forEach(p => handleMoveToCart(p))}
             className="hidden md:flex items-center gap-3 bg-white text-[#2d6a4f] px-8 py-4 rounded-3xl font-black border border-[#e8f5e9] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
          >
             <ShoppingCart className="w-4 h-4" /> Move All to Cart
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {wishlistState.items.map((plant, i) => (
              <motion.div
                key={plant.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className="relative group"
              >
                <div className="bg-white rounded-[2.5rem] p-4 border border-[#e8f5e9] shadow-sm hover:shadow-2xl transition-all h-full flex flex-col group">
                  <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6 bg-[#f7faf7]">
                     <Image src={plant.image} alt={plant.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                     <button 
                        onClick={() => wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", id: plant.id })}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md text-[#5e503f] rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hover:bg-[#5e503f] hover:text-white"
                     >
                        <Trash2 className="w-5 h-5" />
                     </button>
                     <div className="absolute top-4 left-4">
                        <span className="bg-[#2d6a4f] text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg border border-white/20">
                           {plant.category}
                        </span>
                     </div>
                  </div>
                  
                  <div className="px-2 pb-2 flex-1 flex flex-col">
                     <h3 className="text-xl font-black text-[#1b4332] mb-1 group-hover:text-[#2d6a4f] transition-colors">{plant.name}</h3>
                     <div className="flex justify-between items-center mb-6">
                        <span className="text-2xl font-black text-[#2d6a4f]">${plant.price.toFixed(2)}</span>
                        <div className="flex items-center gap-1.5 bg-[#f7faf7] px-3 py-1.5 rounded-xl border border-[#e8f5e9]">
                           <Sparkles className="w-3.5 h-3.5 text-[#2d6a4f]" />
                           <span className="text-[10px] font-black text-[#6b7c6b] uppercase">Premium</span>
                        </div>
                     </div>

                     <button 
                        onClick={() => handleMoveToCart(plant)}
                        className="w-full bg-[#1b4332] hover:bg-[#2d6a4f] text-white py-4 rounded-2xl font-black shadow-xl flex items-center justify-center gap-3 mt-auto transition-all group-hover:scale-[1.02]"
                     >
                        <ShoppingBag className="w-4 h-4" /> Move to Cart
                     </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
