"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "AI Solutions", href: "/ai-solutions" },
  { name: "Trading", href: "/trading" },
  { name: "Courses", href: "/courses" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-white/80 dark:bg-brand-dark/80 backdrop-blur-lg border-b border-slate-200 dark:border-white/5" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Logo className="w-12 h-12 transition-transform group-hover:scale-110" />
          <span className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white">
            BITSOL<span className="text-brand-cyan">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-muted hover:text-brand-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/services">
            <Button variant="brand-purple" className="rounded-full px-6">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-900 dark:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-brand-dark border-b border-slate-200 dark:border-white/10 p-6 flex flex-col gap-6 shadow-2xl transition-colors duration-500"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-900 dark:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
            <Button variant="brand-purple" className="w-full py-6 text-lg font-bold rounded-xl">
              Get Started
            </Button>
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
