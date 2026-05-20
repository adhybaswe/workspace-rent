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
  { id: 'desk-bamboo', name: 'Ubud Bamboo Desk', category: 'Desks', price: 45, image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=600', description: 'Sustainable bamboo desk.' },
  { id: 'desk-minimal', name: 'Minimalist White', category: 'Desks', price: 35, image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=600', description: 'Clean white desk.' },
  
  // CHAIRS
  { id: 'chair-ergonomic', name: 'Cloud Ergo Chair', category: 'Chairs', price: 30, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600', description: 'Adjustable ergonomic chair.' },
  { id: 'chair-stool', name: 'Teak Bar Stool', category: 'Chairs', price: 20, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=600', description: 'Handcrafted teak stool.' },

  // MONITORS
  { id: 'monitor-4k', name: '32" UltraSharp 4K', category: 'Monitors', price: 40, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600', description: 'Stunning 4K resolution.' },
  { id: 'monitor-vertical', name: '24" Vertical Screen', category: 'Monitors', price: 25, image: 'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?auto=format&fit=crop&q=80&w=600', description: 'Perfect for code.' },

  // COFFEE STATION
  { id: 'coffee-espresso', name: 'Balinese Espresso', category: 'Coffee Station', price: 15, image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=600', description: 'Local bean machine.' },
  
  // OUTDOOR GEAR
  { id: 'surfboard-long', name: 'Canggu Longboard', category: 'Outdoor Gear', price: 25, image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&q=80&w=600', description: 'Perfect for morning sets.' },
  { id: 'motorcycle-scooter', name: 'Scoopy Rental', category: 'Outdoor Gear', price: 50, image: 'https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?auto=format&fit=crop&q=80&w=600', description: 'Zip through traffic.' },

  // RELAX ZONE
  { id: 'relax-beanbag', name: 'Giant Bean Bag', category: 'Relax Zone', price: 10, image: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=600', description: 'Maximum comfort.' },

  // ACCESSORIES (Desk Items)
  { id: 'lamp-sunset', name: 'Sunset Desk Lamp', category: 'Accessories', price: 8, image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=600', description: 'Warm ambient light.' },
  { id: 'lamp-office', name: 'LED Task Light', category: 'Accessories', price: 12, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=600', description: 'Focus-ready lighting.' },
  { id: 'plant-monstera', name: 'Mini Monstera', category: 'Accessories', price: 5, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=600', description: 'Tropical vibes.' },
  { id: 'plant-succulent', name: 'Desktop Succulent', category: 'Accessories', price: 3, image: 'https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?auto=format&fit=crop&q=80&w=600', description: 'Small desk companion.' },

  // GARAGE SPACE
  { id: 'garage-shelf', name: 'Industrial Tool Shelf', category: 'Garage Space', price: 20, image: 'https://images.unsplash.com/photo-1553531384-397c80973a0b?auto=format&fit=crop&q=80&w=600', description: 'Heavy-duty storage.' },
  { id: 'garage-workbench', name: 'Craftsman Workbench', category: 'Garage Space', price: 35, image: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?auto=format&fit=crop&q=80&w=600', description: 'Solid wood work surface.' },
  { id: 'garage-storage', name: 'Modular Bin System', category: 'Garage Space', price: 15, image: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=600', description: 'Organize your gear.' },
];
