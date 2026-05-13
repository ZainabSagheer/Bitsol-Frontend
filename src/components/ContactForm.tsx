"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "ai",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send inquiry");

      setIsSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-12 text-center"
      >
        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Inquiry Received</h3>
        <p className="text-black dark:text-brand-muted text-lg mb-8">
          Your inquiry has been stored. One of our architects will contact you within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-widest text-brand-muted">Name</label>
          <input 
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-4 outline-none focus:border-brand-cyan transition-colors text-slate-900 dark:text-white"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold uppercase tracking-widest text-brand-muted">Email</label>
          <input 
            required
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-4 outline-none focus:border-brand-cyan transition-colors text-slate-900 dark:text-white"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-widest text-brand-muted">Service Interested In</label>
        <select 
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-4 outline-none focus:border-brand-cyan transition-colors text-slate-900 dark:text-white"
        >
          <option value="ai">AI Automation</option>
          <option value="marketing">Digital Marketing</option>
          <option value="web">Web Development</option>
          <option value="mobile">Mobile Apps</option>
          <option value="seo">SEO Optimization</option>
          <option value="trading">Trading Tech</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-bold uppercase tracking-widest text-brand-muted">Message</label>
        <textarea 
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-4 outline-none focus:border-brand-cyan transition-colors text-slate-900 dark:text-white"
          placeholder="Tell us about your project goals..."
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <Button 
        type="submit" 
        variant="brand" 
        size="lg" 
        className="w-full py-8 text-xl font-bold rounded-xl"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Transmitting..." : "Send Inquiry"}
        <Send className="ml-2 w-5 h-5" />
      </Button>
    </form>
  );
}
