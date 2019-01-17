import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ArticleStore, ArticleState } from './article.store';
import { Article } from './article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleQuery extends QueryEntity<ArticleState, Article> {

  constructor(protected store: ArticleStore) {
    super(store);
  }

}
