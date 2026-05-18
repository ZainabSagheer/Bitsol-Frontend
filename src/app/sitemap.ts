import { MetadataRoute } from 'next';
import { projects } from '@/lib/portfolio';
import { services } from '@/lib/services';
import { prisma } from '@/lib/prisma';

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://bitsolmarketing.com';

  const staticPages = [
    '',
    '/about',
    '/services',
    '/ai-solutions',
    '/trading',
    '/courses',
    '/portfolio',
    '/blog',
    '/contact',
    '/terms',
    '/privacy',
    '/cookies',
    '/compliance',
    '/digital-marketing-agency-karachi',
    '/digital-marketing-agency-lahore',
    '/digital-marketing-agency-islamabad',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route === '/blog' ? 0.9 : route.startsWith('/digital-marketing') ? 0.85 : 0.8,
  }));

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const portfolioPages = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await prisma.blog.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
      orderBy: { createdAt: 'desc' },
    });
    blogPages = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }));
  } catch {
    // DB unavailable at build time — skip blog entries
  }

  return [...staticPages, ...servicePages, ...portfolioPages, ...blogPages];
}
