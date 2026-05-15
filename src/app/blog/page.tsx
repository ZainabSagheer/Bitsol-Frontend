import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { GlowingCard } from "@/components/ui/glowing-card";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog | AI Marketing Insights & SEO Strategies",
  description:
    "Expert insights on AI digital marketing, SEO strategies, automation, and business growth from the BITSOL MARKETING team.",
  openGraph: {
    title: "Blog | BITSOL MARKETING",
    description:
      "Expert insights on AI digital marketing, SEO, automation and business growth.",
    url: "https://bitsolmarketing.com/blog",
  },
};

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

function readTime(content: string): string {
  const words = stripHtml(content).split(" ").length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export default async function BlogPage() {
  type PostRow = {
    id: string;
    title: string;
    slug: string;
    author: string;
    image: string | null;
    excerpt: string | null;
    content: string;
    tags: string[];
    createdAt: Date;
  };

  let posts: PostRow[] = [];

  try {
    posts = await prisma.blog.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        author: true,
        image: true,
        excerpt: true,
        content: true,
        tags: true,
        createdAt: true,
      },
    });
  } catch (err) {
    console.error("[Blog] DB connection failed:", err);
  }

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-slate-900 dark:text-white">
          AI Marketing <span className="text-gradient">Insights</span>
        </h1>
        <p className="text-xl text-black dark:text-brand-muted max-w-3xl mx-auto">
          Expert guides on AI-powered SEO, digital marketing strategy, automation, and
          business growth — straight from the BITSOL MARKETING team.
        </p>
      </section>

      {/* Posts Grid */}
      <section className="container mx-auto px-6">
        {posts.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-2xl text-brand-muted">
              First article coming soon. Check back shortly.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const excerpt =
                post.excerpt ||
                stripHtml(post.content).slice(0, 160) + "…";
              const firstTag = post.tags?.[0] ?? "AI Marketing";

              return (
                <GlowingCard key={post.id} className="h-full">
                  <div className="flex flex-col h-full group">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden rounded-t-xl bg-gradient-to-br from-brand-dark to-brand-slate">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-5xl font-black text-brand-cyan/20 uppercase tracking-tighter">
                            {firstTag}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      {/* Meta */}
                      <div className="flex items-center gap-4 mb-4">
                        <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-cyan">
                          <Tag className="w-3 h-3" />
                          {firstTag}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-muted">
                          <Calendar className="w-3 h-3" />
                          {formatDate(post.createdAt)}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-brand-cyan transition-colors leading-snug">
                        {post.title}
                      </h2>

                      <p className="text-sm text-slate-600 dark:text-brand-muted leading-relaxed flex-grow mb-6">
                        {excerpt}
                      </p>

                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-white/10">
                        <span className="flex items-center gap-1.5 text-xs text-brand-muted">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="text-xs text-brand-muted">
                          {readTime(post.content)}
                        </span>
                      </div>

                      <Link href={`/blog/${post.slug}`} className="w-full mt-6">
                        <Button
                          variant="brand"
                          className="w-full rounded-full py-5 font-bold group/btn"
                        >
                          Read Article{" "}
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </GlowingCard>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
