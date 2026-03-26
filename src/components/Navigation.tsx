import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogoHorizontal } from "./Logo";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Intentional Pieces", href: "#collection" },
  { name: "Maison", href: "#maison" },
  { name: "Heritage", href: "#heritage" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-swan-wing/95 backdrop-blur-sm shadow-sm" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="container-luxury">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a href="#" className="relative z-10">
              <LogoHorizontal variant={isScrolled || isMobileMenuOpen ? "dark" : "light"} />
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-10">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <a
                    href={link.href}
                    className={`link-luxury text-xs uppercase tracking-luxury font-light transition-colors ${
                      isScrolled ? "text-foreground" : "text-swan-wing"
                    }`}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden relative z-10 p-2 ${
                isScrolled || isMobileMenuOpen ? "text-foreground" : "text-swan-wing"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-swan-wing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="heading-section text-foreground hover:text-quicksand transition-colors"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
