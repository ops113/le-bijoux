import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { collectionItems, getImagesForSlug } from "@/lib/collections";
import { VoiceOverButton } from "@/components/VoiceOverButton";

type GalleryItem = (typeof collectionItems)[number] & { images: string[] };

export default function Collection() {
  const collections = useMemo<GalleryItem[]>(() => {
    return collectionItems
      .map((item) => ({
        ...item,
        images: getImagesForSlug(item.slug),
      }))
      .filter((item) => item.images.length > 0);
  }, []);

  const [selected, setSelected] = useState<GalleryItem | null>(null);

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
            Curated Pieces
          </motion.h1>
          <div className="mt-8 flex justify-center">
            <VoiceOverButton text="Curated Pieces. A directory of previously customised work." />
          </div>
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
                onClick={() => setSelected(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelected(item)}
              >
                {/* Image Container */}
                <div className="image-luxury aspect-[3/4] mb-6 bg-shell-stone">
                  <img
                    src={item.images[0]}
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

      {/* Lightbox for collection items */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-6xl p-0 overflow-hidden bg-ebony-clay text-swan-wing">
          {selected && (
            <div className="grid md:grid-cols-2">
              <div className="relative bg-ebony-clay">
                <Carousel className="w-full" opts={{ loop: true }}>
                  <CarouselContent>
                    {selected.images.map((src, idx) => (
                      <CarouselItem key={src} className="basis-full">
                        <div className="aspect-[3/4] bg-ebony-clay">
                          <img
                            src={src}
                            alt={`${selected.name} view ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 bg-swan-wing/80 text-foreground hover:bg-swan-wing" />
                  <CarouselNext className="right-4 bg-swan-wing/80 text-foreground hover:bg-swan-wing" />
                </Carousel>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center gap-4">
                <span className="subheading-luxury text-quicksand">{selected.category}</span>
                <h3 className="heading-section text-swan-wing">{selected.name}</h3>
                <p className="body-elegant text-shell-stone/70">
                  Explore every angle and setting variation. Tap or click through the gallery to view the complete piece.
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
