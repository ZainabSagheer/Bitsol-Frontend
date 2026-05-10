"use client";

import { motion } from "framer-motion";
import { GlowingCard } from "@/components/ui/glowing-card";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 text-slate-900 dark:text-white"
          >
            Let's Build the <span className="text-gradient">Future</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-black dark:text-brand-muted text-xl"
          >
            Whether you're looking for AI automation, a futuristic web engine, or custom trading tech, our architects are ready to help.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-8"
          >
            {[
              { icon: Mail, title: "Primary Support", val: "info@bitsolmarketing.com", sub: "General inquiries & partnerships" },
              { icon: Phone, title: "Direct Call / WhatsApp", val: "+92 310 317 5175", sub: "24/7 Priority technical support" },
              { icon: MapPin, title: "Headquarters (Lahore)", val: "83/3 C KB Commercial", sub: "Phase 1, DHA, Lahore, Pakistan" },
              { icon: MapPin, title: "Regional Office (Faisalabad)", val: "Kohinoor 1 Plaza, Jaranwala Rd", sub: "Kohinoor City, Faisalabad, Pakistan" },
              { icon: MapPin, title: "Regional Office (Samundri)", val: "Street No 2, Main Chawla Road", sub: "Samundri, 37300, Pakistan" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-brand-cyan transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-1">{item.title}</h4>
                  {item.icon === MapPin ? (
                    <p className="text-black dark:text-brand-white font-medium mb-1">{item.val}</p>
                  ) : (
                    <a href={item.icon === Phone ? `tel:${item.val.replace(/\s+/g, '')}` : `mailto:${item.val}`} className="text-black dark:text-brand-white font-medium mb-1 hover:text-brand-cyan transition-colors block">{item.val}</a>
                  )}
                  <p className="text-brand-muted text-sm">{item.sub}</p>
                </div>
              </div>
            ))}

            {/* Specialized Channels */}
            <div className="p-8 bg-brand-purple/5 border border-brand-purple/10 rounded-3xl">
              <h4 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
                Specialized Channels
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: "AI Solutions", email: "ai@bitsolmarketing.com" },
                  { label: "Trading Tech", email: "trading@bitsolmarketing.com" },
                  { label: "Educational", email: "courses@bitsolmarketing.com" },
                  { label: "Executive Office", email: "ceo@bitsolmarketing.com" },
                  { label: "Administration", email: "admin@bitsolmarketing.com" },
                  { label: "Client Services", email: "services@bitsolmarketing.com" },
                ].map((channel, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="text-sm font-bold text-brand-muted uppercase tracking-widest">{channel.label}</span>
                    <a href={`mailto:${channel.email}`} className="text-xs font-mono text-brand-cyan hover:underline">{channel.email}</a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <GlowingCard>
              <div className="p-10 md:p-16">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-brand-purple/20 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-brand-purple" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Direct Inquiry</h2>
                </div>
                <ContactForm />
              </div>
            </GlowingCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
