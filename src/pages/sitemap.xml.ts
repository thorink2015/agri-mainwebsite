import { getCollection } from 'astro:content';

const site = 'https://hectar.ro';

const staticPages = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/servicii', changefreq: 'monthly', priority: '0.9' },
  { url: '/servicii/vie', changefreq: 'monthly', priority: '0.9' },
  { url: '/servicii/livezi', changefreq: 'monthly', priority: '0.9' },
  { url: '/servicii/cereale', changefreq: 'monthly', priority: '0.9' },
  { url: '/preturi', changefreq: 'monthly', priority: '0.8' },
  { url: '/zone', changefreq: 'monthly', priority: '0.7' },
  { url: '/despre', changefreq: 'yearly', priority: '0.6' },
  { url: '/jurnal', changefreq: 'weekly', priority: '0.8' },
  { url: '/intrebari-frecvente', changefreq: 'monthly', priority: '0.7' },
  { url: '/contact', changefreq: 'yearly', priority: '0.7' },
  { url: '/termeni', changefreq: 'yearly', priority: '0.3' },
  { url: '/confidentialitate', changefreq: 'yearly', priority: '0.3' },
  { url: '/cookies', changefreq: 'yearly', priority: '0.3' },
];

export async function GET() {
  const today = new Date().toISOString().split('T')[0];

  let blogPages: { url: string; changefreq: string; priority: string; lastmod?: string }[] = [];
  try {
    const posts = await getCollection('jurnal', ({ data }) => !data.draft);
    blogPages = posts.map(post => ({
      url: `/jurnal/${post.slug}`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: post.data.date,
    }));
  } catch (_e) {
    // no content yet
  }

  const allPages = [
    ...staticPages.map(p => ({ ...p, lastmod: today })),
    ...blogPages,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
