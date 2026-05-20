'use client';

import React from 'react';
import { CATALOG } from '@/data/catalog';
import { useWorkspace } from '@/context/WorkspaceContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function GlobalSlotPicker() {
  const { openSlot, closePicker, setSlotProduct } = useWorkspace();

  if (!openSlot) return null;

  const products = CATALOG.filter((p) => p.category === openSlot.category);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePicker}
          className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative bg-white rounded-[32px] shadow-2xl border-[4px] border-stone-900 p-8 w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-3xl font-black text-stone-900 uppercase italic tracking-tighter">
                Select {openSlot.category}
              </h3>
              <p className="text-stone-400 font-bold uppercase tracking-widest text-xs mt-1">
                Customize your blueprint
              </p>
            </div>
            <button 
              onClick={closePicker}
              className="p-2 bg-stone-100 hover:bg-rose-500 hover:text-white rounded-full transition-all transform hover:rotate-90"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <div className="grid grid-cols-2 gap-6 pb-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSlotProduct(openSlot.id, product)}
                  className="group cursor-pointer bg-white border-[3px] border-stone-100 hover:border-emerald-500 rounded-3xl p-4 transition-all hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(16,185,129,1)]"
                >
                  <div className="aspect-video rounded-2xl overflow-hidden mb-4 border border-stone-100">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h4 className="text-lg font-black text-stone-900 uppercase italic tracking-tight mb-1 truncate">
                    {product.name}
                  </h4>
                  <div className="flex justify-between items-end">
                    <p className="text-sm font-bold text-stone-400 uppercase tracking-widest">
                      ${product.price}/mo
                    </p>
                    <div className="bg-stone-900 text-white p-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
                       <Plus size={16} />
                    </div>
                  </div>
                </div>
              ))}
              
              <div
                onClick={() => setSlotProduct(openSlot.id, null)}
                className="flex flex-col items-center justify-center cursor-pointer bg-stone-50 border-[3px] border-dashed border-stone-200 hover:border-rose-400 hover:bg-rose-50 rounded-3xl p-4 text-stone-400 hover:text-rose-500 transition-all group"
              >
                <div className="p-4 bg-white rounded-full shadow-sm group-hover:rotate-90 transition-transform duration-500">
                  <X size={32} />
                </div>
                <p className="text-xs font-black uppercase tracking-widest mt-4 italic">Remove Selection</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function Plus({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
