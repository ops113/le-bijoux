import { motion } from "framer-motion";
import { Logo } from "./Logo";

const footerLinks = {
  explore: [
    { name: "Curated Pieces", href: "#collection" },
    { name: "New Arrivals", href: "#" },
    { name: "Bespoke", href: "#" },
  ],
  maison: [
    { name: "Our Story", href: "#heritage" },
    { name: "Craftsmanship", href: "#" },
    { name: "Sustainability", href: "#" },
  ],
  services: [
    { name: "Private Appointments", href: "#" },
    { name: "Care & Repair", href: "#" },
    { name: "Gift Services", href: "#" },
  ],
};

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/le.bijoux.kw?igsh=djNvcjAzYnU1NGcz" },
  { name: "LinkedIn", href: "#" },
];

export const Footer = () => {
  return (
    <footer id="contact" className="bg-swan-wing border-t border-shell-stone">
      <div className="container-luxury py-16 md:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Logo variant="dark" className="mb-6" />
            <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-sm mt-8">
              Jewellery with intention—personal, feminine and deeply connected to the stories and heirlooms of the women who wear it.
            </p>

            <div className="mt-8 space-y-2 text-sm text-muted-foreground font-light tracking-wide">
              <p>
                <span className="text-foreground/80">Phone:</span>{" "}
                <a className="hover:text-foreground transition-colors" href="tel:+96550344540">
                  +965 50344540
                </a>
              </p>
              <p>
                <span className="text-foreground/80">Email:</span>{" "}
                <span className="text-muted-foreground">To be added</span>
              </p>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury text-foreground mb-6 font-light">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Maison */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury text-foreground mb-6 font-light">
              Maison
            </h4>
            <ul className="space-y-3">
              {footerLinks.maison.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury text-foreground mb-6 font-light">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-shell-stone my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-xs uppercase tracking-luxury text-muted-foreground hover:text-foreground transition-colors font-light"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-light tracking-wide">
            © 2025 Sumayah Marafi. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors font-light">
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* Large Brand Text */}
      <div className="border-t border-shell-stone overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.03 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="py-8"
        >
          <p className="text-[8vw] md:text-[12vw] font-display font-light text-foreground text-center tracking-luxury whitespace-nowrap">
            SM Fine Jewellery
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
