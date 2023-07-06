export async function GET() {
  return new Response(
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://www.harivishnu.com/</loc>
<lastmod>2023-07-06T19:42:31+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://www.harivishnu.com/contact</loc>
<lastmod>2023-07-06T19:42:31+01:00</lastmod>
<priority>1.0</priority>
</url>
<url>
<loc>https://www.harivishnu.com/blog/if-you-dont-want-to-have-fun-stay-away-from-svelte</loc>
<lastmod>2023-07-06T19:42:31+01:00</lastmod>
<priority>0.8</priority>
</url>
</urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}
