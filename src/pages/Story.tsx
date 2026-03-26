import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ringTourmaline from "@/assets/ring-tourmaline.jpg";
import necklaceTanzanite from "@/assets/necklace-tanzanite.jpg";
import earringsCluster from "@/assets/earrings-cluster.jpg";
import { VoiceOverButton } from "@/components/VoiceOverButton";

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
            alt="Sumayah Marafi heritage"
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
            <div className="not-prose mb-10 flex justify-center">
              <VoiceOverButton text="Our Story. Founded in 2023, Sumayah Marafi is an emotional, creative journey where every piece is infused with intention, memory and meaning. It began the day Sumayah realised that the joy she found customising her own jewellery could become a space for other women to wear their stories. Today, Sumayah Marafi stands for femininity with strength: personal adornments crafted to honour who you are and who you are becoming." />
            </div>
            <p className="body-elegant text-muted-foreground leading-relaxed">
              Founded in 2023, Sumayah Marafi is an emotional, creative journey where every piece is infused with intention, memory and meaning. It began the day Sumayah realised that the joy she found customising her own jewellery could become a space for other women to wear their stories.
            </p>
            <p className="body-elegant text-muted-foreground leading-relaxed">
              The name “Sumayah Marafi” is universal—a shared language for “jewel”—chosen for its elegant sound and the feeling it evokes: luxurious and poised. Inspired by her grandmother and mother, who taught her that jewellery is a daily ritual of femininity and self-respect, Sumayah believes a woman should always keep a piece of beauty close, even at home.
            </p>
            <p className="body-elegant text-muted-foreground leading-relaxed mb-0">
              Today, Sumayah Marafi stands for femininity with strength: personal adornments crafted to honor who you are and who you are becoming.
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
                alt="Sumayah Marafi craftsmanship"
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
            <h2 className="heading-section text-foreground text-center mb-8">Designing with Emotion</h2>
            <p className="body-elegant text-muted-foreground leading-relaxed mb-8">
              Known to clients as a “jewellery therapist,” Sumayah designs with the psychology of jewellery—using colour, words and symbolism to capture how you want to feel. Each piece is guided by a curated calendar of themes such as love, rebirth, courage and legacy.
            </p>
            <p className="body-elegant text-muted-foreground leading-relaxed mb-8">
              The process is deeply personal: from listening to your story, sketching by hand and studying craftsmanship worldwide, to the moment you see your piece and recognise yourself in it. This is jewellery with intention—crafted to be worn every day, not kept in a box.
            </p>
            <p className="body-elegant text-muted-foreground leading-relaxed mb-0">
              Sustainable luxury is our standard. We favor meaning over excess, encouraging clients to reuse, redesign, and revive what already holds history.
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
                alt="Sumayah Marafi artistry"
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
            <h2 className="heading-section text-foreground text-center mb-8">What We Stand For</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div className="bg-shell-stone/20 border border-shell-stone/50 p-8">
                <h3 className="text-lg font-display font-light tracking-elegant text-foreground mb-4">
                  Brand Values
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>Femininity with strength: beauty as a daily ritual of confidence.</li>
                  <li>Emotional connection: pieces that hold memory, feeling, and intention.</li>
                  <li>Personalization: color, words, and symbols tailored to your story.</li>
                  <li>Heritage & legacy: heirlooms reimagined to honor those who came before.</li>
                  <li>Sustainable luxury: reuse, redesign, and revive over excess.</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-quicksand/60 via-shell-stone/25 to-quicksand/30 text-foreground border border-quicksand/40 p-8">
                <h3 className="text-lg font-display font-light tracking-elegant text-ebony-clay mb-4">
                  Blood of My Blood
                </h3>
                <p className="body-elegant text-ebony-clay/80 leading-relaxed mb-4">
                  Born from the ruby stones gifted by Sumayah’s father, this signature collection invites you to bring in heirlooms, gemstones, or family treasures to be redesigned, reset, or reimagined into modern keepsakes.
                </p>
                <p className="body-elegant text-ebony-clay/70 leading-relaxed mb-0">
                  It is how we carry forward the stories, love, and energy of those who came before us—turning generational memories into pieces you can wear every day.
                </p>
              </div>
            </div>

            <div className="bg-ebony-clay text-shell-stone border border-ebony-clay/40 p-8 md:p-10">
              <h3 className="text-lg font-display font-light tracking-elegant text-swan-wing mb-4">
                Brand Manifesto
              </h3>
              <div className="space-y-3 text-shell-stone/80">
                <p>Jewellery is emotion made visible.</p>
                <p>Femininity is power—soft, elegant, intentional.</p>
                <p>Every stone can hold a story; every symbol can anchor a feeling.</p>
                <p>We honor lineage by reimagining heirlooms for the women of today.</p>
                <p>We create with care, not excess. Meaning before more.</p>
                <p>At Sumayah Marafi, we design the feeling you want to live in. Wear your story.</p>
              </div>
            </div>
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
