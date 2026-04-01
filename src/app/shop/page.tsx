"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X, ChevronDown, Leaf } from "lucide-react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { plants, categories } from "@/data/products";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const lightOptions = ["All", "Low", "Medium", "Bright", "Full Sun"];
const waterOptions = ["All", "Low", "Moderate", "High"];
const difficultyOptions = ["All", "Easy", "Medium", "Hard"];
const sortOptions = [
  { val: "default", label: "Featured" },
  { val: "price-asc", label: "Price: Low to High" },
  { val: "price-desc", label: "Price: High to Low" },
  { val: "rating", label: "Highest Rated" },
  { val: "name", label: "Name A–Z" },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedLight, setSelectedLight] = useState("All");
  const [selectedWater, setSelectedWater] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100);
  const [sort, setSort] = useState("default");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...plants];
    if (search)
      list = list.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
      );
    if (selectedCategory !== "All")
      list = list.filter((p) => p.category === selectedCategory);
    if (selectedLight !== "All")
      list = list.filter((p) => p.light === selectedLight);
    if (selectedWater !== "All")
      list = list.filter((p) => p.water === selectedWater);
    if (selectedDifficulty !== "All")
      list = list.filter((p) => p.difficulty === selectedDifficulty);
    list = list.filter((p) => p.price <= maxPrice);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }
    return list;
  }, [search, selectedCategory, selectedLight, selectedWater, selectedDifficulty, maxPrice, sort]);

  const hasActiveFilters =
    selectedCategory !== "All" ||
    selectedLight !== "All" ||
    selectedWater !== "All" ||
    selectedDifficulty !== "All" ||
    maxPrice < 100 ||
    search;

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("All");
    setSelectedLight("All");
    setSelectedWater("All");
    setSelectedDifficulty("All");
    setMaxPrice(100);
    setSort("default");
  };

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Category */}
      <div>
        <h3 className="font-bold text-[#1a2e1a] mb-3 text-sm uppercase tracking-wide">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`w-full text-left px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-[#2d6a4f] text-white"
                  : "text-[#4a5e4a] hover:bg-[#e8f5e9]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="font-bold text-[#1a2e1a] mb-3 text-sm uppercase tracking-wide">
          Max Price: <span className="text-[#2d6a4f]">${maxPrice}</span>
        </h3>
        <input
          type="range"
          min={5}
          max={100}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
        <div className="flex justify-between text-xs text-[#6b7c6b] mt-1">
          <span>$5</span>
          <span>$100</span>
        </div>
      </div>

      {/* Light */}
      <div>
        <h3 className="font-bold text-[#1a2e1a] mb-3 text-sm uppercase tracking-wide">
          Light Requirement
        </h3>
        <div className="flex flex-wrap gap-2">
          {lightOptions.map((l) => (
            <button
              key={l}
              onClick={() => setSelectedLight(l)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedLight === l
                  ? "bg-[#2d6a4f] text-white"
                  : "bg-[#e8f5e9] text-[#2d6a4f] hover:bg-[#2d6a4f] hover:text-white"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Water */}
      <div>
        <h3 className="font-bold text-[#1a2e1a] mb-3 text-sm uppercase tracking-wide">
          Water Needs
        </h3>
        <div className="flex flex-wrap gap-2">
          {waterOptions.map((w) => (
            <button
              key={w}
              onClick={() => setSelectedWater(w)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedWater === w
                  ? "bg-[#2d6a4f] text-white"
                  : "bg-[#e8f5e9] text-[#2d6a4f] hover:bg-[#2d6a4f] hover:text-white"
              }`}
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty */}
      <div>
        <h3 className="font-bold text-[#1a2e1a] mb-3 text-sm uppercase tracking-wide">
          Difficulty
        </h3>
        <div className="flex flex-wrap gap-2">
          {difficultyOptions.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDifficulty(d)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedDifficulty === d
                  ? "bg-[#2d6a4f] text-white"
                  : "bg-[#e8f5e9] text-[#2d6a4f] hover:bg-[#2d6a4f] hover:text-white"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="w-full py-2 text-sm text-[#2d6a4f] font-semibold border border-[#2d6a4f] rounded-xl hover:bg-[#2d6a4f] hover:text-white transition-all shadow-sm"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#f7faf7] page-enter">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Banner */}
        <div className="relative h-64 mb-10 overflow-hidden rounded-[3rem] border border-[#e8f5e9] shadow-2xl">
          <Image src="/assets/images/hero_minimalist_green.png" alt="Shop collection" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b4332]/90 via-[#2d6a4f]/70 to-transparent" />
          <div className="relative z-10 h-full flex flex-col items-start justify-center px-12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="inline-flex items-center gap-2 bg-[#74c69d] text-[#1b4332] text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4 shadow-xl">
                 🌿 Curated Collection
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">Our Full Nursery</h1>
              <p className="text-white/60 mt-2 text-lg">Found {filtered.length} botanical varieties ready for adoption.</p>
            </motion.div>
          </div>
        </div>

        {/* Search + Sort bar */}
        <div className="flex gap-3 mb-12 flex-wrap">
          <div className="relative flex-1 min-w-64">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#2d6a4f]" />
            <input
              type="text"
              placeholder="Search by name, tag, or species..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-2xl border border-white bg-white shadow-xl focus:outline-none focus:border-[#2d6a4f] text-sm transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none pl-6 pr-12 py-4 rounded-2xl border border-white bg-white shadow-xl text-sm text-[#1a2e1a] font-bold focus:outline-none focus:border-[#2d6a4f] cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.val} value={o.val}>
                  {o.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#2d6a4f] pointer-events-none" />
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="lg:hidden flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-white bg-white shadow-xl text-sm font-bold text-[#1a2e1a]"
          >
            <SlidersHorizontal className="w-4 h-4 text-[#2d6a4f]" />
            Filters
            {hasActiveFilters && (
              <span className="w-2.5 h-2.5 bg-[#74c69d] rounded-full border-2 border-white shadow-sm" />
            )}
          </button>
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 border border-white shadow-xl">
              <FilterSidebar />
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          <AnimatePresence>
            {filtersOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 lg:hidden"
              >
                <div
                  className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                  onClick={() => setFiltersOpen(false)}
                />
                <motion.div
                  initial={{ x: -400 }}
                  animate={{ x: 0 }}
                  exit={{ x: -400 }}
                  transition={{ type: "spring", damping: 30 }}
                  className="absolute left-0 top-0 bottom-0 w-80 bg-white p-8 overflow-y-auto shadow-2xl"
                >
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="font-extrabold text-2xl text-[#1a2e1a]">Filters</h2>
                    <button onClick={() => setFiltersOpen(false)} className="p-2 hover:bg-[#f7faf7] rounded-xl transition-colors">
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <FilterSidebar />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <div className="flex-1 min-w-0">
            {filtered.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-[3rem] border border-[#e8f5e9] shadow-inner">
                <div className="w-20 h-20 bg-[#f7faf7] rounded-full flex items-center justify-center mx-auto mb-6">
                   <Leaf className="w-10 h-10 text-[#2d6a4f] opacity-30" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#1a2e1a] mb-2">
                  No botanicals found
                </h3>
                <p className="text-[#6b7c6b] mb-8 max-w-xs mx-auto">
                  Try adjusting your filters or search term to discover other varieties.
                </p>
                <button onClick={clearFilters} className="btn-primary px-8">
                  Reset Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filtered.map((plant, i) => (
                  <ProductCard key={plant.id} plant={plant} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-24 flex items-center justify-center text-[#6b7c6b]">Loading nursery...</div>}>
      <ShopContent />
    </Suspense>
  );
}
