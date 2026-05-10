"use client";

import { MorphingCardStack } from "@/components/ui/morphing-card-stack";
import { Quote, Star, Rocket, Shield, Heart, Globe } from "lucide-react";
import { motion } from "framer-motion";

const testimonialData = [
  {
    id: "1",
    title: "Global Logistics Corp",
    description: "BITSOL transformed our supply chain with Nexus AI. We saw a 45% increase in operational efficiency within just three months. Their technical depth is unmatched.",
    icon: <Rocket className="h-6 w-6" />,
  },
  {
    id: "2",
    title: "Horizon Capital",
    description: "The precision of AlphaTrade Pro has given our institutional traders a massive edge. Millisecond execution and real-time risk AI changed how we handle PMEX markets.",
    icon: <Star className="h-6 w-6" />,
  },
  {
    id: "3",
    title: "Zenith Properties",
    description: "Our digital presence went from standard to cinematic. The 3D property tours built by BITSOL are our highest converting lead generation tool today.",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    id: "4",
    title: "SecureFinance",
    description: "Security was our top priority. BITSOL's CryptoVault OS exceeded every institutional-grade requirement we had. They are true architects of secure ecosystems.",
    icon: <Shield className="h-6 w-6" />,
  },
  {
    id: "5",
    title: "Vitality Labs",
    description: "MobiHealth AI is more than an app; it's a life-saving tool. The biometric integration is seamless and the predictive analytics are incredibly accurate.",
    icon: <Heart className="h-6 w-6" />,
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden bg-slate-50/50 dark:bg-transparent">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              Voices of <span className="text-gradient">Success</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-brand-muted max-w-2xl mx-auto">
              Don't just take our word for it. Hear from the leaders who have architected their future with BITSOL.
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <MorphingCardStack cards={testimonialData} defaultLayout="stack" />
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] pointer-events-none" />
    </section>
  );
}
