import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/Category';
import { Article } from 'src/models/Article';
import { CategoryService } from 'src/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  article: Article = { id: '', nomarticle: '', description: '', prix: '', imageart: '', category: { id: '', nomcategorie: '' } };
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getArticle();
  }

  getCategories() {
    this.categoryService.getAll().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      }
    );
  }

  getArticle() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.articleService.getById(id).subscribe(
        (article: Article) => {
          this.article = article;
        }
      );
    }
  }

  updateArticle() {
    this.articleService.update(this.article).subscribe(
      () => {
        console.log('Article updated successfully.');
       
        this.router.navigate(['/articles']);
      },
      (error) => {
        console.error('Error updating article:', error);
 
      }
    );
  }
}
