export type Category = {
  slug: string;
  name: string;
  count: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  color: string;
  description: string;
  features?: string[];
  technicalSpecs?: Record<string, string>;
  images: string[];
  featured?: boolean;
};
