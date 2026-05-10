"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowingCard({ children, className }: GlowingCardProps) {
  return (
    <div className={cn("relative group", className)}>
      {/* Background Glowing Layers */}
      <div className="absolute inset-0 z-[-1] overflow-hidden rounded-xl blur-[4px] 
                      before:absolute before:content-[''] before:z-[-2] before:w-[500%] before:h-[500%] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-60
                      before:bg-[conic-gradient(#000,#402fb5_5%,#000_38%,#000_50%,#cf30aa_60%,#000_87%)] before:transition-all before:duration-2000
                      group-hover:before:rotate-[-120deg]">
      </div>
      
      <div className="absolute inset-[1px] z-[-1] overflow-hidden rounded-xl blur-[2px] 
                      before:absolute before:content-[''] before:z-[-2] before:w-[500%] before:h-[500%] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[83deg]
                      before:bg-[conic-gradient(rgba(0,0,0,0)_0%,#a099d8,rgba(0,0,0,0)_8%,rgba(0,0,0,0)_50%,#dfa2da,rgba(0,0,0,0)_58%)] before:brightness-140
                      before:transition-all before:duration-2000 group-hover:before:rotate-[-97deg]">
      </div>

      <div className="absolute inset-[2px] z-[-1] overflow-hidden rounded-xl blur-[0.5px] 
                      before:absolute before:content-[''] before:z-[-2] before:w-[500%] before:h-[500%] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-70
                      before:bg-[conic-gradient(#1c191c,#402fb5_5%,#1c191c_14%,#1c191c_50%,#cf30aa_60%,#1c191c_64%)] before:brightness-130
                      before:transition-all before:duration-2000 group-hover:before:rotate-[-110deg]">
      </div>

      {/* Content Container */}
      <div className="relative bg-white/90 dark:bg-[#010201]/90 backdrop-blur-xl rounded-xl h-full w-full border border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500">
        {children}
      </div>
    </div>
  );
}
