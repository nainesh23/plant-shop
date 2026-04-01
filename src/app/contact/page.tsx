"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ShieldCheck, Clock, Leaf, HeadphonesIcon, HelpCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  { q: "How long does delivery take?", a: "Most orders arrive within 3-5 business days. We use specialized eco-packaging to ensure your plants arrive greenhouse-fresh." },
  { q: "What is your return policy?", a: "We offer a 30-day happiness guarantee. If your plant arrives damaged or dies within 30 days, we'll replace it for free." },
  { q: "Do you offer international shipping?", a: "Currently, we only ship within the continental US to ensure our botanicals remain healthy during transit." },
  { q: "Can I get a custom plant consultation?", a: "Yes! Our master botanists are available for virtual consultations. Contact our help desk to schedule a session." },
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#F7FAF7] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 bg-[#74C69D] text-[#1B4332] text-xs font-bold px-4 py-2 rounded-full mb-6 shadow-md border border-white/20">
              <Leaf className="w-4 h-4" /> Reach our Botanical Desk
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#1B4332] mb-6">Growth Together 🎋</h1>
            <p className="text-[#4A5E4A] text-lg max-w-2xl mx-auto">
              Our master botanists and customer care team are here to help your indoor jungle thrive. 
              Questions about care, orders, or custom plant solutions? Drop us a line.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Quick Contact Cards */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {[
              { icon: Phone, title: "Chat with us", value: "+1 (555) 123-4567", sub: "Mon - Fri, 9am - 6pm EST", color: "bg-[#e8f5e9]" },
              { icon: Mail, title: "Email support", value: "hello@leafly.com", sub: "Response time: < 4 hours", color: "bg-[#e8f5e9]" },
              { icon: MapPin, title: "Our Greenhouse", value: "123 Botany Ave, Portland, OR", sub: "By appointment only", color: "bg-[#e8f5e9]" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#e8f5e9] flex items-start gap-5 hover:shadow-md transition-all group">
                <div className={`w-14 h-14 ${item.color} text-[#2D6A4F] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold text-[#1B4332] mb-1">{item.title}</h3>
                  <p className="text-[#2D6A4F] font-bold text-lg mb-1">{item.value}</p>
                  <p className="text-[#6B7C6B] text-sm">{item.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-[#e8f5e9]"
          >
            {success ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-[#74C69D] text-[#1B4332] rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Send className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-extrabold text-[#1B4332] mb-4">Message Planted!</h2>
                <p className="text-[#4A5E4A] mb-8 max-w-sm">
                  Our team has received your message and will bloom back into your inbox within 4 hours.
                </p>
                <button onClick={() => setSuccess(false)} className="btn-primary px-8">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1B4332] ml-2">Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-[#F7FAF7] border border-[#e8f5e9] rounded-2xl px-6 py-4 focus:outline-none focus:border-[#2D6A4F] transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#1B4332] ml-2">Email</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-[#F7FAF7] border border-[#e8f5e9] rounded-2xl px-6 py-4 focus:outline-none focus:border-[#2D6A4F] transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1B4332] ml-2">Subject</label>
                  <select className="w-full bg-[#F7FAF7] border border-[#e8f5e9] rounded-2xl px-6 py-4 focus:outline-none focus:border-[#2D6A4F] transition-all appearance-none cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Botanist Consult</option>
                    <option>Wholesale/B2B</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#1B4332] ml-2">Message</label>
                  <textarea required rows={5} placeholder="How can we help your jungle thrive?" className="w-full bg-[#F7FAF7] border border-[#e8f5e9] rounded-2xl px-6 py-4 focus:outline-none focus:border-[#2D6A4F] transition-all resize-none"></textarea>
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-lg font-bold shadow-xl flex items-center justify-center gap-3 group">
                  {loading ? "Sending..." : "Sow Message"} 
                  <Send className={`w-5 h-5 ${!loading && "group-hover:translate-x-1 group-hover:-translate-y-1"} transition-transform`} />
                </button>
                <p className="text-center text-xs text-[#6B7C6B]">
                  By submitting, you agree to our 100% human botanical support promise.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* FAQ Section */}
        <section className="bg-white rounded-[3rem] p-12 md:p-16 border border-[#e8f5e9] shadow-sm mb-20">
          <div className="text-center mb-12">
            <span className="text-[#2D6A4F] font-bold text-sm uppercase tracking-widest">Self Service</span>
            <h2 className="text-4xl font-extrabold text-[#1B4332] mt-2">Helpful Care Hints</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-2xl hover:bg-[#F7FAF7] transition-colors group">
                <div className="w-10 h-10 bg-[#e8f5e9] text-[#2D6A4F] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#2D6A4F] group-hover:text-white transition-colors">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#1B4332] mb-2">{faq.q}</h4>
                  <p className="text-[#4A5E4A] text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/help" className="text-[#2D6A4F] font-bold hover:underline">View our full knowledge base →</Link>
          </div>
        </section>

        {/* Support Highlights */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: HeadphonesIcon, label: "Botany Support", sub: "Expert advice" },
            { icon: ShieldCheck, label: "30-Day Happiness", sub: "Replace/Refund" },
            { icon: Clock, label: "Quick Shipping", sub: "Tracked & Insured" },
            { icon: Leaf, label: "Eco-Packaging", sub: "100% Sustainable" },
          ].map((item, i) => (
            <div key={i} className="bg-[#e8f5e9] p-6 rounded-3xl text-center border border-[#c8e6c9] group hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 bg-white text-[#2D6A4F] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-[#2D6A4F] group-hover:text-white transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-[#1B4332] text-sm mb-1">{item.label}</h4>
              <p className="text-[#2D6A4F] text-xs font-bold uppercase tracking-tight opacity-70">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
