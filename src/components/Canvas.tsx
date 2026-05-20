'use client';

import React from 'react';
import { useWorkspace, SlotId } from '@/context/WorkspaceContext';
import { Plus, Monitor, Layout, Armchair, Coffee, Waves, Bike, Sofa, Box, Trash2, Lamp, Flower } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Canvas() {
  return (
    <div className="flex-1 bg-stone-50 flex flex-col items-center justify-start py-12 px-8 overflow-y-auto">
      <div className="max-w-6xl w-full flex flex-col items-center gap-48">
        
        {/* Header matching sketch */}
        <div className="text-center">
          <h1 className="text-6xl font-black text-stone-900 mb-4 tracking-tighter uppercase italic">Design Your Workspace!</h1>
          <p className="text-stone-400 font-bold tracking-widest uppercase text-sm">— Blueprint Mode —</p>
        </div>

        {/* Main Workspace Area */}
        <div className="relative w-full max-w-5xl h-[550px] border-[4px] border-stone-900 bg-white rounded-[40px] shadow-[16px_16px_0px_0px_rgba(28,25,23,0.05)] flex items-center justify-center mb-24 overflow-visible">
          
          {/* Desk Section */}
          <div className="relative w-[85%]" id="desk-area">
             <Slot 
                id="desk" 
                category="Desks" 
                label="Main Desk" 
                icon={<Layout size={32} />}
                className="w-full h-44 border-4 border-dashed rounded-3xl" 
             />

             {/* Items on top of desk */}
             <div className="absolute -top-36 left-0 right-0 flex justify-center gap-6">
                <Slot id="monitor-left" category="Monitors" label="Side Screen" icon={<Monitor size={24} />} className="w-40 h-32 border-4 border-dashed rounded-xl" />
                <Slot id="monitor-center" category="Monitors" label="Primary Display" icon={<Monitor size={32} />} className="w-56 h-40 border-4 border-dashed rounded-xl" />
                <Slot id="monitor-right" category="Monitors" label="Side Screen" icon={<Monitor size={24} />} className="w-40 h-32 border-4 border-dashed rounded-xl" />
             </div>

             {/* Desk surface accessories */}
             <div className="absolute top-4 left-6">
                <Slot id="lamp" category="Lamps" label="Lamp" icon={<Lamp size={20} />} className="w-20 h-20 border-4 border-dashed rounded-xl" />
             </div>
             <div className="absolute top-4 right-6">
                <Slot id="plant" category="Plants" label="Plant" icon={<Flower size={20} />} className="w-20 h-20 border-4 border-dashed rounded-xl" />
             </div>
          </div>

          {/* Chair Section */}
          <div className="absolute bottom-[-160px] left-1/2 -translate-x-1/2">
             <Slot id="chair" category="Chairs" label="Ergo Chair" icon={<Armchair size={40} />} className="w-52 h-64 border-4 border-dashed rounded-[40px]" />
          </div>
        </div>

        {/* Bottom Accessories Sections matching sketch */}
        <div className="grid grid-cols-4 gap-8 w-full relative z-0">
           <CategorySection title="Coffee Station" id="coffee" category="Coffee Station" icon={<Coffee size={24} />} />
           <CategorySection title="Outdoor Gear" id="outdoor" category="Outdoor Gear" icon={<Waves size={24} />} />
           <CategorySection title="Relax Zone" id="relax" category="Relax Zone" icon={<Sofa size={24} />} />
           <CategorySection title="Garage Space" id="garage" category="Garage Space" icon={<Box size={24} />} />
        </div>

        {/* Rent Button matching sketch */}
        <div className="mt-12 flex flex-col items-center gap-6">
           <p className="text-2xl font-black text-stone-900 uppercase italic tracking-tight">Ready to build it for real?</p>
           <button className="bg-emerald-500 border-[4px] border-stone-900 text-white px-16 py-6 rounded-[32px] font-black text-3xl transition-all transform active:scale-95 shadow-[12px_12px_0px_0px_rgba(28,25,23,1)] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_rgba(28,25,23,1)]">
             RENT YOUR SETUP!
           </button>
        </div>
      </div>
    </div>
  );
}

function Slot({ 
  id, 
  category, 
  label, 
  icon,
  className 
}: { 
  id: SlotId; 
  category: string; 
  label: string; 
  icon: React.ReactNode;
  className: string;
}) {
  const { slots, isSlotOpen, openPicker, setSlotProduct } = useWorkspace();
  const product = slots[id];
  const isOpen = isSlotOpen === id;

  return (
    <div className={`relative group ${isOpen ? 'z-50' : 'z-10'}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        onClick={() => openPicker(id, category)}
        className={`${className} ${
          product ? 'border-solid border-stone-900 bg-emerald-50' : 'border-stone-200 bg-white hover:border-stone-400'
        } flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden relative shadow-sm`}
      >
        {product ? (
          <div className="flex flex-col items-center justify-center p-4 text-center gap-3">
            <div className="text-emerald-600 mb-1">
              {icon}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-tighter text-emerald-800 leading-none mb-1">SELECTED:</span>
              <span className="text-xs font-black text-stone-900 uppercase leading-tight line-clamp-2 px-2 italic">
                {product.name}
              </span>
            </div>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSlotProduct(id, null);
              }}
              className="absolute top-2 right-2 p-1 text-stone-300 hover:text-rose-500 transition-colors"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
            <div className="text-stone-400">
              {icon}
            </div>
            <div className="flex flex-col items-center">
              <Plus className="text-stone-300 mb-1" size={16} />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-stone-400">Add {label}</span>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

function CategorySection({ title, id, category, icon }: { title: string; id: SlotId; category: string, icon: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6">
       <div className="bg-stone-900 px-6 py-2 rounded-full text-center rotate-[-1deg] shadow-lg">
         <h3 className="font-black text-sm text-white uppercase tracking-widest">{title}</h3>
       </div>
       <Slot id={id} category={category} label={title} icon={icon} className="aspect-square border-4 border-dashed rounded-[32px]" />
    </div>
  );
}
