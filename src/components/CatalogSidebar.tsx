'use client';

import React from 'react';
import { CATALOG, Product } from '@/data/catalog';
import { motion } from 'framer-motion';
import { useWorkspace } from '@/context/WorkspaceContext';
import { Plus } from 'lucide-react';

const CATEGORIES = ['Desk', 'Chair', 'Monitor', 'Accessory', 'Plant'] as const;

export default function CatalogSidebar() {
  const { addItem } = useWorkspace();

  return (
    <div className="w-80 h-full bg-stone-50 border-r border-stone-200 overflow-y-auto p-4 flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold text-stone-900">monis.rent</h1>
        <p className="text-sm text-stone-500">Design your dream workspace</p>
      </div>

      {CATEGORIES.map((category) => (
        <div key={category} className="flex flex-col gap-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-400">
            {category}s
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {CATALOG.filter((p) => p.category === category).map((product) => (
              <CatalogItem key={product.id} product={product} onAdd={addItem} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CatalogItem({ product, onAdd }: { product: Product; onAdd: (p: Product, x: number, y: number) => void }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white border border-stone-200 rounded-xl p-3 shadow-sm hover:shadow-md transition-all cursor-pointer overflow-hidden"
      onClick={() => onAdd(product, 100, 100)} // Default position when clicked
    >
      <div className="flex gap-4">
        <div className="w-16 h-16 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center overflow-hidden">
          <h3 className="text-sm font-medium text-stone-800 truncate">{product.name}</h3>
          <p className="text-xs text-stone-500">${product.price}/mo</p>
        </div>
      </div>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-emerald-500 text-white p-1 rounded-full">
          <Plus size={16} />
        </div>
      </div>
    </motion.div>
  );
}
