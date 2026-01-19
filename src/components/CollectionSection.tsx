import { motion, useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { collectionItems, getImagesForSlug } from "@/lib/collections";

const featuredSlugs = ["necklace-butterfly", "earrings-emerald", "ring-sapphire"];

type CollectionCardItem = {
  id: number;
  name: string;
  category: string;
  slug: string;
  images: string[];
};

const CollectionCard = ({
  item,
  index,
  onSelect,
}: {
  item: CollectionCardItem;
  index: number;
  onSelect: (item: CollectionCardItem) => void;
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
      onClick={() => onSelect(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(item)}
    >
      {/* Image Container */}
      <div className="image-luxury aspect-[3/4] mb-6 bg-shell-stone">
        <img
          src={item.images[0]}
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
  const featuredItems = useMemo(() => {
    return collectionItems
      .filter((item) => featuredSlugs.includes(item.slug))
      .map((item) => {
        const images = getImagesForSlug(item.slug);
        return { ...item, images };
      })
      .filter((item) => item.images.length > 0);
  }, []);
  const [selected, setSelected] = useState<CollectionCardItem | null>(null);

  return (
    <>
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
            {featuredItems.map((item, index) => (
              <CollectionCard key={item.id} item={item} index={index} onSelect={setSelected} />
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

      {/* Lightbox for featured items */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-ebony-clay text-swan-wing">
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
                  Multi-angle views from our atelier. Explore every detail before it becomes yours.
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
