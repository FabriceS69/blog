import { ID } from '@datorama/akita';

export interface Article {
  id: ID;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  date: Date;
  image: string;
  content: string;
  author: string;
}

/**
 * A factory function that creates Article
 */
export function createArticle(params: Partial<Article>) {
  return { ...params } as Article;
}
