import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const values = [
  { title: "Femininity with Strength", description: "Beauty as a daily ritual of confidence." },
  { title: "Emotional Connection", description: "Pieces that hold memory, feeling, and intention." },
  { title: "Personalization", description: "Color, words, and symbols tailored to your story." },
  { title: "Heritage & Legacy", description: "Heirlooms reimagined to honor those who came before." },
  { title: "Sustainable Luxury", description: "Reuse, redesign, and revive over excess." },
];

export const PhilosophySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play carousel
  useEffect(() => {
    if (!api || !isInView) {
      return;
    }

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [api, isInView]);

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

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
            Jewelry with
            <br />
            <span className="text-quicksand">Intention & Meaning</span>
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
          At Sumayah Marafi, jewelry is emotion made visible. We design with the psychology of jewelry in mind—color, words, and symbols that anchor how you want to feel today and who you are becoming tomorrow.
        </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="body-elegant text-muted-foreground max-w-2xl mx-auto mb-16"
          >
            We design with you: heirlooms revived, personal mantras embedded, femininity honored as power. It is sustainable luxury—meaning over excess, intention over trend.
          </motion.p>

          {/* Values Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative mt-20"
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full max-w-2xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {values.map((value, index) => (
                  <CarouselItem key={value.title} className="pl-2 md:pl-4 basis-full">
                    <div className="text-center px-6 py-8 md:py-12">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView && current === index ? { opacity: 1, y: 0 } : { opacity: 0.4, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-lg mx-auto"
                      >
                        <h3 className="text-xl md:text-2xl font-display font-light tracking-elegant text-foreground mb-4">
                          {value.title}
                        </h3>
                        <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                          {value.description}
                        </p>
                      </motion.div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Buttons */}
              <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 p-2 rounded-full border border-shell-stone/30 bg-swan-wing/80 backdrop-blur-sm hover:bg-swan-wing hover:border-quicksand/50 transition-all duration-300 group"
                aria-label="Previous value"
              >
                <ChevronLeft className="w-5 h-5 text-foreground group-hover:text-quicksand transition-colors" />
              </button>

              <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 p-2 rounded-full border border-shell-stone/30 bg-swan-wing/80 backdrop-blur-sm hover:bg-swan-wing hover:border-quicksand/50 transition-all duration-300 group"
                aria-label="Next value"
              >
                <ChevronRight className="w-5 h-5 text-foreground group-hover:text-quicksand transition-colors" />
              </button>
            </Carousel>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {values.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-8 bg-quicksand"
                      : "w-1.5 bg-shell-stone/40 hover:bg-shell-stone/60"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
