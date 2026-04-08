"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X, Search, Heart, User, ChevronDown, Phone, Mail, Truck, Package, ChevronRight, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { motion, AnimatePresence } from "framer-motion";
import { plants } from "@/data/products";

const megaMenuCategories = [
  {
    title: "Indoor Plants",
    href: "/shop?category=Indoor",
    icon: "🌿",
    desc: "Perfect for any room",
    items: ["Monstera", "Snake Plant", "Fiddle Leaf", "Pothos", "ZZ Plant", "Peace Lily"],
  },
  {
    title: "Succulents",
    href: "/shop?category=Succulents",
    icon: "🌵",
    desc: "Drought-tolerant beauties",
    items: ["Echeveria", "Aloe Vera", "Haworthia", "Jade Plant", "Sedum", "Cactus Mix"],
  },
  {
    title: "Herbs",
    href: "/shop?category=Herbs",
    icon: "🌱",
    desc: "Grow your own kitchen garden",
    items: ["Basil", "Rosemary", "Lavender", "Mint", "Thyme", "Cilantro"],
  },
  {
    title: "Outdoor",
    href: "/shop?category=Outdoor",
    icon: "🌳",
    desc: "Transform your garden",
    items: ["Bird of Paradise", "Bougainvillea", "Hibiscus", "Ferns", "Palms", "Roses"],
  },
];

