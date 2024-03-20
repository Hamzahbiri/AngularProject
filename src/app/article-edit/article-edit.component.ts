import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Category } from 'src/models/Category';
import { Article } from 'src/models/Article';
import { CategoryService } from 'src/services/category.service';
import { ArticleService } from 'src/services/article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  article: Article;
  categories: Category[] = [];

  constructor(
    public dialogRef: MatDialogRef<ArticleEditComponent>,
    private categoryService: CategoryService,
    private articleService: ArticleService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.article = {...this.data};
  }

  ngOnInit(): void {
    this.getCategories();

  }

  getCategories() {
    this.categoryService.getAll().subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      }
    );
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  changeData() {
    this.articleService.update(this.article).subscribe(
      () => {
        console.log('Article updated successfully.');
        this.dialogRef.close(this.article); 
      },
      (error) => {
        console.error('Error updating article:', error);
      }
    );
  }
}
