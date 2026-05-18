import Hero from "@/components/hero/Hero";
import ServicesGrid from "@/components/home/ServicesGrid";
import Testimonials from "@/components/home/Testimonials";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import BlogPreview from "@/components/home/BlogPreview";
import { Button } from "@/components/ui/button";
import { GlowingCard } from "@/components/ui/glowing-card";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Script from "next/script";
import { prisma } from "@/lib/prisma";

export const revalidate = 600;

const homepageFAQ = [
  {
    question: "What digital marketing services does BITSOL Marketing offer in Pakistan?",
    answer: "BITSOL Marketing is a full-service AI digital marketing agency in Pakistan offering SEO, Meta Ads (Facebook & Instagram), Google Ads, AI automation, WhatsApp chatbot development, social media management, web development, mobile app development, and algorithmic trading technology. We serve businesses in Karachi, Lahore, Islamabad, and globally.",
  },
  {
    question: "How is BITSOL Marketing different from other digital marketing agencies in Pakistan?",
    answer: "BITSOL Marketing is Pakistan's only AI-native digital marketing agency. We build and deploy custom AI systems — LLM agents, predictive analytics, Sentinel SEO — to give our clients a measurable competitive advantage. Most agencies use generic tools; we build custom AI for your specific business.",
  },
  {
    question: "Does BITSOL Marketing offer SEO services in Karachi, Lahore, and Islamabad?",
    answer: "Yes. We offer local SEO, national SEO, and international SEO for businesses across Pakistan. Our AI-powered keyword intelligence and technical SEO expertise consistently ranks clients in the top 3 positions for their target keywords in all major Pakistani cities.",
  },
  {
    question: "Can BITSOL Marketing manage our Facebook and Google Ads campaigns?",
    answer: "Yes. Paid media management is a core service. Our team manages Meta Ads (Facebook + Instagram) and Google Ads for Pakistani businesses across all budgets — from PKR 50,000 to PKR 2M+ per month. We handle creative, targeting, bidding, and daily optimisation.",
  },
  {
    question: "How do I get started with BITSOL Marketing?",
    answer: "Book a free strategy call through our Contact page or WhatsApp. We'll review your current digital presence, identify the biggest growth opportunities, and propose a custom plan — no obligation.",
  },
];

export default async function Home() {
  let blogPosts: {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    tags: string[];
    createdAt: Date;
  }[] = [];

  try {
    blogPosts = await prisma.blog.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      take: 3,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        content: true,
        tags: true,
        createdAt: true,
      },
    });
  } catch {
    // DB unavailable — blog section simply won't render
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homepageFAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="relative w-full">
      <Script id="homepage-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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

      {/* Blog Preview */}
      <BlogPreview posts={blogPosts} />

      {/* Why BITSOL — SEO keyword-rich content section */}
      <section className="py-24 bg-transparent relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Pakistan&apos;s Leading <span className="text-gradient">AI Digital Marketing Agency</span>
            </h2>
            <p className="text-lg text-black dark:text-brand-muted max-w-3xl mx-auto">
              BITSOL Marketing is a full-service AI digital marketing agency headquartered in Pakistan, serving ambitious businesses in Karachi, Lahore, Islamabad, and globally. We combine artificial intelligence with proven marketing fundamentals to deliver growth that compounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: "AI-Powered SEO",
                body: "Our Sentinel SEO engine uses machine learning to identify keyword opportunities and semantic gaps your competitors miss. We rank Pakistani businesses on page one of Google — sustainably.",
              },
              {
                title: "Meta & Google Ads Management",
                body: "We manage Facebook, Instagram, and Google ad campaigns for businesses across Pakistan. Every rupee is tracked, attributed, and optimised for maximum return on ad spend.",
              },
              {
                title: "AI Automation & Chatbots",
                body: "We build custom AI agents, WhatsApp bots, and workflow automation systems that save businesses 40+ hours per week and respond to customers 24/7 without additional staff.",
              },
              {
                title: "Web & App Development",
                body: "From Next.js websites to Flutter mobile apps, we build fast, SEO-ready digital products for Pakistani businesses that need to compete online and win.",
              },
            ].map((item, i) => (
              <GlowingCard key={i}>
                <div className="p-8 flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-cyan shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-slate-600 dark:text-brand-muted leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </GlowingCard>
            ))}
          </div>

          {/* City targeting */}
          <div className="text-center mb-6">
            <p className="text-brand-muted text-sm uppercase tracking-widest font-semibold mb-4">Serving Businesses Across Pakistan</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { city: "Karachi", href: "/digital-marketing-agency-karachi" },
                { city: "Lahore", href: "/digital-marketing-agency-lahore" },
                { city: "Islamabad", href: "/digital-marketing-agency-islamabad" },
              ].map(({ city, href }) => (
                <Link
                  key={city}
                  href={href}
                  className="px-6 py-2 rounded-full border border-brand-cyan/30 text-brand-cyan text-sm font-semibold hover:bg-brand-cyan/10 transition-colors"
                >
                  Digital Marketing Agency {city}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Homepage FAQ */}
      <section className="py-16 bg-transparent relative z-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-slate-900 dark:text-white text-center">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="flex flex-col gap-4">
            {homepageFAQ.map((item, i) => (
              <GlowingCard key={i}>
                <details className="group">
                  <summary className="p-6 flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white pr-4">{item.question}</h3>
                    <span className="text-brand-cyan shrink-0 text-xl font-light group-open:rotate-45 transition-transform inline-block">+</span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 dark:text-brand-muted leading-relaxed">{item.answer}</p>
                  </div>
                </details>
              </GlowingCard>
            ))}
          </div>
        </div>
      </section>

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
