import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/models/Category';
import { Article } from 'src/models/Article';
import { CategoryService } from 'src/services/category.service';
import { ArticleService } from 'src/services/article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  articleEdit: FormGroup;
  categories: Category[] = [];


  constructor(
    public dialogRef: MatDialogRef<ArticleEditComponent>,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private articleService: ArticleService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.articleEdit = this.fb.group({
      articleName: ['', Validators.required],
      categoryId: ['', Validators.required], 
      description: ['', Validators.required],
      prix: ['', Validators.required],
      image: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.articleEdit = this.fb.group({
      nomarticle: [this.data.nomarticle, Validators.required],
      categorieID: [this.data.categorieID, Validators.required],
      description: [this.data.description, Validators.required],
      prix: [this.data.prix, Validators.required],
      imageart: [this.data.imageart, Validators.required]
    });

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
    if (this.articleEdit.valid) {
      const updatedArticle: Article = {
        ...this.data,
        nomarticle: this.articleEdit.value.nomarticle,
        categorieID: this.articleEdit.value.categorieID,
        description: this.articleEdit.value.description,
        prix: this.articleEdit.value.prix,
        imageart: this.articleEdit.value.imageart
      };

      this.articleService.update(updatedArticle).subscribe(
        () => {
          console.log('Article updated successfully.');
          this.dialogRef.close(updatedArticle); 
        },
        (error) => {
          console.error('Error updating article:', error);
        }
      );
    }
  }
}