const navLinks = [
  { label: "New Arrivals", href: "/new-arrivals", badge: "New" },
  { label: "Deals", href: "/deals", badge: "Sale" },
  { label: "Care Guide", href: "/care-guide" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const { wishlistCount } = useWishlist();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileShopOpen, setMobileShopOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const searchResults = searchQuery.length > 1
    ? plants.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 4)
    : [];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (searchOpen && searchRef.current) searchRef.current.focus();
  }, [searchOpen]);

  return (
    <>
      <div className="bg-[#1b4332] text-white text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 opacity-80"><Phone className="w-3 h-3" /> +1 (555) 123-4567</span>
            <span className="flex items-center gap-1.5 opacity-80"><Mail className="w-3 h-3" /> hello@leafly.com</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <Truck className="w-3 h-3 text-[#a8d8b9]" />
            <span>🎉 Free Shipping on orders over <strong>$49</strong> — Use code <strong className="text-[#a8d8b9]">LEAFLY20</strong> for 20% off!</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/track-order" className="flex items-center gap-1 hover:text-[#a8d8b9] transition-colors opacity-80 hover:opacity-100">
               <Package className="w-3 h-3" /> Track Order
            </Link>
          </div>
        </div>
      </div>

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-white/95 backdrop-blur-md shadow-sm py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4">
          <Link href="/" className="flex items-center group flex-shrink-0">
            <div className="flex h-[74px] w-[98px] items-center justify-center rounded-[30px] border border-[#dce8df] bg-[linear-gradient(180deg,#ffffff_0%,#f5faf6_100%)] px-3 shadow-[0_14px_34px_rgba(27,67,50,0.12)] ring-1 ring-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_18px_38px_rgba(27,67,50,0.16)]">
              <Image
                src="/assets/Logo/plant_logo.png"
                alt="Plant Logo"
                width={74}
                height={74}
                className="h-[60px] w-auto object-contain"
                priority
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            <div
              className="relative"
              onMouseEnter={() => setShopOpen(true)}
              onMouseLeave={() => setShopOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-black text-[#1a2e1a] hover:bg-[#e8f5e9] transition-colors">
                Shop <ChevronDown className={`w-3.5 h-3.5 transition-transform ${shopOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {shopOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[780px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden p-2"
                  >
                    <div className="grid grid-cols-4 gap-0">
                      {megaMenuCategories.map((cat) => (
                        <Link
                          key={cat.title}
                          href={cat.href}
                          className="p-5 hover:bg-[#f7faf7] rounded-3xl transition-all border-r border-gray-50 last:border-r-0 group"
                        >
                          <div className="text-2xl mb-2">{cat.icon}</div>
                          <div className="font-black text-[#1a2e1a] text-sm mb-1 group-hover:text-[#2d6a4f] transition-colors">{cat.title}</div>
                          <div className="text-[10px] uppercase font-bold text-[#6b7c6b] mb-3">{cat.desc}</div>
                          <ul className="space-y-1">
                            {cat.items.slice(0, 4).map(item => (
                              <li key={item} className="text-xs text-[#4a5e4a] font-medium flex items-center gap-1">
                                <ChevronRight className="w-2.5 h-2.5 text-[#2d6a4f]" />{item}
                              </li>
                            ))}
                          </ul>
                        </Link>
                      ))}
                    </div>
                    <div className="bg-[#1b4332] px-6 py-4 flex items-center justify-between rounded-2xl">
                      <div className="flex items-center gap-3">
                        <Star className="w-4 h-4 text-[#74c69d] fill-[#74c69d]" />
                        <span className="text-white text-xs font-black uppercase tracking-widest">Top-Rated Botanics — 4.9★ Average</span>
                      </div>
                      <Link href="/shop" className="bg-white text-[#1b4332] text-[10px] font-black px-5 py-2 rounded-full hover:bg-[#f7faf7] transition-all uppercase tracking-widest shadow-xl">
                        Explore Collection →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 rounded-xl text-sm font-black text-[#1a2e1a] hover:bg-[#e8f5e9] transition-colors flex items-center gap-1.5 group"
              >
                {link.label}
                {link.badge && (
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm ${link.badge === "New" ? "bg-[#2d6a4f] text-white" : "bg-[#4f772d] text-white"}`}>
                    {link.badge}
                  </span>
                )}
                <div className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#2d6a4f] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 ml-auto">
            <div className="relative">
              <button
                onClick={() => { setSearchOpen(!searchOpen); setSearchQuery(""); }}
                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#e8f5e9] transition-colors"
              >
                {searchOpen ? <X className="w-5 h-5 text-[#2d6a4f]" /> : <Search className="w-5 h-5 text-[#2d6a4f]" />}
              </button>

              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 300 }}
                    exit={{ opacity: 0, width: 0 }}
                    className="absolute right-0 top-0 z-50 overflow-hidden"
                  >
                    <div className="bg-white rounded-2xl border border-[#1b4332] shadow-2xl overflow-hidden p-1.5">
                      <div className="flex items-center px-4 py-3">
                        <Search className="w-4.5 h-4.5 text-[#2d6a4f] flex-shrink-0" />
                        <input
                          ref={searchRef}
                          type="text"
                          placeholder="Search species..."
                          value={searchQuery}
                          onChange={e => setSearchQuery(e.target.value)}
                          className="flex-1 px-3 py-1 text-sm font-bold text-[#1a2e1a] focus:outline-none"
                        />
                      </div>
                      {searchResults.length > 0 && (
                        <div className="border-t border-gray-100 p-1">
                          {searchResults.map(p => (
                            <Link
                              key={p.id}
                              href={`/shop/${p.id}`}
                              onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                              className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-[#f7faf7] transition-all"
                            >
                              <div className="w-12 h-12 rounded-xl overflow-hidden relative flex-shrink-0 bg-[#f7faf7] border border-[#e8f5e9]">
                                <Image src={p.image} alt={p.name} fill className="object-cover" />
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-black text-[#1a2e1a] line-clamp-1">{p.name}</div>
                                <div className="text-xs text-[#2d6a4f] font-black">${p.price.toFixed(2)}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/wishlist" className="relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#f7faf7] transition-all group">
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? "text-red-500 fill-red-500" : "text-[#1b4332]"} transition-colors`} />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#1b4332] text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link href="/account" className="hidden md:flex w-10 h-10 items-center justify-center rounded-xl hover:bg-[#e8f5e9] transition-all group">
              <User className="w-5 h-5 text-[#1b4332] group-hover:scale-110 transition-transform" />
            </Link>

            <Link
              href="/cart"
              className="relative flex items-center gap-3 bg-[#1b4332] hover:bg-[#2d6a4f] text-white px-5 py-2.5 rounded-2xl transition-all font-black text-xs uppercase tracking-widest shadow-2xl group hover:scale-[1.03] active:scale-95"
            >
              <ShoppingCart className="w-4.5 h-4.5 group-hover:-rotate-12 transition-transform" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                 <span className="w-5 h-5 bg-[#74c69d] text-[#1b4332] text-[10px] font-black rounded-full flex items-center justify-center border-2 border-[#1b4332] shadow-lg">
                   {totalItems}
                 </span>
              )}
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#e8f5e9] transition-colors"
            >
              {menuOpen ? <X className="w-6 h-6 text-[#1b4332]" /> : <Menu className="w-6 h-6 text-[#1b4332]" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-5 py-6 space-y-2 max-h-[75vh] overflow-y-auto">
                <button
                  onClick={() => setMobileShopOpen(!mobileShopOpen)}
                  className="w-full flex items-center justify-between px-5 py-4 rounded-2xl text-[#1a2e1a] font-black hover:bg-[#e8f5e9] transition-all border border-transparent hover:border-[#e8f5e9]"
                >
                  <span className="text-sm uppercase tracking-widest">Explore Shop</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${mobileShopOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileShopOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden pl-4"
                    >
                      {megaMenuCategories.map(cat => (
                        <Link
                          key={cat.title}
                          href={cat.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-[#f7faf7] transition-all"
                        >
                          <span className="text-2xl">{cat.icon}</span>
                          <div>
                            <div className="font-black text-[#1a2e1a] text-sm">{cat.title}</div>
                            <div className="text-[10px] font-bold text-[#6b7c6b] uppercase tracking-tighter">{cat.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {navLinks.map(link => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between px-5 py-4 rounded-2xl text-[#1a2e1a] font-black hover:bg-[#e8f5e9] transition-all"
                  >
                    <span className="text-sm uppercase tracking-widest">{link.label}</span>
                    {link.badge && (
                      <span className={`text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm ${link.badge === "New" ? "bg-[#2d6a4f] text-white" : "bg-[#4f772d] text-white"}`}>
                        {link.badge}
                      </span>
                    )}
                  </Link>
                ))}
                <div className="border-t border-[#e8f5e9] pt-6 mt-6 flex gap-4">
                  <Link href="/wishlist" onClick={() => setMenuOpen(false)} className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#f7faf7] text-[#1a2e1a] text-xs font-black uppercase tracking-widest border border-[#e8f5e9] shadow-sm">
                    <Heart className="w-4 h-4 text-red-500 fill-red-500" /> Wishlist
                  </Link>
                  <Link href="/account" onClick={() => setMenuOpen(false)} className="flex-1 flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#1b4332] text-white text-xs font-black uppercase tracking-widest shadow-xl">
                    <User className="w-4 h-4 text-[#74c69d]" /> Profile
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
