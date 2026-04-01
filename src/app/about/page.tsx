"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, Heart, Globe, Recycle, ArrowRight, Sprout } from "lucide-react";

const team = [
  {
    name: "Maya Chen",
    role: "Founder & Head Botanist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
    bio: "10+ years nurturing rare species across 3 continents.",
  },
  {
    name: "Liam Foster",
    role: "Horticulture Specialist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    bio: "Passionate about sustainable growing practices.",
  },
  {
    name: "Sofia Ruiz",
    role: "Customer Experience Lead",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80",
    bio: "Dedicated to helping every plant parent succeed.",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Plant First",
    desc: "Every decision starts with what's best for the plant — and our community parents.",
  },
  {
    icon: Globe,
    title: "Sustainable Sourcing",
    desc: "We partner only with growers who share our commitment to the earth.",
  },
  {
    icon: Recycle,
    title: "Eco Packaging",
    desc: "100% recycled, biodegradable materials. Zero plastic packaging.",
  },
  {
    icon: Heart,
    title: "Community",
    desc: "We contribute to urban greening initiatives with every botanical purchase.",
  },
];

const milestones = [
  { year: "2018", event: "Leafly founded in a small greenhouse in Brooklyn" },
  { year: "2020", event: "Launched online store, grew to 1,000+ happy collectors" },
  { year: "2022", event: "Expanded to 200+ varieties and opened our primary nursery" },
  { year: "2024", event: "5,000+ customers | 4.9★ average rating | 50K plants delivered" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 bg-[#F7FAF7] page-enter">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden border-b border-[#e8f5e9]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&q=80"
            alt="Plant nursery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1b4332]/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#74C69D] text-[#1B4332] text-sm font-bold px-4 py-2 rounded-full mb-6 shadow-xl">
              <Sprout className="w-4 h-4" /> Est. 2018 · Roots in NY
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              We&apos;re More Than
              <br />
              <span className="text-[#a8d8b9]">a Plant Shop</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed max-w-2xl mx-auto">
              We&apos;re a community of plant parents on a mission to bring nature into
              every space — sustainably, beautifully, and authentically.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 border-b border-[#e8f5e9]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#2d6a4f] font-bold text-sm uppercase tracking-widest">
              Our Mission
            </span>
            <h2 className="text-4xl font-extrabold text-[#1a2e1a] mt-3 mb-6">
              Greening the World,
              <br />
              One Space at a Time
            </h2>
            <p className="text-[#4a5e4a] text-lg leading-relaxed mb-6">
              We started Leafly because we believe every space — no matter how small —
              deserves a touch of nature. Plants don&apos;t just look beautiful. They
              reduce stress, purify air, boost creativity, and connect us to the earth.
            </p>
            <p className="text-[#4a5e4a] text-lg leading-relaxed mb-8">
              Our botanist-curated selection ensures every plant we sell is healthy,
              ethically sourced, and comes with the guidance you need to help it thrive.
            </p>
            <Link href="/shop" className="btn-primary inline-flex items-center gap-2 shadow-xl">
              Shop the Collection <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative h-[480px] rounded-[3rem] overflow-hidden shadow-2xl border border-[#e8f5e9]">
              <Image
                src="https://images.unsplash.com/photo-1545241047-6083a3684587?w=700&q=80"
                alt="Our nursery"
                fill
                className="object-cover"
              />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl p-8 shadow-2xl border border-[#e8f5e9]">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { val: "200+", label: "Botanical Varieties" },
                  { val: "5K+", label: "Happy Parents" },
                  { val: "4.9★", label: "Average Rating" },
                  { val: "100%", label: "Eco Packaged" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-black text-[#1b4332]">{s.val}</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-[#6b7c6b] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-[#f0f9f0]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2d6a4f] font-bold text-sm uppercase tracking-widest">
              Rooted in Purpose
            </span>
            <h2 className="text-4xl font-extrabold text-[#1a2e1a] mt-2">What Drives Our Growth</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] p-8 border border-[#e8f5e9] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#e8f5e9] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#2d6a4f] transition-colors">
                  <v.icon className="w-6 h-6 text-[#2d6a4f] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-extrabold text-[#1a2e1a] text-lg mb-3">{v.title}</h3>
                <p className="text-[#6b7c6b] text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2d6a4f] font-bold text-sm uppercase tracking-widest">
              Our Journey
            </span>
            <h2 className="text-4xl font-extrabold text-[#1a2e1a] mt-2">
              How We Grew 🌱
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-[#74C69D] to-[#1B4332] rounded-full opacity-20" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-10 items-start"
                >
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 bg-white border-4 border-[#74C69D] rounded-full flex items-center justify-center text-[#1b4332] font-black text-lg z-10 relative shadow-lg">
                      {m.year}
                    </div>
                  </div>
                  <div className="bg-white rounded-[2rem] p-8 border border-[#e8f5e9] shadow-sm flex-1 mt-2">
                    <p className="text-[#4a5e4a] font-medium leading-relaxed">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 bg-[#f7faf7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2d6a4f] font-bold text-sm uppercase tracking-widest">
              The Botanists
            </span>
            <h2 className="text-4xl font-extrabold text-[#1a2e1a] mt-2">
              Our Nursery Experts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-[#e8f5e9] text-center group hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-[#1b4332]/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8">
                  <h3 className="font-extrabold text-[#1a2e1a] text-xl mb-1">{member.name}</h3>
                  <p className="text-[#74c69d] text-sm font-bold uppercase tracking-widest mb-4">
                    {member.role}
                  </p>
                  <p className="text-[#6b7c6b] text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#1b4332] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to become a Plant Parent?
          </h2>
          <p className="text-white/60 mb-10 text-xl leading-relaxed">
            Browse our nursery and find the perfect botanical companion for your space.
          </p>
          <Link
            href="/shop"
            className="bg-[#74c69d] text-[#1b4332] font-bold px-10 py-5 rounded-full hover:bg-[#95d5ab] transition-all inline-flex items-center gap-2 text-lg shadow-2xl"
          >
            Explore the Nursery <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
