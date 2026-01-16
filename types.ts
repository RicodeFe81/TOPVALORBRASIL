export interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  category: string;
  badge?: 'Mais Vendido' | 'Escolha Amazon' | 'Oferta';
  pros: string[];
  cons: string[];
  detailedDescription: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface BreadcrumbItem {
  label: string;
  path: string;
}