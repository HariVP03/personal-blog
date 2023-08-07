export type Blog = {
  image: string | undefined;
  title: string;
  slug: string;
  publishedAt: string;
  body: string;
  excerpt?: string;
  lastUpdatedAt?: string;
};
