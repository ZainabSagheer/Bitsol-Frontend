import Hero from "@/components/hero/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import { Button } from "@/components/ui/button";
import { GlowingCard } from "@/components/ui/glowing-card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      
      {/* Services Section */}
      <ServicesGrid />

      {/* About CTA Section */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="container mx-auto px-6">
          <GlowingCard>
            <div className="p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 blur-[100px]" />
              
              <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 dark:text-white">
                  Building <span className="text-gradient">Intelligent</span> Business Infrastructures
                </h2>
                <p className="text-brand-muted text-lg mb-10 leading-relaxed">
                  We specialize in architecting scalable digital ecosystems that integrate AI, high-performance web tech, and data-driven marketing strategies to drive exponential growth.
                </p>
                <Link href="/about">
                  <Button variant="brand-purple" size="lg" className="rounded-full px-10 py-6">
                    Meet Our Architects
                  </Button>
                </Link>
              </div>
              
              <div className="flex-1 grid grid-cols-2 gap-4">
                {[
                  { label: "AI Experts", val: "25+" },
                  { label: "Successful Projects", val: "150+" },
                  { label: "Lines of Code", val: "2M+" },
                  { label: "Satisfied Clients", val: "98%" },
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
                    <div className="text-3xl font-bold text-brand-cyan mb-2">{stat.val}</div>
                    <div className="text-xs uppercase tracking-widest text-black dark:text-brand-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </GlowingCard>
        </div>
      </section>

      <Testimonials />

      {/* Portfolio Preview */}
      <PortfolioPreview />

      {/* Final CTA Section */}
      <section className="py-24 bg-transparent text-center border-t border-slate-200 dark:border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-7xl font-bold mb-10 text-slate-900 dark:text-white">
            Ready to <span className="text-gradient">Accelerate</span>?
          </h2>
          <p className="text-black dark:text-brand-muted text-xl max-w-2xl mx-auto mb-12">
            Join the elite group of companies transforming their industries with BITSOL's cutting-edge technologies.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
             <Button variant="brand" size="lg" className="rounded-full px-12 py-8 text-xl font-bold">
                Start Your Journey
             </Button>
             <Button variant="outline" size="lg" className="border-brand-purple text-slate-900 dark:text-brand-white hover:bg-brand-purple/10 rounded-full px-12 py-8 text-xl font-bold">
                Book a Demo
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
