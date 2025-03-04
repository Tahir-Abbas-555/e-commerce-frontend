import { ShoppingCart, Menu, Home } from "lucide-react";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button className="lg:hidden p-2">
              <Menu className="h-6 w-6" />
            </button>
            <a href="/" className="text-xl font-bold text-primary ml-2 lg:ml-0">
              CUSTOM APPAREL
            </a>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <motion.a 
              href="/"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <Home className="h-4 w-4" />
              Home
            </motion.a>
            <a href="/shop" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Shop
            </a>
            <a href="/customize" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              Customize
            </a>
            <a href="/about" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              About
            </a>
          </nav>
          
          <div className="flex items-center">
            <button className="p-2 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-secondary text-[10px] font-bold text-secondary-foreground flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};