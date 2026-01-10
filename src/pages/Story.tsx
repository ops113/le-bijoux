import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ringTourmaline from "@/assets/ring-tourmaline.jpg";
import necklaceTanzanite from "@/assets/necklace-tanzanite.jpg";
import earringsCluster from "@/assets/earrings-cluster.jpg";

export default function Story() {
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

      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ringTourmaline}
            alt="Le. Bijoux heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ebony-clay/70 via-ebony-clay/50 to-background" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="subheading-luxury text-quicksand block mb-6">Our Heritage</span>
            <h1 className="heading-hero text-swan-wing">Our Story</h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-luxury">
        <div className="container-luxury max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg mx-auto text-center"
          >
            <p className="body-elegant text-muted-foreground leading-relaxed mb-12">
              Founded in the heart of London in 1892, Le. Bijoux began as a small atelier 
              where master craftsman Henri Laurent first combined his passion for precious 
              stones with an unwavering commitment to perfection. What started as a single 
              workshop has evolved into a legacy spanning four generations.
            </p>
          </motion.div>

          {/* Image Break */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="my-16 md:my-24"
          >
            <div className="image-luxury aspect-[16/9]">
              <img
                src={necklaceTanzanite}
                alt="Le. Bijoux craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg mx-auto"
          >
            <h2 className="heading-section text-foreground text-center mb-8">The Philosophy</h2>
            <p className="body-elegant text-muted-foreground leading-relaxed mb-8">
              We believe that true luxury cannot be rushed. Each piece in our collection 
              is the result of hundreds of hours of meticulous work—from the careful 
              selection of ethically sourced gemstones to the final polish that reveals 
              the soul of the creation.
            </p>
            <p className="body-elegant text-muted-foreground leading-relaxed mb-8">
              Our artisans inherit techniques passed down through generations, yet they 
              also embrace innovation. This balance between tradition and modernity 
              defines our aesthetic: pieces that feel both timeless and contemporary, 
              rooted in heritage yet speaking to the present.
            </p>
          </motion.div>

          {/* Second Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="my-16 md:my-24"
          >
            <div className="image-luxury aspect-square max-w-2xl mx-auto">
              <img
                src={earringsCluster}
                alt="Le. Bijoux artistry"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg mx-auto"
          >
            <h2 className="heading-section text-foreground text-center mb-8">Our Promise</h2>
            <p className="body-elegant text-muted-foreground leading-relaxed mb-8">
              When you choose Le. Bijoux, you choose more than jewellery. You choose 
              a commitment to excellence that has been refined over more than a century. 
              You choose pieces that will be treasured for generations, just as our 
              craft has been.
            </p>
            <p className="body-elegant text-muted-foreground leading-relaxed mb-12">
              Every creation that leaves our atelier carries with it the weight of our 
              history and the promise of our future. This is the Le. Bijoux difference.
            </p>
          </motion.div>

          {/* Back to Home CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center pt-8"
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
