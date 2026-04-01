"use client";

import { motion } from "framer-motion";
import { Sun, Droplets, Thermometer, Wind, Sprout, Leaf, Heart, AlertCircle, BookOpen, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const guideSections = [
  {
    icon: Droplets,
    title: "Watering Wisdom",
    desc: "The #1 cause of plant death is overwatering. Learn to read your plant's signals.",
    tips: [
      "Check the top 2 inches of soil before watering.",
      "Use room temperature water to avoid shocking roots.",
      "Ensure your pots have drainage holes.",
      "Water less during the dormant winter months."
    ],
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Sun,
    title: "Light & Lighting",
    desc: "Every plant has a specific relationship with the sun. Find the perfect spot.",
    tips: [
      "Bright Indirect: A few feet from a south-facing window.",
      "Low Light: Can tolerate north windows or corners.",
      "Direct Sun: Desert plants like cacti love this.",
      "Rotate your plants weekly for even growth."
    ],
    color: "bg-amber-50 text-amber-600"
  },
  {
    icon: Thermometer,
    title: "Temperature & Humidity",
    desc: "Most indoor plants are tropical and thrive in stable, warm environments.",
    tips: [
      "Keep away from cold drafts and heating vents.",
      "Most plants love 65°F - 75°F (18°C - 24°C).",
      "Mist leaves or use a pebble tray to boost humidity.",
      "Grouping plants together creates a humid microclimate."
    ],
    color: "bg-emerald-50 text-emerald-600"
  }
];

export default function CareGuidePage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#f7faf7] page-enter">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="relative rounded-[3rem] overflow-hidden mb-20 bg-[#1b4332] py-20 px-10 border border-white/10 shadow-2xl">
          <div className="absolute inset-0 opacity-20">
             <Image src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=1600&q=80" alt="Greenhouse" fill className="object-cover" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-flex items-center gap-2 bg-[#74c69d] text-[#1b4332] text-xs font-black px-4 py-2 rounded-full mb-6 shadow-xl">
                <BookOpen className="w-4 h-4" /> Expert Botanist Advice
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                Nurture Your <br />
                <span className="text-[#a8d8b9]">Indoor Jungle</span>
              </h1>
              <p className="text-white/70 text-xl leading-relaxed">
                Whether you're a first-time parent or a seasoned collector, our comprehensive guide 
                helps you keep your botanicals thriving and healthy.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {guideSections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2.5rem] p-8 border border-[#e8f5e9] shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={`w-16 h-16 ${section.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <section.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#1b4332] mb-4">{section.title}</h3>
              <p className="text-[#6b7c6b] text-sm leading-relaxed mb-8">{section.desc}</p>
              <ul className="space-y-3">
                {section.tips.map(tip => (
                  <li key={tip} className="flex items-start gap-3 text-sm text-[#4a5e4a] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#74c69d] flex-shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Pro Tips Section */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-gradient-to-br from-[#2d6a4f] to-[#1b4332] rounded-[3rem] p-12 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-10">
               <Sprout className="w-40 h-40" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                <AlertCircle className="text-[#74c69d]" /> Common Red Flags
              </h2>
              <div className="space-y-6">
                {[
                  { label: "Yellow Leaves", desc: "Usually indicates overwatering or poor drainage." },
                  { label: "Brown Crispy Edges", desc: "Low humidity or underwatering symptoms." },
                  { label: "Drooping Leaves", desc: "Thirsty plant or extreme temperature change." },
                  { label: "Leggy Growth", desc: "Reaching for light. Move closer to a window." }
                ].map(item => (
                  <div key={item.label}>
                    <div className="font-black text-[#74c69d] mb-1">{item.label}</div>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-white rounded-[3rem] border border-[#e8f5e9] p-12 flex flex-col justify-center"
          >
            <span className="text-[#2d6a4f] font-black text-xs uppercase tracking-widest mb-4">Botanist Recommendation</span>
            <h2 className="text-4xl font-black text-[#1b4332] mb-6 leading-tight">The Golden Rule: Patience.</h2>
            <p className="text-[#6b7c6b] text-lg leading-relaxed mb-8">
              Plants are living beings that operate on their own timeline. Don't panic if your new 
              botanical friend takes a week or two to adjust to its new home. Consistency is key to 
              a thriving greenhouse garden.
            </p>
            <div className="flex items-center gap-4 p-6 bg-[#f7faf7] rounded-3xl border border-[#e8f5e9]">
               <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-[#e8f5e9]">
                  <Heart className="text-[#2d6a4f] w-6 h-6" />
               </div>
               <div>
                  <div className="font-black text-[#1b4332] text-sm">Leafly Support</div>
                  <div className="text-xs text-[#6b7c6b]">Always here to help your plants grow.</div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Seasonal Tips */}
        <div className="bg-white rounded-[3rem] border border-[#e8f5e9] p-12 shadow-sm text-center">
            <h2 className="text-4xl font-black text-[#1b4332] mb-10">Seasonal Care Cycles</h2>
            <div className="grid md:grid-cols-4 gap-8">
               {[
                 { season: "Spring", action: "Repot & Fertilize", icon: Sprout },
                 { season: "Summer", action: "Maximize Hydration", icon: Leaf },
                 { season: "Autumn", action: "Gradual Reduction", icon: Wind },
                 { season: "Winter", action: "Dormancy Protection", icon: Droplets }
               ].map(item => (
                 <div key={item.season} className="space-y-4">
                    <div className="w-16 h-16 bg-[#f7faf7] text-[#2d6a4f] rounded-2xl flex items-center justify-center mx-auto border border-[#e8f5e9]">
                       <item.icon className="w-8 h-8" />
                    </div>
                    <h4 className="font-black text-[#1b4332]">{item.season}</h4>
                    <p className="text-[#6b7c6b] text-xs font-bold uppercase tracking-tight">{item.action}</p>
                 </div>
               ))}
            </div>
        </div>
      </div>
    </div>
  );
}
