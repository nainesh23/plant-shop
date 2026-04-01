"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  Star,
  ShoppingCart,
  Heart,
  Sun,
  Droplets,
  Thermometer,
  Wind,
  Sprout,
  ArrowLeft,
  Check,
  Minus,
  Plus,
  Truck,
  Shield,
} from "lucide-react";
import { plants } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const plant = plants.find((p) => p.id === Number(id));
  if (!plant) notFound();

  const { dispatch } = useCart();
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<"description" | "care">("description");

  const related = plants
    .filter((p) => p.category === plant.category && p.id !== plant.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) {
      dispatch({ type: "ADD_ITEM", plant });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const careItems = [
    { icon: Sun, label: "Sunlight", value: plant.careInfo.sunlight, color: "text-amber-500" },
    { icon: Droplets, label: "Watering", value: plant.careInfo.watering, color: "text-blue-500" },
    { icon: Wind, label: "Humidity", value: plant.careInfo.humidity, color: "text-cyan-500" },
    { icon: Thermometer, label: "Temperature", value: plant.careInfo.temperature, color: "text-red-400" },
    { icon: Sprout, label: "Fertilizer", value: plant.careInfo.fertilizer, color: "text-green-500" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-[#6b7c6b] hover:text-[#2d6a4f] text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[480px] rounded-3xl overflow-hidden bg-[#f0ede4] mb-4">
              <Image
                src={plant.images[activeImg] || plant.image}
                alt={plant.name}
                fill
                className="object-cover transition-all duration-500"
                priority
              />
              {plant.badge && (
                <span className="absolute top-4 left-4 bg-[#2d6a4f] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {plant.badge}
                </span>
              )}
            </div>
            {/* Thumbnails */}
            {plant.images.length > 1 && (
              <div className="flex gap-3">
                {plant.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImg === i
                        ? "border-[#2d6a4f] scale-105"
                        : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <p className="text-[#e07a5f] font-semibold text-sm uppercase tracking-widest mb-1">
                {plant.category}
              </p>
              <h1 className="text-4xl font-extrabold text-[#1a2e1a] leading-tight">
                {plant.name}
              </h1>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(plant.rating)
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-200 fill-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="font-semibold text-[#1a2e1a]">{plant.rating}</span>
              <span className="text-[#6b7c6b] text-sm">({plant.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-4xl font-extrabold text-[#2d6a4f]">
                ${plant.price.toFixed(2)}
              </span>
              {plant.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    ${plant.originalPrice.toFixed(2)}
                  </span>
                  <span className="bg-[#e07a5f]/10 text-[#e07a5f] font-bold px-3 py-1 rounded-full text-sm">
                    {Math.round(
                      ((plant.originalPrice - plant.price) / plant.originalPrice) * 100
                    )}
                    % OFF
                  </span>
                </>
              )}
            </div>

            {/* Quick care badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { label: `☀️ ${plant.light} light`, },
                { label: `💧 ${plant.water} water`, },
                { label: `🌱 ${plant.difficulty}`, },
              ].map((b) => (
                <span
                  key={b.label}
                  className="bg-[#e8f5e9] text-[#2d6a4f] text-sm font-medium px-3 py-1.5 rounded-full"
                >
                  {b.label}
                </span>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {plant.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Quantity + Add */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 py-3 font-bold text-[#1a2e1a] min-w-[3rem] text-center">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-3 hover:bg-gray-50 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-base transition-all duration-300 ${
                  added
                    ? "bg-green-500 text-white"
                    : "bg-[#2d6a4f] text-white hover:bg-[#1b4332] hover:shadow-lg"
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-5 h-5" /> Added to Cart!
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </>
                )}
              </button>

              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all ${
                  wishlisted
                    ? "border-[#e07a5f] bg-[#e07a5f] text-white"
                    : "border-gray-200 hover:border-[#e07a5f] text-gray-400 hover:text-[#e07a5f]"
                }`}
              >
                <Heart className="w-5 h-5" fill={wishlisted ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-[#6b7c6b]">
                <Truck className="w-4 h-4 text-[#2d6a4f]" />
                Free Shipping on $49+
              </div>
              <div className="flex items-center gap-2 text-sm text-[#6b7c6b]">
                <Shield className="w-4 h-4 text-[#2d6a4f]" />
                30-Day Guarantee
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs: Description / Care */}
        <div className="mt-16">
          <div className="flex gap-1 border-b border-gray-200 mb-8">
            {(["description", "care"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold text-sm capitalize transition-all border-b-2 -mb-px ${
                  activeTab === tab
                    ? "border-[#2d6a4f] text-[#2d6a4f]"
                    : "border-transparent text-[#6b7c6b] hover:text-[#1a2e1a]"
                }`}
              >
                {tab === "care" ? "Care Guide" : "Description"}
              </button>
            ))}
          </div>

          {activeTab === "description" ? (
            <p className="text-[#4a5e4a] leading-relaxed text-lg max-w-2xl">
              {plant.description}
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
              {careItems.map(({ icon: Icon, label, value, color }) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className={`w-5 h-5 ${color}`} />
                    <span className="font-bold text-[#1a2e1a] text-sm">{label}</span>
                  </div>
                  <p className="text-[#6b7c6b] text-sm leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-extrabold text-[#1a2e1a] mb-8">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} plant={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
