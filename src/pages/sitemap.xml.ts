// Auto-generated sitemap
const site = 'https://hectar.ro';

const pages = [
  { url: '/', changefreq: 'weekly', priority: '1.0' },
  { url: '/servicii', changefreq: 'monthly', priority: '0.8' },
  { url: '/servicii/vie', changefreq: 'monthly', priority: '0.8' },
  { url: '/servicii/livezi', changefreq: 'monthly', priority: '0.8' },
  { url: '/servicii/cereale', changefreq: 'monthly', priority: '0.8' },
  { url: '/preturi', changefreq: 'monthly', priority: '0.8' },
  { url: '/zone', changefreq: 'monthly', priority: '0.7' },
  { url: '/despre', changefreq: 'yearly', priority: '0.6' },
  { url: '/jurnal', changefreq: 'weekly', priority: '0.7' },
  { url: '/intrebari-frecvente', changefreq: 'monthly', priority: '0.7' },
  { url: '/contact', changefreq: 'yearly', priority: '0.7' },
  { url: '/termeni', changefreq: 'yearly', priority: '0.3' },
  { url: '/confidentialitate', changefreq: 'yearly', priority: '0.3' },
  { url: '/cookies', changefreq: 'yearly', priority: '0.3' },
];

const today = new Date().toISOString().split('T')[0];

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${today}</lastmod>
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
