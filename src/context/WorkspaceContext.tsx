'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { Product } from '@/data/catalog';

export type SlotId = 
  | 'desk' 
  | 'chair' 
  | 'monitor-left' 
  | 'monitor-center' 
  | 'monitor-right'
  | 'accessory-left'
  | 'accessory-right'
  | 'coffee'
  | 'outdoor'
  | 'relax'
  | 'garage';

interface WorkspaceContextType {
  slots: Record<SlotId, Product | null>;
  setSlotProduct: (slotId: SlotId, product: Product | null) => void;
  totalPrice: number;
  openSlot: { id: SlotId; category: string } | null;
  openPicker: (id: SlotId, category: string) => void;
  closePicker: () => void;
}

const WorkspaceContext = createContext<WorkspaceContextType | undefined>(undefined);

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [slots, setSlots] = useState<Record<SlotId, Product | null>>({
    desk: null,
    chair: null,
    'monitor-left': null,
    'monitor-center': null,
    'monitor-right': null,
    'accessory-left': null,
    'accessory-right': null,
    coffee: null,
    outdoor: null,
    relax: null,
    garage: null,
  });

  const [openSlot, setOpenSlot] = useState<{ id: SlotId; category: string } | null>(null);

  const openPicker = useCallback((id: SlotId, category: string) => {
    setOpenSlot({ id, category });
  }, []);

  const closePicker = useCallback(() => {
    setOpenSlot(null);
  }, []);

  const setSlotProduct = useCallback((slotId: SlotId, product: Product | null) => {
    setSlots((prev) => ({ ...prev, [slotId]: product }));
    setOpenSlot(null);
  }, []);

  const totalPrice = Object.values(slots).reduce((sum, product) => sum + (product?.price || 0), 0);

  return (
    <WorkspaceContext.Provider
      value={{ slots, setSlotProduct, totalPrice, openSlot, openPicker, closePicker }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace() {
  const context = useContext(WorkspaceContext);
  if (context === undefined) {
    throw new Error('useWorkspace must be used within a WorkspaceProvider');
  }
  return context;
}
