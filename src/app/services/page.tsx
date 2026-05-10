"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";
import { GlowingCard } from "@/components/ui/glowing-card";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-32 text-center">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-6xl md:text-8xl font-bold mb-8 text-slate-900 dark:text-white"
        >
          Our <span className="text-gradient">Solutions</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-black dark:text-brand-muted max-w-3xl mx-auto"
        >
          We provide the technical foundation and strategic intelligence needed to dominate the modern digital landscape.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlowingCard className="h-full">
                <div className="p-12 group relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <service.icon className="w-32 h-32" />
                  </div>

                  <div className={`w-16 h-16 bg-${service.color}/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-8 h-8 text-${service.color}`} />
                  </div>

                  <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">{service.title}</h2>
                  <p className="text-black dark:text-brand-muted text-lg mb-8 leading-relaxed flex-grow">
                    {service.desc}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-slate-700 dark:text-white/70">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link href={`/services/${service.slug}`} className="w-full">
                    <Button variant="brand" className="w-full rounded-full py-6 text-lg font-bold">
                      Explore {service.title} <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </GlowingCard>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
