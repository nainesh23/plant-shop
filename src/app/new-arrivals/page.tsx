"use client";
import ProductCard from "@/components/ProductCard";
import { plants } from "@/data/products";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Leaf } from "lucide-react";

const newPlants = plants.filter(p => [2, 5, 9, 12, 7, 10].includes(p.id));

export default function NewArrivalsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#F7FAF7]">
      {/* Hero Banner */}
      <div className="relative h-64 mb-12 overflow-hidden border-b border-[#e8f5e9]">
        <Image src="/assets/images/hero_modern_lifestyle.png" alt="New arrivals" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b4332]/90 via-[#2d6a4f]/70 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-[#74c69d] text-[#1b4332] text-sm font-bold px-5 py-2 rounded-full mb-4 shadow-xl">
              <Leaf className="w-4 h-4" /> Nursery Update — April
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2">New Arrivals</h1>
            <p className="text-white/60 mt-2 text-lg max-w-xl mx-auto">Freshly potted botanicals for our community parent collectors.</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-8 w-1.5 bg-[#2d6a4f] rounded-full" />
          <h2 className="text-3xl font-extrabold text-[#1b4332]">🌱 Just Potted</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newPlants.map((plant, i) => <ProductCard key={plant.id} plant={plant} index={i} />)}
        </div>
      </div>
    </div>
  );
}
