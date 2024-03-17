
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/Article';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'categoryName',
    'description',
    'prix',
    'image',
    'actions'
  ];
  tab: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.articleService.getAll().subscribe(
      (articles: Article[]) => {
        this.tab = articles;
      },
    );
  }
}
