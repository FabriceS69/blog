import { Component, OnInit } from '@angular/core';
import { Article, ArticleQuery } from '../+state';
import { Observable } from 'rxjs';

@Component({
  selector: 'article-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

 public articles$: Observable<Article[]>;

  constructor(
    private query: ArticleQuery
  ) { }

  ngOnInit() {
    this.articles$ = this.query.selectAll();
  }

}
