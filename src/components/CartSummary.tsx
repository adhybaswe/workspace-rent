'use client';

import React from 'react';
import { useWorkspace } from '@/context/WorkspaceContext';
import { ShoppingCart, ArrowRight, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartSummary() {
  const { slots, totalPrice, setSlotProduct } = useWorkspace();
  const items = Object.entries(slots).filter(([_, product]) => product !== null);

  return (
    <div className="w-96 h-full bg-white border-l-4 border-stone-900 flex flex-col p-8 gap-8 shadow-2xl z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-stone-900 text-white p-2 rounded-xl">
             <ShoppingCart size={24} />
          </div>
          <h2 className="text-3xl font-black text-stone-900 uppercase tracking-tighter italic">Loadout</h2>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {items.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-stone-300 gap-4 opacity-50">
            <ShoppingCart size={48} strokeWidth={1} />
            <p className="text-sm font-bold uppercase tracking-widest italic">Inventory Empty</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <AnimatePresence>
              {items.map(([slotId, product]) => (
                product && (
                  <motion.div
                    key={slotId}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex items-center gap-4 bg-stone-50 p-3 rounded-2xl border-2 border-stone-100 hover:border-emerald-500 transition-colors group"
                  >
                    <div className="w-16 h-16 bg-white rounded-xl overflow-hidden border border-stone-200">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black text-stone-900 uppercase truncate">
                        {product.name}
                      </p>
                      <p className="text-sm font-bold text-emerald-600">${product.price}/mo</p>
                    </div>
                    <button 
                      onClick={() => setSlotProduct(slotId as any, null)}
                      className="opacity-0 group-hover:opacity-100 p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      <div className="border-t-4 border-stone-900 pt-8 mt-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="text-stone-400 text-xs font-black uppercase tracking-widest mb-1">Subscription Fee</p>
            <p className="text-4xl font-black text-stone-900 italic tracking-tighter">${totalPrice}<span className="text-xl">.00</span></p>
          </div>
          <div className="text-right">
             <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Per Month</p>
          </div>
        </div>

        <button
          disabled={items.length === 0}
          className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-stone-100 disabled:text-stone-300 disabled:cursor-not-allowed text-white font-black py-5 px-8 rounded-3xl flex items-center justify-center gap-4 transition-all transform active:scale-95 shadow-[0px_8px_0px_0px_rgba(5,150,105,1)] hover:translate-y-[-2px] hover:shadow-[0px_10px_0px_0px_rgba(5,150,105,1)] active:translate-y-[4px] active:shadow-none"
        >
          <span className="text-xl uppercase italic">Rent This Setup</span>
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
}
