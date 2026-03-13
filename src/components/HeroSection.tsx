import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/necklace-pear-sapphire.jpg";
import smLogo from "@/assets/sm-logo.png";

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={ref}
      className="relative h-screen overflow-hidden bg-ebony-clay"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ebony-clay/60 via-ebony-clay/40 to-ebony-clay/70 z-10" />
        <img
          src={heroImage}
          alt="Sumayah Marafi luxury jewelry"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
        style={{ opacity }}
      >
        {/* Monogram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <img 
            src={smLogo} 
            alt="SM Monogram" 
            className="w-36 h-36 md:w-48 md:h-48 object-contain"
          />
        </motion.div>

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="heading-hero text-swan-wing max-w-4xl"
        >
          Wear Your Story
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 subheading-luxury text-shell-stone max-w-xl"
        >
          Jewelry with intention—crafted from personal stories, heirlooms, and the women who wear them.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-xs uppercase tracking-luxury text-shell-stone/60 font-light">
              Discover
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-quicksand to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
