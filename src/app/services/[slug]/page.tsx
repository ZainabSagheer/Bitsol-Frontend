"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { services } from "@/lib/services";
import { GlowingCard } from "@/components/ui/glowing-card";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ServiceDetailPage() {
  const params = useParams();
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <Link href="/services" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-cyan mb-12 transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className={`w-20 h-20 rounded-3xl bg-${service.color}/10 flex items-center justify-center mb-10`}>
              <Icon className={`w-10 h-10 text-${service.color}`} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-slate-900 dark:text-white">
              {service.title}<span className="text-brand-cyan">.</span>
            </h1>
            <p className="text-2xl text-black dark:text-brand-muted leading-relaxed mb-12">
              {service.fullDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-cyan shrink-0" />
                  <span className="text-lg text-slate-700 dark:text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <GlowingCard>
              <div className="p-10">
                <h3 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white text-center">Start Your Project</h3>
                <ContactForm />
              </div>
            </GlowingCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
