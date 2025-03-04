import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Palette, ZoomIn } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "shirt" | "tshirt" | "hoodie";
}

const products: Product[] = [
  {
    id: "1",
    name: "Classic White Shirt",
    price: 59.99,
    image: "/placeholder.svg",
    category: "shirt",
  },
  {
    id: "2",
    name: "Essential T-Shirt",
    price: 29.99,
    image: "/placeholder.svg",
    category: "tshirt",
  },
  {
    id: "3",
    name: "Comfort Hoodie",
    price: 79.99,
    image: "/placeholder.svg",
    category: "hoodie",
  },
];

export const ProductGrid = () => {
  const [filter, setFilter] = useState<string>("all");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2 
        className="text-3xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Featured Products
      </motion.h2>
      
      <motion.div 
        className="flex justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {["all", "shirt", "tshirt", "hoodie"].map((category) => (
          <motion.button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${filter === category 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </motion.button>
        ))}
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="wait">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group relative"
              onHoverStart={() => setHoveredId(product.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              <div className="aspect-square overflow-hidden rounded-lg bg-muted relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <AnimatePresence>
                  {hoveredId === product.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-white text-primary"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-white text-primary"
                      >
                        <Palette className="w-5 h-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 rounded-full bg-white text-primary"
                      >
                        <ZoomIn className="w-5 h-5" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="mt-4">
                <h3 className="text-sm font-medium text-primary">{product.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">${product.price}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};