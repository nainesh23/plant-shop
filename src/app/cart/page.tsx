"use client";

import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Truck, ShieldCheck, Ticket, Leaf, Sparkles, ChevronRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function CartPage() {
  const { state, totalPrice, dispatch } = useCart();
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);
  const [applied, setApplied] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handlePromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promo.toUpperCase() === "LEAFLY20") {
      setDiscount(totalPrice * 0.2);
      setApplied(true);
    } else {
      alert("Invalid promo code. Try LEAFLY20");
    }
  };

  const shipping = totalPrice > 49 ? 0 : 5.95;
  const finalTotal = totalPrice - discount + shipping;

  const handleCheckout = () => {
    setOrderComplete(true);
    setTimeout(() => {
      dispatch({ type: "CLEAR_CART" });
    }, 2000);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-[#f7faf7]">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-md bg-white p-12 rounded-[2.5rem] shadow-2xl border border-[#e8f5e9]">
          <div className="w-24 h-24 bg-[#74c69d] text-[#1b4332] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <ShieldCheck className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-extrabold text-[#1b4332] mb-4">Order Placed!</h1>
          <p className="text-[#4a5e4a] mb-8 text-lg leading-relaxed">Thank you for choosing Leafly. Your plants are being carefully packed for their journey.</p>
          <Link href="/shop" className="btn-primary w-full py-4 text-lg shadow-xl">Back to Nursery</Link>
        </motion.div>
      </div>
    );
  }

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-[#f7faf7]">
        <div className="text-center">
          <div className="w-20 h-20 bg-[#e8f5e9] text-[#2d6a4f] rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-extrabold text-[#1b4332] mb-3">Your cart is empty</h1>
          <p className="text-[#6b7c6b] mb-8 max-w-xs mx-auto">Looks like you haven&apos;t added any botanicals yet.</p>
          <Link href="/shop" className="btn-primary px-8 py-4 shadow-lg flex items-center gap-2 mx-auto w-fit">
            Start Shopping <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#f7faf7] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1.5 bg-[#2d6a4f] rounded-full" />
            <h1 className="text-4xl font-extrabold text-[#1b4332]">My Nursery Cart</h1>
          </div>
          <Link href="/shop" className="text-[#2d6a4f] font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Continue Shopping <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {state.items.map((item) => (
                <motion.div
                  key={item.plant.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white p-5 rounded-[2rem] shadow-sm border border-[#e8f5e9] flex items-center gap-6 group hover:shadow-md transition-all"
                >
                  <div className="relative w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 bg-[#f7faf7]">
                    <Image src={item.plant.image} alt={item.plant.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-extrabold text-[#1b4332] text-xl truncate group-hover:text-[#2d6a4f] transition-colors">{item.plant.name}</h3>
                      <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.plant.id })} className="text-gray-300 hover:text-[#5e503f] p-1.5 hover:bg-[#f7faf7] rounded-xl transition-all">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-[#6b7c6b] text-sm mb-4 flex items-center gap-2">
                       <Leaf className="w-3.5 h-3.5 text-[#2d6a4f]" /> {item.plant.category}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center border border-[#e8f5e9] rounded-2xl overflow-hidden shadow-sm bg-[#f7faf7]">
                        <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", id: item.plant.id, quantity: Math.max(1, item.quantity - 1) })} className="px-4 py-2 hover:bg-white hover:text-[#2d6a4f] transition-all">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 font-black text-[#1b4332] text-sm border-x border-[#e8f5e9] bg-white">{item.quantity}</span>
                        <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", id: item.plant.id, quantity: item.quantity + 1 })} className="px-4 py-2 hover:bg-white hover:text-[#2d6a4f] transition-all">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="font-black text-[#1b4332] text-2xl">${(item.plant.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-2xl border border-[#e8f5e9] sticky top-32">
              <h2 className="text-2xl font-extrabold text-[#1b4332] mb-8 flex items-center gap-3">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-8 border-b border-[#e8f5e9] pb-8">
                <div className="flex justify-between text-[#4a5e4a] font-medium">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#1b4332]">${totalPrice.toFixed(2)}</span>
                </div>
                {applied && (
                  <div className="flex justify-between text-[#2d6a4f] bg-[#e8f5e9] px-4 py-3 rounded-2xl text-sm font-bold border border-[#74c69d]">
                    <span className="flex items-center gap-2"><Sparkles className="w-4 h-4" /> Promo Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-[#4a5e4a] font-medium">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-[#2d6a4f] font-bold" : "font-bold text-[#1b4332]"}>
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
              </div>

              <div className="flex justify-between text-[#1b4332] mb-8 items-end">
                <span className="text-lg font-bold">Estimated Total</span>
                <span className="text-4xl font-black text-[#2d6a4f]">${finalTotal.toFixed(2)}</span>
              </div>

              {/* Promo code */}
              {!applied ? (
                <form onSubmit={handlePromo} className="flex gap-2 mb-8">
                  <div className="relative flex-1">
                    <Ticket className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#2d6a4f]" />
                    <input
                      type="text"
                      placeholder="Promo code"
                      value={promo}
                      onChange={(e) => setPromo(e.target.value)}
                      className="w-full bg-[#f7faf7] border border-[#e8f5e9] rounded-2xl pl-11 pr-4 py-4 text-sm font-bold focus:outline-none focus:border-[#2d6a4f] transition-all"
                    />
                  </div>
                  <button type="submit" className="bg-[#2d6a4f] text-white font-bold px-6 py-4 rounded-2xl hover:bg-[#1b4332] transition-all shadow-md">
                    Apply
                  </button>
                </form>
              ) : (
                <div className="mb-8 p-5 bg-[#f0f9f0] border border-[#74c69d] rounded-2xl flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-[#2d6a4f]">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-bold">Code LEAFLY20 applied!</span>
                  </div>
                  <button onClick={() => { setApplied(false); setDiscount(0); }} className="text-[#5e503f] hover:underline font-bold">Remove</button>
                </div>
              )}

              <button onClick={handleCheckout} className="btn-primary w-full py-5 text-xl font-black shadow-xl flex items-center justify-center gap-3 group">
                Checkout Now <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-4 text-xs text-[#6b7c6b] font-medium">
                  <div className="w-8 h-8 rounded-full bg-[#e8f5e9] flex items-center justify-center flex-shrink-0">
                    <Truck className="w-4 h-4 text-[#2d6a4f]" />
                  </div>
                  <span>Sustainability focused eco-packaging</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-[#6b7c6b] font-medium">
                  <div className="w-8 h-8 rounded-full bg-[#e8f5e9] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#2d6a4f]" />
                  </div>
                  <span>Insured & greenhouse-fresh delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
