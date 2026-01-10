import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export const NewsletterSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section className="section-luxury bg-ebony-clay">
      <div className="container-luxury">
        <div ref={ref} className="max-w-2xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="subheading-luxury text-quicksand block mb-6"
          >
            Private Access
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-section text-swan-wing mb-8"
          >
            Be the First to Know
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="body-elegant text-shell-stone/80 mb-12"
          >
            Receive exclusive invitations to private viewings, 
            new collection previews, and the stories behind our craft.
          </motion.p>

          {!isSubmitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-6 py-4 bg-transparent border border-shell-stone/30 text-swan-wing placeholder:text-shell-stone/50 text-sm tracking-wide focus:outline-none focus:border-quicksand transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-quicksand text-ebony-clay text-xs uppercase tracking-luxury font-light hover:bg-shell-stone transition-colors duration-300"
              >
                Subscribe
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-quicksand"
            >
              <p className="text-lg font-display font-light tracking-elegant">
                Thank you for joining us.
              </p>
              <p className="text-sm text-shell-stone/60 mt-2">
                We shall be in touch.
              </p>
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xs text-shell-stone/40 mt-8"
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
