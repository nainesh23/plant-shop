"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Truck, Shield, Leaf, HeadphonesIcon, Star, Zap, Clock, Gift, BookOpen } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { plants } from "@/data/products";
import { useEffect, useState } from "react";

/* ─── Countdown timer ─── */
function useCountdown(targetHours = 8) {
  const [time, setTime] = useState({ h: targetHours, m: 0, s: 0 });
  useEffect(() => {
    const end = Date.now() + targetHours * 3600 * 1000;
    const iv = setInterval(() => {
      const diff = Math.max(0, end - Date.now());
      setTime({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }, 1000);
    return () => clearInterval(iv);
  }, [targetHours]);
  return time;
}

const categories = [
  { name: "Indoor Plants", slug: "Indoor", image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=500&q=80", count: "40+ varieties", color: "from-green-900/70" },
  { name: "Succulents", slug: "Succulents", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500&q=80", count: "25+ varieties", color: "from-[#2d6a4f]/70" },
  { name: "Herbs", slug: "Herbs", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80", count: "18+ varieties", color: "from-emerald-900/70" },
  { name: "Outdoor", slug: "Outdoor", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&q=80", count: "30+ varieties", color: "from-[#1b4332]/70" },
];

const perks = [
  { icon: Truck, title: "Free Shipping", desc: "Orders over $49 ship free" },
  { icon: Shield, title: "30-Day Guarantee", desc: "Not happy? We'll replace" },
  { icon: Leaf, title: "Eco Packaged", desc: "100% recycled materials" },
  { icon: HeadphonesIcon, title: "Expert Support", desc: "Chat with botanists" },
];

const marqueeItems = ["🌿 Air-Purifying", "🪴 Easy Care", "🌸 Pet-Friendly", "🚚 Free Shipping $49+", "🌵 Drought Tolerant", "⭐ 4.9★ Rated", "🎁 Gift Wrapping", "🌱 New Arrivals Weekly", "♻️ Eco Packaging"];

const testimonials = [
  { name: "Sarah M.", rating: 5, text: "The Monstera arrived perfectly! My living room is transformed 🌿", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
  { name: "James R.", rating: 5, text: "Quick delivery, amazing quality. Snake Plant is thriving weeks later!", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
  { name: "Priya K.", rating: 5, text: "The care guide helped so much! Fresh basil every single day 🌱", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
];

const bestSellers = plants.filter(p => [1, 3, 8, 11, 6, 4].includes(p.id));
const newArrivals = plants.filter(p => [2, 5, 9, 12].includes(p.id));

export default function HomePage() {
  const { h, m, s } = useCountdown(7);

  return (
    <div className="page-enter">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&q=80" alt="Lush green plants" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b4332]/95 via-[#2d6a4f]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b4332]/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> 🌱 Freshly added to our nursery
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Bring Nature<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a8d8b9] to-[#74c69d]">Into Your Space</span>
            </h1>
            <p className="text-white/75 text-xl leading-relaxed mb-8 max-w-lg">
              Curated botanicals for a greener home. Delivered healthy, with expert care guides from our botanists.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/shop" className="btn-accent flex items-center gap-2 text-base px-7 py-3.5 shadow-xl">
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/care-guide" className="border-2 border-white/50 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all text-base flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Care Guide
              </Link>
            </div>
            <div className="flex gap-8 mt-12">
              {[{ val: "5K+", label: "Happy Customers" }, { val: "200+", label: "Plant Varieties" }, { val: "4.9★", label: "Average Rating" }].map(s => (
                <div key={s.label}>
                  <div className="text-2xl font-extrabold text-white">{s.val}</div>
                  <div className="text-white/60 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero plant card */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:block">
            <div className="relative max-w-sm ml-auto">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-5 border border-white/25 shadow-2xl">
                <div className="relative h-72 rounded-2xl overflow-hidden mb-4">
                  <Image src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80" alt="Featured Monstera" fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-[#2d6a4f] to-[#1b4332] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">Best Seller</div>
                </div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-white font-bold text-lg">Monstera Deliciosa</h3>
                    <p className="text-white/60 text-sm">Indoor · Easy care · Air purifying</p>
                  </div>
                  <span className="text-white font-extrabold text-2xl">$34.99</span>
                </div>
                <div className="flex items-center gap-1">
                  {Array(5).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 text-[#95d5ab] fill-[#95d5ab]" />)}
                  <span className="text-white/60 text-xs ml-1">(238 reviews)</span>
                </div>
                <Link href="/shop/1" className="mt-4 w-full block text-center bg-white text-[#2d6a4f] font-bold py-3 rounded-2xl hover:bg-[#e8f5e9] transition-colors">
                  View Plant →
                </Link>
              </div>
              <div className="absolute -top-8 -right-8 w-28 h-28 bg-[#74c69d]/25 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-[#2d6a4f]/20 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MARQUEE TRUST BAR ── */}
      <div className="bg-[#2d6a4f] py-3 overflow-hidden">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-white/90 text-sm font-medium px-8 flex-shrink-0">
              {item} <span className="text-white/30 ml-8">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── FLASH SALE BANNER ── */}
      <section className="py-6 px-6 bg-gradient-to-r from-[#1b4332] via-[#2d6a4f] to-[#122b21]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-[#95d5ab]" />
            </div>
            <div>
              <p className="text-white font-extrabold text-xl">🌿 Green Drop — 20% OFF Site-wide!</p>
              <p className="text-white/80 text-sm">Use code <strong className="text-[#95d5ab]">LEAFLY20</strong>. Limited quantities available.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-5 h-5 text-[#95d5ab]" />
              <span className="text-sm font-semibold">Ends in:</span>
              <div className="flex gap-2">
                {[String(h).padStart(2,"0"), String(m).padStart(2,"0"), String(s).padStart(2,"0")].map((val, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <div className="bg-white/10 backdrop-blur-sm text-white font-extrabold text-xl w-12 h-12 rounded-xl flex items-center justify-center border border-white/20">
                      {val}
                    </div>
                    {i < 2 && <span className="text-white font-bold text-lg">:</span>}
                  </div>
                ))}
              </div>
            </div>
            <Link href="/deals" className="bg-[#74c69d] text-[#1b4332] font-bold px-6 py-3 rounded-full hover:bg-[#95d5ab] transition-all shadow-lg text-sm">
              Shop Green →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#2d6a4f] font-semibold text-sm uppercase tracking-widest">Explore Collections</span>
          <h2 className="text-4xl font-extrabold text-[#1a2e1a] mt-2">Shop by Category</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div key={cat.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link href={`/shop?category=${cat.slug}`}>
                <div className="relative h-72 rounded-3xl overflow-hidden group cursor-pointer border border-[#e8f5e9]">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} to-transparent opacity-80`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b4332]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <h3 className="font-extrabold text-lg mb-1">{cat.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-white/70 text-sm">{cat.count}</p>
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#74c69d] group-hover:text-[#1b4332] group-hover:scale-110 transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── BEST SELLERS ── */}
      <section className="py-16 px-6 bg-[#f0f9f0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[#2d6a4f] font-semibold text-sm uppercase tracking-widest">Customer Favorites</span>
              <h2 className="text-4xl font-extrabold text-[#1a2e1a] mt-2">Best Sellers</h2>
            </div>
            <Link href="/shop" className="hidden md:flex items-center gap-2 text-[#2d6a4f] font-semibold hover:gap-3 transition-all text-sm">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestSellers.map((plant, i) => <ProductCard key={plant.id} plant={plant} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── SPLIT PROMO BANNERS ── */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Banner 1: Rare Collections */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-[3rem] overflow-hidden h-[450px] group border border-[#e8f5e9] shadow-xl">
            <Image src="/rare_varieties_banner_1775043119013.png" alt="Rare plant varieties" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b4332] via-[#1b4332]/40 to-transparent" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <span className="inline-block bg-[#74c69d] text-[#1b4332] text-xs font-black px-4 py-2 rounded-full mb-4 w-fit shadow-xl">💎 Collector's Edition</span>
              <h3 className="text-white font-black text-4xl mb-4 leading-tight">Rare Variegated <br />Specimens</h3>
              <p className="text-white/70 text-lg mb-8 max-w-sm">Elevate your living space with our hand-selected, one-of-a-kind botanicals.</p>
              <Link href="/shop?category=Rare" className="w-fit bg-white text-[#1b4332] font-black px-8 py-4 rounded-2xl text-base hover:bg-[#e8f5e9] transition-all shadow-2xl">
                View Collection →
              </Link>
            </div>
          </motion.div>

          {/* Banner 2: Pet-Friendly Oasis */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-[3rem] overflow-hidden h-[450px] group border border-[#e8f5e9] shadow-xl">
            <Image src="/pet_friendly_banner_1775043137124.png" alt="Pet-friendly plants" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2d6a4f] via-[#2d6a4f]/40 to-transparent" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <span className="inline-block bg-[#a8d8b9] text-[#1b4332] text-xs font-black px-4 py-2 rounded-full mb-4 w-fit shadow-xl">🐾 Safe & Green</span>
              <h3 className="text-white font-black text-4xl mb-4 leading-tight">Fur-Friendly <br />Oasis</h3>
              <p className="text-white/70 text-lg mb-8 max-w-sm">Shop our non-toxic collection guaranteed safe for your beloved pets.</p>
              <Link href="/shop?filter=pet-friendly" className="w-fit bg-white text-[#2d6a4f] font-black px-8 py-4 rounded-2xl text-base hover:bg-[#f7faf7] transition-all shadow-2xl">
                Shop Safe Plants →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── NEW ARRIVALS ── */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[#2d6a4f] font-semibold text-sm uppercase tracking-widest">Just Arrived</span>
              <h2 className="text-4xl font-extrabold text-[#1a2e1a] mt-2">New Arrivals</h2>
            </div>
            <Link href="/new-arrivals" className="hidden md:flex items-center gap-2 text-[#2d6a4f] font-semibold text-sm hover:gap-3 transition-all">
              See All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((plant, i) => <ProductCard key={plant.id} plant={plant} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── WELL-BEING BANNER (WIDE) ── */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="relative rounded-[4rem] overflow-hidden min-h-[500px] flex items-center shadow-2xl border border-white/10 group">
          <Image src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1600&q=80" alt="Botanical well-being" fill className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b4332] via-[#1b4332]/60 to-transparent" />
          <div className="relative z-10 p-12 md:p-20 max-w-2xl">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 bg-[#74c69d] text-[#1b4332] text-xs font-black px-5 py-2.5 rounded-full mb-8 shadow-xl">
                 ✨ Botanical Wellness
              </span>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                Breathable<br />
                <span className="text-[#a8d8b9]">Sanctuary</span>
              </h2>
              <p className="text-white/80 text-xl leading-relaxed mb-10">
                Plants aren't just decor; they are nature's air purifiers. Our botanical collections 
                are designed to reduce stress, boost creativity, and improve your indoor air quality.
              </p>
              <div className="flex flex-wrap gap-6">
                 <Link href="/shop" className="bg-white text-[#1b4332] px-10 py-5 rounded-[2rem] font-black text-lg hover:bg-[#74c69d] transition-all shadow-2xl flex items-center gap-3">
                   Start Your Journey <ArrowRight className="w-5 h-5" />
                 </Link>
                 <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-[2rem] border border-white/20">
                    <div className="w-10 h-10 bg-[#74c69d] rounded-full flex items-center justify-center shadow-lg">
                       <Zap className="w-5 h-5 text-[#1b4332]" />
                    </div>
                    <span className="text-white text-sm font-bold uppercase tracking-widest">+20% Oxygen Boost</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PLANT OF THE MONTH ── */}

      {/* ── PLANT OF THE MONTH ── */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1b4332] to-[#2d6a4f] border border-white/10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4" />
            <div className="relative z-10 grid md:grid-cols-2 items-center gap-0">
              <div className="p-10 md:p-14">
                <span className="inline-flex items-center gap-2 bg-[#74c69d] text-[#1b4332] text-xs font-bold px-4 py-2 rounded-full mb-6">
                  🌟 Botanist Choice — April
                </span>
                <h2 className="text-4xl font-extrabold text-white mb-4 leading-tight">
                  Monstera<br />Deliciosa
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  Our star of the month — dramatic, easy to care for, and a statement maker. 
                  Get it at our special April price before stocks run out.
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl font-extrabold text-white">$29.99</span>
                  <span className="text-white/40 line-through text-xl">$44.99</span>
                  <span className="bg-[#74c69d] text-[#1b4332] text-sm font-bold px-3 py-1 rounded-full">Member Price</span>
                </div>
                <Link href="/shop/1" className="bg-white text-[#1b4332] px-8 py-4 rounded-full font-bold flex items-center gap-2 w-fit shadow-xl hover:bg-[#e8f5e9] transition-all">
                  Adopt this plant <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative h-80 md:h-full min-h-72">
                <Image src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&q=80" alt="Plant of the Month" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1b4332]/30 md:bg-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GIFT CARDS BANNER ── */}
      <section className="py-6 px-6 max-w-7xl mx-auto">
        <div className="bg-[#e8f5e9] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#c8e6c9]">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-[#2d6a4f] rounded-2xl flex items-center justify-center text-3xl shadow-lg">🎁</div>
            <div>
              <h3 className="text-2xl font-extrabold text-[#1b4332]">Gift the Greenhouse</h3>
              <p className="text-[#4a5e4a]">Leafly Digital Cards — perfect for every new plant parent</p>
            </div>
          </div>
          <Link href="/contact" className="bg-[#1b4332] hover:bg-[#2d6a4f] text-white font-bold px-7 py-3.5 rounded-full transition-colors shadow-lg whitespace-nowrap flex items-center gap-2">
            <Gift className="w-4 h-4" /> Send a Gift
          </Link>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="py-16 px-6 bg-[#f7faf7]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, i) => (
            <motion.div key={perk.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8f5e9] text-center group hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2d6a4f] transition-colors">
                <perk.icon className="w-6 h-6 text-[#2d6a4f] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-[#1a2e1a] mb-1">{perk.title}</h3>
              <p className="text-[#6b7c6b] text-sm">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#2d6a4f] font-semibold text-sm uppercase tracking-widest">Growing Together</span>
          <h2 className="text-4xl font-extrabold text-[#1a2e1a] mt-2">From our plant parent community 🌿</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#e8f5e9] hover:shadow-md transition-shadow relative"
            >
              <div className="text-4xl absolute top-4 right-5 text-[#e8f5e9] font-serif opacity-40">&ldquo;</div>
              <div className="flex gap-1 mb-4">
                {Array(t.rating).fill(0).map((_, j) => <Star key={j} className="w-4 h-4 text-[#95d5ab] fill-[#95d5ab]" />)}
              </div>
              <p className="text-[#4a5e4a] leading-relaxed mb-5 text-sm">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#e8f5e9]">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-[#1a2e1a] text-sm">{t.name}</div>
                  <div className="text-[#6b7c6b] text-xs flex items-center gap-1">✓ Verified Parent</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WIDE PROMO BANNER ── */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <Image src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1400&q=80" alt="Promo banner" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b4332]/95 via-[#1b4332]/80 to-transparent" />
          <div className="relative z-10 p-12 md:px-20 md:py-16 max-w-lg">
            <span className="text-[#a8d8b9] font-semibold text-sm uppercase tracking-widest">🌟 Welcome Offer</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">Start your journey with 20% off</h2>
            <p className="text-white/70 mb-7 text-lg">Use code <strong className="text-[#74c69d]">LEAFLY20</strong> at checkout for your first order.</p>
            <Link href="/shop" className="bg-[#74c69d] text-[#1b4332] px-8 py-4 rounded-full font-bold flex items-center gap-2 w-fit shadow-xl hover:bg-[#95d5ab] transition-all">
              Claim Offer <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-20 px-6 bg-[#1b4332] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="text-5xl mb-4">🌿</div>
          <span className="text-[#a8d8b9] font-semibold text-sm uppercase tracking-widest">Our newsletter</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-3">Green tips delivered weekly</h2>
          <p className="text-white/60 mb-8">Join 10,000+ plant enthusiasts. Seasonal advice, exclusive drops, and care guides.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address..." className="flex-1 bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-full px-6 py-4 focus:outline-none focus:border-[#74c69d] transition-all text-sm" />
            <button className="bg-[#74c69d] hover:bg-[#95d5ab] text-[#1b4332] font-bold px-8 py-4 rounded-full transition-all whitespace-nowrap text-sm shadow-xl">
              Subscribe ✓
            </button>
          </div>
          <p className="text-white/30 text-xs mt-4">We respect your privacy and only send quality content.</p>
        </div>
      </section>
    </div>
  );
}
