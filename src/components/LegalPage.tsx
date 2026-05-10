"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ArrowLeft, Scale, ShieldCheck, Cookie, FileCheck } from "lucide-react";
import Link from "next/link";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  icon: "terms" | "privacy" | "cookies" | "compliance";
  children: ReactNode;
}

const icons = {
  terms: <Scale className="w-12 h-12 text-brand-cyan" />,
  privacy: <ShieldCheck className="w-12 h-12 text-brand-purple" />,
  cookies: <Cookie className="w-12 h-12 text-brand-cyan" />,
  compliance: <FileCheck className="w-12 h-12 text-brand-purple" />,
};

export function LegalPage({ title, lastUpdated, icon, children }: LegalPageProps) {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-cyan mb-12 transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="mb-6 p-4 bg-brand-cyan/10 w-fit rounded-2xl border border-brand-cyan/20">
            {icons[icon]}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
            {title}<span className="text-brand-cyan">.</span>
          </h1>
          <p className="text-brand-muted font-bold text-sm uppercase tracking-widest">
            Last Updated: {lastUpdated}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg dark:prose-invert prose-brand max-w-none 
            prose-headings:text-slate-900 dark:prose-headings:text-white 
            prose-p:text-slate-600 dark:prose-p:text-brand-muted
            prose-strong:text-brand-cyan
            prose-li:text-slate-600 dark:prose-li:text-brand-muted"
        >
          {children}
        </motion.div>

        <div className="mt-20 pt-10 border-t border-slate-200 dark:border-white/10 text-center">
          <p className="text-brand-muted text-sm italic">
            Questions regarding our legal frameworks? Contact our legal team at <a href="mailto:legal@bitsolmarketing.com" className="text-brand-cyan font-bold hover:underline">legal@bitsolmarketing.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
