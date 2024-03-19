import { Component, OnInit } from '@angular/core';
import { Article } from 'src/models/Article';
import { Category } from 'src/models/Category';
import { ArticleService } from 'src/services/article.service';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categories: Category[] = [];
  articles: Article[] = [];
  isLoading: boolean = true;

  constructor(private categoryService: CategoryService, private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getArticles();
  }

  getCategories() {
    this.categoryService.getAll().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      },
      error => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  getArticles() {
    this.articleService.getAll().subscribe(
      (articles: Article[]) => {
        this.articles = articles;
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching articles:', error);
        this.isLoading = false;
      }
    );
  }

  order(article: Article): void {
  
  }
}
