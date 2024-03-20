import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  tab: Article[] = [];
  


  constructor(private categoryService: CategoryService, private articleService: ArticleService,private snackBar: MatSnackBar) 
  { 
    this.getArticles();
  }

  ngOnInit(): void {
   
    this.getArticles();
  }

  getCategories() {
    this.categoryService.getAll().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      },
      
    );
  }

  getArticles() {
    this.articleService.getAll().subscribe(
      (articles: Article[]) => {
        this.tab = articles;
        
      },
     
    );
  }
  order(article: Article): void {
    const message = `You have ordred:  ${article.nomarticle}`;
    console.log(article);
      this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
}
