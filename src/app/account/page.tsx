"use client";

import { motion } from "framer-motion";
import { User, Package, Settings, CreditCard, Heart, LogOut, ChevronRight, MapPin, Bell, Shield, Leaf, Star, Sparkles, CheckCircle2, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const mockOrders = [
  { id: "#ORD-9428", date: "Mar 24, 2024", status: "Delivered", statusColor: "bg-[#74c69d] text-[#1b4332]", total: "$84.99", items: 2, image: "https://images.unsplash.com/photo-1545241047-6083a3684587?w=100&q=80" },
  { id: "#ORD-8512", date: "Feb 18, 2024", status: "Delivered", statusColor: "bg-[#74c69d] text-[#1b4332]", total: "$124.50", items: 3, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=100&q=80" },
  { id: "#ORD-7634", date: "Jan 05, 2024", status: "Delivered", statusColor: "bg-[#74c69d] text-[#1b4332]", total: "$42.20", items: 1, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&q=80" }
];

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("Profile");

  const menuItems = [
    { name: "Orders", icon: Package, count: 3 },
    { name: "Wishlist", icon: Heart, count: 5, href: "/wishlist" },
    { name: "Addresses", icon: MapPin },
    { name: "Payments", icon: CreditCard },
    { name: "Notifications", icon: Bell },
    { name: "Security", icon: Shield },
    { name: "Settings", icon: Settings }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#f7faf7] page-enter px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
             <div className="bg-white rounded-[2.5rem] p-8 border border-[#e8f5e9] shadow-sm sticky top-32">
                <div className="text-center mb-10">
                   <div className="relative w-24 h-24 mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#74c69d] to-[#1b4332] rounded-[2rem] shadow-xl" />
                      <div className="absolute inset-1 bg-white rounded-[1.8rem] overflow-hidden">
                         <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80" alt="Profile" fill className="object-cover" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-white w-10 h-10 rounded-2xl flex items-center justify-center border border-[#e8f5e9] shadow-lg">
                         <Star className="w-5 h-5 text-[#2d6a4f] fill-[#2d6a4f]" />
                      </div>
                   </div>
                   <h2 className="text-2xl font-black text-[#1b4332]">Sofia Ruiz</h2>
                   <p className="text-[#6b7c6b] text-sm font-bold uppercase tracking-widest mt-1">Master Collector</p>
                </div>

                <nav className="space-y-2">
                   {menuItems.map(item => (
                      item.href ? (
                        <Link key={item.name} href={item.href} className="w-full flex items-center justify-between p-4 rounded-2xl text-[#1b4332] font-black hover:bg-[#f7faf7] transition-all group">
                           <div className="flex items-center gap-4">
                              <item.icon className="w-5 h-5 text-[#2d6a4f] group-hover:scale-110 transition-transform" />
                              <span className="text-sm">{item.name}</span>
                           </div>
                           {item.count && <span className="bg-[#e8f5e9] text-[#2d6a4f] text-[10px] px-2 py-1 rounded-lg border border-[#c8e6c9]">{item.count}</span>}
                        </Link>
                      ) : (
                        <button key={item.name} onClick={() => setActiveTab(item.name)} className={`w-full flex items-center justify-between p-4 rounded-2xl font-black transition-all group ${activeTab === item.name ? "bg-[#1b4332] text-white shadow-xl" : "text-[#1b4332] hover:bg-[#f7faf7]"}`}>
                           <div className="flex items-center gap-4">
                              <item.icon className={`w-5 h-5 ${activeTab === item.name ? "text-[#74c69d]" : "text-[#2d6a4f]"} group-hover:scale-110 transition-transform`} />
                              <span className="text-sm">{item.name}</span>
                           </div>
                           {item.count && <span className={`${activeTab === item.name ? "bg-white/10" : "bg-[#e8f5e9] text-[#2d6a4f]"} text-[10px] px-2 py-1 rounded-lg border border-white/10`}>{item.count}</span>}
                        </button>
                      )
                   ))}
                   <div className="pt-6 mt-6 border-t border-[#e8f5e9]">
                      <button className="w-full flex items-center gap-4 p-4 rounded-2xl text-[#5e503f] font-black hover:bg-red-50 hover:text-red-600 transition-all">
                         <LogOut className="w-5 h-5" />
                         <span className="text-sm">Sign Out</span>
                      </button>
                   </div>
                </nav>
             </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-10">
             {/* Stats Cards */}
             <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "My Jungle", val: "12 Plants", color: "bg-white", icon: Leaf },
                  { label: "Happiness", val: "98%", color: "bg-white", icon: CheckCircle2 },
                  { label: "Leaf Tokens", val: "450", color: "bg-white", icon: Sparkles }
                ].map(stat => (
                   <div key={stat.label} className={`${stat.color} p-8 rounded-[2.5rem] border border-[#e8f5e9] shadow-sm group hover:shadow-xl transition-all`}>
                      <div className="w-12 h-12 bg-[#f7faf7] text-[#2d6a4f] rounded-2xl flex items-center justify-center mb-6 border border-[#e8f5e9] group-hover:scale-110 transition-transform">
                         <stat.icon className="w-6 h-6" />
                      </div>
                      <div className="text-sm text-[#6b7c6b] font-black uppercase tracking-widest mb-1">{stat.label}</div>
                      <div className="text-2xl font-black text-[#1b4332]">{stat.val}</div>
                   </div>
                ))}
             </div>

             {/* Dynamic Content */}
             <div className="bg-white rounded-[3rem] p-10 border border-[#e8f5e9] shadow-sm">
                <div className="flex items-center justify-between mb-10">
                   <h3 className="text-3xl font-black text-[#1b4332]">{activeTab}</h3>
                   {activeTab === "Orders" && <button className="text-[#2d6a4f] font-black text-sm hover:underline">View Archived →</button>}
                </div>

                {activeTab === "Orders" ? (
                   <div className="space-y-6">
                      {mockOrders.map(order => (
                         <div key={order.id} className="p-6 bg-[#f7faf7] rounded-[2rem] border border-[#e8f5e9] flex flex-col md:flex-row items-center gap-8 group hover:bg-white hover:shadow-2xl transition-all duration-300">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden relative flex-shrink-0 bg-white">
                               <Image src={order.image} alt="Order item" fill className="object-cover" />
                            </div>
                            <div className="flex-1 text-center md:text-left">
                               <div className="flex flex-col md:flex-row items-center gap-3 mb-2">
                                  <span className="text-xl font-black text-[#1b4332]">{order.id}</span>
                                  <span className={`${order.statusColor} text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-tighter`}>{order.status}</span>
                               </div>
                               <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-[#6b7c6b] font-medium">
                                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {order.date}</span>
                                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                                  <span>{order.items} {order.items === 1 ? "Variety" : "Varieties"}</span>
                               </div>
                            </div>
                            <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
                               <div className="text-2xl font-black text-[#1b4332]">{order.total}</div>
                               <button className="bg-white text-[#1b4332] px-6 py-3 rounded-xl border border-[#e8f5e9] font-black text-xs hover:bg-[#1b4332] hover:text-white transition-all shadow-sm">Track Package</button>
                            </div>
                         </div>
                      ))}
                   </div>
                ) : (
                   <div className="py-20 text-center">
                       <div className="w-16 h-16 bg-[#f7faf7] text-gray-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <Settings className="w-8 h-8" />
                       </div>
                       <h4 className="text-xl font-black text-[#1b4332] mb-2">{activeTab} section is currently empty</h4>
                       <p className="text-[#6b7c6b] text-sm">Update your information to see it here.</p>
                   </div>
                )}
             </div>

             {/* Referral Banner */}
             <div className="bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute bottom-0 right-0 p-10 opacity-10">
                   <GiftIcon className="w-48 h-48" />
                </div>
                <div className="relative z-10 max-w-lg">
                   <span className="bg-[#74c69d] text-[#1b4332] text-[10px] font-black px-4 py-2 rounded-full mb-6 inline-block shadow-lg">Botanist Program</span>
                   <h2 className="text-4xl font-black mb-6 leading-tight">Gift a Jungle, <br />Get $20 Rewards.</h2>
                   <p className="text-white/60 mb-8 font-medium">Refer your plant-loving friends and both of you will receive botanical rewards on your next purchase.</p>
                   <button className="bg-white text-[#1b4332] px-8 py-4 rounded-2xl font-black shadow-2xl hover:bg-[#a8d8b9] transition-all">Invite a Friend →</button>
                </div>
             </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function GiftIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
    </svg>
  );
}
