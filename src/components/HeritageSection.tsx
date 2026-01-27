import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import heritageImage from "@/assets/earrings-emerald - 2.jpg";

export const HeritageSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const isTextInView = useInView(textRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section 
      id="heritage" 
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* Full Width Image */}
      <div className="relative h-[70vh] md:h-screen overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{ y: imageY }}
        >
          <img
            src={heritageImage}
            alt="Le. Bijoux artisan atelier"
            className="w-full h-[120%] object-cover"
            loading="lazy"
          />
        </motion.div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ebony-clay/80 via-ebony-clay/50 to-transparent" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-luxury">
            <div ref={textRef} className="max-w-xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="subheading-luxury text-quicksand block mb-6"
              >
                Founded in 2023
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="heading-display text-swan-wing mb-8"
              >
                A Legacy
                <br />
                <span className="text-quicksand">Reimagined</span>
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={isTextInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-16 h-px bg-quicksand mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="body-elegant text-shell-stone mb-8"
              >
                Inspired by her grandmother and mother, Sumayah learned that jewelry is a daily expression of femininity and self-respect. A gift of red rubies from her father sparked our signature concept, <em>Blood of My Blood</em>: inviting you to bring heirlooms, gemstones, and family treasures to be redesigned into new symbols you can wear every day.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isTextInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Link
                  to="/story"
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-luxury text-swan-wing font-light group"
                >
                  <span className="link-luxury">Our Story</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
