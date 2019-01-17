import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { ArticleStore } from './article.store';
import { Article } from './article.model';

@Injectable({ providedIn: 'root' })
export class ArticleService {

  constructor(private store: ArticleStore) {
  }

  add(article: Article) {
    this.store.add(article);
  }

  update(id, article: Partial<Article>) {
    this.store.update(id, article);
  }

  remove(id: ID) {
    this.store.remove(id);
  }
}
