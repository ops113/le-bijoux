import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import necklaceButterfly from "@/assets/necklace-butterfly.jpg";
import earringsEmerald from "@/assets/earrings-emerald.jpg";
import ringSapphire from "@/assets/ring-sapphire.jpg";

const collections = [
  {
    id: 1,
    name: "Butterfly Grace",
    category: "Necklaces",
    image: necklaceButterfly,
  },
  {
    id: 2,
    name: "Emerald Studs",
    category: "Earrings",
    image: earringsEmerald,
  },
  {
    id: 3,
    name: "Sapphire Eternity",
    category: "Rings",
    image: ringSapphire,
  },
];

const CollectionCard = ({ 
  item, 
  index 
}: { 
  item: typeof collections[0]; 
  index: number 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group cursor-pointer"
    >
      {/* Image Container */}
      <div className="image-luxury aspect-[3/4] mb-6 bg-shell-stone">
        <img
          src={item.image}
          alt={`${item.name} collection`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-ebony-clay/0 group-hover:bg-ebony-clay/20 transition-all duration-500" />
      </div>

      {/* Text */}
      <div className="text-center">
        <span className="subheading-luxury text-quicksand block mb-2">
          {item.category}
        </span>
        <h3 className="text-xl md:text-2xl font-display font-light text-foreground tracking-elegant group-hover:text-quicksand transition-colors duration-300">
          {item.name}
        </h3>
      </div>
    </motion.div>
  );
};

export const CollectionSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="collection" className="section-luxury bg-shell-stone/30">
      <div className="container-luxury">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="subheading-luxury text-quicksand block mb-6"
          >
            Signature Pieces
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-display text-foreground"
          >
            The Collection
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHeaderInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="divider-luxury mt-8"
          />
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {collections.map((item, index) => (
            <CollectionCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16 md:mt-24"
        >
          <Link to="/collection" className="btn-luxury-outline">
            View All Collections
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
