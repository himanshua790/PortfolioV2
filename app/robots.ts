import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const domain = process.env.DOMAIN || 'https://www.himanshusoni.in/'
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/'
    },
    sitemap: `${domain}/sitemap.xml`
  }
}
