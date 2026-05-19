import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { GlowingCard } from "@/components/ui/glowing-card";
import type { Metadata } from "next";
import Image from "next/image";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  let post: any = null;
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://admin.bitsolmarketing.com";
    const res = await fetch(`${apiUrl}/api/blogs/${slug}`);
    if (res.ok) {
      post = await res.json();
    }
  } catch (err) {
    console.error("[Blog Meta] API connection failed:", err);
  }

  if (!post) return {};

  const description =
    post.metaDescription || post.excerpt || post.title;

  return {
    title: post.title,
    description,
    openGraph: {
      title: post.title,
      description,
      url: `https://bitsolmarketing.com/blog/${slug}`,
      images: post.image ? [{ url: post.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
    },
  };
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

function readTime(content: string): string {
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post: any = null;
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://admin.bitsolmarketing.com";
    const res = await fetch(`${apiUrl}/api/blogs/${slug}`, {
      next: { revalidate: 60 } // Revalidate every minute
    });
    if (res.ok) {
      post = await res.json();
    }
  } catch (err) {
    console.error("[Blog] API connection failed:", err);
  }

  if (!post) notFound();

  const firstTag = post.tags?.[0] ?? "AI Marketing";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription || post.excerpt || post.title,
    author: {
      "@type": "Organization",
      name: post.author?.name || post.author || "BITSOL Team",
      url: "https://bitsolmarketing.com",
    },
    publisher: {
      "@type": "Organization",
      name: "BITSOL MARKETING",
      logo: {
        "@type": "ImageObject",
        url: "https://bitsolmarketing.com/logo.png",
      },
    },
    datePublished: new Date(post.createdAt).toISOString(),
    dateModified: new Date(post.updatedAt).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bitsolmarketing.com/blog/${slug}`,
    },
    ...(post.image && { image: post.image }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-cyan mb-12 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-cyan">
                <Tag className="w-3 h-3" />
                {firstTag}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-brand-muted">
                <Calendar className="w-3 h-3" />
                {formatDate(post.createdAt)}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-brand-muted">
                <User className="w-3 h-3" />
                {post.author?.name || post.author || "BITSOL Team"}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-brand-muted">
                <Clock className="w-3 h-3" />
                {readTime(post.content)}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl text-slate-600 dark:text-brand-muted leading-relaxed border-l-4 border-brand-cyan pl-6">
                {post.excerpt}
              </p>
            )}
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-12 rounded-2xl overflow-hidden aspect-video relative">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Article Content */}
          <article
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold uppercase tracking-tighter px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-brand-muted border border-slate-200 dark:border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="mt-20">
            <GlowingCard>
              <div className="p-10 md:p-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white text-center">
                  Ready to Grow with <span className="text-gradient">AI Marketing</span>?
                </h2>
                <p className="text-center text-brand-muted mb-10 max-w-xl mx-auto">
                  Get a free audit of your digital presence and a custom 90-day growth
                  roadmap — no obligation.
                </p>
                <ContactForm />
              </div>
            </GlowingCard>
          </div>
        </div>
      </div>
    </>
  );
}
