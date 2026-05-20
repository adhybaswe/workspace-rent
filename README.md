# monis.rent | Workspace Builder

An interactive, blueprint-style workspace designer for digital nomads and startups in Bali. Build your perfect remote office setup visually and rent it instantly.

## 🚀 Approach & Design Philosophy

For this project, I moved away from a traditional product catalog and opted for a **Blueprint-First Design**. Instead of static lists, the user interacts with a visual "hotspot" system that mimics an architectural sketch or a moodboard.

Key aspects of the approach include:
- **Conceptual Clarity:** By using clean icons and bold typography on the canvas (Blueprint Mode), the UI remains uncluttered and professional, even when complex setups are built.
- **Contextual Interaction:** A Global Selection Modal provides a focused, high-fidelity experience when choosing specific gear, showing realistic product photography only when needed.
- **Bali Lifestyle Integration:** Beyond just desks and chairs, the tool includes categories specific to the Bali nomad experience, like "Outdoor Gear" (surfboards/scooters) and "Coffee Stations".

## 🛠 Tech Stack

- **Next.js 15 (App Router):** For a fast, modern foundation with robust routing.
- **React 19:** Utilizing the latest features for state management and UI composition.
- **Framer Motion:** Powering the "pop" animations, modal transitions, and the tactile feel of the builder.
- **Tailwind CSS 4.0:** For a "Brutalist" aesthetic with thick borders, high contrast, and responsive spacing.
- **Lucide React:** Providing a consistent, minimalist icon set for the blueprint representation.

## 🔮 Future Improvements

With more time, I would focus on the following enhancements:
1. **Interactive 3D Preview:** While the 2D blueprint is clean, integrating a real-time 3D preview (using React Three Fiber) would provide an even more immersive "wow" factor.
2. **Collision Detection & Persistence:** Implementing smarter logic to prevent unrealistic item combinations and adding `localStorage` or database persistence so users can save and share their designs.
3. **Advanced Customization:** Allowing users to change the materials of the desks or the colors of the chairs within the builder to match their specific villa aesthetic.
4. **Automated Inventory Sync:** Integrating directly with an inventory management API (like Booqable) to ensure all selectable items are currently in stock.

---
