import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// Import all jewelry images
import ringTourmaline from "@/assets/ring-tourmaline.jpg";
import ringSapphire from "@/assets/ring-sapphire.jpg";
import necklaceMarquise from "@/assets/necklace-marquise.jpg";
import necklaceTanzanite from "@/assets/necklace-tanzanite.jpg";
import earringsCluster from "@/assets/earrings-cluster.jpg";
import earringsEmerald from "@/assets/earrings-emerald.jpg";
import earringSapphire from "@/assets/earring-sapphire.jpg";
import necklacePearSapphire from "@/assets/necklace-pear-sapphire.jpg";
import necklaceButterfly from "@/assets/necklace-butterfly.jpg";
import necklaceButterfly2 from "@/assets/necklace-butterfly-2.jpg";

const collections = [
  {
    id: 1,
    name: "Tourmaline Dream",
    category: "Rings",
    image: ringTourmaline,
  },
  {
    id: 2,
    name: "Sapphire Eternity",
    category: "Rings",
    image: ringSapphire,
  },
  {
    id: 3,
    name: "Marquise Solitaire",
    category: "Necklaces",
    image: necklaceMarquise,
  },
  {
    id: 4,
    name: "Tanzanite Pendant",
    category: "Necklaces",
    image: necklaceTanzanite,
  },
  {
    id: 5,
    name: "Cluster Florals",
    category: "Earrings",
    image: earringsCluster,
  },
  {
    id: 6,
    name: "Emerald Studs",
    category: "Earrings",
    image: earringsEmerald,
  },
  {
    id: 7,
    name: "Sapphire Art Deco",
    category: "Earrings",
    image: earringSapphire,
  },
  {
    id: 8,
    name: "Pear Sapphire Drop",
    category: "Necklaces",
    image: necklacePearSapphire,
  },
  {
    id: 9,
    name: "Butterfly Grace",
    category: "Necklaces",
    image: necklaceButterfly,
  },
  {
    id: 10,
    name: "Butterfly Whisper",
    category: "Necklaces",
    image: necklaceButterfly2,
  },
];

export default function Collection() {
  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-8 left-8 z-50"
      >
        <Link 
          to="/" 
          className="inline-flex items-center gap-3 text-xs uppercase tracking-luxury text-foreground font-light group bg-background/80 backdrop-blur-sm px-4 py-3 hover:bg-quicksand/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </Link>
      </motion.div>

      {/* Header */}
      <section className="pt-32 pb-16 md:pb-24 px-6">
        <div className="container-luxury text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="subheading-luxury text-quicksand block mb-6"
          >
            Complete Directory
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-hero text-foreground"
          >
            The Collection
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="divider-luxury mt-8"
          />
        </div>
      </section>

      {/* Collection Grid */}
      <section className="section-luxury pt-0">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {collections.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                {/* Image Container */}
                <div className="image-luxury aspect-[3/4] mb-6 bg-shell-stone">
                  <img
                    src={item.image}
                    alt={`${item.name} - ${item.category}`}
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
            ))}
          </div>

          {/* Back to Home CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16 md:mt-24"
          >
            <Link to="/" className="btn-luxury-outline">
              Return Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
