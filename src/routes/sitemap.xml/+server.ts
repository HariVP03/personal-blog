import { GET_BLOGS, parseBlogs } from '$lib/graphql';
import { client } from '$lib/server';
import type { Blog } from '$lib/types/blog';

export const prerender = true;

export async function GET() {
  const blogs = parseBlogs(
    await client({
      query: GET_BLOGS,
      variables: {
        limit: 3
      }
    })
  );

  return new Response(
    `
        <?xml version="1.0" encoding="UTF-8" ?>
        <urlset
            xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xhtml="https://www.w3.org/1999/xhtml"
            xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
            xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
            xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
            xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
        >
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
${getBlogUrls(blogs).join('')}

        </urlset>`.trim(),
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}

function getBlogUrls(blogs: Blog[]) {
  return blogs.map((blog) => {
    return `
            <url>
                <loc>https://www.harivishnu.com/blog/${blog.slug}</loc>
                <lastmod>${new Date(blog.publishedAt).toISOString()}</lastmod>
                <priority>0.8</priority>
            </url>
        `;
  });
}
