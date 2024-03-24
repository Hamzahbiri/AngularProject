import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Article } from 'src/models/Article';
import { Category } from 'src/models/Category';
import { ArticleService } from 'src/services/article.service';
import { AuthentificationService } from 'src/services/authentification.service';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  userProfile : any
  categoryTab: Category[] = [];
  tab: any[] = [];
  


  constructor(private categoryService: CategoryService, private articleService: ArticleService,private snackBar: MatSnackBar, private authService: AuthentificationService) {}

  ngOnInit(): void {
    this.authService.getUserProfile().then(
      (res) => {
        this.userProfile = res;
      }
    );
    this.getArticles();
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAll().subscribe(
      (categories: Category[]) => {
        this.categoryTab = categories;
      },
      
    );
  }

  getArticles() {
    this.articleService.getAll().subscribe(
      (articles: Article[]) => {
        this.tab = articles;
        console.log(this.tab);
      },
     
    );
  }
  
  getArticlesByCategory(categoryId:any): Article[] {
    return this.tab.filter(article => article.categorieID === categoryId);
  }
  
  order(article: Article): void {
    const message = `You have ordred:  ${article.nomarticle}`;
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
}
