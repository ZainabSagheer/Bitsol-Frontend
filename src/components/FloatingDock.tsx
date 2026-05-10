"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import MacOSDock from "@/components/ui/mac-os-dock";
import { 
  Search, 
  Moon, 
  Sun, 
  MessageSquare, 
  Home, 
  X,
  LayoutGrid
} from "lucide-react";
import SearchComponent from "@/components/ui/animated-glowing-search-bar";
import { useRouter } from "next/navigation";

export function FloatingDock() {
  const { theme, setTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const dockApps = [
    {
      id: "home",
      name: "Home",
      icon: <Home className="w-6 h-6 text-brand-cyan" />
    },
    {
      id: "services",
      name: "Services",
      icon: <LayoutGrid className="w-6 h-6 text-brand-purple" />
    },
    {
      id: "search",
      name: "Search",
      icon: <Search className="w-6 h-6 text-brand-cyan" />
    },
    {
      id: "theme",
      name: "Toggle Theme",
      icon: theme === "dark" ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-slate-700" />
    },
    {
      id: "contact",
      name: "Contact Us",
      icon: <MessageSquare className="w-6 h-6 text-brand-purple" />
    }
  ];

  const handleAppClick = (appId: string) => {
    switch (appId) {
      case "home":
        router.push("/");
        break;
      case "services":
        router.push("/services");
        break;
      case "search":
        setIsSearchOpen(true);
        break;
      case "theme":
        setTheme(theme === "dark" ? "light" : "dark");
        break;
      case "contact":
        const event = new CustomEvent("open-contact-popup");
        window.dispatchEvent(event);
        break;
    }
  };

  return (
    <>
      <AnimatePresence>
        {isSearchOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSearchOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10"
            >
              <div className="relative">
                <SearchComponent />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[250]">
        <MacOSDock 
          apps={dockApps} 
          onAppClick={handleAppClick}
          openApps={isSearchOpen ? ["search"] : []}
        />
      </div>
    </>
  );
}
