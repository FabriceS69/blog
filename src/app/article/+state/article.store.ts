import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Article } from './article.model';

export interface ArticleState extends EntityState<Article> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'article' })
export class ArticleStore extends EntityStore<ArticleState, Article> {

  constructor() {
    super();
  }

}

