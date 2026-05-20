export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export const CATALOG: Product[] = [
  // DESKS
  { id: 'desk-bamboo', name: 'Ubud Bamboo Desk', category: 'Desks', price: 45, image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=300', description: 'Sustainable bamboo desk.' },
  { id: 'desk-minimal', name: 'Minimalist White', category: 'Desks', price: 35, image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=300', description: 'Clean white desk.' },
  
  // CHAIRS
  { id: 'chair-ergonomic', name: 'Cloud Ergo Chair', category: 'Chairs', price: 30, image: 'https://images.unsplash.com/photo-1505843490701-5be5d0b19d58?auto=format&fit=crop&q=80&w=300', description: 'Adjustable ergonomic chair.' },
  { id: 'chair-stool', name: 'Teak Bar Stool', category: 'Chairs', price: 20, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=300', description: 'Handcrafted teak stool.' },

  // MONITORS
  { id: 'monitor-4k', name: '32" UltraSharp 4K', category: 'Monitors', price: 40, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=300', description: 'Stunning 4K resolution.' },
  { id: 'monitor-vertical', name: '24" Vertical Screen', category: 'Monitors', price: 25, image: 'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?auto=format&fit=crop&q=80&w=300', description: 'Perfect for code.' },

  // COFFEE STATION
  { id: 'coffee-espresso', name: 'Balinese Espresso', category: 'Coffee Station', price: 15, image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=300', description: 'Local bean machine.' },
  
  // OUTDOOR GEAR
  { id: 'surfboard-long', name: 'Canggu Longboard', category: 'Outdoor Gear', price: 25, image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=300', description: 'Perfect for morning sets.' },
  { id: 'motorcycle-scooter', name: 'Scoopy Rental', category: 'Outdoor Gear', price: 50, image: 'https://images.unsplash.com/photo-1558981403-c5f9199a28cd?auto=format&fit=crop&q=80&w=300', description: 'Zip through traffic.' },

  // RELAX ZONE
  { id: 'relax-beanbag', name: 'Giant Bean Bag', category: 'Relax Zone', price: 10, image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=300', description: 'Maximum comfort.' },
];
