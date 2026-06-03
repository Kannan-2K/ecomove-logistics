import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "The Opportunity", href: "#challenge" },
  { label: "What We Offer", href: "#solution" },
  { label: "Why Us", href: "#usp" },
  { label: "Impact", href: "#impact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-md border border-border rounded-2xl px-6 py-3 eco-shadow">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display font-bold text-lg text-foreground">Kho Kho</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-xl gradient-primary text-white hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 bg-white border border-border rounded-2xl px-6 py-4 eco-shadow"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-2 text-center py-2 rounded-xl gradient-primary text-white text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
