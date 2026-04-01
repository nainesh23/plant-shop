"use client";
import ProductCard from "@/components/ProductCard";
import { plants } from "@/data/products";
import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const dealPlants = plants.filter(p => p.originalPrice || [3, 9, 12].includes(p.id));

function useCountdown(h = 7) {
  const [time, setTime] = useState({ h, m: 0, s: 0 });
  useEffect(() => {
    const end = Date.now() + h * 3600000;
    const iv = setInterval(() => {
      const d = Math.max(0, end - Date.now());
      setTime({ h: Math.floor(d / 3600000), m: Math.floor((d % 3600000) / 60000), s: Math.floor((d % 60000) / 1000) });
    }, 1000);
    return () => clearInterval(iv);
  }, [h]);
  return time;
}

export default function DealsPage() {
  const { h, m, s } = useCountdown(7);
  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FAFBF8]">
      {/* Green Drop Hero */}
      <div className="bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#122b21] py-16 px-6 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#74c69d]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2d6a4f]/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="w-8 h-8 text-[#74c69d]" />
              <span className="text-[#a8d8b9] font-extrabold text-3xl uppercase tracking-wider">The Green Drop</span>
              <Zap className="w-8 h-8 text-[#74c69d]" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">20% OFF Site-wide</h1>
            <p className="text-white/70 mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
              Limited quantities of our choice botanicals. Use code <strong className="bg-white/20 px-3 py-1 rounded text-[#74c69d]">LEAFLY20</strong> at checkout.
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center justify-center gap-3 text-white/60 mb-2">
                <Clock className="w-5 h-5 text-[#74c69d]" />
                <span className="font-bold text-sm tracking-widest uppercase">Drops end in:</span>
              </div>
              <div className="flex items-center justify-center gap-4">
                {[String(h).padStart(2,"0"), String(m).padStart(2,"0"), String(s).padStart(2,"0")].map((v, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="bg-white/10 backdrop-blur-md text-white font-extrabold text-3xl md:text-5xl w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center border border-white/20 shadow-2xl">
                      {v}
                    </div>
                    {i < 2 && <span className="text-[#74c69d] font-black text-3xl">:</span>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-8 w-1.5 bg-[#2d6a4f] rounded-full" />
          <h2 className="text-3xl font-extrabold text-[#1b4332]">🔥 Active Drops</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {dealPlants.map((plant, i) => <ProductCard key={plant.id} plant={plant} index={i} />)}
        </div>
      </div>
    </div>
  );
}
