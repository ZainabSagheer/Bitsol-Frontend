"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
 
export function SplineSceneBasic() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden bg-transparent">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill={mounted && theme === "light" ? "#94A3B8" : "white"}
      />
      
      <div className="flex h-full flex-col md:flex-row container mx-auto px-6 relative z-10">
        {/* Left content */}
        <div className="flex-1 p-12 relative z-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500 dark:from-neutral-50 dark:to-neutral-400 mb-6">
            BITSOL <span className="text-brand-cyan">Marketing</span>
          </h1>
          <p className="mt-4 text-black dark:text-neutral-300 max-w-lg text-lg leading-relaxed mb-10">
            Architecting intelligent digital ecosystems and AI-powered marketing solutions that drive exponential growth for the world's most ambitious brands.
          </p>
          
          <div className="flex gap-4">
            <Link href="/services">
              <Button variant="brand" size="lg" className="rounded-full px-8">
                Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/services/ai-automation">
              <Button size="lg" variant="outline" className="border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 rounded-full px-8">
                Explore Tech
              </Button>
            </Link>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
