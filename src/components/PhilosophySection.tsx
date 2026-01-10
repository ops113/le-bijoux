import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const PhilosophySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="maison" className="section-luxury bg-swan-wing">
      <div className="container-luxury">
        <div 
          ref={ref}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Section Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="subheading-luxury text-quicksand block mb-6"
          >
            Our Philosophy
          </motion.span>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-foreground mb-8"
          >
            The Art of
            <br />
            <span className="text-quicksand">Understated Beauty</span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="divider-luxury mb-12"
          />

          {/* Body Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="body-elegant text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            At Le. Bijoux, we believe in the quiet confidence of exceptional craftsmanship. 
            Each piece tells a story of dedication, precision, and an unwavering commitment 
            to excellence that transcends generations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="body-elegant text-muted-foreground max-w-2xl mx-auto"
          >
            We do not follow trends. We create heirlooms.
          </motion.p>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20"
          >
            {[
              { title: "Precision", description: "Every detail considered" },
              { title: "Heritage", description: "Rooted in tradition" },
              { title: "Excellence", description: "Without compromise" },
            ].map((value, index) => (
              <div key={value.title} className="text-center">
                <h3 className="text-lg font-display font-light tracking-elegant text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
