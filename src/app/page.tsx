'use client';

import Canvas from '@/components/Canvas';
import CartSummary from '@/components/CartSummary';
import GlobalSlotPicker from '@/components/GlobalSlotPicker';

export default function WorkspaceBuilderPage() {
  return (
    <main className="flex h-screen w-full bg-white overflow-hidden">
      {/* Main Area: Visual Canvas */}
      <Canvas />

      {/* Sidebar: Cart Summary */}
      <CartSummary />

      {/* Global Selection Modal */}
      <GlobalSlotPicker />
    </main>
  );
}
