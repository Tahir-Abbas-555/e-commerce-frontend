import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ProductGrid } from "@/components/ProductGrid";
import { ShoppingBag, Palette, TrendingUp } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Crafted with the finest materials for lasting comfort"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Custom Designs",
      description: "Create your unique style with our design tools"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Latest Trends",
      description: "Stay ahead with our contemporary collections"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 py-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-primary">
                Design Your Style
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Create custom apparel that's uniquely yours. Choose from our collection or design your own.
              </p>
              <div className="flex gap-4">
                <motion.a 
                  href="/shop" 
                  className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Shop Collection
                </motion.a>
                <motion.a 
                  href="/customize" 
                  className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Designing
                </motion.a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <img 
                src="/placeholder.svg" 
                alt="Custom Apparel Preview" 
                className="w-full rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-muted py-16"
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-primary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        <ProductGrid />
      </main>
    </div>
  );
};

export default Index;