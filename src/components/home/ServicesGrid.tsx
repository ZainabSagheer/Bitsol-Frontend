"use client";

import { motion } from "framer-motion";
import { 
  Rocket, 
  Brain, 
  Globe, 
  Smartphone, 
  Search, 
  BarChart, 
  Palette, 
  MessageSquare,
  ShieldCheck,
  TrendingUp
} from "lucide-react";

import { services } from "@/lib/services";
import Link from "next/link";
import { GlowingCard } from "@/components/ui/glowing-card";

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-purple/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Our <span className="text-gradient">Core Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black dark:text-brand-muted text-lg"
          >
            We combine deep technical expertise with creative innovation to solve the most complex digital challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/services/${service.slug}`}>
                <GlowingCard className="h-full">
                  <div className="p-10 group cursor-pointer relative overflow-hidden h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-${service.color}/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                      <service.icon className={`w-7 h-7 text-${service.color}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 relative z-10">{service.title}</h3>
                    <p className="text-black dark:text-brand-muted leading-relaxed relative z-10 mb-6">
                      {service.desc}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-brand-white group-hover:text-brand-cyan transition-colors">
                      Explore Service <div className="w-5 h-px bg-brand-muted group-hover:w-8 group-hover:bg-brand-cyan transition-all" />
                    </div>
                  </div>
                </GlowingCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
