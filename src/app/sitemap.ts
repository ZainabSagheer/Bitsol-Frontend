import { MetadataRoute } from 'next';

export const dynamic = "force-static";
import { projects } from '@/lib/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bitsolmarketing.com';

  // Core static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/ai-solutions',
    '/trading',
    '/courses',
    '/portfolio',
    '/contact',
    '/terms',
    '/privacy',
    '/cookies',
    '/compliance',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic portfolio pages
  const portfolioPages = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...portfolioPages];
}
