import { motion } from "framer-motion";
import { useState } from "react";
import { Product3DPreview } from "@/components/Product3DPreview";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  model: string;
  category: "shirt" | "tshirt" | "hoodie";
}

const products: Product[] = [
  {
    id: "1",
    name: "Classic White Shirt",
    price: 59.99,
    image: "/placeholder.svg",
    model: "/models/shirt.glb", // You'll need to add these 3D models
    category: "shirt",
  },
  {
    id: "2",
    name: "Essential T-Shirt",
    price: 29.99,
    image: "/placeholder.svg",
    model: "/models/tshirt.glb",
    category: "tshirt",
  },
  {
    id: "3",
    name: "Comfort Hoodie",
    price: 79.99,
    image: "/placeholder.svg",
    model: "/models/hoodie.glb",
    category: "hoodie",
  },
];

const Products = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Products
        </motion.h1>

        <div className="flex justify-center gap-4 mb-8">
          {["all", "shirt", "tshirt", "hoodie"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${filter === category 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group relative"
            >
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 h-80 p-0">
                  <Product3DPreview 
                    modelPath={product.model} 
                    className="w-full h-full"
                  />
                </HoverCardContent>
              </HoverCard>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm font-medium text-primary">{product.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">${product.price}</p>
                </div>
                <button className="rounded-full bg-primary p-2 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
                  Customize
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Products;