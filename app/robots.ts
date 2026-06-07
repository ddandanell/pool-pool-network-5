import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
    ],
    sitemap: 'https://balipoolmaintenance.online/sitemap.xml',
    host: 'https://balipoolmaintenance.online',
  };
}
